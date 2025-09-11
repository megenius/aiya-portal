import { useQuery } from "@tanstack/react-query";
import { fetchVoucherView, fetchVoucherViewV2 } from "~/services/vouchers";
import { useAppSelector } from "~/store";

interface useVoucherViewsProps {
  voucherId: string;
}

export function useVoucherView({ voucherId }: useVoucherViewsProps) {
  return useQuery({
    queryKey: ["voucher-views", voucherId],
    queryFn: () => fetchVoucherView({voucherId}).then((res) => res.data),
    enabled: useAppSelector((state) => state.auth.isAuthenticated),
  });
}

export function useVoucherViewV2({ voucherId }: useVoucherViewsProps) {
  return useQuery({
    queryKey: ["voucher-views-v2", voucherId],
    queryFn: () => fetchVoucherViewV2({ voucherId }).then((res) => res.data),
    enabled: useAppSelector((state) => state.auth.isAuthenticated),
  });
}
