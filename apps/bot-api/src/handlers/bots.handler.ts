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
import OpenAI from "openai";
import { createParser } from "eventsource-parser";
import { stream, streamText, streamSSE } from "hono/streaming";
import { addDays } from "date-fns";

const factory = createFactory<Env>();

// list bots ----------------------------------------------------------
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

// update bot ----------------------------------------------------------
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
                  channel_id: [
                    "id",
                    "name",
                    "logo",
                    "provider_id",
                    "platform",
                    "dataset",
                  ],
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

// delete channel ----------------------------------------------------------
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

// create knowledge ----------------------------------------------------------
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

    console.log("searchBotHandler", query, k, platform);

    const textEmbedding = c.get("textEmbedding");
    const response = await textEmbedding.search(query, {
      topK: k,
      filters: { bot_id: c.req.param("id"), status: "published" },
    });

    console.log("searchBotHandler", JSON.stringify(response, null, 2));

    try {
      const matches = await Promise.all(
        response.map(async (x) => {
          const knowledge = await getKnowledge(
            directus,
            x.metadata?.knowledge_id
          ).catch(() => null);

          const intent = knowledge?.intents.find(
            (intent) => intent.id === x.metadata?.intent_id
          );

          return {
            knowledge_id: x.metadata?.knowledge_id,
            lang: knowledge?.lang,
            intent_id: x.metadata?.intent_id,
            score: x.score,
            intent: intent?.intent,
            responses: intent?.responses,
            quick_reply: intent?.quick_reply,
            messages: intent?.responses?.map((response) => {
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
                  text:
                    `Unsupported response type` + JSON.stringify(response.type),
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
            }),
          };
        })
      );

      const messages = matches[0]?.messages || [];

      const result = {
        messages,
        matches,
        best_match: matches.length > 0 ? matches[0] : null,
      };
      console.log("searchBotHandler", JSON.stringify(result, null, 2));

      return c.json(result);
    } catch (error) {
      throw DirectusError.fromDirectusResponse(error);
    }
  }
);

// logs ----------------------------------------------------------
export const insertLogsHandler = factory.createHandlers(logger(), async (c) => {
  const body = await c.req.json();
  console.log("logsHandler", JSON.stringify(body, null, 2));

  return c.json({});
});

// getLogsHandler ----------------------------------------------------------
export const getLogsHandler = factory.createHandlers(logger(), async (c) => {
  console.log("getLogsHandler");

  return c.json({});
});

// getMutedUsersHandler ----------------------------------------------------------
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

// muteUserHandler ----------------------------------------------------------
export const muteUserHandler = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c: Context<Env>) => {
    const botId = c.req.param("id");
    const directus = c.get("directus");
    const data = await c.req.json();
    // example data
    // {
    //  "provider_id": "XXX",
    //   "uid": "Ua29b798287b0acc26cc5ec62e30185e2",
    // }
    const item = await directus.request(
      createItem("bots_muted_users", {
        bot: botId,
        provider_id: data.provider_id,
        uid: data.uid,
      })
    );
    return c.json(item);
  }
);

// unmuteUserHandler ----------------------------------------------------------
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

// orders ----------------------------------------------------------
export const ordersHandler = factory.createHandlers(
  logger(),
  opensearchMiddleware,

  async (c: Context<Env>) => {
    const botId = c.req.param("id");
    const opensearch = c.get("opensearch");
    const { start, end } = c.req.query();

    const res = await opensearch.search({
      index: "bots_orders",
      body: {
        query: {
          bool: {
            filter: [
              {
                term: {
                  "metadata.bot_id.keyword": botId,
                },
              },
              {
                range: {
                  created_at: {
                    gte: start,
                    lt: end,
                  },
                },
              },
            ],
          },
        },
        sort: [{ created_at: { order: "desc" } }],
        size: 10000,
      },
    });

    return c.json({
      start,
      end,
      data: res.hits.hits.map((x) => x._source),
    });
  }
);

// slips ----------------------------------------------------------
export const slipsHandler = factory.createHandlers(
  logger(),
  opensearchMiddleware,

  async (c: Context<Env>) => {
    const botId = c.req.param("id");
    const opensearch = c.get("opensearch");
    const { start, end } = c.req.query();

    const res = await opensearch.search({
      index: "bots_slips",
      body: {
        query: {
          bool: {
            filter: [
              {
                term: {
                  "metadata.bot_id.keyword": botId,
                },
              },
              {
                range: {
                  created_at: {
                    gte: start,
                    lt: end,
                  },
                },
              },
            ],
          },
        },
        sort: [{ created_at: { order: "desc" } }],
        size: 10000,
      },
    });

    return c.json({
      start,
      end,
      data: res.hits.hits.map((x) => x._source),
    });
  }
);

// capi-logs ----------------------------------------------------------
export const capiLogsHandler = factory.createHandlers(
  logger(),
  opensearchMiddleware,
  async (c: Context<Env>) => {
    const botId = c.req.param("id");
    const opensearch = c.get("opensearch");
    const { start, end } = c.req.query();

    const res = await opensearch.search({
      index: "capi_events",
      body: {
        query: {
          bool: {
            filter: [
              {
                term: {
                  "bot_id.keyword": botId,
                },
              },
              {
                range: {
                  created_at: {
                    gte: start,
                    lt: end,
                  },
                },
              },
            ],
          },
        },
        sort: [{ created_at: { order: "desc" } }],
        size: 10000,
      },
    });

    return c.json({
      start,
      end,
      data: res.hits.hits.map((x) => x._source),
    });
  }
);

// order-templates ----------------------------------------------------------
export const orderTemplatesHandler = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c: Context<Env>) => {
    const botId = c.req.param("id");
    const directus = c.get("directus");

    const items = await directus.request(
      readItems("bots_orders", {
        fields: ["id", "name", "template", "metadata", "date_updated"],
        filter: { bot: botId },
        limit: 100,
      })
    );

    return c.json(items);
  }
);

export async function OpenAIStream(payload: any, apiKey: string) {
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    method: "POST",
    body: JSON.stringify(payload),
  });

  // Use ReadableStream and TransformStream for streaming
  const stream = new ReadableStream({
    async start(controller) {
      const onParse = (event: any) => {
        if (event.type === "event") {
          const data = event.data;

          if (data === "[DONE]") {
            controller.close();
            return;
          }

          try {
            const json = JSON.parse(data);
            const text = json.choices[0]?.delta?.content || "";
            const queue = encoder.encode(text);
            controller.enqueue(queue);
          } catch (e) {
            controller.error(e);
          }
        }
      };

      const parser = createParser(onParse);

      // Process the response body
      for await (const chunk of res.body as any) {
        parser.feed(decoder.decode(chunk));
      }
    },
  });

  return stream;
}

// chats ----------------------------------------------------------
export const chatsHandler = factory.createHandlers(
  logger(),
  opensearchMiddleware,
  async (c: Context<Env>) => {
    const botId = c.req.param("id");
    const { OPENAI_API_KEY } = c.env;
    const body = await c.req.json();

    const openai = new OpenAI({
      apiKey: OPENAI_API_KEY,
    });

    const chatStream = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: body.messages,
      stream: true,
    });

    return streamText(c, async (stream) => {
      for await (const message of chatStream) {
        const text = message.choices[0]?.delta.content ?? "";
        // console.log("text", text);
        await stream.write(text);
        await stream.sleep(100);
        // await Promise.all(
        //   Array.from(text).map(async (s) => {
        //     await stream.write(s);
        //     await stream.sleep(20);
        //   })
        // );
      }
    });

    // const stream = new ReadableStream({
    //   async start(controller) {
    //     for await (const chunk of response) {
    //       const content = chunk.choices[0]?.delta?.content || "";
    //       if (content) {
    //         controller.enqueue(content);
    //       }
    //     }
    //     controller.close();
    //   },
    // });

    // const stream = await OpenAIStream(
    //   {
    //     model: "gpt-3.5-turbo",
    //     messages: body.messages,
    //     temperature: 0.7,
    //     stream: true,
    //   },
    //   OPENAI_API_KEY
    // );

    // return new Response(stream, {
    //   headers: {
    //     "Content-Type": "text/event-stream",
    //     "Cache-Control": "no-cache",
    //     Connection: "keep-alive",
    //   },
    // });
  }
);

export const serviceHandler = factory.createHandlers(
  logger(),
  directusMiddleware,
  textEmbeddingMiddleware,
  async (c: Context<Env>) => {
    const body = await c.req.json();
    console.log("serviceHandler", JSON.stringify(body, null, 2));
    const directus = c.get("directus");
    const textEmbedding = c.get("textEmbedding");

    const knowledges = await directus.request<BotKnowledge[]>(
      readItems("bots_knowledges", {
        filter: {
          date_created: {
            _gte: addDays(new Date(), -10).toISOString(),
          },
        },
      })
    );

    for (const knowledge of knowledges) {
      // for (let index = 0; index < knowledge.intents.length; index++) {
      //   const data = knowledge.intents[index];

      //   const questions = [
      //     { id: randomHexString(8), question: data.intent },
      //     ...data.questions,
      //   ];

      //   await c.env.SENTENCE_EMBEDINGS_QUEUE.sendBatch(
      //     questions.map((question) => {
      //       return {
      //         body: {
      //           operation: "addQuestion",
      //           text: question.question,
      //           bot_id: knowledge.bot,
      //           knowledge_id: knowledge.id,
      //           intent_id: data.id,
      //           id: question.id,
      //         },
      //       };
      //     })
      //   );
      // }
      if (knowledge.status === "published") {
        await textEmbedding.enableDocumentByMetadata({
          knowledge_id: knowledge.id,
        });
      }
    }

    return c.json({
      total: knowledges.length,
    });
  }
);

export const inquiriesHandler = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c: Context<Env>) => {
    const botId = c.req.param("id");
    const directus = c.get("directus");

    const items = await directus.request(
      readItems("bots_inquiries", {
        fields: ["*"],
        filter: { bot: botId },
        sort: ["-date_created"],
      })
    );

    return c.json(items);
  }
);

export const createInquiryHandler = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c: Context<Env>) => {
    const botId = c.req.param("id");
    const directus = c.get("directus");
    const data = await c.req.json();
    const item = await directus.request(
      createItem("bots_inquiries", {
        bot: botId,
        ...data,
      })
    );

    return c.json(item);
  }
);
