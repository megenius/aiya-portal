import { useQuery } from "@tanstack/react-query";
import { fetchCampaignMissions } from "~/services/campaigns";
import { useAppSelector } from "~/store";

interface UseCampaignMissionsProps {
  campaignId: string;
  enabled?: boolean;
}

export function useCampaignMissions({ campaignId, enabled = true }: UseCampaignMissionsProps) {
  return useQuery({
    queryKey: ["campaigns", campaignId, "missions"],
    queryFn: () => fetchCampaignMissions(campaignId),
    select: (data) => data.data,
    enabled: useAppSelector((state) => state.auth.isAuthenticated) && !!campaignId && enabled,
  });
}