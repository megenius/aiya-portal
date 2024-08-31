// hooks/useBotChannelsInsert.ts
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Channel, ChannelBot } from "~/@types/app";
import { insertBotChannel } from "~/services/bots";
import { useAppSelector } from "~/store";

interface MutationFn {
  variables: Variables;
}

interface Variables {
  bot_id: string;
  channel_id: string;
}

export const useBotChannelInsert = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ variables }: MutationFn) =>
      insertBotChannel(variables).then((response) => response.data),
    onSuccess: (item: ChannelBot) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({
        queryKey: ["bots", item.bot_id , "channels"],
        exact: true,
        refetchType: "active",
      });
    },
  });
};
