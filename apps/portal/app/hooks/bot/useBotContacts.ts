// hooks/useBots.ts
import { useQuery } from "@tanstack/react-query";
import { fetchBotInsightContacts } from "~/services/bots";
import { useAppSelector } from "~/store";

export const useBotContacts = ({ id }) => {
  return useQuery({
    queryKey: ["bots", id, "insights", "contacts"],
    queryFn: () => fetchBotInsightContacts(id).then((res) => res.data),
    enabled: useAppSelector((state) => state.auth.isAuthenticated),
  });
};
