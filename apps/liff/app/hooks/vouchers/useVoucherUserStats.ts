import { useQuery } from "@tanstack/react-query";
import { fetchVoucherUserStats } from "~/services/vouchers";

interface UseVoucherUserStatsProps {
  userId: string;
  enabled?: boolean;
}

export function useVoucherUserStats({ userId, enabled }: UseVoucherUserStatsProps) { 
  return useQuery({
    queryKey: ["vouchers", "voucher-users", "stats", userId],
    queryFn: () => fetchVoucherUserStats({  userId }).then((res) => res.data),
    enabled: !!userId && enabled,
  });
}
