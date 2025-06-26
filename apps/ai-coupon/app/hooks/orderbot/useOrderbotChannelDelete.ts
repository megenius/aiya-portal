// hooks/useBotChannelsInsert.ts
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Channel, ChannelBot } from "~/@types/app";
import { deleteBotChannel } from "~/services/orderbots";

interface MutationFn {
  variables: Variables;
}

interface Variables {
  orderbot_id: string;
  channel_id: string;
}

export const useOrderbotChannelDelete = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ variables }: MutationFn) =>
      deleteBotChannel(variables).then((response) => response.data),
    onSuccess: (item: ChannelBot) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({
        queryKey: ["orderbots", item.bot_id , "channels"],
        exact: true,
        refetchType: "active",
      });
    },
  });
};
