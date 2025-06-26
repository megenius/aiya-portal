// hooks/useBots.ts
import { useQuery } from "@tanstack/react-query";
import { fetchBotChannelsStatus } from "~/services/bots";
import { useAppSelector } from "~/store";

export const useBotChannelsStatus = (botId) => {
  return useQuery({
    queryKey: ["bots", botId, "channels", "status"],
    queryFn: () => fetchBotChannelsStatus(botId).then((res) => res.data),
    enabled: useAppSelector((state) => state.auth.isAuthenticated),
  });
};
