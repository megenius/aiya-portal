import { useQuery } from "@tanstack/react-query";
import { fetchVoucherUserStats } from "~/services/vouchers";

interface UseVoucherUserStatsProps {
  enabled?: boolean;
}

export function useVoucherUserStats({ enabled }: UseVoucherUserStatsProps) { 
  return useQuery({
    queryKey: ["vouchers", "voucher-users", "stats"],
    queryFn: () => fetchVoucherUserStats().then((res) => res.data),
    enabled: enabled,
  });
}
