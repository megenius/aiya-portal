// File: src/routes/items.ts
import { Hono } from "hono";
import { getDirectusClient } from "../config/directus";
import {
  readItems,
  createItem,
  updateItem,
  deleteItem,
  readItem,
  deleteItems,
} from "@directus/sdk";
import { DirectusError } from "@repo/shared/exceptions/directus";
import { cache } from "hono/cache";
import { BotIntent, BotKnowledge, Channel, Workspace } from "~/@types/app";
import { randomHexString, TextEmbedding } from "@repo/shared/utils";
import * as _ from "lodash";
import { Env } from "~/@types/hono.types";
import { MD5 } from "~/utils/crypto";
import { getTextEmbedding } from "~/utils/vector";
import {
  hasKnowledgeUpdated,
  loadKnowledges,
  updateKnowledge,
} from "~/service/knowledges";
import { intentMiddleware, knowledgeMiddleware } from "~/middlewares/knowlegde";
import { cachingMiddleware } from "~/middlewares/kv-cache";

const knowledgesRoutes = new Hono<Env>()
  .use("*", async (c, next) => {
    if (!c.get("textEmbedding")) {
      const textEmbedding = new TextEmbedding(
        {
          endpoint: c.env.OPENSEARCH_ENDPOINT,
          username: c.env.OPENSEARCH_USERNAME,
          password: c.env.OPENSEARCH_PASSWORD,
        },
        "text_embedding"
      );
      c.set("textEmbedding", textEmbedding);
    }
    await next();
  })
  .get(
    "/:knowledgeId",
    cachingMiddleware({
      ttl: 60 * 60,
      revalidate: async (c, cachedData) => {
        return hasKnowledgeUpdated(c, cachedData);
      },
    }),
    knowledgeMiddleware,
    async (c) => {
      try {
        const knowledge = c.get("knowledge");
        return c.json(knowledge);
      } catch (error) {
        throw DirectusError.fromDirectusResponse(error);
      }
    }
  )
  .get(
    "/:knowledgeId/intent/:intentId",
    knowledgeMiddleware,
    intentMiddleware,
    async (c) => {
      try {
        return c.json(c.get("intent"));
      } catch (error) {
        throw DirectusError.fromDirectusResponse(error);
      }
    }
  )
  .patch("/:knowledgeId", async (c) => {
    try {
      const knowledgeId = c.req.param("knowledgeId") as string;
      const directus = getDirectusClient();
      await directus.setToken(c.get("token"));
      const data = await c.req.json();
      await updateKnowledge(c, directus, knowledgeId, data);
      return c.json({
        id: knowledgeId,
      });
    } catch (error) {
      throw DirectusError.fromDirectusResponse(error);
    }
  })
  .post("/:knowledgeId/embeddings", async (c) => {
    try {
      const knowledgeId = c.req.param("knowledgeId") as string;
      const directus = getDirectusClient();
      await directus.setToken(c.get("token"));
      const knowledge = await loadKnowledges({ c, knowledgeId, directus });

      let totalQuestions = 0;

      const results = await Promise.all(
        knowledge.intents.map(async (intent) => {
          const batch = intent.questions.map((question, key) => {
            totalQuestions++;
            return {
              body: {
                bot_id: knowledge.bot,
                knowledge_id: knowledge.id,
                intent_id: intent.id,
                text: question.trim(),
                idx: key + 1,
              },
            };
          });

          await c.env.SENTENCE_EMBEDINGS_QUEUE.sendBatch([
            {
              body: {
                bot_id: knowledge.bot,
                knowledge_id: knowledge.id,
                intent_id: intent.id,
                text: intent.name,
                idx: 0,
              },
            },
            ...batch,
          ]);
        })
      );

      return c.json({ totalIntent: knowledge.intents.length, totalQuestions });
    } catch (error) {
      throw DirectusError.fromDirectusResponse(error);
    }
  })
  .get("/:knowledgeId/intent/:intentId/responses", async (c) => {
    try {
      const knowledgeId = c.req.param("knowledgeId") as string;
      const directus = getDirectusClient();
      await directus.setToken(c.get("token"));
      const intentId = c.req.param("intentId") as string;

      const knowledge = await loadKnowledges({ c, knowledgeId, directus });
      const intents = knowledge.intents.filter(
        (intent) => intent.id === c.req.param("intentId")
      );

      const responses = _.get(intents, "0.responses", []);
      return c.json(responses);
    } catch (error) {
      throw DirectusError.fromDirectusResponse(error);
    }
  })
  .get(
    "/:knowledgeId/search",
    cache({
      cacheName: "search",
      cacheControl: "max-age=15",
    }),
    async (c) => {
      const query = c.req.query("q") as string;
      const values = await getTextEmbedding(query);
      const matches = await c.env.VECTOR_SENTENCES.query(values, {
        topK: 5,
        returnValues: false,
        returnMetadata: "all",
      });

      return c.json(matches);
    }
  )
  .post("/embeddings", async (c) => {
    const { bot_id, knowledge_id, intent } = await c.req.json<{
      bot_id: string;
      knowledge_id: string;
      intent: BotIntent;
    }>();

    await c.env.SENTENCE_EMBEDINGS_QUEUE.sendBatch(
      intent.questions.map((question) => {
        return {
          body: {
            bot_id,
            knowledge_id,
            intent_id: intent.id,
            text: question.trim(),
          },
        };
      })
    );

    return c.json({});
  })
  .delete("/embeddings", async (c) => {
    const { bot_id, knowledge_id, intent } = await c.req.json<{
      bot_id: string;
      knowledge_id: string;
      intent: BotIntent;
    }>();
    const text = intent.name;
    const embedding = await getTextEmbedding(text);
    const matches = await c.env.VECTOR_SENTENCES.query(embedding, {
      topK: 100,
      filter: {
        bot_id,
        knowledge_id,
        intent_id: intent.id,
      },
      returnValues: false,
      returnMetadata: "indexed",
    });

    const ids = matches.matches.map((match) => match.id);
    await c.env.VECTOR_SENTENCES.deleteByIds(ids);

    return c.json(ids);
  })
  .post("/insert-question", async (c) => {
    try {
      const directus = getDirectusClient();
      await directus.setToken(c.get("token"));

      const { text, ...metadata } = await c.req.json<{
        bot_id: string;
        knowledge_id: string;
        intent_id: string;
        text: string;
      }>();

      const textEmbedding = c.get("textEmbedding") as TextEmbedding;
      const response = await textEmbedding.addDocument(text, metadata);

      return c.json(response);
    } catch (error) {
      throw DirectusError.fromDirectusResponse(error);
    }
  })
  .post("/delete-question", async (c) => {
    try {
      const directus = getDirectusClient();
      await directus.setToken(c.get("token"));

      const { text, ...metadata } = await c.req.json<{
        bot_id: string;
        knowledge_id: string;
        intent_id: string;
        text: string;
      }>();

      const textEmbedding = c.get("textEmbedding") as TextEmbedding;
      const response = await textEmbedding.deleteDocumentByMetadata(text, metadata);

      return c.json(response);
    } catch (error) {
      throw DirectusError.fromDirectusResponse(error);
    }
  });

export { knowledgesRoutes };
