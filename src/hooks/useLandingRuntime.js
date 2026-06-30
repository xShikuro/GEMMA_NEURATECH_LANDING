import { useEffect } from 'react'

function initLandingPage() {
  if (typeof window === 'undefined') {
    return () => {}
  }

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const rootStyle = document.documentElement.style
  const body = document.body
  const cleanups = []
  const frameIds = new Set()
  const timeoutIds = new Set()
  let disposed = false

  const addEvent = (target, type, handler, options) => {
    if (!target) return
    target.addEventListener(type, handler, options)
    cleanups.push(() => target.removeEventListener(type, handler, options))
  }

  const requestFrame = (callback) => {
    const id = window.requestAnimationFrame((time) => {
      frameIds.delete(id)
      if (!disposed) callback(time)
    })
    frameIds.add(id)
    return id
  }

  const cancelFrame = (id) => {
    if (!id) return
    window.cancelAnimationFrame(id)
    frameIds.delete(id)
  }

  const setTimer = (callback, delay) => {
    const id = window.setTimeout(() => {
      timeoutIds.delete(id)
      if (!disposed) callback()
    }, delay)
    timeoutIds.add(id)
    return id
  }

  body.classList.add('is-loading')
  body.classList.remove('is-ready', 'cursor-ready', 'cursor-idle', 'cursor-hover', 'cursor-active')

  const titleFrames = [
    'Gemma Neuratech',
    'Neural Systems',
    'AI Engineering',
    'Edge AI',
    'MLOps Lab',
    'Computer Vision',
    'Secure AI',
    'Cloud Intelligence',
  ]
  const originalTitle = document.title || titleFrames[0]
  let titleIndex = 0
  document.title = titleFrames[titleIndex]
  const titleIntervalId = window.setInterval(() => {
    titleIndex = (titleIndex + 1) % titleFrames.length
    document.title = titleFrames[titleIndex]
  }, 1700)
  cleanups.push(() => {
    window.clearInterval(titleIntervalId)
    document.title = originalTitle
  })

  const cursorState = {
    x: window.innerWidth * 0.5,
    y: window.innerHeight * 0.38,
    smoothX: window.innerWidth * 0.5,
    smoothY: window.innerHeight * 0.38,
    lastMove: 0,
  }

  rootStyle.setProperty('--pointer-x', `${cursorState.x}px`)
  rootStyle.setProperty('--pointer-y', `${cursorState.y}px`)

  const updateCursorPosition = (event) => {
    cursorState.x = event.clientX
    cursorState.y = event.clientY
    cursorState.lastMove = performance.now()
    rootStyle.setProperty('--pointer-x', `${cursorState.x}px`)
    rootStyle.setProperty('--pointer-y', `${cursorState.y}px`)
    body.classList.add('cursor-ready')
    body.classList.remove('cursor-idle')
  }

  addEvent(window, 'pointermove', updateCursorPosition, { passive: true })
  addEvent(window, 'pointerdown', () => body.classList.add('cursor-active'), { passive: true })
  addEvent(window, 'pointerup', () => body.classList.remove('cursor-active'), { passive: true })
  addEvent(window, 'pointerleave', () => {
    cursorState.lastMove = 0
    body.classList.add('cursor-idle')
  }, { passive: true })

  document
    .querySelectorAll('a, button, input, textarea, .solution-card, .case-card, .tech-item')
    .forEach((item) => {
      addEvent(item, 'pointerenter', () => body.classList.add('cursor-hover'))
      addEvent(item, 'pointerleave', () => body.classList.remove('cursor-hover'))
    })

  const animateCursor = () => {
    cursorState.smoothX += (cursorState.x - cursorState.smoothX) * 0.13
    cursorState.smoothY += (cursorState.y - cursorState.smoothY) * 0.13

    rootStyle.setProperty('--cursor-x', `${cursorState.smoothX}px`)
    rootStyle.setProperty('--cursor-y', `${cursorState.smoothY}px`)
    rootStyle.setProperty('--grid-x', `${cursorState.smoothX * -0.026}px`)
    rootStyle.setProperty('--grid-y', `${cursorState.smoothY * -0.026}px`)
    rootStyle.setProperty('--grid-x2', `${cursorState.smoothX * 0.018}px`)
    rootStyle.setProperty('--grid-y2', `${cursorState.smoothY * 0.018}px`)

    requestFrame(animateCursor)
  }

  requestFrame(animateCursor)

  const welcomeScreen = document.querySelector('.welcome-screen')
  if (welcomeScreen) {
    welcomeScreen.hidden = false
    welcomeScreen.classList.remove('is-complete')

    const progress = welcomeScreen.querySelector('.welcome-progress')
    const percent = welcomeScreen.querySelector('.welcome-percent')
    const status = welcomeScreen.querySelector('.welcome-status')
    const duration = prefersReducedMotion ? 700 : 2600
    const statuses = [
      'Loading neural modules',
      'Mapping signal routes',
      'Calibrating inference core',
      'Synchronizing interface',
      'System ready',
    ]
    let startTime = 0

    const setWelcomeProgress = (value) => {
      const rounded = Math.min(100, Math.round(value))
      welcomeScreen.style.setProperty('--welcome-progress', `${rounded}%`)
      progress?.setAttribute('aria-valuenow', String(rounded))
      if (percent) percent.textContent = `${rounded}%`
      if (status) {
        const index = Math.min(statuses.length - 1, Math.floor(rounded / 24))
        status.textContent = statuses[index]
      }
    }

    const finishWelcome = () => {
      setWelcomeProgress(100)
      body.classList.remove('is-loading')
      body.classList.add('is-ready')
      welcomeScreen.classList.add('is-complete')
      setTimer(() => {
        welcomeScreen.hidden = true
      }, 850)
    }

    const tickWelcome = (now) => {
      if (!startTime) startTime = now
      const progressRatio = Math.min((now - startTime) / duration, 1)
      const eased = 1 - (1 - progressRatio) ** 3
      setWelcomeProgress(eased * 100)

      if (progressRatio < 1) {
        requestFrame(tickWelcome)
      } else {
        setTimer(finishWelcome, prefersReducedMotion ? 80 : 260)
      }
    }

    requestFrame(tickWelcome)
  } else {
    body.classList.remove('is-loading')
    body.classList.add('is-ready')
  }

  const revealItems = Array.from(document.querySelectorAll('.reveal'))
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          revealObserver.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })

    revealItems.forEach((item) => revealObserver.observe(item))
    cleanups.push(() => revealObserver.disconnect())
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'))
  }

  const animateCounter = (node) => {
    const target = Number(node.dataset.count)
    if (!Number.isFinite(target)) return

    const isDecimal = String(node.dataset.count).includes('.')
    const duration = 1200
    const startTime = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - (1 - progress) ** 3
      const value = target * eased
      node.textContent = isDecimal ? value.toFixed(1) : Math.round(value)

      if (progress < 1) {
        requestFrame(tick)
      } else {
        node.textContent = isDecimal ? target.toFixed(1) : String(target)
      }
    }

    requestFrame(tick)
  }

  const counterNodes = Array.from(document.querySelectorAll('[data-count]'))
  counterNodes.forEach((node) => {
    node.textContent = '0'
  })

  if ('IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target)
          counterObserver.unobserve(entry.target)
        }
      })
    }, { threshold: 0.8 })

    counterNodes.forEach((node) => counterObserver.observe(node))
    cleanups.push(() => counterObserver.disconnect())
  } else {
    counterNodes.forEach(animateCounter)
  }

  document.querySelectorAll('[data-nudge]').forEach((button) => {
    addEvent(button, 'click', () => {
      const section = button.closest('.section-block')
      const row = section?.querySelector('[data-scroll-row]')
      if (!row) return

      const direction = button.dataset.nudge === 'right' ? 1 : -1
      row.scrollBy({ left: direction * 280, behavior: 'smooth' })
    })
  })

  const hero = document.querySelector('.hero')
  const parallax = document.querySelector('[data-parallax]')
  if (hero && parallax && !prefersReducedMotion) {
    addEvent(hero, 'pointermove', (event) => {
      const rect = hero.getBoundingClientRect()
      const x = (event.clientX - rect.left) / rect.width - 0.5
      const y = (event.clientY - rect.top) / rect.height - 0.5
      parallax.style.transform = `translate(calc(-50% + ${x * 18}px), calc(-50% + ${y * 14}px))`
    })

    addEvent(hero, 'pointerleave', () => {
      parallax.style.transform = 'translate(-50%, -50%)'
    })
  }

  function createParticleField(canvas, options) {
    if (!canvas) return () => {}

    const ctx = canvas.getContext('2d')
    if (!ctx) return () => {}

    const config = {
      count: options.count,
      speed: options.speed,
      linkDistance: options.linkDistance,
      nodeSize: options.nodeSize,
      lineAlpha: options.lineAlpha,
      drift: options.drift,
      cursorLinks: Boolean(options.cursorLinks),
      cursorRadius: options.cursorRadius || 170,
      cursorAlpha: options.cursorAlpha || 0.5,
      cursorPull: options.cursorPull || 0,
    }
    let particles = []
    let width = 0
    let height = 0
    let frameId = 0
    let fieldDisposed = false

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = rect.width
      height = rect.height
      canvas.width = Math.max(1, Math.floor(width * dpr))
      canvas.height = Math.max(1, Math.floor(height * dpr))
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      particles = Array.from({ length: config.count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * config.speed,
        vy: (Math.random() - 0.5) * config.speed,
        pulse: Math.random() * Math.PI * 2,
      }))
    }

    const drawCircuitSegments = (time) => {
      ctx.save()
      ctx.globalAlpha = 0.5
      ctx.strokeStyle = 'rgba(52, 237, 240, 0.22)'
      ctx.lineWidth = 1

      const spacing = 78
      const offset = (time * 0.012) % spacing
      for (let y = -spacing; y < height + spacing; y += spacing) {
        const yy = y + offset
        ctx.beginPath()
        ctx.moveTo(width * 0.58, yy)
        ctx.lineTo(width * 0.68, yy)
        ctx.lineTo(width * 0.72, yy + 20)
        ctx.lineTo(width * 0.9, yy + 20)
        ctx.stroke()
      }
      ctx.restore()
    }

    const render = (time = 0) => {
      if (fieldDisposed) return

      ctx.clearRect(0, 0, width, height)
      if (config.drift) drawCircuitSegments(time)

      const rect = canvas.getBoundingClientRect()
      const cursorX = cursorState.x - rect.left
      const cursorY = cursorState.y - rect.top
      const cursorAge = cursorState.lastMove ? time - cursorState.lastMove : Infinity
      const cursorPower = config.cursorLinks && !prefersReducedMotion
        ? Math.max(0, 1 - cursorAge / 900)
        : 0

      particles.forEach((particle) => {
        if (cursorPower > 0) {
          const dx = cursorX - particle.x
          const dy = cursorY - particle.y
          const distance = Math.hypot(dx, dy)

          if (distance < config.cursorRadius && distance > 1) {
            const force = (1 - distance / config.cursorRadius) * config.cursorPull * cursorPower
            particle.x += dx * force
            particle.y += dy * force
          }
        }

        particle.x += particle.vx
        particle.y += particle.vy
        particle.pulse += 0.035

        if (particle.x < -12) particle.x = width + 12
        if (particle.x > width + 12) particle.x = -12
        if (particle.y < -12) particle.y = height + 12
        if (particle.y > height + 12) particle.y = -12
      })

      for (let i = 0; i < particles.length; i += 1) {
        for (let j = i + 1; j < particles.length; j += 1) {
          const a = particles[i]
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const distance = Math.hypot(dx, dy)

          if (distance < config.linkDistance) {
            const alpha = (1 - distance / config.linkDistance) * config.lineAlpha
            ctx.strokeStyle = `rgba(74, 255, 255, ${alpha})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      if (cursorPower > 0) {
        let linkCount = 0
        particles.forEach((particle) => {
          const dx = cursorX - particle.x
          const dy = cursorY - particle.y
          const distance = Math.hypot(dx, dy)

          if (distance < config.cursorRadius && linkCount < 12) {
            const alpha = (1 - distance / config.cursorRadius) * config.cursorAlpha * cursorPower
            ctx.strokeStyle = `rgba(94, 255, 255, ${alpha})`
            ctx.lineWidth = 1
            ctx.shadowBlur = 12
            ctx.shadowColor = 'rgba(52, 237, 240, 0.55)'
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(cursorX, cursorY)
            ctx.stroke()
            ctx.shadowBlur = 0
            linkCount += 1
          }
        })

        ctx.strokeStyle = `rgba(94, 255, 255, ${0.24 * cursorPower})`
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.arc(cursorX, cursorY, 13 + Math.sin(time * 0.012) * 3, 0, Math.PI * 2)
        ctx.stroke()
      }

      particles.forEach((particle) => {
        const radius = config.nodeSize + Math.sin(particle.pulse) * 0.7
        ctx.fillStyle = 'rgba(118, 255, 255, 0.92)'
        ctx.shadowBlur = 16
        ctx.shadowColor = 'rgba(52, 237, 240, 0.9)'
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, radius, 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowBlur = 0
      })

      if (!prefersReducedMotion) {
        frameId = requestFrame(render)
      }
    }

    resize()
    render()

    if (!prefersReducedMotion) {
      addEvent(window, 'resize', resize, { passive: true })
    }

    return () => {
      fieldDisposed = true
      cancelFrame(frameId)
    }
  }

  cleanups.push(createParticleField(document.querySelector('#heroParticles'), {
    count: 96,
    speed: 0.18,
    linkDistance: 120,
    nodeSize: 1.8,
    lineAlpha: 0.38,
    drift: true,
    cursorLinks: true,
    cursorRadius: 220,
    cursorAlpha: 0.82,
    cursorPull: 0.0018,
  }))

  cleanups.push(createParticleField(document.querySelector('#pageMatrix'), {
    count: 190,
    speed: 0.075,
    linkDistance: 148,
    nodeSize: 1.25,
    lineAlpha: 0.18,
    drift: false,
    cursorLinks: true,
    cursorRadius: 260,
    cursorAlpha: 0.62,
    cursorPull: 0.0011,
  }))

  const contactForm = document.querySelector('.contact-form')
  if (contactForm) {
    addEvent(contactForm, 'submit', (event) => {
      event.preventDefault()
      const button = contactForm.querySelector('button')
      if (!button) return

      const originalText = button.textContent
      button.textContent = button.dataset.successText || 'Сообщение отправлено'
      setTimer(() => {
        button.textContent = originalText
        contactForm.reset()
      }, 1400)
    })
  }

  return () => {
    disposed = true
    cleanups.reverse().forEach((cleanup) => cleanup())
    frameIds.forEach((id) => window.cancelAnimationFrame(id))
    timeoutIds.forEach((id) => window.clearTimeout(id))
    frameIds.clear()
    timeoutIds.clear()
    body.classList.remove('is-loading', 'is-ready', 'cursor-ready', 'cursor-idle', 'cursor-hover', 'cursor-active')
  }
}

export function useLandingRuntime() {
  useEffect(() => initLandingPage(), [])
}
