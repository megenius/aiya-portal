// hooks/useBotKnowledgeIntentResponseDelete.ts
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteBotKnowledgeIntentResponse } from "~/services/bots";

interface MutationFn {
  variables: Variables;
}

interface Variables {
  bot_id: string;
  knowledge_id: string;
  intent_id: string;
  response_id: string;
}

export const useBotKnowledgeIntentResponseDelete = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ variables }: MutationFn) =>
      deleteBotKnowledgeIntentResponse(variables).then(
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
