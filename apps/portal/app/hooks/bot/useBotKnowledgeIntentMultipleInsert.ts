// hooks/useBotKnowledgeIntentInsert.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BotIntent, BotKnowledge } from "~/@types/app";
import { insertBotKnowledgeIntent, insertBotKnowledgeMultipleIntent } from "~/services/bots";

interface MutationFn {
  variables: Variables;
}

interface Variables {
  knowledge_id: string;
  intents: BotIntent[];
}

export const useBotKnowledgeIntentMultipleInsert = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ variables }: MutationFn) =>
      insertBotKnowledgeMultipleIntent(variables).then((response) => response.data),
    onSuccess: (item: BotKnowledge) => {
      // Invalidate and refetch
      // queryClient.invalidateQueries({
      //   queryKey: ["bots", "knowledges", item.id],
      //   exact: true,
      //   refetchType: "active",
      // });

      queryClient.invalidateQueries({
        queryKey: ["bots", item.bot, "knowledges"],
        exact: true,
        refetchType: "active",
      });
    },
  });
};
