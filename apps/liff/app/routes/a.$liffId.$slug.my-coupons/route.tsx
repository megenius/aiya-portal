import Header from "./_components/Header";
import MainContent from "./_components/MainContent";
import { useOutletContext } from "@remix-run/react";
import Tabs from "~/components/Tabs";
import { useState } from "react";
import VoucherCardShimmer from "../../components/VoucherCardShimmer";
import { useVouchersUser } from "~/hooks/vouchers/useVouchersUser";
import { PageLiff } from "~/types/page";
import { useLineProfile } from "~/contexts/LineLiffContext";

const Route = () => {
  const { page, lang } = useOutletContext<{ page: PageLiff,lang: string }>();
  const { profile, isLoading: isProfileLoading, error: profileError } = useLineProfile();
  const { data: myVouchers, isLoading: isMyVouchersLoading } = useVouchersUser({
    userId: profile?.userId || "",
  });
  const [activeTab, setActiveTab] = useState("available");

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

      {isMyVouchersLoading || isProfileLoading ? (
        <VoucherCardShimmer />
      ) : profileError ? (
        <div className="text-red-500">{profileError.message}</div>
      ) : (
        <MainContent
          activeTab={activeTab}
          page={page}
          vouchers={myVouchers || []}
          language={lang}
          primaryColor={page.bg_color ?? ""}
        />
      )}
    </div>
  );
};

export default Route;
