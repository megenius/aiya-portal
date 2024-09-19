// hooks/useBotChannelsInsert.ts
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { BotKnowledge, Channel, ChannelBot } from "~/@types/app";
import { insertBotKnowledge } from "~/services/bots";
import { useAppSelector } from "~/store";

interface MutationFn {
  variables: Variables;
}

interface Variables {
  bot_id: string;
  data: Partial<BotKnowledge>;
}

export const useBotKnowledgeInsert = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ variables }: MutationFn) =>
      insertBotKnowledge(variables.bot_id, variables.data).then(
        (response) => response.data
      ),
    onSuccess: (item: BotKnowledge) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({
        queryKey: ["bots", item.bot, "knowledges"],
        exact: true,
        refetchType: "active",
      });
    },
  });
};
