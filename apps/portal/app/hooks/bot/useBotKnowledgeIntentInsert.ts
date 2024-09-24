// hooks/useBotKnowledgeIntentInsert.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BotKnowledge } from "~/@types/app";
import { insertBotKnowledgeIntent } from "~/services/bots";

interface MutationFn {
  variables: Variables;
}

interface Variables {
  knowledge_id: string;
  name: string;
  intent: string;
}

export const useBotKnowledgeIntentInsert = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ variables }: MutationFn) =>
      insertBotKnowledgeIntent(variables).then((response) => response.data),
    onSuccess: (item: BotKnowledge) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({
        queryKey: ["bots", "knowledges", item.id],
        exact: true,
        refetchType: "active",
      });
    },
  });
};
