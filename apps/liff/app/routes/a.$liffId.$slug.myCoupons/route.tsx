import { useVouchers } from "~/hooks/voucher/useVouchers";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Loading from "~/components/Loading";
import { useLiff } from "~/hooks/useLiff";
import { useOutletContext } from "@remix-run/react";
import { PageLiff } from "~/types/page";
import Tabs from "~/components/Tabs";
import { useState } from "react";
import VoucherCardShimmer from "./components/VoucherCardShimmer";

const Route = () => {
  const { page } = useOutletContext<{ page: PageLiff }>();
  const { language, isLoggedIn } = useLiff({ liffId: page.liff_id });
  const isThaiLanguage = language.startsWith("th");
  const { data: vouchers, isLoading: isVouchersLoading } = useVouchers({
    q: "",
    status: "published",
  });
  const [activeTab, setActiveTab] = useState("available");

  const tabs = [
    { id: "available", label: "ใช้ได้" },
    { id: "used", label: "ใช้แล้ว" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white">
        <Header />
        <Tabs
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          primaryColor={page.bg_color}
        />
      </div>

      {isVouchersLoading ? (
      <VoucherCardShimmer />
      ) : (
        <MainContent
          vouchers={vouchers ?? []}
          isThaiLanguage={isThaiLanguage}
          primaryColor={page.bg_color}
        />
      )}
    </div>
  );
};

export default Route;
