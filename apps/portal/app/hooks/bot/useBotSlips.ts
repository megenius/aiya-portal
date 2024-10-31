// hooks/useBotSlips.ts
import { useQuery } from "@tanstack/react-query";
import { useAppSelector } from "~/store";
import { fetchBotSlips } from "~/services/bots";

export const useBotSlips = ({ botId }) => {
  return useQuery({
    queryKey: ["bots", botId, "slips"],
    queryFn: () => fetchBotSlips(botId).then((res) => res.data),
    enabled: useAppSelector((state) => state.auth.isAuthenticated),
  });
};
