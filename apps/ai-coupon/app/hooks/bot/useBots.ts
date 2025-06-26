// hooks/useBots.ts
import { useQuery } from "@tanstack/react-query";
import { useAppSelector } from "~/store";
import { fetchWorkspaceBots } from "~/services/workspaces";

interface QueryProps {
  variables: Variables;
}

interface Variables {
  workspaceId: string;
}

export const useBots = ({ variables: { workspaceId } }: QueryProps) => {
  return useQuery({
    queryKey: ["workspaces", workspaceId, "bots"],
    queryFn: () => fetchWorkspaceBots(workspaceId).then((res) => res.data),
    enabled: useAppSelector((state) => state.auth.isAuthenticated),
  });
};
