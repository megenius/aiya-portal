import { createFactory } from "hono/factory";
import { Env } from "~/types/hono.types";

const factory = createFactory<Env>();

const BEARER_PREFIX = "Bearer ";

/**
 * Service Authentication Middleware
 *
 * Validates service token for trusted service-to-service communication.
 * Used for endpoints that should only be accessible by internal services
 * (e.g., Workspace backend).
 *
 * This middleware checks if the provided token matches the DIRECTUS_SERVICE_TOKEN
 * from the environment configuration.
 */
export const serviceAuthMiddleware = factory.createMiddleware(async (c, next) => {
  const authHeader = c.req.header("Authorization");

  // Check if Authorization header exists
  if (!authHeader) {
    return c.json({ error: "Authorization header is missing" }, 401);
  }

  // Check if header has Bearer prefix
  if (!authHeader.startsWith(BEARER_PREFIX)) {
    return c.json({ error: "Invalid Authorization header format" }, 401);
  }

  // Extract token
  const token = authHeader.slice(BEARER_PREFIX.length);

  if (!token) {
    return c.json({ error: "Token is missing" }, 401);
  }

  // Get service token from environment
  const serviceToken = c.env.DIRECTUS_SERVICE_TOKEN;

  if (!serviceToken) {
    console.error("DIRECTUS_SERVICE_TOKEN is not configured");
    return c.json({ error: "Server configuration error" }, 500);
  }

  // Validate token
  if (token !== serviceToken) {
    console.error("Invalid service token provided");
    return c.json({ error: "Invalid service token" }, 401);
  }

  // Mark as service request and set token for directusMiddleware
  c.set("isServiceRequest", true);
  c.set("token", token);

  await next();
});
