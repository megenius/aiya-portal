import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Bot, BotKnowledgeUpdate, BotUpdate, Workspace } from "~/@types/app";
import { updateBotKnowledge } from "~/services/bots";
import { updateWorkspace } from "~/services/workspaces";

interface MutationFn {
  variables: Variables;
}

interface Variables {
  key: string;
  data: Partial<BotKnowledgeUpdate>;
}

export function useBotKnowlegdeUpdate() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ variables: { key, data } }: MutationFn) =>
      updateBotKnowledge(key, data).then((response) => response.data),
    onSuccess: (data: { id: string, bot: string }) => {
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
