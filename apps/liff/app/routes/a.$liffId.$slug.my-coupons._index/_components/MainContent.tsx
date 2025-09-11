import { useNavigate } from "@remix-run/react";
import React, { useState } from "react";
import { VoucherUserComputed } from "~/types/app";
import { PageLiff } from "~/types/page";
import EmptyListMessage from "./EmptyListMessage";
import CouponCard from "./CouponCard";
import RedeemModal from "~/components/RedeemModal";

interface MainContentProps {
  page: PageLiff;
  activeTab: string;
  vouchers: VoucherUserComputed[];
  language: string;
}

const MainContent: React.FC<MainContentProps> = ({
  page,
  activeTab,
  vouchers,
  language,
}) => {
  const navigate = useNavigate();
  const [voucherUser, setVoucherUser] = useState<VoucherUserComputed | null>(
    null,
  );

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <main className="h-full space-y-2 bg-gray-50 p-4">
        {vouchers.length > 0 ? (
          vouchers.map((voucher) => (
            <CouponCard
              key={voucher.id}
              voucherUser={voucher}
              onClick={() => {
                const isExpired = Boolean(voucher.isExpired);
                const timeLeft = voucher.timeLeftSeconds ?? 0;
                if (
                  voucher.code.code_status === "pending_confirmation" &&
                  timeLeft >= 0 &&
                  !isExpired
                ) {
                  setVoucherUser(voucher);
                  setIsOpen(true);
                } else {
                  navigate(
                    `/a/${page.liff_id}/${page.slug}/coupon/${voucher.code.voucher.id}`,
                  );
                }
              }}
              language={language}
            />
          ))
        ) : (
          <EmptyListMessage activeTab={activeTab} language={language} />
        )}
      </main>
      {voucherUser && (
        <RedeemModal
          page={page}
          voucherUser={voucherUser}
          language={language}
          primaryColor={
            voucherUser.code.voucher.voucher_brand_id.primaryColor ?? ""
          }
          state={"redeem"}
          // showRedeemConfirmation={
          //   page.metadata.template === "promotion" ? false : true
          // }
          isOpen={isOpen}
          onClose={() => {
            setIsOpen(false);
            setVoucherUser(null);
          }}
        />
      )}
    </>
  );
};

export default MainContent;
