// hooks/useBotKnowlegde.ts
import { useQuery } from "@tanstack/react-query";
import { fetchBotKnowledge } from "~/services/bots";
import { useAppSelector } from "~/store";

export const useBotKnowlegde = (knowledgeId: string) => {
  return useQuery({
    queryKey: ["knowledges", knowledgeId],
    queryFn: () =>
      fetchBotKnowledge(knowledgeId).then((res) => res.data),
    enabled: useAppSelector((state) => state.auth.isAuthenticated),
  });
};
