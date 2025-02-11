import { Hono } from "hono";
import { cache } from "hono/cache";
import { Env } from "./@types/hono.types";

const app = new Hono<Env>();

// Cache middleware configuration
const cacheMiddleware = cache({
  cacheName: "facebook-graph-cache",
  cacheControl: "public, max-age=300",
  wait: true, // Wait for the cache to be populated
});

// Apply cache middleware only to GET requests
app.use("/*", async (c, next) => {
  if (c.req.method === "GET") {
    return cacheMiddleware(c, next);
  }
  return next();
});

// Main proxy handler
app.all("*", async (c) => {
  const headers = new Headers(c.req.header());
  const { FB_API_URL } = c.env;
  const path = c.req.path;
  const query = c.req.query();
  const method = c.req.method;

  // Build the target URL
  const queryString = new URLSearchParams(query).toString();
  const targetUrl = `${FB_API_URL}${path}${
    queryString ? "?" + queryString : ""
  }`;

  console.log("Proxying request to:", targetUrl);

  try {
    // Forward the request
    const response = await fetch(targetUrl, {
      method,
      headers,
      body:
        method !== "GET" && method !== "HEAD" ? await c.req.blob() : undefined,
    });

    // Create a response with proper cache headers
    const responseBody = await response.blob();
    const responseHeaders = new Headers(response.headers);

    // Add cache control headers for GET requests
    if (method === "GET" && response.ok) {
      responseHeaders.set("Cache-Control", "public, max-age=300");
      responseHeaders.set("Vary", "Accept-Encoding");
    } else {
      // Prevent caching for non-GET requests or failed responses
      responseHeaders.set("Cache-Control", "no-store");
    }

    return new Response(responseBody, {
      status: response.status,
      headers: responseHeaders,
    });
  } catch (error) {
    console.error("Proxy error:", error);
    return c.json(
      {
        error: "Failed to proxy request",
        details: error.message,
      },
      500
    );
  }
});

app.onError((err, c) => {
  return c.json({ error: err.message });
});

export default {
  fetch: app.fetch,
  async queue(batch: MessageBatch, env: Env["Bindings"]) {},
};
