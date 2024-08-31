import {
  Bot,
  BotChannelStatus,
  BotUpdate,
  Channel,
  ChannelBot,
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
