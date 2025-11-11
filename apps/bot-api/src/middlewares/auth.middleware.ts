import { Context } from "hono";
import { createMiddleware } from "hono/factory";
import { verify } from "hono/jwt";
import { Env } from "~/types/hono.types";

const BEARER_PREFIX = "Bearer ";

// Define the type for the Directus JWT payload
interface DirectusJwtPayload {
  id: string;
  role: string;
  app_access: boolean;
  admin_access: boolean;
  iss: string;
}

export const authMiddleware = createMiddleware<Env>(async (c, next) => {
  const authHeader = c.req.header("Authorization");

  if (!authHeader) {
    return c.json({ error: "Authorization header is missing" }, 401);
  }

  if (!authHeader.startsWith(BEARER_PREFIX)) {
    return c.json({ error: "Invalid Authorization header format" }, 401);
  }

  let token = authHeader.slice(BEARER_PREFIX.length);

  if (!token) {
    return c.json({ error: "Token is missing" }, 401);
  }

  const secretKey = c.env.DIRECTUS_SECRET_KEY;

  if (!secretKey) {
    console.error("DIRECTUS_SECRET_KEY is not set");
    return c.json({ error: "Server configuration error" }, 500);
  }

  try {
    const payload = await verify(token, secretKey);

    const allowedIssuers = ["directus", "lambda"];
    const issuer = payload.iss as string;

    if (allowedIssuers.indexOf(issuer) === -1) {
      return c.json({ error: "Invalid token issuer" }, 401);
    }

    if (issuer === "lambda") {
      token = c.env.DIRECTUS_SERVICE_TOKEN;
    }

    c.set("jwtPayload", payload);
    c.set("token", token);
    await next();
  } catch (error) {
    if (error instanceof Error) {
      console.error("Token verification failed:", error.message);
    }
    return c.json({ error: "Invalid or expired token" }, 401);
  }
});

// Helper function to get the JWT payload from the context
export function getJwtPayload(c: Context): DirectusJwtPayload | null {
  return c.get("jwtPayload") as DirectusJwtPayload | null;
}

// Helper functions to check user permissions
export function hasAppAccess(c: Context): boolean {
  const payload = getJwtPayload(c);
  return payload ? payload.app_access : false;
}

export function hasAdminAccess(c: Context): boolean {
  const payload = getJwtPayload(c);
  return payload ? payload.admin_access : false;
}
