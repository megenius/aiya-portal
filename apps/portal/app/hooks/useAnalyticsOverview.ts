import { useQuery } from "@tanstack/react-query";
import api from "~/services/api";
import { useAppSelector } from "~/store";

export interface AnalyticsOverviewResponse {
  kpi: {
    totalUsers: number;
    activeProviders: number;
    activeCampaigns: number;
    claimsToday: number;
    eventsLastHour: number;
  };
  generatedAt: string;
}

const fetchAnalyticsOverview = (liffPageId?: string) =>
  api.get<AnalyticsOverviewResponse>(
    `/vouchers/analytics/overview${liffPageId ? `?liff_page_id=${encodeURIComponent(liffPageId)}` : ""}`
  );

export const useAnalyticsOverview = (liffPageId?: string) => {
  const enabled = useAppSelector((s) => s.auth.isAuthenticated);
  return useQuery({
    queryKey: ["analytics-overview", liffPageId || null],
    queryFn: () => fetchAnalyticsOverview(liffPageId).then((r) => r.data),
    enabled,
  });
};
