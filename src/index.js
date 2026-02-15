export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    const ADGUARD_DOH = "https://dns.adguard-dns.com/dns-query";

    if (url.pathname === "/dns-query") {
      const { method, headers } = request;
      
      const newRequestInit = {
        method: method,
        headers: {
          "Accept": "application/dns-message",
          "Content-Type": "application/dns-message",
        },
      };

      if (method === "POST") {
        newRequestInit.body = request.body;
      }

      const targetUrl = method === "GET" && url.searchParams.has("dns")
        ? `${ADGUARD_DOH}?dns=${url.searchParams.get("dns")}`
        : ADGUARD_DOH;

      return fetch(targetUrl, newRequestInit);
    }

    return new Response("DoH Server is Running! Use /dns-query endpoint.", { 
      status: 200,
      headers: { "Content-Type": "text/plain; charset=utf-8" } 
    });
  },
};
