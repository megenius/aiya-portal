import {
  Bot,
  BotChannelStatus,
  BotKnowledge,
  BotKnowledgeUpdate,
  BotUpdate,
  Channel,
  ChannelBot,
  IntentQuestion,
  WorkspaceMember,
} from "~/@types/app";
import api from "./api";

export const fetchBot = (id: string) => api.get<Bot>(`/items/bots/${id}`);

export const insertBot = (data: Bot) => api.post<Bot>("/items/bots", data);

export const updateBot = (id: string, data: BotUpdate) => {
  return api.patch(`/items/bots/${id}`, data);
};

export const deleteBot = (id: string) => {
  return api.delete(`/items/bots/${id}`);
};

export const fetchBotMembers = (id: string) =>
  api.get<{ items: WorkspaceMember[] }>("/bots/" + id + "/members");

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

export const fetchBotKnowledges = (botId: string) =>
  api.get<Array<BotKnowledge & { _id: number }>>(
    "/bots/" + botId + "/knowledges"
  );

export const fetchBotKnowledge = (knowledgeId: string) =>
  api.get<BotKnowledge>("/bots/knowledges/" + knowledgeId);

export const insertBotKnowledge = (
  botId: string,
  data: Partial<BotKnowledge>
) => api.post(`/bots/${botId}/knowledges`, data);

export const updateBotKnowledge = (
  knowledgeId: string,
  data: Partial<BotKnowledgeUpdate>
) => {
  return api.patch("/bots/knowledges/" + knowledgeId, data);
};

export const deleteBotKnowledgeIntent = (data: {
  bot_id: string;
  knowledge_id: string;
  intent_id: string;
}) =>
  api.delete(
    `/bots/${data.bot_id}/knowledges/${data.knowledge_id}/intents/${data.intent_id}`
  );

export const insertBotKnowledgeIntent = (data: {
  bot_id: string;
  knowledge_id: string;
  intent_name: string;
}) =>
  api.post(
    `/bots/${data.bot_id}/knowledges/${data.knowledge_id}/intents`,
    data
  );

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

export const deleteBotKnowledgeIntentQuestion = (data: {
  bot_id: string;
  knowledge_id: string;
  intent_id: string;
  question_id: string;
}) =>
  api.delete<BotKnowledge>(
    `/bots/knowledges/${data.knowledge_id}/intents/${data.intent_id}/questions/${data.question_id}`
  );
