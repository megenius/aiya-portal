import React, { useState } from "react";
import VoucherCard from "./VoucherCard";
import { VoucherUser } from "~/types/app";
import RedeemModal from "./RedeemModal";
import EmptyListMessage from "./EmptyListMessage";

interface MainContentProps {
  activeTab: string;
  vouchers: VoucherUser[];
  language: string;
  primaryColor: string;
}

const MainContent: React.FC<MainContentProps> = ({
  activeTab,
  vouchers,
  language,
  primaryColor,
}) => {
  const [voucherUser, setVoucherUser] = useState<VoucherUser | null>(null);
  const filteredVouchers = vouchers
  .filter((voucher) => {
    let timeLeft = 0;
    if (voucher.used_date) {
      const usedDateTime = new Date(voucher.used_date).getTime();
      const expiryTime = usedDateTime + 15 * 60 * 1000; // 15 minutes after used_date
      const now = new Date().getTime();
      timeLeft = Math.floor((expiryTime - now) / 1000);
    }
    const isExpired = voucher.expired_date && new Date(voucher.expired_date) < new Date();
    
    if (activeTab === "available") {
      return (
        !isExpired && voucher.code.code_status === "collected" ||
        (voucher.code.code_status === "used" && timeLeft > 0)
      );
    } else if (activeTab === "used") {
      return voucher.code.code_status === "used" && timeLeft <= 0;
    } else if (activeTab === "expired") {
      return (
        voucher.code.code_status === "collected" &&
        voucher.expired_date &&
        new Date(voucher.expired_date) < new Date()
      );
    }
    return [];
  }).sort((a, b) => {
    const dateA = a.used_date ? new Date(a.used_date).getTime() : Infinity;
    const dateB = b.used_date ? new Date(b.used_date).getTime() : Infinity;
    return dateA - dateB;
  });

  return (
    <>
      <main className="h-full bg-gray-50 p-4 space-y-2">
        {filteredVouchers.length > 0 ? (
          filteredVouchers.map((voucher) => (
            <VoucherCard
              key={voucher.id}
              voucherUser={voucher}
              onClick={() => setVoucherUser(voucher)}
              language={language}
            />
          ))
        ) : (
          <EmptyListMessage activeTab={activeTab} language={language} />
        )}
      </main>
      {voucherUser && (
        <RedeemModal
          voucherUser={voucherUser}
          language={language}
          primaryColor={primaryColor}
          onClose={() => setVoucherUser(null)}
        />
      )}
    </>
  );
};

export default MainContent;
