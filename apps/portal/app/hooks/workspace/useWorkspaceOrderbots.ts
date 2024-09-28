// hooks/useOrders.ts
import { useQuery } from "@tanstack/react-query";
import { useAppSelector } from "~/store";
import { fetchWorkspaceOrderbots } from "~/services/workspaces";

interface QueryProps {
  variables: Variables;
}

interface Variables {
  workspaceId: string;
}

export const useWorkspaceOrderbots = ({
  variables: { workspaceId },
}: QueryProps) => {
  return useQuery({
    queryKey: ["workspaces", workspaceId, "orderbots"],
    queryFn: () => fetchWorkspaceOrderbots(workspaceId).then((res) => res.data),
    enabled: useAppSelector((state) => state.auth.isAuthenticated),
  });
};
