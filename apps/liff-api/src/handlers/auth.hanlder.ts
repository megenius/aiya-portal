// routes/auth.ts
import * as sdk from "@directus/sdk";
import { addHours, addMilliseconds } from "date-fns";
import { Env } from "~/types/hono.types";
import { createFactory } from "hono/factory";
import { logger as honoLogger } from "hono/logger";
import { directusMiddleware } from "~/middlewares/directus.middleware";

import * as jwt from "hono/jwt";
import { createItem } from "@directus/sdk";

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

export const refresh = factory.createHandlers(
  honoLogger(),
  directusMiddleware,
  async (c) => {
    const refreshToken = c.req.header("Refresh-Token") as string;
    console.log("refresh token...", refreshToken);
    if (!refreshToken) {
      return c.json({ error: "No refresh token provided" }, 400);
    }
    try {
      const directus = c.get("directus");
      const auth = await directus.request(sdk.refresh("json", refreshToken));

      const expiresAt =
        auth.expires_at ||
        addMilliseconds(new Date(), Number(auth.expires) - 60000).valueOf();

      return c.json(
        camelcaseKeys({
          token: auth.access_token,
          refresh_token: auth.refresh_token,
          expiresAt,
        })
      );
    } catch (error) {
      console.error(error);
      return c.json({ error: "Invalid refresh token" }, 401);
    }
  }
);