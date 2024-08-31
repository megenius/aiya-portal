// hooks/useBots.ts
import { useQuery } from "@tanstack/react-query";
import { useAppSelector } from "~/store";
import { fetchWorkspaceMembers } from "~/services/workspaces";

export const useBotMembers = ({ id }) => {
  return useQuery({
    queryKey: ["bots", id, "members"],
    queryFn: () => fetchWorkspaceMembers(id).then((res) => res.data),
    enabled: useAppSelector((state) => state.auth.isAuthenticated),
  });
};
