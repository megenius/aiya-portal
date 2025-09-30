import { useQuery } from "@tanstack/react-query";
import api from "~/services/api";
import { useAppSelector } from "~/store";

export interface TrendsSeries { date: string; count: number }
export interface AnalyticsTrendsResponse {
  range: { days: number; startDate: string; endDate: string };
  usersNewDaily: TrendsSeries[];
  claimsDaily: TrendsSeries[];
  eventsDaily: TrendsSeries[];
  // present when days === 1
  usersNewHourly?: TrendsSeries[];
  claimsHourly?: TrendsSeries[];
  eventsHourly?: TrendsSeries[];
}

const fetchAnalyticsTrends = (days = 30, liffPageId?: string) =>
  api.get<AnalyticsTrendsResponse>(
    `/vouchers/analytics/trends?days=${days}${liffPageId ? `&liff_page_id=${encodeURIComponent(liffPageId)}` : ""}`
  );

export const useAnalyticsTrends = (days = 30, liffPageId?: string) => {
  const enabled = useAppSelector((s) => s.auth.isAuthenticated);
  return useQuery({
    queryKey: ["analytics-trends", days, liffPageId || null],
    queryFn: () => fetchAnalyticsTrends(days, liffPageId).then((r) => r.data),
    enabled,
  });
};
