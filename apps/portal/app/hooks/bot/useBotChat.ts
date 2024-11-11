// hooks/useBotSlips.ts
import { useQuery } from "@tanstack/react-query";
import { useAppSelector } from "~/store";
import { streamBotChat } from "~/services/bots";

export const useBotChat = ({ botId }) => {
  return useQuery({
    queryKey: ["bots", botId, "chat"],
    queryFn: () => streamBotChat(botId).then((res) => res.data),
    enabled: useAppSelector((state) => state.auth.isAuthenticated),
  });
};
