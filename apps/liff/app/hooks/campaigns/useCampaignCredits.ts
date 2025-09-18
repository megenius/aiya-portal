import { useQuery } from "@tanstack/react-query";
import { fetchCampaignCredits } from "~/services/campaigns";
import { useAppSelector } from "~/store";

interface UseCampaignCreditsProps {
  campaignId: string;
  enabled?: boolean;
}

export function useCampaignCredits({ campaignId, enabled = true }: UseCampaignCreditsProps) {
  return useQuery({
    queryKey: ["campaigns", campaignId, "credits"],
    queryFn: () => fetchCampaignCredits(campaignId),
    select: (data) => data.data,
    enabled: useAppSelector((state) => state.auth.isAuthenticated) && !!campaignId && enabled,
  });
}