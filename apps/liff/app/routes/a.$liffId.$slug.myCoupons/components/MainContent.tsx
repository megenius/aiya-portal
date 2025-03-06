import React, { useState } from "react";
import VoucherCard from "./VoucherCard";
import { Voucher } from "~/types/app";
import RedeemModal from "./RedeemModal";

interface MainContentProps {
  vouchers: Voucher[];
  language: string;
  primaryColor: string;
}

const MainContent: React.FC<MainContentProps> = ({
  vouchers,
  language,
  primaryColor,
}) => {
  const [voucher, setVoucher] = useState<Voucher | null>(null);

  return (
    <>
      <main className="h-full bg-gray-50 p-4 space-y-2">
        {vouchers.map((voucher) => (
          <VoucherCard
            key={voucher.id}
            voucher={voucher}
            onClick={() => setVoucher(voucher)}
            language={language}
          />
        ))}
      </main>
      {voucher && (
        <RedeemModal
          voucher={voucher}
          language={language}
          primaryColor={primaryColor}
          onClose={() => setVoucher(null)}
        />
      )}
    </>
  );
};

export default MainContent;
