// hooks/useBotSlips.ts
import { useQuery } from "@tanstack/react-query";
import { useAppSelector } from "~/store";
import { fetchCapiLogs } from "~/services/bots";

export const useBotCapiLogs = ({ botId }) => {
  return useQuery({
    queryKey: ["bots", botId, "capi-logs"],
    queryFn: () => fetchCapiLogs(botId).then((res) => res.data),
    enabled: useAppSelector((state) => state.auth.isAuthenticated),
  });
};
