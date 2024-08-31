import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Bot, BotUpdate, Workspace } from "~/@types/app";
import { updateBot } from "~/services/bots";
import { updateWorkspace } from "~/services/workspaces";

interface MutationFn {
  variables: Variables;
}

interface Variables {
  key: string;
  data: BotUpdate;
}

export function useBotUpdate() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ variables: { key, data } }: MutationFn) =>
      updateBot(key, data).then((response) => response.data),
    onSuccess: (data: Bot) => {
      queryClient.invalidateQueries({
        queryKey: ["workspaces", data.team, "bots"],
        exact: true,
        refetchType: "active",
      });

      // Invalidate and refetch
      queryClient.invalidateQueries({
        queryKey: ["bots", data.id],
        exact: true,
        refetchType: "active",
      });

      queryClient.invalidateQueries({
        queryKey: ["bots", data.id, "channels"],
        exact: true,
        refetchType: "active",
      });
    },
  });
}
