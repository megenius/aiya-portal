import { Context, Next } from "hono";
import { createMiddleware } from "hono/factory";
import { Env } from "~/@types/hono.types";
import { getDirectusClient } from "~/config/directus";
import { loadKnowledges } from "~/service/knowledges";
import * as _ from "lodash";

export const knowledgeMiddleware = createMiddleware<Env>(async (c, next) => {
  const knowledgeId = c.req.param("knowledgeId") as string;
  const directus = getDirectusClient();
  await directus.setToken(c.get("token"));
  const knowledge = await loadKnowledges({c, knowledgeId, directus });
  c.set("knowledge", knowledge);
  await next();
});

export const intentMiddleware = createMiddleware<Env>(async (c, next) => {
  const knowledge = c.get("knowledge");
  const intents = knowledge.intents.filter(
    (intent) => intent.id === c.req.param("intentId")
  );
  c.set("intent", _.get(intents, 0));

  await next();
});
