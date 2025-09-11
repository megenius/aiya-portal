import Header from "./_components/Header";
import MainContent from "./_components/MainContent";
import { useOutletContext } from "@remix-run/react";
import Tabs from "~/components/Tabs";
import { useState } from "react";
import VoucherCardShimmer from "../../components/VoucherCardShimmer";
import { useMyVouchersV2 } from "~/hooks/vouchers/useMyVouchersV2";
import { PageLiff } from "~/types/page";

const Route = () => {
  const { page, lang } = useOutletContext<{ page: PageLiff; lang: string }>();
  const [activeTab, setActiveTab] = useState("available");
  const { data: myCouponsResp, isLoading: isMyVouchersLoading } =
    useMyVouchersV2({
      tab: activeTab,
    });

  const tabs = [
    { id: "available", label: { th: "ใช้ได้", en: "Available" } },
    { id: "used", label: { th: "ใช้แล้ว", en: "Used" } },
    { id: "expired", label: { th: "หมดอายุ", en: "Expired" } },
  ];

  return (
    <div className="h-screen-safe bg-gray-50">
      <div className="bg-white">
        <Header language={lang} />
        <Tabs
          language={lang}
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          primaryColor={page.bg_color ?? ""}
        />
      </div>

      {isMyVouchersLoading ? (
        <VoucherCardShimmer />
      ) : (
        <MainContent
          activeTab={activeTab}
          page={page}
          vouchers={myCouponsResp?.data.items || []}
          language={lang}
        />
      )}
    </div>
  );
};

export default Route;
