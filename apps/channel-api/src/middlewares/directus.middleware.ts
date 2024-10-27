import { createFactory } from "hono/factory";
import { Env } from "~/types/hono.types";
import { getDirectusClient } from "~/utils/directus";

const factory = createFactory<Env>();

export const directusMiddleware = factory.createMiddleware(async (c, next) => {
  const directus = getDirectusClient(c.env.DIRECTUS_URL);
  directus.setToken(c.get("token"));
  c.set("directus", directus);
  await next();
});
