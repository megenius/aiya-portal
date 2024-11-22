// hooks/useAds.ts
import { useQuery } from "@tanstack/react-query";
import { fetchAdccountPerformanceCampaignsTop10 } from "~/services/ads";
import { useAppSelector } from "~/store";

interface QueryProps {
  variables: Variables;
}

interface Variables {
  id: string;
}

export const useAdaccountPerformanceCampaignsTop10 = ({
  variables: { id },
}: QueryProps) => {
  return useQuery({
    queryKey: ["ad-accounts", id, "performance", "campaigns", "top10"],
    queryFn: () =>
      fetchAdccountPerformanceCampaignsTop10(id).then((res) => res.data),
    enabled: useAppSelector((state) => state.auth.isAuthenticated),
  });
};
