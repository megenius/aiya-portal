import { useQuery } from "@tanstack/react-query";
import { fetchVoucherPageV2 } from "~/services/vouchers";
import { useAppSelector } from "~/store";
import type { VoucherPage } from "~/types/app";

export function useCouponPageV2(voucherId: string) {
  const enabled = useAppSelector((s) => s.auth.isAuthenticated);

  const {
    data,
    isLoading: isVoucherPageV2Loading,
    refetch,
  } = useQuery<VoucherPage>({
    queryKey: ["coupon-page-v2", voucherId],
    queryFn: () => fetchVoucherPageV2({ voucherId }),
    enabled,
    staleTime: 0,
    gcTime: 30000,
    refetchOnMount: "always",
    refetchOnWindowFocus: "always",
    refetchOnReconnect: "always",
  });

  const coupon = data?.voucher || undefined;
  const myCoupon = data?.myCoupon || undefined;
  const codeStats = data?.stats;
  const serverComputed = data?.serverComputed;

  const status = myCoupon
    ? (myCoupon.code.code_status ?? "collected")
    : coupon?.metadata.redemptionType === "limited_time"
      ? ("limited_time" as const)
      : codeStats?.available === 0
        ? ("fully_collected" as const)
        : (coupon?.metadata.redemptionType ?? "instant");

  const isExpired = myCoupon
    ? Boolean(
        myCoupon.expired_date && new Date(myCoupon.expired_date) < new Date(),
      )
    : false;

  const onBoundaryRefetch = () => {
    refetch();
  };

  const refetchCodeStats = () => {
    // keep API compatibility
    refetch();
  };

  return {
    coupon,
    myCoupon,
    codeStats,
    serverComputed,
    status,
    isExpired,
    isVoucherPageV2Loading,
    refetchCodeStats,
    onBoundaryRefetch,
  } as const;
}
