import api from "./api";

export const fetchChatHubs = () => api.get("/chathubs");
export const fetchChatHub = (id: string) => api.get<{
  id: string;
  name: string;
  channels: Array<{
    name: string;
    providerId: string;
  }>
}>(`/chathubs/${id}`);

export const insertChatHub = (data: any) => api.post("/chathubs", data);
export const updateChatHub = (id: string, data: any) => {
  return api.patch(`/chathubs/${id}`, data);
};
export const deleteChatHub = (id: string) => {
  return api.delete(`/chathubs/${id}`);
};
export const fetchChatHubConversations = (id: string) =>
  api.get(`/chathubs/${id}/conversations`);
export const fetchChatHubConversationsByChannel = (
  id: string,
  channelId: string
) => api.get(`/chathubs/${id}/conversations?channelId=${channelId}`);
export const fetchChatHubConversationsByProvider = (
  id: string,
  providerId: string
) => api.get(`/chathubs/${id}/conversations?providerId=${providerId}`);
