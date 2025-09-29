import { useQuery } from "@tanstack/react-query";
import api from "~/services/api";
import { useAppSelector } from "~/store";

export interface LeaderboardItem { id: string; name: string; claims?: number; clicks?: number; logo?: string; cover?: string }
export interface AnalyticsLeaderboardsResponse {
  period: { days: number; startDate: string; endDate: string };
  topBrandsByClaims: { id: string; name: string; claims: number; logo?: string }[];
  topVouchersByClicks: { voucherId: string; name: string; clicks: number; cover?: string }[];
  categoryShareByClaims: { id: string; name: string; claims: number }[];
  topUsersByCollected?: { id: string; name: string; avatar?: string; collected: number }[];
  topUsersByUsed?: { id: string; name: string; avatar?: string; used: number }[];
}

const fetchLeaderboards = (days = 30, limit = 5, liffPageId?: string) =>
  api.get<AnalyticsLeaderboardsResponse>(
    `/vouchers/analytics/leaderboards?days=${days}&limit=${limit}${liffPageId ? `&liff_page_id=${encodeURIComponent(liffPageId)}` : ""}`
  );

export const useAnalyticsLeaderboards = (days = 30, limit = 5, liffPageId?: string) => {
  const enabled = useAppSelector((s) => s.auth.isAuthenticated);
  return useQuery({
    queryKey: ["analytics-leaderboards", days, limit, liffPageId || null],
    queryFn: () => fetchLeaderboards(days, limit, liffPageId).then((r) => r.data),
    enabled,
  });
};
