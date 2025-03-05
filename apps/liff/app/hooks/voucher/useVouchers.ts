import { useQuery } from "@tanstack/react-query";
import { fetchVouchers } from "~/services/vouchers";

interface useVouchersProps {

}

export function useVouchers() {
  return useQuery({
    queryKey: ["voucher"],
    queryFn: () => fetchVouchers(),
    // enabled: ,
  });
}
