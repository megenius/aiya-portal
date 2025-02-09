import api from "./api";

export const getConversations = async (providerId: string) => {
  const response = await api.get(
    `/uws/channels/${providerId}/conversations`
  );
  return response.data;
};
