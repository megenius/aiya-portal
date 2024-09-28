import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Bot, BotUpdate, Workspace } from "~/@types/app";
import { updateBot } from "~/services/orderbots";

interface MutationFn {
  variables: Variables;
}

interface Variables {
  key: string;
  data: BotUpdate;
}

export function useOrderbotUpdate() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ variables: { key, data } }: MutationFn) =>
      updateBot(key, data).then((response) => response.data),
    onSuccess: (data: Bot) => {
      queryClient.invalidateQueries({
        queryKey: ["workspaces", data.team, "orderbots"],
        exact: true,
        refetchType: "active",
      });

      // Invalidate and refetch
      queryClient.invalidateQueries({
        queryKey: ["orderbots", data.id],
        exact: true,
        refetchType: "active",
      });

      queryClient.invalidateQueries({
        queryKey: ["orderbots", data.id, "channels"],
        exact: true,
        refetchType: "active",
      });
    },
  });
}
