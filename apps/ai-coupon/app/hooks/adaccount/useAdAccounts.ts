// hooks/useAds.ts
import { useQuery } from "@tanstack/react-query";
import { fetchAdAccounts } from "~/services/workspaces";
import { useAppSelector } from "~/store";

interface QueryProps {
  variables: Variables;
}

interface Variables {
  workspaceId: string;
}

export const useAdAccounts = ({
  variables: { workspaceId },
}: QueryProps) => {
  return useQuery({
    queryKey: ["workspaces", workspaceId, "ad-accounts"],
    queryFn: () => fetchAdAccounts(workspaceId).then((res) => res.data),
    enabled: useAppSelector((state) => state.auth.isAuthenticated),
  });
};
