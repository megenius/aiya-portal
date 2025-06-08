// hooks/useBots.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ExtractChatbotConfigRequest, ExtractChatbotConfigResponse } from "~/@types/app";
import { extractChatbotConfig } from "~/services/bots";

interface MutationFn {
  variables: ExtractChatbotConfigRequest;
}

export const useBotExtractChatbotConfig = () => {
  const queryClient = useQueryClient();
  return useMutation({
    // mutationKey: ["bot:insert"],
    mutationFn: ({variables}: MutationFn) =>
      extractChatbotConfig(variables).then((response) => response.data),
    // onSuccess: (res: ExtractChatbotConfigResponse) => {
    //   queryClient.invalidateQueries({
    //     queryKey: ["bots", res.bot, "muted-users"],
    //     exact: true,
    //     refetchType: "active",
    //   });
    // },
  });
};
