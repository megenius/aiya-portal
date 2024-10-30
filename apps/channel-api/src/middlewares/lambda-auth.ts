import { Env } from "@repo/shared";
import { Context, Next } from "hono";
import { createMiddleware } from "hono/factory";
import { verify } from "hono/jwt";
import { JWTPayload } from "hono/utils/jwt/types";

const BEARER_PREFIX = "Bearer ";

// Define the type for the Directus JWT payload
interface DirectusJwtPayload extends JWTPayload {
  id: string;
  role: string;
  app_access: boolean;
  admin_access: boolean;
  iss: string;
}

// Define custom properties we'll add to the Hono context
interface CustomContext {
  jwtPayload: DirectusJwtPayload;
  token: string;
}

export const lambdaAuthMiddleware = createMiddleware<Env>(async (c, next) => {
  const DEBUG_MODE = c.env.NODE_ENV === "development";
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

  const secretKey = c.env.LAMBDA_SECRET_KEY;

  if (!secretKey) {
    console.error("LAMBDA_SECRET_KEY is not set");
    return c.json({ error: "Server configuration error" }, 500);
  }

  try {
    const payload = await verify(token, secretKey) as DirectusJwtPayload;
    
    if (DEBUG_MODE) {
      debugToken(payload);
    }

    const allowedIssuers = ["directus", "lambda"];
    const issuer = payload.iss;
    
    if (!allowedIssuers.includes(issuer)) {
      return c.json({ error: "Invalid token issuer" }, 401);
    }

    // Replace token with service token for lambda-issued tokens
    if (issuer === "lambda") {
      const serviceToken = c.env.DIRECTUS_SERVICE_TOKEN;
      if (!serviceToken) {
        console.error("DIRECTUS_SERVICE_TOKEN is not set");
        return c.json({ error: "Server configuration error" }, 500);
      }
      token = serviceToken;
    }

    // Set the payload and token in the context
    c.set("jwtPayload", payload);
    c.set("token", token);

    // Important: Return the result of next()
    return await next();
  } catch (error) {
    console.error("Token verification failed:", error instanceof Error ? error.message : "Unknown error");
    return c.json({ error: "Invalid or expired token" }, 401);
  }
});

// Helper function to get the JWT payload from the context
export function getJwtPayload(c: Context): DirectusJwtPayload {
  const payload = c.get("jwtPayload");
  if (!payload) {
    throw new Error("JWT payload not found in context");
  }
  return payload;
}

// Helper functions to check user permissions
export function hasAppAccess(c: Context): boolean {
  try {
    const payload = getJwtPayload(c);
    return payload.app_access;
  } catch {
    return false;
  }
}

export function hasAdminAccess(c: Context): boolean {
  try {
    const payload = getJwtPayload(c);
    return payload.admin_access;
  } catch {
    return false;
  }
}

function debugToken(payload: DirectusJwtPayload): void {
  const now = Math.floor(Date.now() / 1000);
  console.log("Token Debug Information:");
  console.log("Payload:", JSON.stringify(payload, null, 2));
  
  if (payload.exp) {
    const expirationDate = new Date(payload.exp * 1000);
    const currentDate = new Date(now * 1000);
    console.log(`Expires at: ${expirationDate.toLocaleString()}`);
    console.log(`Current time: ${currentDate.toLocaleString()}`);
    console.log(`Time until expiration: ${payload.exp - now} seconds`);
  } else {
    console.log("No expiration time found in token");
  }
}

// Declare module augmentation for Hono's Context type
declare module "hono" {
  interface ContextVariableMap extends CustomContext {}
}