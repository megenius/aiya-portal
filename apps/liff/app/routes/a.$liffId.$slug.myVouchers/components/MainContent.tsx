import { useNavigate } from "@remix-run/react";
import React, { useState } from "react";
import { VoucherUser } from "~/types/app";
import { PageLiff } from "~/types/page";
import EmptyListMessage from "./EmptyListMessage";
import RedeemModalNow from "./RedeemModalNow";
import VoucherCard from "./VoucherCard";

interface MainContentProps {
  page: PageLiff;
  activeTab: string;
  vouchers: VoucherUser[];
  language: string;
  primaryColor: string;
}

const MainContent: React.FC<MainContentProps> = ({
  page,
  activeTab,
  vouchers,
  language,
  primaryColor,
}) => {
  const navigate = useNavigate();
  const [voucherUser, setVoucherUser] = useState<VoucherUser | null>(null);
  const filteredVouchers = vouchers
    .filter((voucher) => {
      // Check if voucher exists in page.vouchers or page.populars
      const isVoucherInPage = 
        (page.vouchers || []).some((v: any) => v.id === voucher.code.voucher.id) ||
        (page.populars || []).some((p: any) => p.id === voucher.code.voucher.id);
      
      if (!isVoucherInPage) return false;

      let timeLeft = 0;
      if (voucher.used_date) {
        const usedDateTime = new Date(voucher.used_date).getTime();
        const expiryTime = usedDateTime + 15 * 60 * 1000; // 15 minutes after used_date
        const now = new Date().getTime();
        timeLeft = Math.floor((expiryTime - now) / 1000);
      }
      const isExpired =
        voucher.expired_date && new Date(voucher.expired_date) < new Date();

      if (activeTab === "available") {
        return (
          (!isExpired && voucher.code.code_status === "collected") ||
          (voucher.code.code_status === "pending_confirmation" && timeLeft > 0)
        );
      } else if (activeTab === "used") {
        return voucher.code.code_status === "used";
      } else if (activeTab === "expired") {
        return (
          (voucher.code.code_status === "collected" &&
            voucher.expired_date &&
            new Date(voucher.expired_date) < new Date()) ||
          (voucher.code.code_status === "pending_confirmation" && timeLeft <= 0)
        );
      }
      return false;
    })
    .sort((a, b) => {
      const dateA = a.used_date ? new Date(a.used_date).getTime() : Infinity;
      const dateB = b.used_date ? new Date(b.used_date).getTime() : Infinity;
      return dateA - dateB;
    });

  const [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useState("redeem");



  return (
    <>
      <main className="h-full bg-gray-50 p-4 space-y-2">
        {filteredVouchers.length > 0 ? (
          filteredVouchers.map((voucher) => (
            <VoucherCard
              key={voucher.id}
              voucherUser={voucher}
              onClick={() => {
                const isExpired = voucher
                  ? voucher.expired_date && new Date(voucher.expired_date) < new Date()
                  : false;
                let timeLeft = 0;
                if (voucher?.used_date) {
                  const usedDateTime = new Date(voucher.used_date).getTime();
                  const expiryTime = usedDateTime + 15 * 60 * 1000; // 15 minutes after used_date
                  const now = new Date().getTime();
                  timeLeft = Math.floor((expiryTime - now) / 1000);
                }
                if (voucher.code.code_status === "pending_confirmation" && timeLeft >= 0 && !isExpired) {
                  setVoucherUser(voucher);
                setIsOpen(true);
                } else {
                  navigate(
                    `/a/${page.liff_id}/${page.slug}/voucher/${voucher.code.voucher.id}`
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
        <RedeemModalNow
          page={page}
          voucherUser={voucherUser}
          language={language}
          primaryColor={voucherUser.code.voucher.voucher_brand_id.primaryColor ?? ""}
          state={"redeem"}
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
