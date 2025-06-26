// hooks/useBots.ts
import { useQuery } from "@tanstack/react-query";
import { useAppSelector } from "~/store";
import { fetchWorkspaceChannels } from "~/services/workspaces";

export const useWorkspaceChannels = ({ id }) => {
  return useQuery({
    queryKey: ["workspaces", id, "channels"],
    queryFn: () => fetchWorkspaceChannels(id).then((res) => res.data),
    enabled: useAppSelector((state) => state.auth.isAuthenticated),
  });
};
