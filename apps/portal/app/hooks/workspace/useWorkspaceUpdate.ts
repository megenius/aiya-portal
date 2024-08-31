import { useMutation, useQueryClient } from "@tanstack/react-query";
import { User, Workspace } from "~/@types/app";
import { updateWorkspace } from "~/services/workspaces";

interface MutationFn {
  variables: Variables;
}

interface Variables {
  key: string;
  data: Partial<Workspace>;
}

export function useWorkspaceUpdate() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ variables: { key, data } }: MutationFn) =>
      updateWorkspace(key, data).then((response) => response.data),
    onSuccess: (data: Workspace) => {
      queryClient.invalidateQueries({
        queryKey: ["workspaces"],
        exact: true,
        refetchType: "active",
      });

      // Invalidate and refetch
      queryClient.invalidateQueries({
        queryKey: ["workspaces", 'slug', data.slug],
        exact: true,
        refetchType: "active",
      });
    },
  });
}
