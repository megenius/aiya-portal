import { useQuery } from "@tanstack/react-query";
import { fetchVoucher } from "~/services/vouchers";
import { useLineLiff } from "../useLineLiff";

interface useVouchersProps {}

export function useVoucher(voucherId: string) {
  const { data: liff } = useLineLiff();
  return useQuery({
    queryKey: ["vouchers", voucherId],
    queryFn: () => fetchVoucher({voucherId:voucherId}),
    enabled: liff?.isLoggedIn(),
  });
}
