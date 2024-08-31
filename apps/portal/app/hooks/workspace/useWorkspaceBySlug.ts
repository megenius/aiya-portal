// hooks/useWorkspaceBySlug.ts
import { useQuery } from "@tanstack/react-query";
import { useAppSelector } from "~/store";
import { fetchWorkspaceBySlug } from "~/services/workspaces";

export const useWorkspaceBySlug = ({ slug }) => {
  return useQuery({
    queryKey: ["workspaces", "slug", slug],
    queryFn: () => fetchWorkspaceBySlug(slug),
    enabled: useAppSelector((state) => state.auth.isAuthenticated),
  });
};
