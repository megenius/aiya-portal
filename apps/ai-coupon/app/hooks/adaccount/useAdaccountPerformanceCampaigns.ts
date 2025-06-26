// hooks/useAds.ts
import { useQuery } from "@tanstack/react-query";
import { fetchAdccountPerformanceCampaigns } from "~/services/ads";
import { useAppSelector } from "~/store";

interface QueryProps {
  variables: Variables;
}

interface Variables {
  id: string;
}

export const useAdaccountPerformanceCampaigns = ({
  variables: { id },
}: QueryProps) => {
  return useQuery({
    queryKey: ["ad-accounts", id, "performance", "campaigns"],
    queryFn: () =>
      fetchAdccountPerformanceCampaigns(id).then((res) => res.data),
    enabled: useAppSelector((state) => state.auth.isAuthenticated),
  });
};
