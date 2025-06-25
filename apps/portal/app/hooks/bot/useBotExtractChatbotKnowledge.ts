// hooks/useBots.ts
import { useMutation } from "@tanstack/react-query";
import { ChatbotKnowledgeExtractionRequest } from "~/@types/app";
import { extractChatbotKnowledge } from "~/services/bots";

interface MutationFn {
  variables: ChatbotKnowledgeExtractionRequest;
}

export const useBotExtractChatbotKnowledge = () => {
  return useMutation({
    mutationFn: ({variables}: MutationFn) =>
      extractChatbotKnowledge(variables).then((response) => response.data),
    // onSuccess: (res: ExtractChatbotConfigResponse) => {
    //   queryClient.invalidateQueries({
    //     queryKey: ["bots", res.bot, "muted-users"],
    //     exact: true,
    //     refetchType: "active",
    //   });
    // },
  });
};
