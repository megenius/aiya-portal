// hooks/useAds.ts
import { useQuery } from "@tanstack/react-query";
import { fetchAdCampaignActivity } from "~/services/ads";
import { useAppSelector } from "~/store";

interface QueryProps {
  variables: Variables;
}

interface Variables {
  id: string;
}

export const useAdCampaignActivity = ({ variables: { id } }: QueryProps) => {
  return useQuery({
    queryKey: ["ad-accounts", id, "campaign-activity"],
    queryFn: () => fetchAdCampaignActivity(id).then((res) => res.data),
    enabled: useAppSelector((state) => state.auth.isAuthenticated),
  });
};
