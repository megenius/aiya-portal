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
import { Env } from "@repo/shared";
import { DirectusError } from "@repo/shared/exceptions/directus";
import { cache } from "hono/cache";
import { BotIntent, BotKnowledge, Channel, Workspace } from "~/@types/app";
import { randomHexString } from "@repo/shared/utils";
import * as _ from "lodash";

const knowledgesRoutes = new Hono<Env>()
  .get("/:knowledgeId", async (c) => {
    try {
      const knowledgeId = c.req.param("knowledgeId") as string;
      const directus = getDirectusClient();
      await directus.setToken(c.get("token"));
      const item = await directus.request<BotKnowledge>(
        readItem("bots_knowledges", knowledgeId, {
          fields: ["id", "name", "total_intent", "raw_data"],
        })
      );
      const intents = item.raw_data
        ?.sort((a, b) => a.name.localeCompare(b.name))
        .map((intent) => {
          return {
            ...intent,
            id: intent.id || randomHexString(8),
            intent: intent.name.trim(),
            questions: intent.questions
              .trim()
              .split("#### ")
              .filter((x) => x),
            responses: intent.responses
              .trim()
              .split("#### ")
              .filter((x) => x),
          } as BotIntent;
        });

      return c.json({
        ..._.omit(item, "raw_data"),
        intents: intents || [],
      });
    } catch (error) {
      throw DirectusError.fromDirectusResponse(error);
    }
  })
  .patch("/:knowledgeId", async (c) => {
    try {
      const knowledgeId = c.req.param("knowledgeId") as string;
      const directus = getDirectusClient();
      await directus.setToken(c.get("token"));

      const data = await c.req.json();
      const intents = data.intents.map((intent: BotIntent) => ({
        id: intent.id,
        name: intent.name,
        questions: intent.questions.join("#### "),
        responses: intent.responses.join("#### "),
      }));

      await directus.request(
        updateItem("bots_knowledges", knowledgeId, {
          raw_data: JSON.stringify(intents),
          total_intent: intents.length,
        })
      );

      return c.json({
        id: knowledgeId,
      });
    } catch (error) {
      throw DirectusError.fromDirectusResponse(error);
    }
  });

export { knowledgesRoutes };
