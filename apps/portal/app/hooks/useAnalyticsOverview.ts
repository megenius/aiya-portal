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
    // Optional range-based KPIs (when days > 0)
    claimsInRange?: number;
    uniqueCollectorsInRange?: number;
    eventsInRange?: number;
  };
  period?: { days: number; startDate: string; endDate: string };
  generatedAt: string;
}

const fetchAnalyticsOverview = (liffPageId?: string, days?: number) => {
  const params = new URLSearchParams();
  if (liffPageId) params.set("liff_page_id", liffPageId);
  if (typeof days === "number") params.set("days", String(days));
  const qs = params.toString();
  return api.get<AnalyticsOverviewResponse>(
    `/vouchers/analytics/overview${qs ? `?${qs}` : ""}`
  );
};

export const useAnalyticsOverview = (liffPageId?: string, days?: number) => {
  const enabled = useAppSelector((s) => s.auth.isAuthenticated);
  return useQuery({
    queryKey: ["analytics-overview", liffPageId || null, days ?? null],
    queryFn: () => fetchAnalyticsOverview(liffPageId, days).then((r) => r.data),
    enabled,
  });
};
