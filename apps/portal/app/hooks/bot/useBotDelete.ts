// hooks/useBots.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Workspace } from "~/@types/app";
import { deleteWorkspace } from "~/services/workspaces";

export const useBotDelete = () => {
  const queryClient = useQueryClient();
  return useMutation({
    // mutationKey: ["bot:delete"],
    mutationFn: (id: string) =>
      deleteWorkspace(id).then((response) => response.data),
    onSuccess: (workspace: Workspace) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({
        queryKey: ["workspaces", workspace.id, "bots"],
        exact: true,
        refetchType: "active",
      });
    },
  });
};
