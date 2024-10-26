// hooks/useBots.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Workspace } from "~/@types/app";
import { removeWorkspaceMembers } from "~/services/workspaces";

interface MutationFn {
  workspaceId: string;
  memberId: string;
}

export const useWorkspaceRemoveMember = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["workspace-remove"],
    mutationFn: (data: MutationFn) =>
      removeWorkspaceMembers(data.workspaceId, data.memberId).then(
        (response) => response.data
      ),
    onSuccess: ({ workspaceId }) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({
        queryKey: ["workspaces", workspaceId, "members"],
        exact: true,
        refetchType: "active",
      });
    },
  });
};
