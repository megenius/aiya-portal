// hooks/useBots.ts
import { useQuery } from "@tanstack/react-query";
import { fetchBotChannelsStatus } from "~/services/orderbots";
import { useAppSelector } from "~/store";

export const useOrderbotChannelsStatus = (botId) => {
  return useQuery({
    queryKey: ["orderbots", botId, "channels", "status"],
    queryFn: () => fetchBotChannelsStatus(botId).then((res) => res.data),
    enabled: useAppSelector((state) => state.auth.isAuthenticated),
  });
};
