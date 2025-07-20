// routes/auth.ts
import * as sdk from "@directus/sdk";
import { addHours } from "date-fns";
import { Env } from "~/types/hono.types";
import { createFactory } from "hono/factory";
import { logger as honoLogger } from "hono/logger";

import * as jwt from "hono/jwt";

const factory = createFactory<Env>();

export const identify = factory.createHandlers(honoLogger(), async (c) => {
  const { liffId, IDToken } = await c.req.json();
  const directus = c.get("directAdmin");
  const { payload } = jwt.decode(IDToken);
  const { sub: uid, name, picture } = payload;

  if (!liffId || !uid) {
    return c.json({ error: "liff_id and uid are required" }, 400);
  }

  const id = await generateProfileId(liffId, uid as string);

  let profile;
  try {
    profile = await directus.request(sdk.readItem("profiles", id));
  } catch (err) {
    const status = err?.response?.status;
    if (status === 403 || status === 404) {
      profile = await directus.request(
        sdk.createItem("profiles", {
          id,
          uid: uid as string,
          liff_id: liffId,
          display_name: name as string,
          picture_url: picture as string,
        })
      );
    } else {
      console.error("Error reading profile", err);
      return c.json({ error: "Internal error" }, 500);
    }
  }

  const jwtPayload = {
    id: profile.id,
    uid: profile.uid,
    liff_id: profile.liff_id,
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(addHours(new Date(), 1).getTime() / 1000),
    iss: "liff",
  };

  const token = await jwt.sign(jwtPayload, c.env.LIFF_SECRET_KEY);
  return c.json({ token });
});

async function generateProfileId(liffId: string, uid: string): Promise<string> {
  const hashString = `${liffId}${uid}`;
  const encoder = new TextEncoder();
  const data = encoder.encode(hashString);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  return `UA${hashHex.substring(0, 32)}`;
}
