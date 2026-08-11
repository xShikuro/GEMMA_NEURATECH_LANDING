# Production deploy notes

Frontend requests must use the same API path in development and production:

```text
/api/v1/services/
/api/v1/payments/hamkorbank/create
```

In development, Vite proxies `/api` to `https://api.gemmaneuratech.net`.
In production, nginx must do the same. Use `nginx-gemmaneuratech.conf.example`
as a reference and make sure the active site config contains:

```nginx
location /api/ {
    proxy_pass https://api.gemmaneuratech.net;
    proxy_http_version 1.1;
    proxy_ssl_server_name on;
    proxy_set_header Host api.gemmaneuratech.net;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
}
```

After pulling changes on the server:

```bash
npm install
npm run build
sudo nginx -t
sudo systemctl reload nginx
```

Quick checks from the server:

```bash
curl -I https://gemmaneuratech.uz/api/v1/services/
curl -I -X OPTIONS https://gemmaneuratech.uz/api/v1/payments/hamkorbank/create
```

The first command should return `200`.
The second command should return a non-error response from the proxied backend.
