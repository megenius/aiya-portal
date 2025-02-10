import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getConversations } from "~/services/conversation.service";
import { useAppSelector } from "~/store";
import useWebSocket from "./useWebSocket";
import { useSearchParams } from "@remix-run/react";

const CONVERSATIONS_QUERY_KEY = ["conversations"];

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

export const useConversations = () => {
  const [search] = useSearchParams();
  const providerId = search.get("providerId");
  const queryClient = useQueryClient();
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const baseUrl = import.meta.env.VITE_WS_URL as string;
  const wsUrl = `${baseUrl}/websocket/uws/conversations/${providerId}`;

  const { status, sendMessage } = useWebSocket(wsUrl, {
    autoReconnect: true,
    reconnectAttempts: 5,
    reconnectInterval: 3000,
    onOpen: () => {
      sendMessage({ type: "subscribe", channel: "conversations" });
    },
    onMessage: (data: ConversationUpdate) => {
      if (data.type === "channel_update") {
        // queryClient.setQueryData(
        //   CONVERSATIONS_QUERY_KEY,
        //   data.data.conversations
        // );

        queryClient.invalidateQueries({
          queryKey: CONVERSATIONS_QUERY_KEY,
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
    queryKey: CONVERSATIONS_QUERY_KEY,
    queryFn: () => getConversations(providerId),
    enabled: isAuthenticated,
  });

  return {
    ...query,
    wsStatus: status,
    sendMessage,
  };
};
