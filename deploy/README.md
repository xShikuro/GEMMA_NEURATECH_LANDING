# Production Deploy Notes

The frontend must call the API through the same path locally and in production:

```text
/api/v1/services/
/api/v1/payments/multicard/create
```

The backend target is:

```text
https://api.gemmaneuratech.uz
```

## Recommended: Node App Server

This mode behaves like local `npm run dev`: the app serves React from `dist`
and proxies `/api/*` to `https://api.gemmaneuratech.uz`.

After pulling changes on the server:

```bash
npm install
npm run build
API_PROXY_TARGET=https://api.gemmaneuratech.uz HOST=127.0.0.1 PORT=4173 npm start
```

For nginx, proxy the site to the Node app. Put
`deploy/nginx-node-app-location.conf` inside the active HTTPS `server` block,
or use `deploy/nginx-node-app.conf.example` as a full HTTP example:

```nginx
location / {
    proxy_pass http://127.0.0.1:4173;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
}
```

Quick checks:

```bash
curl -I http://127.0.0.1:4173/
curl -I http://127.0.0.1:4173/api/v1/services/
curl -I https://gemmaneuratech.uz/api/v1/services/
```

Both API checks should return `200`.

## Static Nginx Alternative

If nginx serves `dist` directly, the active HTTPS site config must include
this exact `/api` proxy block. Keep `proxy_pass` without a trailing slash:

```nginx
location ^~ /api/ {
    proxy_pass https://api.gemmaneuratech.uz;
    proxy_http_version 1.1;
    proxy_ssl_server_name on;
    proxy_ssl_name api.gemmaneuratech.uz;
    proxy_set_header Host api.gemmaneuratech.uz;
    proxy_set_header X-Forwarded-Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_redirect off;
}
```

The same block is available in `deploy/nginx-api-proxy-location.conf`.

After changing nginx:

```bash
sudo nginx -T | grep -n "api.gemmaneuratech"
sudo nginx -t
sudo systemctl reload nginx
```

If `https://gemmaneuratech.uz/api/v1/services/` returns `400 Bad Request`,
the active nginx config is still not passing `Host api.gemmaneuratech.uz` to
the backend or nginx was not reloaded.
