import { createItem, readItem, readItems, updateItem } from "@directus/sdk";
import { Context } from "hono";
import { createFactory } from "hono/factory";
import { logger } from "hono/logger";
import { Bot, BotIntent, BotKnowledge, Channel } from "~/types/app";
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

const factory = createFactory<Env>();

export const getBotHandler = factory.createHandlers(
  cachingMiddleware({
    ttl: 60 * 60,
    revalidate: async (c: Context<Env>, cachedData: any) => {
      return hasItemUpdated(c, cachedData, (c) =>
        ["bots", c.req.param("id")].join("|")
      );
    },
  }),
  logger(),
  directusMiddleware,
  async (c) => {
    const id = c.req.param("id");
    const directus = c.get("directus");
    const bot = await directus.request(readItem("bots", id));
    return c.json(bot);
  }
);

export const updateBotHandler = factory.createHandlers(
  cachingMiddleware({
    ttl: 60 * 60,
    revalidate: async (c: Context<Env>, cachedData: any) => {
      return hasItemUpdated(c, cachedData, (c) =>
        ["bots", c.req.param("id")].join("|")
      );
    },
  }),
  logger(),
  directusMiddleware,
  async (c) => {
    const id = c.req.param("id");
    const directus = c.get("directus");
    const data = await c.req.json();
    const bot = await directus.request(updateItem("bots", id, data));
    await c.env.CACHING.put(["bots", id].join("|"), JSON.stringify(bot));
    return c.json(bot);
  }
);

// Channel ----------------------------------------------------------
export const getBotChannelsHandler = factory.createHandlers(
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
        readItem("bots", id, {
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

      const active = item.channels
        .map((channel) => ({
          _id: channel.id,
          ...channel.channel_id,
        }))
        .sort((a, b) => a.name?.localeCompare(b.name as string) || 0);

      const inactive = item.team.channels
        .filter(
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

export const deleteBotChannelHandler = factory.createHandlers(
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

// Knowledge ----------------------------------------------------------
export const searchBotKnowledgesHandler = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c: Context<Env>) => {
    const botId = c.req.param("id");
    const directus = c.get("directus");
    const items = await directus.request(
      readItems("bots_knowledges", {
        fields: ["id", "name", "total_intent"],
        filter: { bot: botId },
      })
    );
    return c.json(items);
  }
);

export const getBotKnowledgeHandler = factory.createHandlers(
  cachingMiddleware({
    ttl: 60 * 60,
    revalidate: async (c: Context<Env>, cachedData: any) => {
      return hasItemUpdated(c, cachedData, (c) =>
        ["bots_knowledges", c.req.param("knowledgeId")].join("|")
      );
    },
  }),
  logger(),
  directusMiddleware,
  async (c: Context<Env>) => {
    const knowledgeId = c.req.param("knowledgeId");
    const directus = c.get("directus");
    const item = await getKnowledge(directus, knowledgeId);
    return c.json(item);
  }
);

export const createBotKnowledgeHandler = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c: Context<Env>) => {
    const botId = c.req.param("id");
    const directus = c.get("directus");
    const data = await c.req.json();
    const item = await directus.request(
      createItem("bots_knowledges", {
        bot: botId,
        ...data,
      })
    );
    return c.json(item);
  }
);

export const deleteBotKnowledgeHandler = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c: Context<Env>) => {
    const knowledgeId = c.req.param("knowledgeId");
    const directus = c.get("directus");
    await directus.request(
      updateItem("bots_knowledges", knowledgeId, {
        status: "Archived",
      })
    );
    return c.json({ success: true });
  }
);

export const searchBotHandler = factory.createHandlers(
  logger(),
  directusMiddleware,
  textEmbeddingMiddleware,
  async (c: Context<Env>) => {
    const id = c.req.param("id");
    const query = c.req.query("q");
    const k = Number(c.req.query("k") || "5");
    const platform = c.req.query("platform");
    const directus = c.get("directus");

    if (!query) {
      return c.json({ message: "q is required" });
    }
    // console.log("searchBotHandler", query, k, platform);
    const textEmbedding = c.get("textEmbedding");
    const response = await textEmbedding.search(query, {
      topK: k,
      filters: { bot_id: c.req.param("id") },
    });

    const matches = await Promise.all(
      response.map(async (x) => {
        const cacheKey = ["bots_knowledges", x.metadata?.knowledge_id].join(
          "|"
        );
        // let knowledge = await c.env.CACHING.get<BotKnowledge>(cacheKey, "json");

        // if (!knowledge) {
        //   knowledge = await getKnowledge(directus, x.metadata?.knowledge_id);
        //   await c.env.CACHING.put(cacheKey, JSON.stringify(knowledge));
        // }

        const knowledge = await getKnowledge(
          directus,
          x.metadata?.knowledge_id
        );

        const intent = knowledge.intents.find(
          (intent) => intent.id === x.metadata?.intent_id
        );

        return {
          knowledge_id: x.metadata?.knowledge_id,
          intent_id: x.metadata?.intent_id,
          score: x.score,
          intent: intent?.intent,
          responses: intent?.responses,
          quick_reply: intent?.quick_reply,
        };
      })
    );

    const messages = matches[0]?.responses?.map((response) => {
      if (platform === "line") {
        return response.payload;
      } else if (platform === "facebook") {
        return {
          text: response.payload.text,
        };
      }

      return response;
    });

    return c.json({ messages, matches });
  }
);