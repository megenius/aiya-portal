import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  Bot,
  BotIntent,
  BotKnowledgeUpdate,
  BotUpdate,
  Workspace,
} from "~/@types/app";
import { importBotKnowledgeIntents, updateBotKnowledge } from "~/services/bots";
import { updateWorkspace } from "~/services/workspaces";

interface MutationFn {
  variables: Variables;
}

interface Variables {
  knowledge_id: string;
  intents: Array<BotIntent>;
}

export function useBotKnowlegdeImport() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ variables }: MutationFn) =>
      importBotKnowledgeIntents(variables).then((response) => response.data),
    onSuccess: (data: { id: string; bot: string }) => {
      queryClient.invalidateQueries({
        queryKey: ["bots", "knowledges", data.id],
        exact: true,
        refetchType: "active",
      });

      queryClient.invalidateQueries({
        queryKey: ["bots", data.bot, "knowledges"],
        exact: true,
        refetchType: "active",
      });
    },
  });
}
