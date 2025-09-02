import React, { useState } from "react";
import { VoucherUser } from "~/types/app";
import { PageLiff } from "~/types/page";
import EmptyListMessage from "./EmptyListMessage";
import VoucherCard from "./VoucherCard";
import { useResetMyVouchers } from "~/hooks/vouchers/useResetMyVouchers";
import ConfirmResetModal from "./ConfirmResetModal";

interface MainContentProps {
  page: PageLiff;
  vouchers: VoucherUser[];
  language: string;
}

const MainContent: React.FC<MainContentProps> = ({
  page,
  vouchers,
  language,
}) => {
  // reset confirmation modal state
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const filteredVouchers = vouchers
    .filter((voucher) => {
      // Check if voucher exists in page.vouchers or page.populars
      const isVoucherInPage =
        (page.vouchers || []).some(
          (v: any) => v.id === voucher.code.voucher.id
        ) ||
        (page.populars || []).some(
          (p: any) => p.id === voucher.code.voucher.id
        );

      if (!isVoucherInPage) return false;

      return true;
    })
    .sort((a, b) => {
      const dateA = a.used_date ? new Date(a.used_date).getTime() : Infinity;
      const dateB = b.used_date ? new Date(b.used_date).getTime() : Infinity;
      return dateA - dateB;
    });

  const resetCoupon = useResetMyVouchers();

  const resetLabel =
    language === "th" ? "รีเซ็ตคูปองของฉัน" : "Reset My Coupons";
  const openConfirm = () => setIsConfirmOpen(true);
  const closeConfirm = () => setIsConfirmOpen(false);
  const confirmReset = async () => {
    try {
      await resetCoupon.mutateAsync();
    } catch (e) {
      console.error(e);
    } finally {
      closeConfirm();
    }
  };

  return (
    <>
      <div className="h-full bg-gray-50 p-4 space-y-2">
        {filteredVouchers.length > 0 ? (
          filteredVouchers.map((voucher) => (
            <VoucherCard
              key={voucher.id}
              voucherUser={voucher}
              onClick={() => {}}
              language={language}
            />
          ))
        ) : (
          <EmptyListMessage language={language} />
        )}

        <div className="flex justify-center pb-2">
          <button
            type="button"
            onClick={openConfirm}
            disabled={resetCoupon.isPending}
            className="px-4 py-2 rounded-md text-white bg-red-500 disabled:opacity-60"
          >
            {resetCoupon.isPending
              ? language === "th"
                ? "กำลังรีเซ็ต..."
                : "Resetting..."
              : resetLabel}
          </button>
        </div>
      </div>
      <ConfirmResetModal
        isOpen={isConfirmOpen}
        language={language}
        isLoading={resetCoupon.isPending}
        onConfirm={confirmReset}
        onClose={closeConfirm}
      />
    </>
  );
};

export default MainContent;
