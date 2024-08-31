// hooks/useBots.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Workspace } from "~/@types/app";
import { insertWorkspace } from "~/services/workspaces";

export const useWorkspaceInsert = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["workspace-add"],
    mutationFn: (data: Workspace) =>
      insertWorkspace(data).then((response) => response.data),
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
