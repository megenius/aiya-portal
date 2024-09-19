import { readItem, updateItem } from "@directus/sdk";
import { randomHexString } from "@repo/shared/utils";
import { Context } from "hono";
import * as _ from "lodash";
import { BotIntent, BotKnowledge } from "~/@types/app";
import { Env } from "~/@types/hono.types";
import { ClientType } from "~/config/directus";

export const loadKnowledges = async ({
  c,
  directus,
  knowledgeId,
}: {
  c: Context<Env>;
  directus: ClientType;
  knowledgeId: string;
}) => {
  const cachedKnowledge = await c.env.CACHING.get<BotKnowledge>(
    ["bots_knowledges", knowledgeId].join("|"),
    {
      type: "json",
    }
  );

  if (cachedKnowledge) {
    return cachedKnowledge;
  }

  const item = await directus.request<BotKnowledge>(
    readItem("bots_knowledges", knowledgeId, {
      fields: ["bot", "id", "name", "total_intent", "raw_data", "date_updated"],
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

  const knowledge = {
    ..._.omit(item, "raw_data"),
    intents: intents || [],
  };

  await c.env.CACHING.put(
    ["bots_knowledges", knowledgeId].join("|"),
    JSON.stringify(knowledge)
  );

  return knowledge;
};

export const hasKnowledgeUpdated = async (
  c: Context<Env>,
  cachedData: BotKnowledge
) => {
  const currentItem = await c.env.CACHING.get<BotKnowledge>(
    ["bots_knowledges", cachedData.id].join("|"),
    {
      type: "json",
    }
  );

  if (!currentItem) {
    return true;
  }

  return currentItem.date_updated !== cachedData.date_updated;
};

export const updateKnowledge = async (
  c: Context<Env>,
  directus: ClientType,
  knowledgeId: string,
  data: BotKnowledge
) => {
  const intents = data?.intents?.map((intent: BotIntent) => ({
    id: intent.id,
    name: intent.name,
    intent: intent.intent,
    quick_reply: intent.quick_reply,
    questions: intent.questions.join("#### "),
    responses: intent.responses.join("#### "),
    tags: intent.tags.join("#### "),
  }));

  return await directus
    .request(
      updateItem("bots_knowledges", knowledgeId, {
        name: data?.name,
        raw_data: intents ? JSON.stringify(intents) : undefined,
        total_intent: intents ? intents.length : data?.total_intent,
        date_updated: new Date().toISOString(),
      })
    )
    .then(async (res) => {
      await c.env.CACHING.delete(["bots_knowledges", knowledgeId].join("|"));
      console.log("delete cache:", ["bots_knowledges", knowledgeId].join("|"));

      return res;
    });
};
