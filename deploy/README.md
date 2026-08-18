# Production deploy notes

Frontend requests must use the same API path in development and production:

```text
/api/v1/services/
/api/v1/payments/multicard/create
```

In development, Vite proxies `/api` to `https://api.gemmaneuratech.uz`.
In production, nginx must do the same. Use `nginx-gemmaneuratech.conf.example`
as a reference and make sure the active HTTPS site config contains this exact
location block. Keep `proxy_pass` without a trailing slash:

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

After pulling changes on the server:

```bash
npm install
npm run build
sudo nginx -T | grep -n "api.gemmaneuratech"
sudo nginx -t
sudo systemctl reload nginx
```

Quick checks from the server:

```bash
curl -I https://gemmaneuratech.uz/api/v1/services/
curl -I -X OPTIONS https://gemmaneuratech.uz/api/v1/payments/multicard/create
```

The first command should return `200`.
The second command should return a non-error response from the proxied backend.
If the first command returns `400 Bad Request`, the active nginx config is still
not passing `Host api.gemmaneuratech.uz` to the backend or nginx was not reloaded.
