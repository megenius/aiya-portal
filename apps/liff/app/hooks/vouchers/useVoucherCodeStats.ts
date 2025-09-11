import { useQuery } from "@tanstack/react-query";
import { fetchVoucherCodeStats } from "~/services/vouchers";  
import { useAppSelector } from "~/store";
import type { VoucherStats } from "~/types/app";

interface UseVoucherCodeStatsProps {
  voucherId: string;
  enabled?: boolean;
}

export function useVoucherCodeStats({ voucherId, enabled }: UseVoucherCodeStatsProps) {
  return useQuery<VoucherStats>({
    queryKey: ["vouchers","voucher-codes","stats", voucherId],
    queryFn: () => fetchVoucherCodeStats({ voucherId }).then((res) => res.data),
    enabled: useAppSelector((state) => state.auth.isAuthenticated) && enabled,
    staleTime: 0,
    gcTime: 0,
    refetchOnMount: "always",
    refetchOnWindowFocus: "always",
    refetchOnReconnect: "always",
  });
}
