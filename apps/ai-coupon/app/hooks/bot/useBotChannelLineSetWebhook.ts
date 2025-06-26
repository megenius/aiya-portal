// hooks/useBotChannelsInsert.ts
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Channel, ChannelBot } from "~/@types/app";
import { setLineWebhook } from "~/services/line";

interface MutationFn {
  variables: Variables;
}

interface Variables {
  bot_id: string;
  channel_id: string;
  endpoint: string;
}

export const useBotChannelLineSetWebhook = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ variables }: MutationFn) =>
      setLineWebhook(variables).then((response) => response.data),
    onSuccess: (item: ChannelBot) => {},
  });
};
