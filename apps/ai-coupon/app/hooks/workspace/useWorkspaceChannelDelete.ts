// hooks/useWorkspaceChannelDelete.ts
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteWorkspaceChannel } from "~/services/workspaces";

interface MutationFn {
  variables: Variables;
}

interface Variables {
  workspace_id: string;
  channel_id: string;
}

export const useWorkspaceChannelDelete = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ variables }: MutationFn) =>
      deleteWorkspaceChannel(variables.workspace_id, variables.channel_id).then(
        (res) => res.data
      ),
    onSuccess: ({ workspace_id }) => {
      queryClient.invalidateQueries({
        queryKey: ["workspaces", workspace_id, "channels"],
        exact: true,
        refetchType: "active",
      });
    },
  });
};
