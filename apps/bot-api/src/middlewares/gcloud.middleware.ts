import { createFactory } from "hono/factory";
import { sign } from "hono/jwt";
import { Env } from "~/types/hono.types";
import { getDirectusClient } from "~/utils/directus";

const factory = createFactory<Env>();

export const gcloudMiddleware = factory.createMiddleware(async (c, next) => {
  const KV = c.env.CACHING;
  const TOKEN_KEY = "gcloud_token";

  // Try to get cached token
  let token = await KV.get(TOKEN_KEY);

  if (!token) {
    const serviceAccount = JSON.parse(c.env.GOOGLE_AI_SERVICE_ACCOUNT);
    token = await getVertexToken(serviceAccount);

    // Cache token for 1 hour
    await KV.put(TOKEN_KEY, token, {
      expirationTtl: 3300, // 1 hour in seconds
    });
  }

  c.set("gcloudToken", token);
  await next();
});

// JWT token generation for service account
async function generateJWT(serviceAccount: any): Promise<string> {
  const now = Math.floor(Date.now() / 1000);

  const payload = {
    iss: serviceAccount.client_email,
    sub: serviceAccount.client_email,
    aud: "https://www.googleapis.com/oauth2/v4/token",
    iat: now,
    exp: now + 3600,
    scope: "https://www.googleapis.com/auth/cloud-platform",
  };

  return sign(payload, serviceAccount.private_key, "RS256");
}

async function getVertexToken(serviceAccount: any): Promise<string> {
  const jwt = await generateJWT(serviceAccount);

  const response = await fetch("https://www.googleapis.com/oauth2/v4/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }),
  });

  const data = await response.json<{
    access_token: string;
  }>();
  return data.access_token;
}
