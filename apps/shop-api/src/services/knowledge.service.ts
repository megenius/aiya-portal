import { readItem } from "@directus/sdk";
import { BotKnowledge } from "~/types/app";
import { ClientType } from "~/utils/directus";

export const getKnowledge = async (client: ClientType, id: string) => {
  return client.request<BotKnowledge>(
    readItem("bots_knowledges", id, {
      fields: ["bot", "id", "name", "total_intent", "date_updated", "intents"],
    })
  );
};
