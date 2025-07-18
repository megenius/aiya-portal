import * as sdk from "@directus/sdk";
import { createFactory } from "hono/factory";
import { logger } from "hono/logger";
import { Env } from "~/types/hono.types";

const factory = createFactory<Env>();

export const getMe = factory.createHandlers(logger(), async (c) => {
  const directus = c.get("directAdmin");
  try {
    const { id } = c.get("jwtPayload");
    const profile = await directus.request(
      sdk.readItem("profiles", id,{
        fields : ["*"],
      })
    );

    if (!profile) {
      return c.json({ error: "Profile not found" }, 404);
    }

    return c.json(profile, 200);
  } catch (error) {
    console.error(error);
    return c.json({ error: "Invalid credentials" }, 401);
  }
});