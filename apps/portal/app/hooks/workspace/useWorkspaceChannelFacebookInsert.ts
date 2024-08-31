// hooks/useWorkspaceChannelsInsert.ts
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { WorkspaceChannel } from "~/@types/app";
import { insertWorkspaceFacecbookChannels } from "~/services/workspaces";

interface MutationFn {
  variables: Variables;
}

interface Variables {
  workspaceId: string;
  items: Array<Partial<WorkspaceChannel>>;
  datasets?: Array<Partial<WorkspaceChannel>>;
}

export const useWorkspaceChannelFacebookInsert = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ variables: { workspaceId, items } }: MutationFn) =>
      insertWorkspaceFacecbookChannels(workspaceId, items).then(
        (response) => response.data
      ),
    onSuccess: (channels: WorkspaceChannel[]) => {
      if (channels.length) {
        // Invalidate and refetch
        queryClient.invalidateQueries({
          queryKey: ["workspaces", channels[0].team, "channels"],
          exact: true,
          refetchType: "active",
        });
      }
    },
  });
};
