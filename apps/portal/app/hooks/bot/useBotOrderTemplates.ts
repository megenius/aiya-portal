// hooks/useBotSlips.ts
import { useQuery } from "@tanstack/react-query";
import { useAppSelector } from "~/store";
import { fetchOrderTemplates } from "~/services/bots";

export const useBotOrderTemplates = ({ botId }) => {
  return useQuery({
    queryKey: ["bots", botId, "orders-templates"],
    queryFn: () => fetchOrderTemplates(botId).then((res) => res.data),
    enabled: useAppSelector((state) => state.auth.isAuthenticated),
  });
};
