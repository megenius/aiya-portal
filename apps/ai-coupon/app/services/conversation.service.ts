import api from "./api";

export const getConversations = async (providerId: string) => {
  console.log("providerId", providerId);

  const response = await api.get(`/uws/channels/${providerId}/conversations`);
  return response.data;
};

export const getHubConversations = async (hubId: string) => {
  console.log("hubId", hubId);

  const { data } = await api.get(`chathubs/${hubId}`);

  return data;

  // api.get("");

  // const response = await api.get(`/uws/channels/${providerId}/conversations`);
  // return response.data;
};
