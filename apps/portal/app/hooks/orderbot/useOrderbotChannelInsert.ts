// hooks/useBotChannelsInsert.ts
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Channel, ChannelBot } from "~/@types/app";
import { insertBotChannel } from "~/services/orderbots";
import { useAppSelector } from "~/store";

interface MutationFn {
  variables: Variables;
}

interface Variables {
  orderbot_id: string;
  channel_id: string;
}

export const useOrderbotChannelInsert = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ variables }: MutationFn) =>
      insertBotChannel(variables).then((response) => response.data),
    onSuccess: (item: ChannelBot) => {
      console.log("Channel inserted", item);
      

      // Invalidate and refetch
      queryClient.invalidateQueries({
        queryKey: ["orderbots", item.bot_id, "channels"],
        exact: true,
        refetchType: "active",
      });
    },
  });
};
