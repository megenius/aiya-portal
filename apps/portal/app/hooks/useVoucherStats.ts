import { useQuery } from "@tanstack/react-query";
import { useAppSelector } from "~/store";
import api from "~/services/api";

interface VoucherStatsData {
  voucher: {
    id: string;
    name: string;
    metadata: any;
    status: string;
    start_date: string;
    end_date: string;
    cover: string;
  };
  stats: {
    totalCodes: number;
    collectedCodes: number;
    usedCodes: number;
    collectionRate: number;
    redemptionRate: number;
    totalViews: number;
    uniqueViewers: number;
    todayViews: number;
    thisWeekViews: number;
    todayCollections: number;
    thisWeekCollections: number;
    avgTimeToRedemption: number;
    topCollectors: Array<{
      userId: string;
      display_name: string;
      picture_url: string | null;
      codes: Array<{
        code: string;
        status: 'available' | 'reserved' | 'collected' | 'pending_confirmation' | 'used' | 'expired' | 'unknown';
        collected_date: string | null;
        used_date: string | null;
      }>;
    }>;
  };
  error?: string;
}

const fetchVoucherStats = (voucherId: string) =>
  api.get<VoucherStatsData>(`/vouchers/${voucherId}/stats`);

export const useVoucherStats = (voucherId: string, enabled: boolean = true) => {
  return useQuery({
    queryKey: ["voucher-stats", voucherId],
    queryFn: () => fetchVoucherStats(voucherId).then((res) => res.data),
    enabled: useAppSelector((state) => state.auth.isAuthenticated) && !!voucherId && enabled,
    staleTime: 60 * 1000, // 1 minute
    refetchOnWindowFocus: false,
  });
};