// hooks/useBots.ts
import { useQuery } from "@tanstack/react-query";
import { useAppSelector } from "~/store";
import { fetchWorkspaces } from "~/services/workspaces";

export const useWorkspaces = () => {
  return useQuery({
    queryKey: ["workspaces"],
    queryFn: () => fetchWorkspaces().then((res) => res.data),
    enabled: useAppSelector((state) => state.auth.isAuthenticated),
  });
};
