import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getConversations } from "~/services/conversation.service";
import { useAppSelector } from "~/store";
import useWebSocket from "./useWebSocket";
import { useSearchParams } from "@remix-run/react";
interface ConversationUpdate {
  type: "channel_update";
  data: {
    conversations: Array<{
      id: string;
      channel_id: string;
      last_message: string;
      updated_at: string;
      contact: {
        id: string;
        name: string;
        avatar?: string;
      };
    }>;
  };
}

export const useConversations = (providerIds: string | string[]) => {
  const queryClient = useQueryClient();
  const baseUrl = import.meta.env.VITE_WS_URL as string;
  const wsUrl = `${baseUrl}/websocket/uws/conversations/${providerIds}`;
  const queryKey = ["conversations", providerIds];

  const { status, sendMessage } = useWebSocket(wsUrl, {
    autoReconnect: true,
    reconnectAttempts: 5,
    reconnectInterval: 3000,
    onOpen: () => {
      console.log("WebSocket connected");

      sendMessage({ type: "subscribe", channel: "conversations" });
    },
    onMessage: (data: ConversationUpdate) => {
      if (data.type === "channel_update") {
        // queryClient.setQueryData(
        //   CONVERSATIONS_QUERY_KEY,
        //   data.data.conversations
        // );

        queryClient.invalidateQueries({
          queryKey: queryKey,
          exact: true,
          refetchType: "active",
        });
      }
    },
    onError: (error) => {
      console.error("WebSocket error:", error);
    },
  });


  const query = useQuery({
    queryKey,
    queryFn: async () => {
      // Handle case where providerIds is a single string
      if (
        !providerIds ||
        (Array.isArray(providerIds) && providerIds.length === 0)
      ) {
        return { data: [] };
      }

      // If it's a string, convert to array for consistent handling
      const idsArray = Array.isArray(providerIds) ? providerIds : [providerIds];

      // Fetch conversations for each provider ID
      const promises = idsArray.map((id) => getConversations(id));

      // Wait for all fetches to complete
      const results = await Promise.all(promises);

      // Combine and flatten results
      const combinedData = results.flatMap((result, index) => {
        // Add providerId to each conversation for filtering later
        return result.data.map((conversation: any) => ({
          ...conversation,
          providerId: idsArray[index],
        }));
      });

      // Sort combined results by updated_at (newest first)
      combinedData.sort(
        (a: any, b: any) =>
          new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
      );

      return { data: combinedData };
    },
    enabled:
      Boolean(providerIds) &&
      (Array.isArray(providerIds) ? providerIds.length > 0 : true),
  });

  return {
    ...query,
    wsStatus: status,
    sendMessage,
  };
};
