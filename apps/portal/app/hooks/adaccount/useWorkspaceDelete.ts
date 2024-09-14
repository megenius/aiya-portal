// hooks/useBots.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Workspace } from "~/@types/app";
import { deleteWorkspace } from "~/services/workspaces";

export const useWorkspaceDelete = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["workspace-delete"],
    mutationFn: (id: string) =>
      deleteWorkspace(id).then((response) => response.data),
    onSuccess: (workspace: Workspace) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({
        queryKey: ["workspaces"],
        exact: true,
        refetchType: "active",
      });
    },
  });
};
