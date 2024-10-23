import { createFactory } from "hono/factory";
import { Env } from "~/types/hono.types";
import { getDirectusClient } from "~/utils/directus";

const factory = createFactory<Env>();

let initialized = false;

export const directusMiddleware = factory.createMiddleware(async (c, next) => {
  if (initialized) {
    await next();
    return;
  }
  
  // console.log("directusMiddleware", c.env.DIRECTUS_URL);
  const directus = getDirectusClient(c.env.DIRECTUS_URL);
  directus.setToken(c.get("token"));
  c.set("directus", directus);

  const directAdmin = getDirectusClient(c.env.DIRECTUS_URL);
  directAdmin.setToken(c.env.DIRECTUS_SERVICE_TOKEN);
  c.set("directAdmin", directAdmin);

  await next();
});
