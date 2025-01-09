import { readItem } from "@directus/sdk";
import { createMiddleware } from "hono/factory";
import { BotKnowledge } from "~/types/app";
import { Env } from "~/types/hono.types";

export const knowledgeMiddleware = createMiddleware<Env>(async (c, next) => {
  const knowledgeId = c.req.param("knowledgeId") as string;
  const kv = c.env.CACHING;
  const cacheKey = ["bots_knowledges", knowledgeId].join("|");
  console.log("knowledgeMiddleware.cacheKey:", cacheKey);
  const cachedResponse = await kv.get<BotKnowledge>(cacheKey, "json");
  if (cachedResponse) {
    c.set("knowledge", cachedResponse);
  } else {
    const directus = c.get("directus");
    const knowledge = await directus.request<BotKnowledge>(
      readItem("bots_knowledges", knowledgeId, {
        fields: [
          "bot",
          "id",
          "name",
          "total_intent",
          "date_updated",
          "intents",
        ],
      })
    );
    await kv.put(cacheKey, JSON.stringify(knowledge));
    c.set("knowledge", knowledge);
  }

  await next();
});