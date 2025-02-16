import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BotInquiry } from "~/@types/app";
import { insertBotInquiry } from "~/services/bots";

interface MutationFn {
  variables: Variables;
}

interface Variables {
  botId: string;
  data: Partial<BotInquiry>;
}

export const useBotInquiryInsert = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ variables }: MutationFn) =>
      insertBotInquiry(variables.botId, variables.data).then(
        (response) => response.data
      ),
    onSuccess: (item: BotInquiry) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({
        queryKey: ["bots", item.bot, "inquiries"],
        exact: true,
        refetchType: "active",
      });
    },
  });
};
