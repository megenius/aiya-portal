// hooks/useBotKnowledgeIntentQuestionInsertts.ts
import { useMutation } from "@tanstack/react-query";
import { insertBotKnowledgeIntentQuestion } from "~/services/bots";

interface MutationFn {
  variables: Variables;
}

interface Variables {
  bot_id: string;
  knowledge_id: string;
  intent_id: string;
  text: string;
}

export const useBotKnowledgeIntentQuestionInsert = () => {
  return useMutation({
    mutationFn: ({ variables }: MutationFn) =>
      insertBotKnowledgeIntentQuestion(variables).then(
        (response) => response.data
      ),
  });
};
