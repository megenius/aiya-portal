import { useQuery } from "@tanstack/react-query";
import { useAppSelector } from "~/store";
import { fetchCampaignRanking, CampaignRankingData } from "~/services/campaigns";

interface UseCampaignRankingProps {
  campaignId: string;
  limit?: number;
  offset?: number;
  enabled?: boolean;
}

export function useCampaignRanking({
  campaignId,
  limit = 50,
  offset = 0,
  enabled = true,
}: UseCampaignRankingProps) {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  return useQuery({
    queryKey: ["campaigns", campaignId, "ranking", limit, offset],
    queryFn: () => fetchCampaignRanking(campaignId, { limit, offset }),
    select: (data): CampaignRankingData => data.data,
    enabled: isAuthenticated && !!campaignId && enabled,
    staleTime: 60_000,
  });
}
