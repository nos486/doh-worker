# Cloudflare DoH Worker

A simple Cloudflare Worker that acts as a DNS-over-HTTPS (DoH) proxy, forwarding requests to AdGuard DNS.

## Usage

### Endpoints

- **`/dns-query`**: The main DoH endpoint.
  - Supports both `GET` and `POST` requests.
  - For `GET` requests, use the `dns` query parameter.
  - For `POST` requests, send the DNS message in the body.
  - Proxies to: `https://dns.adguard-dns.com/dns-query`

- **`/`**: Health check. Returns "DoH Server is Running! Use /dns-query endpoint."

### Development

1.  Install dependencies:
    ```bash
    npm install
    ```

2.  Run locally:
    ```bash
    npm run dev
    ```

3.  Deploy to Cloudflare:
    ```bash
    npm run deploy
    ```

## License

ISC
