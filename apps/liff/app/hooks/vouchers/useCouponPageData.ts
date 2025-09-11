import { useVoucher } from "~/hooks/vouchers/useVoucher";
import { useVouchersUser } from "~/hooks/vouchers/useVouchersUser";
import { useVoucherCodeStats } from "~/hooks/vouchers/useVoucherCodeStats";
import { useVoucherViewV2 } from "~/hooks/vouchers/useVoucherViews";

export function useCouponPageData(voucherId: string) {
  const { data: coupon, isLoading: isCouponLoading } = useVoucher({
    voucherId,
  });

  const { data: myCoupons, isLoading: isMyCouponsLoading } = useVouchersUser();

  const {
    data: codeStats,
    isLoading: isCodeStatsLoading,
    refetch: refetchCodeStats,
  } = useVoucherCodeStats({ voucherId });

  const {
    data: voucherViewV2,
    isLoading: isVoucherViewV2Loading,
    refetch: refetchVoucherViewV2,
  } = useVoucherViewV2({ voucherId });

  const myCoupon = myCoupons?.find((v) => v.code.voucher.id === coupon?.id);

  const status = myCoupon
    ? (myCoupon.code.code_status ?? "collected")
    : codeStats?.available === 0
    ? "fully_collected"
    : (coupon?.metadata.redemptionType ?? "instant");

  const isExpired = myCoupon
    ? Boolean(
        myCoupon.expired_date && new Date(myCoupon.expired_date) < new Date(),
      )
    : false;

  const onBoundaryRefetch = () => {
    refetchVoucherViewV2();
    refetchCodeStats();
  };

  return {
    // primary data
    coupon,
    isCouponLoading,
    myCoupons,
    isMyCouponsLoading,
    codeStats,
    isCodeStatsLoading,
    refetchCodeStats,
    voucherViewV2,
    isVoucherViewV2Loading,
    refetchVoucherViewV2,

    // derived
    myCoupon,
    status,
    isExpired,

    // helpers
    onBoundaryRefetch,
  } as const;
}
