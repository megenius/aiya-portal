// hooks/useBots.ts
import { useQuery } from "@tanstack/react-query";
import { useAppSelector } from "~/store";
import { fetchBotInsightLogs } from "~/services/bots";

export const useBotLogs = ({ id }) => {
  return useQuery({
    queryKey: ["bots", id, "insights", "logs"],
    queryFn: () => fetchBotInsightLogs(id).then((res) => res.data),
    enabled: useAppSelector((state) => state.auth.isAuthenticated),
  });
};
