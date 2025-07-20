import { useQuery } from "@tanstack/react-query";
import { fetchVoucherCodeStats } from "~/services/vouchers";  
import { useAppSelector } from "~/store";

interface UseVoucherCodeStatsProps {
  voucherId: string;
  enabled?: boolean;
}

export function useVoucherCodeStats({ voucherId, enabled }: UseVoucherCodeStatsProps) {
  return useQuery({
    queryKey: ["vouchers","voucher-codes","stats", voucherId],
    queryFn: () => fetchVoucherCodeStats({ voucherId }).then((res) => res.data),
    enabled: useAppSelector((state) => state.auth.isAuthenticated) && enabled,
  });
}
