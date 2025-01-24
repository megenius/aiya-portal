// hooks/useBotChannelsInsert.ts
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Channel, ChannelBot } from "~/@types/app";
import { deleteBotKnowledgeIntentQuestion } from "~/services/bots";

interface MutationFn {
  variables: Variables;
}

interface Variables {
  bot_id: string;
  knowledge_id: string;
  intent_id: string;
  // text: string;
  question_id: string;
}

export const useBotKnowledgeIntentQuestionDelete = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ variables }: MutationFn) =>
      deleteBotKnowledgeIntentQuestion(variables).then(
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
