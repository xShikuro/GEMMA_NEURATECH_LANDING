import { createServer } from 'node:http'
import { readFile, stat } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const distDir = path.resolve(__dirname, 'dist')
const apiTarget = process.env.API_PROXY_TARGET || process.env.VITE_API_PROXY_TARGET || 'https://api.gemmaneuratech.uz'
const host = process.env.HOST || '127.0.0.1'
const port = Number(process.env.PORT || 4173)

const hopByHopHeaders = new Set([
  'connection',
  'content-encoding',
  'content-length',
  'keep-alive',
  'proxy-authenticate',
  'proxy-authorization',
  'te',
  'trailer',
  'transfer-encoding',
  'upgrade',
])

const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.gif': 'image/gif',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.pdf': 'application/pdf',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
}

function setForwardedHeaders(headers, request) {
  const forwardedFor = request.headers['x-forwarded-for']
  const remoteAddress = request.socket.remoteAddress || ''
  const forwardedProto = request.headers['x-forwarded-proto'] || 'https'

  headers.set('x-forwarded-host', request.headers.host || '')
  headers.set('x-forwarded-proto', String(forwardedProto))
  headers.set('x-real-ip', remoteAddress)
  headers.set('x-forwarded-for', forwardedFor ? `${forwardedFor}, ${remoteAddress}` : remoteAddress)
}

function createProxyHeaders(request) {
  const headers = new Headers()

  Object.entries(request.headers).forEach(([name, value]) => {
    const lowerName = name.toLowerCase()

    if (hopByHopHeaders.has(lowerName) || lowerName === 'host') {
      return
    }

    if (Array.isArray(value)) {
      value.forEach((item) => headers.append(name, item))
      return
    }

    if (value) {
      headers.set(name, value)
    }
  })

  setForwardedHeaders(headers, request)

  return headers
}

async function readRequestBody(request) {
  const chunks = []

  for await (const chunk of request) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk))
  }

  return chunks.length ? Buffer.concat(chunks) : undefined
}

async function proxyApiRequest(request, response) {
  const targetUrl = new URL(request.url, apiTarget)
  const hasBody = request.method !== 'GET' && request.method !== 'HEAD'
  const body = hasBody ? await readRequestBody(request) : undefined

  try {
    const proxyResponse = await fetch(targetUrl, {
      method: request.method,
      headers: createProxyHeaders(request),
      body,
      redirect: 'manual',
    })
    const responseBody = request.method === 'HEAD' ? null : Buffer.from(await proxyResponse.arrayBuffer())
    const responseHeaders = {}

    proxyResponse.headers.forEach((value, name) => {
      if (!hopByHopHeaders.has(name.toLowerCase())) {
        responseHeaders[name] = value
      }
    })

    if (responseBody) {
      responseHeaders['content-length'] = String(responseBody.length)
    }

    response.writeHead(proxyResponse.status, responseHeaders)

    if (responseBody) {
      response.end(responseBody)
      return
    }

    response.end()
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown proxy error'

    response.writeHead(502, { 'content-type': 'application/json; charset=utf-8' })
    response.end(JSON.stringify({ error: 'API proxy failed', message, target: targetUrl.origin }))
  }
}

function resolveStaticPath(urlPathname) {
  const pathname = decodeURIComponent(urlPathname)
  const normalizedPath = pathname === '/' ? '/index.html' : pathname
  const filePath = path.resolve(distDir, `.${normalizedPath}`)

  return filePath.startsWith(distDir) ? filePath : path.join(distDir, 'index.html')
}

async function fileExists(filePath) {
  try {
    const fileStat = await stat(filePath)
    return fileStat.isFile()
  } catch {
    return false
  }
}

async function serveStaticRequest(request, response) {
  const url = new URL(request.url, `http://${request.headers.host || 'localhost'}`)
  let filePath = resolveStaticPath(url.pathname)

  if (!(await fileExists(filePath))) {
    filePath = path.join(distDir, 'index.html')
  }

  const extension = path.extname(filePath).toLowerCase()
  const body = await readFile(filePath)
  const isAsset = url.pathname.startsWith('/assets/')
  const headers = {
    'content-type': mimeTypes[extension] || 'application/octet-stream',
    'content-length': String(body.length),
    'cache-control': isAsset ? 'public, max-age=2592000, immutable' : 'no-store',
  }

  response.writeHead(200, headers)

  if (request.method === 'HEAD') {
    response.end()
    return
  }

  response.end(body)
}

const server = createServer((request, response) => {
  if (request.url?.startsWith('/api/')) {
    proxyApiRequest(request, response)
    return
  }

  serveStaticRequest(request, response).catch((error) => {
    const message = error instanceof Error ? error.message : 'Static server error'

    response.writeHead(500, { 'content-type': 'text/plain; charset=utf-8' })
    response.end(message)
  })
})

server.listen(port, host, () => {
  console.log(`Gemma Neuratech app: http://${host}:${port}`)
  console.log(`API proxy target: ${apiTarget}`)
})
