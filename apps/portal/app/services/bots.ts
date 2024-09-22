import {
  Bot,
  BotChannelStatus,
  BotIntent,
  BotKnowledge,
  BotKnowledgeUpdate,
  BotUpdate,
  Channel,
  ChannelBot,
  IntentQuestion,
  WorkspaceMember,
} from "~/@types/app";
import api from "./api";

// --------------- bots ---------------
export const fetchBot = (id: string) => api.get<Bot>(`/items/bots/${id}`);

export const insertBot = (data: Bot) => api.post<Bot>("/items/bots", data);

export const updateBot = (id: string, data: BotUpdate) => {
  return api.patch(`/items/bots/${id}`, data);
};

export const deleteBot = (id: string) => {
  return api.delete(`/items/bots/${id}`);
};

// --------------- members ---------------
export const fetchBotMembers = (id: string) =>
  api.get<{ items: WorkspaceMember[] }>("/bots/" + id + "/members");

// --------------- channels ---------------
export const fetchBotChannels = (id: string) =>
  api.get<Array<Channel & { _id: number }>>("/bots/" + id + "/channels");

export const fetchBotChannelsStatus = (id: string) =>
  api.get<Array<BotChannelStatus>>("/bots/" + id + "/channels/status");

export const insertBotChannel = (data: {
  bot_id: string;
  channel_id: string;
}) => api.post("/items/channels_bots", data);

export const deleteBotChannel = (data: {
  bot_id: string;
  channel_id: string;
}) => api.delete("/bots/" + data.bot_id + "/channels", { data });

// --------------- knowledges ---------------

// list knowledges
export const fetchBotKnowledges = (botId: string) =>
  api.get<Array<BotKnowledge & { _id: number }>>(
    "/bots/" + botId + "/knowledges"
  );

// get knowledge
export const fetchBotKnowledge = (knowledgeId: string) =>
  api.get<BotKnowledge>("/bots/knowledges/" + knowledgeId);

// insert knowledge
export const insertBotKnowledge = (
  botId: string,
  data: Partial<BotKnowledge>
) => api.post(`/bots/${botId}/knowledges`, data);

// update knowledge
export const updateBotKnowledge = (
  knowledgeId: string,
  data: Partial<BotKnowledgeUpdate>
) => {
  return api.patch("/bots/knowledges/" + knowledgeId, data);
};

// delete knowledge
export const deleteBotKnowledgeIntent = (data: {
  bot_id: string;
  knowledge_id: string;
  intent_id: string;
}) =>
  api.delete(
    `/bots/${data.bot_id}/knowledges/${data.knowledge_id}/intents/${data.intent_id}`
  );

// --------------- intents ---------------
// insert intent
export const insertBotKnowledgeIntent = (data: {
  bot_id: string;
  knowledge_id: string;
  intent_name: string;
}) =>
  api.post(
    `/bots/${data.bot_id}/knowledges/${data.knowledge_id}/intents`,
    data
  );

// import intents
export const importBotKnowledgeIntents = (data: {
  knowledge_id: string;
  intents: Array<BotIntent>;
}) => {
  return api.post(
    `/bots/knowledges/${data.knowledge_id}/intents/import`,
    data.intents
  );
};

// --------------- questions ---------------

// insert question
export const insertBotKnowledgeIntentQuestion = (data: {
  bot_id: string;
  knowledge_id: string;
  intent_id: string;
  questions: Array<IntentQuestion>;
}) =>
  api.post<BotKnowledge>(
    `/bots/knowledges/${data.knowledge_id}/intents/${data.intent_id}/questions`,
    data.questions
  );

// update question
export const updateBotKnowledgeIntentQuestion = (data: {
  bot_id: string;
  knowledge_id: string;
  intent_id: string;
  question: IntentQuestion;
}) =>
  api.patch<BotKnowledge>(
    `/bots/knowledges/${data.knowledge_id}/intents/${data.intent_id}/questions/${data.question.id}`,
    data.question
  );

// delete question
export const deleteBotKnowledgeIntentQuestion = (data: {
  bot_id: string;
  knowledge_id: string;
  intent_id: string;
  question_id: string;
}) =>
  api.delete<BotKnowledge>(
    `/bots/knowledges/${data.knowledge_id}/intents/${data.intent_id}/questions/${data.question_id}`
  );
