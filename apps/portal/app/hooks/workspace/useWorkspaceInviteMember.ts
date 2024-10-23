// hooks/useBots.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Workspace } from "~/@types/app";
import { inviteWorkspaceMembers } from "~/services/workspaces";

interface MutationFn {
  workspaceId: string;
  emails: string[];
  role: string;
}

export const useWorkspaceInviteMember = () => {
  // const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["workspace-add"],
    mutationFn: (data: MutationFn) =>
      inviteWorkspaceMembers(data.workspaceId, data.emails, data.role).then(
        (response) => response.data
      ),
    // onSuccess: (workspace: Workspace) => {
    //   // Invalidate and refetch
    //   queryClient.invalidateQueries({
    //     queryKey: ["workspaces"],
    //     exact: true,
    //     refetchType: "active",
    //   });
    // },
  });
};
