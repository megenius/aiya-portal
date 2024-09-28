// hooks/useBots.ts
import { useQuery } from "@tanstack/react-query";
import { fetchBotChannels } from "~/services/orderbots";
import { useAppSelector } from "~/store";

export const useOrderbotChannels = (botId: string) => {
  return useQuery({
    queryKey: ["orderbots", botId, "channels"],
    queryFn: () => fetchBotChannels(botId).then((res) => res.data),
    enabled: useAppSelector((state) => state.auth.isAuthenticated),
  });
};
