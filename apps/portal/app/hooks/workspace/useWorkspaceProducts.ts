// hooks/useProducts.ts
import { useQuery } from "@tanstack/react-query";
import { useAppSelector } from "~/store";
import { fetchWorkspaceProducts } from "~/services/workspaces";

interface QueryProps {
  variables: Variables;
}

interface Variables {
  workspaceId: string;
}

export const useWorkspaceProducts = ({
  variables: { workspaceId },
}: QueryProps) => {
  return useQuery({
    queryKey: ["workspaces", workspaceId, "products"],
    queryFn: () => fetchWorkspaceProducts(workspaceId).then((res) => res.data),
    enabled: useAppSelector((state) => state.auth.isAuthenticated),
  });
};
