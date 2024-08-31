// hooks/useWorkspaceChannelsInsert.ts
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Channel, WorkspaceChannel } from "~/@types/app";
import { insertWorkspaceLineChannel } from "~/services/workspaces";
import { useAppSelector } from "~/store";

interface MutationFn {
  variables: Variables;
}

interface Variables {
  workspaceId: string;
  data: Partial<Channel>;
}

export const useWorkspaceChannelLineInsert = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ variables: { workspaceId, data } }: MutationFn) =>
      insertWorkspaceLineChannel(workspaceId, data).then(
        (response) => response.data
      ),
    onSuccess: (channel: WorkspaceChannel) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({
        queryKey: ["workspaces", channel.team, "channels"],
        exact: true,
        refetchType: "active",
      });
    },
  });
};
