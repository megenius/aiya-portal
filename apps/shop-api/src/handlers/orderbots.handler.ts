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

export const getOrderbotHandler = factory.createHandlers(
  cachingMiddleware({
    ttl: 60 * 60,
    revalidate: async (c: Context<Env>, cachedData: any) => {
      if (c.req.query("refresh") === "true") {
        return true;
      }

      return hasItemUpdated(c, cachedData, (c) =>
        ["orderbots", c.req.param("id")].join("|")
      );
    },
  }),
  logger(),
  directusMiddleware,
  async (c) => {
    const id = c.req.param("id");
    const directus = c.get("directus");
    const product = await directus.request(
      readItem("orderbots", id, {
        fields: ["*"],
      })
    );
    return c.json({
      ...product,
    });
  }
);

export const updateOrderbotHandler = factory.createHandlers(
  cachingMiddleware({
    ttl: 60 * 60,
    revalidate: async (c: Context<Env>, cachedData: any) => {
      return hasItemUpdated(c, cachedData, (c) =>
        ["orders", c.req.param("id")].join("|")
      );
    },
  }),
  logger(),
  directusMiddleware,
  async (c) => {
    const id = c.req.param("id");
    const directus = c.get("directus");
    const data = await c.req.json();
    const product = await directus.request(updateItem("orderbots", id, data));
    await c.env.CACHING.put(
      ["orderbots", id].join("|"),
      JSON.stringify(product)
    );
    return c.json(product);
  }
);

export const deleteOrderHandler = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c) => {
    const id = c.req.param("id");
    const directus = c.get("directus");
    await directus.request(
      updateItem("orderbots", id, {
        status: "deleted",
      })
    );
    return c.json({
      message: "Orderbots deleted",
    });
  }
);

// Channel ----------------------------------------------------------
export const getOrderBotChannelsHandler = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c: Context<Env>) => {
    try {
      const id = c.req.param("id");
      const directus = c.get("directus");

      const item = await directus.request<{
        team: { channels: Array<Partial<Channel>> };
        channels: Array<{
          id: number;
          channel_id: Partial<Channel>;
        }>;
      }>(
        readItem("orderbots", id, {
          fields: [
            {
              // @ts-ignore
              channels: [
                "id",
                {
                  channel_id: ["id", "name", "logo", "provider_id", "platform"],
                },
              ],
            },
            {
              // @ts-ignore
              "team.channels": [
                "id",
                "name",
                "logo",
                "provider_id",
                "platform",
              ],
            },
          ],
        })
      );

      // console.log("item", JSON.stringify(item, null, 2));
      const active = item.channels
        ?.map((channel) => ({
          _id: channel.id,
          ...channel.channel_id,
        }))
        .sort((a, b) => a.name?.localeCompare(b.name as string) || 0) || [];

      const inactive = item.team.channels
        ?.filter(
          (channel) =>
            !active.some((activeChannel) => activeChannel.id === channel.id)
        )
        .sort((a, b) => a.name?.localeCompare(b.name as string) || 0);

      return c.json([...active, ...inactive]);
    } catch (error) {
      throw DirectusError.fromDirectusResponse(error);
    }
  }
);

export const deleteOrderBotChannelHandler = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c: Context<Env>) => {
    try {
      const id = c.req.param("id");
      const directus = c.get("directus");
      const { bot_id, channel_id } = await c.req.json();
      return c.json({ bot_id, channel_id });
    } catch (error) {
      throw DirectusError.fromDirectusResponse(error);
    }
  }
);
