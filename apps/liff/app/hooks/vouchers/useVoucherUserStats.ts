import { useQuery } from "@tanstack/react-query";
import { fetchVoucherUserStats } from "~/services/vouchers";
import { useLineLiff } from "../useLineLiff";

interface UseVoucherUserStatsProps {
  userId: string;
}

export function useVoucherUserStats({ userId }: UseVoucherUserStatsProps) {
  const { data: liff } = useLineLiff();
  
  return useQuery({
    queryKey: ["vouchers", "voucher-users", "stats", userId],
    queryFn: () => fetchVoucherUserStats({ userId }).then((res) => res.data),
    enabled: liff?.isLoggedIn(),
  });
}
