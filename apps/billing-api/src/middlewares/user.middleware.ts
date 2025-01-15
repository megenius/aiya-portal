import { DirectusUser, readMe } from "@directus/sdk";
import { createFactory } from "hono/factory";
import { Env } from "~/types/hono.types";
import { getDirectusClient, getAdminDirectusClient } from "~/utils/directus";

const factory = createFactory<Env>();

export const userMiddleware = factory.createMiddleware(async (c, next) => {
  const directus = c.get("directus");
  
  const user = await directus.request(
    readMe({
      fields: ["id", "email", "first_name", "last_name", "avatar"],
    })
  );
  
  c.set("user", user as DirectusUser);

  await next();
});
