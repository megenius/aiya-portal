// hooks/useBots.ts
import { useQuery } from "@tanstack/react-query";
import { fetchBotChannels } from "~/services/bots";
import { useAppSelector } from "~/store";

export const useBotChannels = (botId: string) => {
  return useQuery({
    queryKey: ["bots", botId, "channels"],
    queryFn: () => fetchBotChannels(botId).then((res) => res.data),
    enabled: useAppSelector((state) => state.auth.isAuthenticated),
  });
};
