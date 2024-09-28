import { createItem, readItem, readItems, updateItem } from "@directus/sdk";
import { Context } from "hono";
import { createFactory } from "hono/factory";
import { logger } from "hono/logger";
import {
  Channel,
  ImageMessageResponse,
  TextMessageResponse,
  ResponseElementType,
} from "~/types/app";
import { Env } from "~/types/hono.types";
import { getDirectusClient } from "~/utils/directus";
import { DirectusError } from "@repo/shared/exceptions/directus";
import { randomHexString } from "@repo/shared/utils";
import * as _ from "lodash";
import { directusMiddleware } from "~/middlewares/directus.middleware";
import { cachingMiddleware } from "~/middlewares/cache-get.middleware";
import { hasItemUpdated } from "~/utils/kv";
import { getKnowledge } from "~/services/knowledge.service";
import { textEmbeddingMiddleware } from "~/middlewares/text-embedding.middleware";
import { transformData } from "~/utils/datasource";

const factory = createFactory<Env>();

export const getProductHandler = factory.createHandlers(
  cachingMiddleware({
    ttl: 60 * 60,
    revalidate: async (c: Context<Env>, cachedData: any) => {
      if (c.req.query("refresh") === "true") {
        return true;
      }

      return hasItemUpdated(c, cachedData, (c) =>
        ["products", c.req.param("id")].join("|")
      );
    },
  }),
  logger(),
  directusMiddleware,
  async (c) => {
    const id = c.req.param("id");
    const directus = c.get("directus");
    const product = await directus.request(
      readItem("products", id, {
        fields: ["*"],
      })
    );
    return c.json({
      ...product,
    });
  }
);

export const updateProductHandler = factory.createHandlers(
  cachingMiddleware({
    ttl: 60 * 60,
    revalidate: async (c: Context<Env>, cachedData: any) => {
      return hasItemUpdated(c, cachedData, (c) =>
        ["products", c.req.param("id")].join("|")
      );
    },
  }),
  logger(),
  directusMiddleware,
  async (c) => {
    const id = c.req.param("id");
    const directus = c.get("directus");
    const data = await c.req.json();
    const product = await directus.request(updateItem("products", id, data));
    await c.env.CACHING.put(
      ["products", id].join("|"),
      JSON.stringify(product)
    );
    return c.json(product);
  }
);
