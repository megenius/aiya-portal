import React, { useState } from "react";
import { useNavigate } from "@remix-run/react";
import Header from "./Header";
import NavigationTabs from "./NavigationTabs";
import VoucherCard from "./VoucherCard";
import { Voucher } from "~/types/app";
import RedeemModal from "./RedeemModal";

interface MainContentProps {
  vouchers: Voucher[];
  isThaiLanguage: boolean;
}

const MainContent: React.FC<MainContentProps> = ({
  vouchers,
  isThaiLanguage,
}) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("available");
  const [voucher, setVoucher] = useState<Voucher | null>(null);

  return (
    <>
        <NavigationTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="p-4">
          {vouchers.map((voucher) => (
            <VoucherCard
              key={voucher.id}
              voucher={voucher}
              onClick={() => setVoucher(voucher)}
              isThaiLanguage={isThaiLanguage}
            />
          ))}
        </main>
        {voucher && <RedeemModal voucher={voucher} isThaiLanguage={isThaiLanguage} isOpen={voucher != null} onClose={()=> setVoucher(null)}/>}
    </>
  );
};

export default MainContent;
