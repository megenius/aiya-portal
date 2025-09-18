import { useQuery } from "@tanstack/react-query";
import { fetchCampaign } from "~/services/campaigns";
import { useAppSelector } from "~/store";

interface UseCampaignProps {
  campaignId: string;
  enabled?: boolean;
}

export function useCampaign({ campaignId, enabled = true }: UseCampaignProps) {
  return useQuery({
    queryKey: ["campaigns", campaignId],
    queryFn: () => fetchCampaign(campaignId),
    select: (data) => data.data,
    enabled: useAppSelector((state) => state.auth.isAuthenticated) && !!campaignId && enabled,
  });
}