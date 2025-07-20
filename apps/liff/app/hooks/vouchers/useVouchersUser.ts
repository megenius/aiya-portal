import { useQuery } from "@tanstack/react-query";
import { fetchVouchersUser } from "~/services/vouchers";
import { useAppSelector } from "~/store";

export function useVouchersUser() {
  return useQuery({
    queryKey: ["voucher-user"],
    queryFn: () => fetchVouchersUser().then((res) => res.data),
    enabled: useAppSelector((state) => state.auth.isAuthenticated)
  });
}
