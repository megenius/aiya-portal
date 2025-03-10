import React, { useState } from "react";
import VoucherCard from "./VoucherCard";
import { Voucher, VoucherUser } from "~/types/app";
import RedeemModal from "./RedeemModal";

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
  const filteredVouchers = vouchers.filter((voucher) => {
    if (activeTab === "available") {
      return voucher.code.code_status === "collected";
    } else if (activeTab === "used") {
      return voucher.code.code_status === "used";
    }
    return false;
  });

  return (
    <>
      <main className="h-full bg-gray-50 p-4 space-y-2">
        {filteredVouchers.map((voucher) => (
          <VoucherCard
            key={voucher.id}
            voucherUser={voucher}
            onClick={() => setVoucherUser(voucher)}
            language={language}
          />
        ))}
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
