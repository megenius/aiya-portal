// hooks/useBots.ts
import { useQuery } from "@tanstack/react-query";
import { fetchBotInsightContacts } from "~/services/bots";
import { useAppSelector } from "~/store";

export const useBotContacts = ({ id,workspaceId }) => {
  return useQuery({
    queryKey: ["bots", id, "insights", workspaceId, "contacts"],
    queryFn: () => fetchBotInsightContacts(id,workspaceId).then((res) => res.data),
    enabled: useAppSelector((state) => state.auth.isAuthenticated),
  });
};
