// hooks/useBotKnowledgeIntentQuestionInsertts.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IntentQuestion } from "~/@types/app";
import { insertBotKnowledgeIntentQuestion } from "~/services/bots";

interface MutationFn {
  variables: Variables;
}

interface Variables {
  bot_id: string;
  knowledge_id: string;
  intent_id: string;
  questions: IntentQuestion[];
}

export const useBotKnowledgeIntentQuestionInsert = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ variables }: MutationFn) =>
      insertBotKnowledgeIntentQuestion(variables).then(
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
