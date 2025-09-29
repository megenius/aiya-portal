import { useQuery } from "@tanstack/react-query";
import { useAppSelector } from "~/store";
import api from "~/services/api";

interface VoucherDashboardData {
  stats: {
    total: number;
    active: number;
    used: number;
    redemptionRate: number;
  };
  recentVouchers: any[];
  error?: string;
}

const fetchVoucherDashboard = (liffPageId: string) =>
  api.get<VoucherDashboardData>(`/vouchers/dashboard?liff_page_id=${liffPageId}`);

export const useVoucherDashboard = (liffPageId: string) => {
  return useQuery({
    queryKey: ["voucher-dashboard", liffPageId],
    queryFn: () => fetchVoucherDashboard(liffPageId).then((res) => res.data),
    enabled: useAppSelector((state) => state.auth.isAuthenticated) && !!liffPageId,
  });
};