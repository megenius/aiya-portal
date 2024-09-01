// hooks/useBots.ts
import { useQuery } from "@tanstack/react-query";
import { fetchBotKnowledges } from "~/services/bots";
import { useAppSelector } from "~/store";

export const useBotKnowlegdes = (botId: string) => {
  return useQuery({
    queryKey: ["bots", botId, "knowledges"],
    queryFn: () => fetchBotKnowledges(botId).then((res) => res.data),
    enabled: useAppSelector((state) => state.auth.isAuthenticated),
  });
};
