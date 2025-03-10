import { useQuery } from "@tanstack/react-query";
import { fetchVoucherCodeStats } from "~/services/vouchers";
import { useLineLiff } from "../useLineLiff";

interface UseVoucherCodeStatsProps {
  voucherId: string;
}

export function useVoucherCodeStats({ voucherId }: UseVoucherCodeStatsProps) {
  const { data: liff } = useLineLiff();
  
  return useQuery({
    queryKey: ["vouchers","voucher-codes","stats", voucherId],
    queryFn: () => fetchVoucherCodeStats({ voucherId }).then((res) => res.data),
    enabled: liff?.isLoggedIn(),
  });
}
