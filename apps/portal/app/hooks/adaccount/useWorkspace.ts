// hooks/useBots.ts
import { useQuery } from "@tanstack/react-query";
import { useAppSelector } from "~/store";
import { fetchWorkspaceBySlug } from "~/services/workspaces";

export const useWorkspace = ({ slug }) => {
  return useQuery({
    queryKey: ["workspaces", slug],
    queryFn: () => fetchWorkspaceBySlug(slug).then((res) => res.data),
    enabled: useAppSelector((state) => state.auth.isAuthenticated),
  });
};
