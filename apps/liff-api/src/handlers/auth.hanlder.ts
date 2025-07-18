// routes/auth.ts
import * as sdk from "@directus/sdk";
import { addHours } from "date-fns";
import { Env } from "~/types/hono.types";
import { createFactory } from "hono/factory";
import { logger as honoLogger } from "hono/logger";

import * as jwt from "hono/jwt";

const factory = createFactory<Env>();

export const login = factory.createHandlers(honoLogger(), async (c) => {
  const { id } = await c.req.json();
  const directus = c.get("directAdmin");

  try {

    const profile = await directus.request(
      sdk.readItem("profiles", id)
    );

    if (!profile) {
      return c.json({ error: "Unauthorized" }, 401);
    }

    const jwtPayload = {
      id: profile.id,
      uid: profile.uid,
      liff_id: profile.liff_id,
      iat: Math.floor(new Date().getTime() / 1000),
      exp: Math.floor(addHours(new Date(), 1).getTime() / 1000),
      iss: "liff",
    };
    const token = await jwt.sign(jwtPayload, c.env.LIFF_SECRET_KEY);

    return c.json({ token });
  } catch (error) {
    console.error(error);
    return c.json({ error: "Unauthorized" }, 401);
  }
});