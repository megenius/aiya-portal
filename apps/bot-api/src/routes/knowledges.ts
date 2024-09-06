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
import { randomHexString } from "@repo/shared/utils";
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
  .get("/:knowledgeId/embeddings", async (c) => {
    try {
      const knowledgeId = c.req.param("knowledgeId") as string;
      const directus = getDirectusClient();
      await directus.setToken(c.get("token"));
      const knowledge = await loadKnowledges({ c, knowledgeId, directus });

      let totalQuestions = 0;
      for (let i = 0; i < knowledge.intents.length; i++) {
        const intent = knowledge.intents[i];
        await c.env.SENTENCE_EMBEDINGS_QUEUE.sendBatch(
          intent.questions.map((question) => {
            totalQuestions++;
            return {
              body: {
                bot_id: knowledge.bot,
                knowledge_id: knowledge.id,
                intent_id: intent.id,
                text: question.trim(),
                // responses: intent.responses,
              },
            };
          })
        );
      }
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

      const knowledge = await loadKnowledges({c, knowledgeId, directus });
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
  });

export { knowledgesRoutes };
