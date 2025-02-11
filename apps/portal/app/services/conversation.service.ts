import api from "./api";

export const getConversations = async (providerId: string) => {
  console.log("providerId", providerId);
  
  const response = await api.get(
    `/uws/channels/${providerId}/conversations`
  );
  return response.data;
};
