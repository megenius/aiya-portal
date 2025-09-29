import { useQuery } from "@tanstack/react-query";
import { useAppSelector } from "~/store";
import api from "~/services/api";

type ComparisonKeys =
  | "totalCollections"
  | "uniqueCollectors"
  | "totalViews"
  | "uniqueViewers"
  | "collectionRate"
  | "used"
  | "redemptionRate"
  | "viewToCollectionRate";

interface VoucherDashboardData {
  stats: {
    total: number;
    active: number;
    used: number;
    redemptionRate: number;
    totalCollections: number;
    uniqueCollectors: number;
    collectionRate: number;
    totalViews: number;
    uniqueViewers: number;
    viewToCollectionRate: number;
    todayCollections: number;
    thisWeekCollections: number;
    avgTimeToRedemption: number;
  };
  comparisons?: Partial<Record<ComparisonKeys, { current: number; prev: number }>>;
  period?: { days: number; startDate: string; endDate: string };
  allTime: {
    collections: number;
    redemptions: number;
    clicks: number;
  };
  recentVouchers: unknown[];
  error?: string;
}

const fetchVoucherDashboard = (liffPageId: string, days: number) =>
  api.get<VoucherDashboardData>(`/vouchers/dashboard?liff_page_id=${liffPageId}&days=${days}`);
export const useVoucherDashboard = (liffPageId: string, days: number) => {
  return useQuery({
    queryKey: ["voucher-dashboard", liffPageId, days],
    queryFn: () => fetchVoucherDashboard(liffPageId, days).then((res) => res.data),
    enabled: useAppSelector((state) => state.auth.isAuthenticated) && !!liffPageId,
  });
};