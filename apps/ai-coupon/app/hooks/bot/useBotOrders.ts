// hooks/useBotSlips.ts
import { useQuery } from "@tanstack/react-query";
import { useAppSelector } from "~/store";
import { fetchOrders } from "~/services/bots";

export const useBotOrders = ({ botId }) => {
  return useQuery({
    queryKey: ["bots", botId, "orders"],
    queryFn: () => fetchOrders(botId).then((res) => res.data),
    enabled: useAppSelector((state) => state.auth.isAuthenticated),
  });
};
