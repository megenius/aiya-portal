// hooks/useAds.ts
import { useQuery } from "@tanstack/react-query";
import { fetchFacebookAdAccounts } from "~/services/workspaces";
import { useAppSelector } from "~/store";

interface QueryProps {
  variables: Variables;
}

interface Variables {
  workspaceId: string;
}

export const useFacebookAdAccounts = ({
  variables: { workspaceId },
}: QueryProps) => {
  return useQuery({
    queryKey: ["workspaces", workspaceId, "facebookAdAccounts"],
    queryFn: () => fetchFacebookAdAccounts(workspaceId).then((res) => res.data),
    enabled: useAppSelector((state) => state.auth.isAuthenticated),
  });
};
