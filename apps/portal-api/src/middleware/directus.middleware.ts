import { createFactory } from "hono/factory";
import { Env } from "~/types/hono.types";
import { getDirectusClient, getAdminDirectusClient } from "~/utils/directus";

const factory = createFactory<Env>();

let initialized = false;

export const directusMiddleware = factory.createMiddleware(async (c, next) => {
  if (initialized) {
    await next();
    return;
  }
  
  const directus = getDirectusClient(c.env.DIRECTUS_URL);
  directus.setToken(c.get("token"));
  c.set("directus", directus);

  const directAdmin = getAdminDirectusClient(c.env.DIRECTUS_URL, c.env.DIRECTUS_SERVICE_TOKEN);
  c.set("directAdmin", directAdmin);

  await next();
});
