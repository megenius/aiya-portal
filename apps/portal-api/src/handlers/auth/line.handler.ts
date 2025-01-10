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
import * as jwt from "hono/jwt";

const factory = createFactory<Env>();

async function getUserInfo(code: string, c: Context<Env>) {
  const state = c.req.query("state");
  const { LINE_CLIENT_ID, LINE_CLIENT_SECRET, PORTAL_URL } = c.env;

  // curl -v -X POST https://api.line.me/oauth2/v2.1/token \
  // -H 'Content-Type: application/x-www-form-urlencoded' \
  // -d 'grant_type=authorization_code' \
  // -d 'code=1234567890abcde' \
  // --data-urlencode 'redirect_uri=https://example.com/auth?key=value' \
  // -d 'client_id=1234567890' \
  // -d 'client_secret=1234567890abcdefghij1234567890ab'
  try {
    const tokenResponse = await fetch("https://api.line.me/oauth2/v2.1/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        code,
        client_id: LINE_CLIENT_ID,
        client_secret: LINE_CLIENT_SECRET,
        redirect_uri: `${PORTAL_URL}/api/auth/line/callback`,
      }).toString(), // Ensure the body is properly stringified
    });

    if (!tokenResponse.ok) {
      const errorData = await tokenResponse.json().catch(() => ({}));
      throw new Error(
        `Failed to exchange auth code: ${tokenResponse.status} ${JSON.stringify(errorData)}`
      );
    }

    const tokenData = await tokenResponse.json<{
      access_token: string;
      expires_in: number;
      refresh_token: string;
      id_token: string;
    }>();
    console.log("LINE OAuth token exchange success:", tokenData);
    
    const jwtData = jwt.decode(tokenData.id_token) as {
      header: {
        typ: string;
        alg: string;
      };
      payload: {
        iss: string;
        sub: string;
        aud: string;
        exp: number;
        iat: number;
        nonce: string;
        amr: string[];
        name: string;
        picture: string;
        email: string;
      };
    };

    console.log("LINE JWT data:", jwtData);
    

    return {
      id: jwtData.payload.sub,
      name: jwtData.payload.name,
      picture: jwtData.payload.picture,
      email: jwtData.payload.email,
    };
  } catch (error) {
    console.error("LINE OAuth token exchange failed:", error);
    throw new Error("Failed to authenticate with LINE");
  }
}

export const callback = factory.createHandlers(honoLogger(), async (c) => {
  try {
    const { code } = c.req.query();

    const userInfo = await getUserInfo(code, c);

    const user = {
      email: userInfo.email,
      first_name: userInfo.name,
      avatar: userInfo.picture,
      external_identifier: userInfo.id,
    };

    return c.redirect(
      `${c.env.PORTAL_URL}/auth/callback?q=${btoa(JSON.stringify(user))}`
    );
  } catch (error) {
    console.error(error);
    return c.json({ error: "line auth callback failed" }, 500);
  }
});
