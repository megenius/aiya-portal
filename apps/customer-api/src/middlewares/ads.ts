import { Context, Next } from "hono";
import { createMiddleware } from "hono/factory";
import { Env } from "~/@types/hono.types";
import { getDirectusClient } from "~/config/directus";
import * as _ from "lodash";
import { readItem } from "@directus/sdk";
import { AdAccount } from "~/@types/app";

export const adMiddleware = createMiddleware<Env>(async (c, next) => {
  const id = c.req.param("id") as string;
  const directus = getDirectusClient();
  await directus.setToken(c.get("token"));

  const item = await directus.request<AdAccount>(
    readItem("ad_accounts", id)
  );

  if (item) {
    c.set("ad", item);
  }

  await next();
});
