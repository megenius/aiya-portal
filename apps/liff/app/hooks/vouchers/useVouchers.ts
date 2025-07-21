import { useQuery } from "@tanstack/react-query";
import { fetchVouchers } from "~/services/vouchers";
import { useAppSelector } from "~/store";

interface useVouchersProps {
  q: string;
  status?: "draft" | "published";
}

export function useVouchers(props?: useVouchersProps) {
  return useQuery({
    queryKey: ["vouchers", props],
    queryFn: () => fetchVouchers({q: props?.q,status: props?.status}).then((res) => res.data),
    enabled: useAppSelector((state) => state.auth.isAuthenticated)
  });
}
