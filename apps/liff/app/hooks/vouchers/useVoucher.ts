import { useQuery } from "@tanstack/react-query";
import { fetchVoucher } from "~/services/vouchers";
import { useAppSelector } from "~/store";

interface useVouchersProps {
  voucherId: string;
}

export function useVoucher({ voucherId }: useVouchersProps) {
  return useQuery({
    queryKey: ["vouchers", voucherId],
    queryFn: () => fetchVoucher({voucherId:voucherId}),
    enabled: useAppSelector((state) => state.auth.isAuthenticated),
  });
}
