import { useQuery } from "@tanstack/react-query";
import { fetchVoucherUserStats } from "~/services/vouchers";
import { useLineLiff } from "../useLineLiff";

interface UseVoucherUserStatsProps {
  userId: string;
  enabled?: boolean;
}

export function useVoucherUserStats({ userId, enabled }: UseVoucherUserStatsProps) {
  const { data: liff } = useLineLiff();
  
  return useQuery({
    queryKey: ["vouchers", "voucher-users", "stats", userId],
    queryFn: () => fetchVoucherUserStats({ userId }).then((res) => res.data),
    enabled: enabled && liff?.isLoggedIn() && !!userId,
  });
}
