// hooks/useBots.ts
import { useQuery } from "@tanstack/react-query";
import { useAppSelector } from "~/store";
import { fetchWorkspaceMembers } from "~/services/workspaces";

export const useWorkspaceMembers = ({ id }) => {
  return useQuery({
    queryKey: ["workspaces", id, "members"],
    queryFn: () => fetchWorkspaceMembers(id).then((res) => res.data),
    enabled: useAppSelector((state) => state.auth.isAuthenticated),
  });
};
