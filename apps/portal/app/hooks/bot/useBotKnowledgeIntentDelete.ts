// hooks/useBotKnowledgeIntentInsert.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BotKnowledge } from "~/@types/app";
import { deleteBotKnowledgeIntent } from "~/services/bots";

interface MutationFn {
  variables: Variables;
}

interface Variables {
  bot_id: string;
  knowledge_id: string;
  intent_id: string;
}

export const useBotKnowledgeIntentDelete = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ variables }: MutationFn) =>
      deleteBotKnowledgeIntent(variables).then((response) => response.data),
    onSuccess: (item: BotKnowledge) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({
        queryKey: ["bots", "knowledges", item.id],
        exact: true,
        refetchType: "active",
      });

      queryClient.invalidateQueries({
        queryKey: ["bots", item.bot, "knowledges"],
        exact: true,
        refetchType: "active",
      });
    },
  });
};
