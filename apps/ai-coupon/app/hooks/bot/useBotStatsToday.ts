// hooks/useBotStatsToday.ts
import { useQuery } from "@tanstack/react-query";
import { useAppSelector } from "~/store";
import { fetchBotStatsToday } from "~/services/bots";

interface QueryProps {
  variables: Variables;
}

interface Variables {
  botId: string;
  timeUnit?: string;
  startDate?: string;
  endDate?: string;
}

export const useBotStatsToday = ({ variables: { botId, timeUnit, startDate, endDate } }: QueryProps) => {
  return useQuery({
    queryKey: ["bots", botId, "insights", "stats", "today", timeUnit, startDate, endDate],
    queryFn: () => fetchBotStatsToday({ botId, timeUnit, startDate, endDate }).then((res) => res.data),
    enabled: useAppSelector((state) => state.auth.isAuthenticated),
  });
};
