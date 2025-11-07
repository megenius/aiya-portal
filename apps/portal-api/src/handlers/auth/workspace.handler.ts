import { Env } from "~/types/hono.types";
import { createFactory } from "hono/factory";
import { logger as honoLogger } from "hono/logger";
import { directusMiddleware } from "~/middleware/directus.middleware";
import * as jwt from "hono/jwt";
import * as sdk from "@directus/sdk";
import { addDays } from "date-fns";

const factory = createFactory<Env>();

/**
 * Workspace SSO Handler
 *
 * Handles SSO authentication from the workspace system.
 * Flow:
 * 1. Workspace generates short-lived JWT token with user email
 * 2. Workspace redirects to this endpoint with token
 * 3. We verify token signature using shared secret
 * 4. Extract user email and redirect URL
 * 5. Redirect to Portal auth callback with user info
 * 6. Portal completes authentication via existing callback flow
 */
export const sso = factory.createHandlers(honoLogger(), async (c) => {
  try {
    const token = c.req.query("token");
    const redirectPath = c.req.query("redirect") || "/"; // Default to home if no redirect

    if (!token) {
      return c.json({ error: "Missing SSO token" }, 400);
    }

    const SSO_SHARED_SECRET = c.env.SSO_SHARED_SECRET;
    if (!SSO_SHARED_SECRET) {
      console.error("SSO_SHARED_SECRET not configured");
      return c.json({ error: "SSO not configured" }, 500);
    }

    // Verify and decode the JWT token from workspace
    let payload: any;
    try {
      payload = await jwt.verify(token, SSO_SHARED_SECRET);
    } catch (error) {
      console.error("SSO token verification failed:", error);
      return c.json({ error: "Invalid or expired SSO token" }, 401);
    }

    // Extract user info from token
    const { email, firstName, lastName, workspaceId } = payload;

    if (!email) {
      return c.json({ error: "Invalid SSO token: missing email" }, 400);
    }

    // Create user object in the same format as OAuth providers
    const user = {
      email,
      first_name: firstName || email.split("@")[0], // Fallback to email prefix if no first name
      last_name: lastName || "",
      avatar: null, // No avatar from workspace SSO
      external_identifier: `workspace:${workspaceId}:${email}`, // Unique identifier from workspace
    };

    // Redirect to Portal auth callback (same flow as Google/LINE OAuth)
    // The callback will handle user creation/lookup and JWT generation
    const callbackUrl = `${c.env.PORTAL_URL}/auth/callback?q=${btoa(
      JSON.stringify(user)
    )}&redirect=${encodeURIComponent(redirectPath)}`;

    return c.redirect(callbackUrl);
  } catch (error) {
    console.error("Workspace SSO error:", error);
    return c.json({ error: "SSO authentication failed" }, 500);
  }
});

/**
 * Generate user token from service token authentication
 *
 * Endpoint for service-to-service communication where the calling service
 * authenticates with DIRECTUS_SERVICE_TOKEN and provides user email.
 *
 * Usage:
 * POST /api/auth/service/user-token
 * Authorization: Bearer <DIRECTUS_SERVICE_TOKEN>
 * Body: { email: string, workspaceId: string, firstName?: string, lastName?: string }
 *
 * Returns:
 * {
 *   token: "<directus-jwt-token>",
 *   user: { id: "...", email: "..." }
 * }
 */
export const generateTokenFromService = factory.createHandlers(
  honoLogger(),
  directusMiddleware,
  async (c) => {
    try {
      // Validate service token
      const authHeader = c.req.header("Authorization");
      if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return c.json({ error: "Missing or invalid Authorization header" }, 401);
      }

      const providedToken = authHeader.slice(7);
      const DIRECTUS_SERVICE_TOKEN = c.env.DIRECTUS_SERVICE_TOKEN;

      if (providedToken !== DIRECTUS_SERVICE_TOKEN) {
        return c.json({ error: "Invalid service token" }, 401);
      }

      // Get user email and workspaceId from request body
      const body = await c.req.json<{
        email: string;
        workspaceId: string;
        firstName?: string;
        lastName?: string;
      }>();

      const { email, firstName, lastName, workspaceId } = body;

      if (!email || !workspaceId) {
        return c.json({ error: "Missing email or workspaceId" }, 400);
      }

      // Find or create user in Directus
      const directAdmin = c.get("directAdmin");
      const users = await directAdmin.request(
        sdk.readUsers({
          fields: ["id", "email"],
          filter: { email: { _eq: email } },
        })
      );

      let userId = users.length > 0 ? users[0].id : null;
      const role = "79403aa9-3d72-4904-9bd9-545d4bb01103";

      if (users.length === 0) {
        const external_identifier = `workspace:${workspaceId}:${email}`;
        const user = await directAdmin.request(
          sdk.createUser({
            email,
            first_name: firstName || email.split("@")[0],
            last_name: lastName || "",
            external_identifier,
            role,
          })
        );
        userId = user.id;
      }

      // Generate Directus JWT token
      const jwtPayload = {
        id: userId,
        role,
        app_access: false,
        admin_access: false,
        iat: Math.floor(new Date().getTime() / 1000),
        exp: Math.floor(addDays(new Date(), 1).getTime() / 1000), // 24 hours
        iss: "directus",
      };

      const directusToken = await jwt.sign(jwtPayload, c.env.DIRECTUS_SECRET_KEY);

      return c.json({
        token: directusToken,
        user: { id: userId, email },
      });
    } catch (error) {
      console.error("Service token generation error:", error);
      return c.json({ error: "Token generation failed" }, 500);
    }
  }
);

/**
 * Workspace Token Generation Endpoint (API-friendly)
 *
 * Generates Directus JWT token for workspace users via SSO token.
 * This is an API-friendly alternative to the redirect-based SSO flow above.
 *
 * Usage:
 * POST /api/auth/workspace/token
 * Authorization: Bearer <SSO-JWT-token>
 *
 * The SSO token should be signed with SSO_SHARED_SECRET and contain:
 * - email: User email
 * - firstName: User first name (optional)
 * - lastName: User last name (optional)
 * - workspaceId: Workspace ID
 * - exp: Token expiration (recommended: 5 minutes)
 *
 * Returns:
 * {
 *   token: "<directus-jwt-token>",
 *   user: { id: "...", email: "..." }
 * }
 */
export const generateToken = factory.createHandlers(
  honoLogger(),
  directusMiddleware,
  async (c) => {
    try {
      // Get SSO token from Authorization header
      const authHeader = c.req.header("Authorization");
      if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return c.json({ error: "Missing or invalid Authorization header" }, 401);
      }

      const ssoToken = authHeader.slice(7); // Remove "Bearer " prefix

      const SSO_SHARED_SECRET = c.env.SSO_SHARED_SECRET;
      if (!SSO_SHARED_SECRET) {
        console.error("SSO_SHARED_SECRET not configured");
        return c.json({ error: "SSO not configured" }, 500);
      }

      // Verify and decode the SSO token
      let payload: any;
      try {
        payload = await jwt.verify(ssoToken, SSO_SHARED_SECRET);
      } catch (error) {
        console.error("SSO token verification failed:", error);
        return c.json({ error: "Invalid or expired SSO token" }, 401);
      }

      // Extract user info from token
      const { email, firstName, lastName, workspaceId } = payload;

      if (!email) {
        return c.json({ error: "Invalid SSO token: missing email" }, 400);
      }

      // Use directus admin client to find or create user
      const directAdmin = c.get("directAdmin");

      const users = await directAdmin.request(
        sdk.readUsers({
          fields: ["id", "email"],
          filter: {
            email: {
              _eq: email,
            },
          },
        })
      );

      let userId = users.length > 0 ? users[0].id : null;

      const role = "79403aa9-3d72-4904-9bd9-545d4bb01103"; // Default user role

      // Create user if doesn't exist
      if (users.length === 0) {
        const external_identifier = `workspace:${workspaceId}:${email}`;
        const user = await directAdmin.request(
          sdk.createUser({
            email,
            first_name: firstName || email.split("@")[0],
            last_name: lastName || "",
            external_identifier,
            role,
          })
        );
        userId = user.id;
      }

      // Generate Directus JWT token
      const jwtPayload = {
        id: userId,
        role,
        app_access: false,
        admin_access: false,
        iat: Math.floor(new Date().getTime() / 1000),
        exp: Math.floor(addDays(new Date(), 1).getTime() / 1000), // 24 hours
        iss: "directus",
      };

      const directusToken = await jwt.sign(jwtPayload, c.env.DIRECTUS_SECRET_KEY);

      // Create free plan for new users (same as login flow)
      try {
        await c.env.BillingService.fetch(
          `${c.env.PORTAL_URL}/api/billing/create-free-plan`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${directusToken}`,
            },
          }
        );
      } catch (billingError) {
        console.error("Failed to create billing plan:", billingError);
        // Don't fail the request if billing fails
      }

      return c.json({
        token: directusToken,
        user: {
          id: userId,
          email,
        },
      });
    } catch (error) {
      console.error("Workspace token generation error:", error);
      return c.json({ error: "Token generation failed" }, 500);
    }
  }
);
