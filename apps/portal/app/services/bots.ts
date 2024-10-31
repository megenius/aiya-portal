import {
  Bot,
  BotChannelStatus,
  BotIntent,
  BotKnowledge,
  BotKnowledgeUpdate,
  BotLog,
  BotMutedUser,
  BotUpdate,
  BotsSlips,
  CAPIEvents,
  Channel,
  ChannelBot,
  IntentQuestion,
  IntentResponse,
  OrderTemplate,
  WorkspaceMember,
  stats,
} from "~/@types/app";

import api from "./api";
import { BotsOrders } from "~/@types/modules/order";

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
export const deleteBotKnowledge = (knowledgeId: string) =>
  api.delete("/bots/knowledges/" + knowledgeId);

// deploy knowledge
export const deployBotKnowledge = (knowledgeId: string) =>
  api.post(`/bots/knowledges/${knowledgeId}/deploy`);

// undeploy knowledge
export const undeployBotKnowledge = (knowledgeId: string) =>
  api.post(`/bots/knowledges/${knowledgeId}/undeploy`);

// --------------- intents ---------------
// insert intent
export const insertBotKnowledgeIntent = (data: {
  knowledge_id: string;
  intent: string;
  name: string;
}) =>
  api.post(`/bots/knowledges/${data.knowledge_id}/intents`, {
    intent: data.intent,
    name: data.name,
  });

// delete intent
export const deleteBotKnowledgeIntent = (data: {
  bot_id: string;
  knowledge_id: string;
  intent_id: string;
}) =>
  api.delete(`/bots/knowledges/${data.knowledge_id}/intents/${data.intent_id}`);

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

// --------------- responses ---------------

// insert response
export const insertBotKnowledgeIntentResponse = (data: {
  bot_id: string;
  knowledge_id: string;
  intent_id: string;
  response: IntentResponse[];
}) =>
  api.post<BotKnowledge>(
    `/bots/knowledges/${data.knowledge_id}/intents/${data.intent_id}/responses`,
    data.response
  );

// update response
export const updateBotKnowledgeIntentResponse = (data: {
  bot_id: string;
  knowledge_id: string;
  intent_id: string;
  response: Partial<IntentResponse>;
}) =>
  api.patch<BotKnowledge>(
    `/bots/knowledges/${data.knowledge_id}/intents/${data.intent_id}/responses/${data.response.id}`,
    data.response
  );

// delete response
export const deleteBotKnowledgeIntentResponse = (data: {
  bot_id: string;
  knowledge_id: string;
  intent_id: string;
  response_id: string;
}) =>
  api.delete<BotKnowledge>(
    `/bots/knowledges/${data.knowledge_id}/intents/${data.intent_id}/responses/${data.response_id}`
  );

// duplicate response
export const duplicateBotKnowledgeIntentResponse = (data: {
  bot_id: string;
  knowledge_id: string;
  intent_id: string;
  response_id: string;
}) =>
  api.post<BotKnowledge>(
    `/bots/knowledges/${data.knowledge_id}/intents/${data.intent_id}/responses/${data.response_id}/duplicate`
  );

// --------------- insight logs ---------------
export const fetchBotInsightLogs = (botId: string) =>
  api.get<{
    start: string;
    end: string;
    data: BotLog[];
  }>(`/bots/${botId}/insights/logs`);

// --------------- muted users ---------------
export const insertBotMutedUser = (data: BotMutedUser) =>
  api.post("/items/bots_muted_users", data);

// --------------- stats ---------------
export const fetchBotStatsToday = (botId: string) =>
  api.get<stats.AnalyticsReport>(`/bots/${botId}/insights/stats/today`);

// --------------- slips ---------------
export const fetchBotSlips = (botId: string) =>
  api.get<{
    start: string;
    end: string;
    data: BotsSlips[];
  }>(`/bots/${botId}/slips`);

// --------------- capi logs ---------------
export const fetchCapiLogs = (botId: string) =>
  api.get<{
    start: string;
    end: string;
    data: CAPIEvents[];
  }>(`/bots/${botId}/capi-logs`);

// --------------- order templates ---------------
export const fetchOrderTemplates = (botId: string) =>
  api.get<Array<OrderTemplate>>(`/bots/${botId}/order-templates`);


// --------------- order templates ---------------
export const fetchOrders = (botId: string) =>
  api.get<{
    start: string;
    end: string;
    data: BotsOrders[];
  }>(`/bots/${botId}/orders`);