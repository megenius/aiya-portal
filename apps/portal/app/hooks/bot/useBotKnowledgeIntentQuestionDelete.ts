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
  text: string;
}

export const useBotKnowledgeIntentQuestionDelete = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ variables }: MutationFn) =>
      deleteBotKnowledgeIntentQuestion(variables).then(
        (response) => response.data
      ),
    onSuccess: (item: ChannelBot) => {
      // Invalidate and refetch
      // queryClient.invalidateQueries({
      //   queryKey: ["bots", item.bot_id, "channels"],
      //   exact: true,
      //   refetchType: "active",
      // });
    },
  });
};
