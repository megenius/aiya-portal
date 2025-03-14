import { createFactory } from "hono/factory";
import { Env } from "~/types/hono.types";
import { getAdminDirectusClient, getDirectusClient } from "~/utils/directus";

const factory = createFactory<Env>();

export const directusMiddleware = factory.createMiddleware(async (c, next) => {
  // console.log("directusMiddleware", c.env.DIRECTUS_URL);
  const directus = getDirectusClient(c.env.DIRECTUS_URL);
  directus.setToken(c.get("token"));
  c.set("directus", directus);


  const directusAdmin = getAdminDirectusClient(c.env.DIRECTUS_URL, c.env.DIRECTUS_SERVICE_TOKEN);
  c.set("directAdmin", directusAdmin);
  await next();
});
