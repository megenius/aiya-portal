import {
  createItem,
  deleteItem,
  readItem,
  readItems,
  updateItem,
} from "@directus/sdk";
import { Context } from "hono";
import { createFactory } from "hono/factory";
import { logger } from "hono/logger";
import {
  Bot,
  BotIntent,
  BotKnowledge,
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
import { opensearchMiddleware } from "~/middlewares/opensearch.middleware";
import { sendEventToCapi } from "~/services/facebook.service";

const factory = createFactory<Env>();

export const getBotHandler = factory.createHandlers(
  // cachingMiddleware({
  //   ttl: 60 * 60,
  //   revalidate: async (c: Context<Env>, cachedData: any) => {
  //     if (c.req.query("refresh") === "true") {
  //       return true;
  //     }

  //     return hasItemUpdated(c, cachedData, (c) =>
  //       ["bots", c.req.param("id")].join("|")
  //     );
  //   },
  // }),
  logger(),
  directusMiddleware,
  async (c) => {
    const id = c.req.param("id");
    const directus = c.get("directus");
    const bot = await directus.request(
      readItem("bots", id, {
        fields: [
          "*",
          // @ts-ignore
          { datasources: ["*", { tables: ["*", { fields: ["*"] }] }] },
          // @ts-ignore
          { muted_users: ["uid"] },
          // @ts-ignore
          { orders: ["name", "template", "metadata"] },
        ],
      })
    );
    return c.json({ ...bot, datasources: transformData(bot.datasources) });
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

      console.log("getBotChannelsHandler", id);

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
        fields: ["id", "name", "total_intent", "status"],
        filter: { bot: botId },
      })
    );
    return c.json(items);
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

// Search ----------------------------------------------------------
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
      filters: { bot_id: c.req.param("id"), status: "published" },
    });

    const matches = await Promise.all(
      response.map(async (x) => {
        // const cacheKey = ["bots_knowledges", x.metadata?.knowledge_id].join(
        //   "|"
        // );
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
        if (response.type === ResponseElementType.Text) {
          const item = response as TextMessageResponse;
          return {
            type: "text",
            text: item.payload?.text,
          };
        } else if (response.type === ResponseElementType.Image) {
          const item = response as ImageMessageResponse;
          return {
            type: "image",
            originalContentUrl: item.payload.url,
            previewImageUrl: item.payload.url,
          };
        }

        return {
          type: "text",
          text: `Unsupported response type` + JSON.stringify(response.type),
        };
      } else if (platform === "facebook") {
        if (response.type === ResponseElementType.Text) {
          const item = response as TextMessageResponse;
          return {
            text: item.payload?.text,
          };
        } else if (response.type === ResponseElementType.Image) {
          if (response.type === ResponseElementType.Image) {
            const item = response as ImageMessageResponse;
            return {
              attachment: {
                type: "image",
                payload: {
                  url: item.payload.url,
                  is_reusable: true,
                },
              },
            };
          }
        }
      }

      return response;
    });

    return c.json({ messages, matches });
  }
);

// webhook ----------------------------------------------------------
export const webhookHandler = factory.createHandlers(
  logger(),
  directusMiddleware,
  opensearchMiddleware,
  async (c) => {
    const body = await c.req.json();
    console.log("webhookHandler", JSON.stringify(body, null, 2));
    let sendCapi = false;
    const opensearch = c.get("opensearch");
    const event_type = body.event_type;
    let payload = _.omit(body, ["event_type"]) as any;
    payload = { ...payload, created_at: new Date().toISOString() };

    const getChannel = async (providerId: string) => {
      const directus = c.get("directus");
      const items = await directus.request(
        readItems("channels", {
          fields: ["dataset", "provider_access_token"],
          filter: {
            provider_id: {
              _eq: providerId,
            },
          },
        })
      );

      if (items.length > 0) {
        return items[0];
      }

      return;
    };

    try {
      if (event_type === "bots_logs") {
        await opensearch.index(event_type, payload, crypto.randomUUID());
      } else if (event_type === "bots_slips") {
        await opensearch.index(event_type, payload, crypto.randomUUID());
        if (payload.metadata?.platform === "facebook") {
          sendCapi = true;
        }
      } else if (event_type === "bots_orders") {
        await opensearch.index(event_type, payload, crypto.randomUUID());
        if (payload.metadata?.platform === "facebook") {
          sendCapi = true;
        }
      } else {
        await opensearch.index(event_type, payload, crypto.randomUUID());
      }

      if (sendCapi) {
        const {
          metadata: { provider_id, user_id },
          data: { transaction_details },
        } = payload;
        const channel = await getChannel(provider_id);

        if (channel) {
          const id = randomHexString(6);
          const body = {
            pageId: provider_id,
            datasetId: channel.dataset as string,
            psid: user_id,
            value: transaction_details?.amount,
            eventName: "Purchase",
            eventTime: Math.floor(Date.now() / 1000),
            currency: "THB",
          };

          console.log("sendEventToCapi", id, JSON.stringify(body));

          await sendEventToCapi({
            ...body,
            accessToken: channel?.provider_access_token as string,
          })
            .then((response) => {
              console.log("sendEventToCapi", id, response);
            })
            .catch((error) => {
              console.error("sendEventToCapi", id, error);
            });
        } else {
          console.error("sendEventToCapi", "dataset not found");
        }
      }
    } catch (error) {
      console.error("webhookHandler", error);
    }
    // event type

    return c.json({});
  }
);

// logs ----------------------------------------------------------
export const insertLogsHandler = factory.createHandlers(logger(), async (c) => {
  const body = await c.req.json();
  console.log("logsHandler", JSON.stringify(body, null, 2));

  return c.json({});
});

export const getLogsHandler = factory.createHandlers(logger(), async (c) => {
  console.log("getLogsHandler");

  return c.json({});
});

// getMutedUsersHandler
export const getMutedUsersHandler = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c: Context<Env>) => {
    const botId = c.req.param("id");
    const directus = c.get("directus");

    const items = await directus.request(
      readItems("bots_muted_users", {
        fields: ["uid"],
        filter: { bot: botId },
      })
    );

    return c.json(items);
  }
);

// muteUserHandler
export const muteUserHandler = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c: Context<Env>) => {
    const botId = c.req.param("id");
    const directus = c.get("directus");
    const data = await c.req.json();
    // example data
    // {
    //   "uid": "Ua29b798287b0acc26cc5ec62e30185e2",
    // }
    const item = await directus.request(
      createItem("bots_muted_users", {
        bot: botId,
        uid: data.uid,
      })
    );
    return c.json(item);
  }
);

// unmuteUserHandler
export const unmuteUserHandler = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c: Context<Env>) => {
    const botId = c.req.param("id");
    const directus = c.get("directus");
    const data = await c.req.json();

    const item = await directus.request(
      readItems("bots_muted_users", {
        fields: ["id"],
        filter: { bot: botId, uid: data.uid },
      })
    );

    if (item.length > 0) {
      await directus.request(
        deleteItem("bots_muted_users", item[0]?.id as string)
      );
    }

    return c.json({});
  }
);
