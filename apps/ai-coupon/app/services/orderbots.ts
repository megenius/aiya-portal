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
  IntentResponse,
  WorkspaceMember,
} from "~/@types/app";
import api from "./api";

// --------------- orderbots ---------------
export const fetchBot = (id: string) => api.get<Bot>(`/items/orderbots/${id}`);

export const insertBot = (data: Bot) => api.post<Bot>("/items/orderbots", data);

export const updateBot = (id: string, data: BotUpdate) => {
  return api.patch(`/items/orderbots/${id}`, data);
};

export const deleteBot = (id: string) => {
  return api.delete(`/items/orderbots/${id}`);
};

// --------------- members ---------------
export const fetchBotMembers = (id: string) =>
  api.get<{ items: WorkspaceMember[] }>("/shops/orderbots/" + id + "/members");

// --------------- channels ---------------
export const fetchBotChannels = (id: string) =>
  api.get<Array<Channel & { _id: number }>>("/shops/orderbots/" + id + "/channels");

export const fetchBotChannelsStatus = (id: string) =>
  api.get<Array<BotChannelStatus>>("/shops/orderbots/" + id + "/channels/status");

export const insertBotChannel = (data: {
  orderbot_id: string;
  channel_id: string;
}) => api.post("/items/orderbots_channels", data);


export const deleteBotChannel = (data: {
  orderbot_id: string;
  channel_id: string;
}) => api.delete("/shops/orderbots/" + data.orderbot_id + "/channels", { data });

