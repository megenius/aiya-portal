import { useQuery } from "@tanstack/react-query";
import { useAppSelector } from "~/store";
import api from "~/services/api";

interface QuickStatsData {
  quickStats: {
    total: number;
    active: number;
    totalCollections: number;
    todayCollections: number;
  };
  isQuick: boolean;
}

const fetchVoucherDashboardQuick = (liffPageId: string) =>
  api.get<QuickStatsData>(`/vouchers/dashboard/quick?liff_page_id=${liffPageId}`);

export const useVoucherDashboardQuick = (liffPageId: string) => {
  return useQuery({
    queryKey: ["voucher-dashboard-quick", liffPageId],
    queryFn: () => fetchVoucherDashboardQuick(liffPageId).then((res) => res.data),
    enabled: useAppSelector((state) => state.auth.isAuthenticated) && !!liffPageId,
    staleTime: 30 * 1000, // 30 seconds
    refetchOnWindowFocus: false,
  });
};