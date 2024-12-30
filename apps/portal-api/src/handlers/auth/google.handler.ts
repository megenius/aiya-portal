import { Env } from "~/types/hono.types";
// routes/auth.ts
import * as sdk from "@directus/sdk";
import { z } from "zod";
import { addMilliseconds } from "date-fns";
import { camelcaseKeys } from "~/utils/str";
import { createFactory } from "hono/factory";
import { logger as honoLogger } from "hono/logger";
import { directusMiddleware } from "~/middleware/directus.middleware";
import { Context } from "hono";

const factory = createFactory<Env>();

async function getGoogleUserInfo(code: string, c: Context<Env>) {
  const state = c.req.query("state");
  const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, PORTAL_URL } = c.env;

  try {
    const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        code,
        client_id: GOOGLE_CLIENT_ID,
        client_secret: GOOGLE_CLIENT_SECRET,
        redirect_uri: `${PORTAL_URL}/api/auth/google/callback`,
      }).toString(), // Ensure the body is properly stringified
    });

    if (!tokenResponse.ok) {
      const errorData = await tokenResponse.json().catch(() => ({}));
      throw new Error(
        `Failed to exchange auth code: ${tokenResponse.status} ${JSON.stringify(errorData)}`
      );
    }

    const tokenData = await tokenResponse.json();

    const userResponse = await fetch(
      "https://www.googleapis.com/oauth2/v2/userinfo",
      {
        headers: {
          Authorization: `Bearer ${tokenData.access_token}`,
        },
      }
    );

    return userResponse.json();
  } catch (error) {
    console.error("Google OAuth token exchange failed:", error);
    throw new Error("Failed to authenticate with Google");
  }
}

export const callback = factory.createHandlers(honoLogger(), async (c) => {
  try {
    const { code } = c.req.query();
    const userInfo = await getGoogleUserInfo(code, c);

    const user = {
      email: userInfo.email,
      first_name: userInfo.given_name,
      last_name: userInfo.family_name,
      avatar: userInfo.picture,
      external_identifier: userInfo.id,
    };

    return c.redirect(
      `${c.env.PORTAL_URL}/auth/callback?q=${btoa(JSON.stringify(user))}`
    );
  } catch (error) {
    console.error("google callback error", error);
    return c.json({ error: "google authen callback failed" }, 500);
  }
});
