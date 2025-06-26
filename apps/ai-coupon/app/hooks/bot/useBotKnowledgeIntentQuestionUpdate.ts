// hooks/useBotChannelsInsert.ts
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { IntentQuestion } from "~/@types/app";
import { updateBotKnowledgeIntentQuestion } from "~/services/bots";

interface MutationFn {
  variables: Variables;
}

interface Variables {
  bot_id: string;
  knowledge_id: string;
  intent_id: string;
  question: IntentQuestion;
}

export const useBotKnowledgeIntentQuestionUpdate = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ variables }: MutationFn) =>
      updateBotKnowledgeIntentQuestion(variables).then(
        (response) => response.data
      ),
    onSuccess: (item) => {
      // Invalidate and refetch
      // queryClient.invalidateQueries({
      //   queryKey: ["bots", "knowledges", item.id],
      //   exact: true,
      //   refetchType: "active",
      // });
    },
  });
};
