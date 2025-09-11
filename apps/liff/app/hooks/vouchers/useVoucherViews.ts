import { useQuery } from "@tanstack/react-query";
import { fetchVoucherView, fetchVoucherViewV2 } from "~/services/vouchers";
import { useAppSelector } from "~/store";
import { VoucherViewV2 } from "~/types/app";

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
  return useQuery<VoucherViewV2>({
    queryKey: ["voucher-views-v2", voucherId],
    queryFn: () => fetchVoucherViewV2({ voucherId }).then((res) => res.data),
    enabled: useAppSelector((state) => state.auth.isAuthenticated),
    // Always refetch on mount but keep a tiny GC window to avoid excessive network when back-and-forth quickly
    staleTime: 0,
    gcTime: 30000,
    refetchOnMount: "always",
    refetchOnWindowFocus: "always",
    refetchOnReconnect: "always",
  });
}
