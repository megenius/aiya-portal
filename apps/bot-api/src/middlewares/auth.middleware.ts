import { Context, Next } from "hono";
import { createMiddleware } from "hono/factory";
import { decode, verify } from "hono/jwt";
import { JWTPayload } from "hono/utils/jwt/types";
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
  const DEBUG_MODE = c.env.NODE_ENV === "development";
  const authHeader = c.req.header("Authorization");

  // console.log("authHeader", authHeader);

  if (!authHeader) {
    return c.json({ error: "Authorization header is missing" }, 401);
  }

  if (!authHeader.startsWith(BEARER_PREFIX)) {
    return c.json({ error: "Invalid Authorization header format" }, 401);
  }

  let token = authHeader.slice(BEARER_PREFIX.length);

  console.log("token", token);
  

  if (!token) {
    return c.json({ error: "Token is missing" }, 401);
  }

  const secretKey = c.env.DIRECTUS_SECRET_KEY;

  // Debug: Check secret key
  console.log('[authMiddleware] DEBUG - DIRECTUS_SECRET_KEY exists:', !!secretKey);
  console.log('[authMiddleware] DEBUG - DIRECTUS_SECRET_KEY length:', secretKey?.length);
  console.log('[authMiddleware] DEBUG - DIRECTUS_SECRET_KEY first 10 chars:', secretKey?.substring(0, 10));

  if (!secretKey) {
    console.error("DIRECTUS_SECRET_KEY is not set");
    return c.json({ error: "Server configuration error: DIRECTUS_SECRET_KEY is not set" }, 500);
  }

  try {
    const payload = await verify(token, secretKey);

    // Debug: Token verified successfully
    console.log('[authMiddleware] DEBUG - Token verified successfully');
    console.log('[authMiddleware] DEBUG - Payload:', JSON.stringify(payload, null, 2));
    console.log('[authMiddleware] DEBUG - Issuer from payload:', payload.iss);

    if (DEBUG_MODE) {
      debugToken(payload);
    }

    const allowedIssuers = ["directus", "lambda"];
    const issuer = payload.iss as string;

    // Debug: Issuer check
    console.log('[authMiddleware] DEBUG - Checking issuer:', issuer);
    console.log('[authMiddleware] DEBUG - Allowed issuers:', allowedIssuers);
    console.log('[authMiddleware] DEBUG - Issuer check result:', allowedIssuers.indexOf(issuer) !== -1);

    if (allowedIssuers.indexOf(issuer) === -1) {
      console.log('[authMiddleware] DEBUG - Issuer NOT allowed! Returning 401');
      return c.json({ error: "Invalid token issuer" }, 401);
    }

    console.log('[authMiddleware] DEBUG - Issuer allowed, continuing...');

    if (issuer === "lambda") {
      token = c.env.DIRECTUS_SERVICE_TOKEN;
    }

    c.set("jwtPayload", payload);
    c.set("token", token);
    await next();
  } catch (error) {
    // Debug: Verification error
    console.error('[authMiddleware] DEBUG - Token verification FAILED');
    console.error('[authMiddleware] DEBUG - Error type:', error instanceof Error ? error.constructor.name : typeof error);
    console.error('[authMiddleware] DEBUG - Error message:', error instanceof Error ? error.message : String(error));

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

function debugToken(payload: JWTPayload) {
  try {
    const now = Math.floor(Date.now() / 1000);
    console.log("Token Expiration:");
    if (payload.exp) {
      console.log(
        `Expires at: ${new Date(payload.exp * 1000).toLocaleString()}`
      );
      console.log(`Current time: ${new Date(now * 1000).toLocaleString()}`);
      console.log(`Time until expiration: ${payload.exp - now} seconds`);
    } else {
      console.log("No expiration time found in token");
    }
  } catch (error) {
    console.error("Error decoding token:", error);
  }
}
