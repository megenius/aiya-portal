// hooks/useBots.ts
import { useQuery } from "@tanstack/react-query";
import { useAppSelector } from "~/store";
import { fetchWorkspace } from "~/services/workspaces";

export const useWorkspace = ({ id }) => {
  return useQuery({
    queryKey: ["workspaces", id],
    queryFn: () => fetchWorkspace(id),
    enabled: useAppSelector((state) => state.auth.isAuthenticated),
  });
};
