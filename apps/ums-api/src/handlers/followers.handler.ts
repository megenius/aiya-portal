import { createItem, readItem, readItems, updateItem } from "@directus/sdk";
import { Context } from "hono";
import { createFactory } from "hono/factory";
import { logger } from "hono/logger";
import { Env } from "~/types/hono.types";
import * as _ from "lodash";
import { directusMiddleware } from "~/middlewares/directus.middleware";
import { cachingMiddleware } from "~/middlewares/cache-get.middleware";
import { hasItemUpdated } from "~/utils/kv";
import { durableObjectMiddleware } from "~/middlewares/durable.middleware";

const factory = createFactory<Env>();

export const getFollowerHandler = factory.createHandlers(
  // cachingMiddleware({
  //   ttl: 60 * 60,
  //   revalidate: async (c: Context<Env>, cachedData: any) => {
  //     if (c.req.query("refresh") === "true") {
  //       return true;
  //     }

  //     return hasItemUpdated(c, cachedData, (c) =>
  //       ["products", c.req.param("id")].join("|")
  //     );
  //   },
  // }),
  // logger(),
  durableObjectMiddleware,
  async (c) => {
    // const id = c.req.param("id");
    const message = await c.var.stub.sayHello();
    return c.json({ message });
  }
);
