// hooks/useAds.ts
import { useQuery } from "@tanstack/react-query";
import { fetchAdCampaignPerformance } from "~/services/ads";
import { useAppSelector } from "~/store";

interface QueryProps {
  variables: Variables;
}

interface Variables {
  id: string;
}

export const useAdCampaignPerformance = ({ variables: { id } }: QueryProps) => {
  return useQuery({
    queryKey: ["ad-accounts", id, "campaign-performance"],
    queryFn: () => fetchAdCampaignPerformance(id).then((res) => res.data),
    enabled: useAppSelector((state) => state.auth.isAuthenticated),
  });
};
