// hooks/useBotKnowledgeIntentResponseInsert.ts
import { ResponseElement } from "@repo/shared";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { IntentQuestion, IntentResponse } from "~/@types/app";
import { duplicateBotKnowledgeIntentResponse } from "~/services/bots";

interface MutationFn {
  variables: Variables;
}

interface Variables {
  bot_id: string;
  knowledge_id: string;
  intent_id: string;
  response_id: string;
}

export const useBotKnowledgeIntentResponseDuplicate = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ variables }: MutationFn) =>
      duplicateBotKnowledgeIntentResponse(variables).then(
        (response) => response.data
      ),
    onSuccess: (item) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({
        queryKey: ["bots", "knowledges", item.id],
        exact: true,
        refetchType: "active",
      });
    },
  });
};