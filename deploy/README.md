# Production Deploy Notes

Frontend requests use the same API path in development and production:

```text
/api/v1/services/
/api/v1/payments/multicard/create
```

In development, Vite proxies `/api` to `https://api.gemmaneuratech.uz`.
In production, nginx must do the same. Use `nginx-gemmaneuratech.conf.example`
as a reference and make sure the active site config contains:

```nginx
location /api/ {
    proxy_pass https://api.gemmaneuratech.uz;
    proxy_http_version 1.1;
    proxy_ssl_server_name on;
    proxy_set_header Host api.gemmaneuratech.uz;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
}
```

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
curl -sS -o /dev/null -w "%{http_code}\n" https://api.gemmaneuratech.uz/api/v1/services/
curl -sS -o /dev/null -w "%{http_code}\n" https://gemmaneuratech.uz/api/v1/services/
curl -sS -o /dev/null -w "%{http_code}\n" -X OPTIONS https://gemmaneuratech.uz/api/v1/payments/multicard/create
```

The first command checks the backend directly and should return `200`.
The second command checks the production proxy and should also return `200`.
The third command checks the payment preflight and should return a non-error response.

If `https://gemmaneuratech.uz/api/v1/services/` returns `400 Bad Request`,
the active nginx config still differs from the block above or nginx was not
reloaded.
