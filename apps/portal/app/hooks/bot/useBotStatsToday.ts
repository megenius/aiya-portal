// hooks/useBotStatsToday.ts
import { useQuery } from "@tanstack/react-query";
import { useAppSelector } from "~/store";
import { fetchBotStatsToday } from "~/services/bots";

interface QueryProps {
  variables: Variables;
}

interface Variables {
  id: string;
}

export const useBotStatsToday = ({ variables: { id } }: QueryProps) => {
  return useQuery({
    queryKey: ["bots", id, "insights", "stats", "today"],
    queryFn: () => fetchBotStatsToday(id).then((res) => res.data),
    enabled: useAppSelector((state) => state.auth.isAuthenticated),
  });
};
