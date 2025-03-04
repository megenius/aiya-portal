import { useQuery } from "@tanstack/react-query";
import { fetchVoucher } from "~/services/vouchers";

interface useVouchersProps {}

export function useVoucher(voucherId: string) {
  return useQuery({
    queryKey: ["vouchers", voucherId],
    queryFn: () => fetchVoucher({voucherId:voucherId}).then((res) => res.data),
    // enabled: ,
  });
}
