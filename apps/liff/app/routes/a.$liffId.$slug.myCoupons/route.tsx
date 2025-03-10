import { useVouchers } from "~/hooks/vouchers/useVouchers";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Loading from "~/components/Loading";
import { useLiff } from "~/hooks/useLiff";
import { useOutletContext } from "@remix-run/react";
import { PageLiff } from "~/types/page";
import Tabs from "~/components/Tabs";
import { useState } from "react";
import VoucherCardShimmer from "./components/VoucherCardShimmer";
import { useLineProfile } from "~/hooks/useLineProfile";
import { useVouchersUser } from "~/hooks/vouchers/useVouchersUser";

const Route = () => {
  const { page } = useOutletContext<{ page: PageLiff }>();
  const { language, isLoggedIn } = useLiff({ liffId: page.liff_id });
  const { data: profile, isLoading:isProfileLoading } = useLineProfile();
  const isThaiLanguage = language.startsWith("th");
  // const lang = isThaiLanguage ? "th" : "en";
  const lang = "en";
  // const { data: vouchers, isLoading: isVouchersLoading } = useVouchers({
  //   q: "",
  //   status: "published",
  // });
  const { data: myVouchers, isLoading : isMyVouchersLoading } = useVouchersUser({ userId: profile?.userId || "" });
  const [activeTab, setActiveTab] = useState("available");

  const tabs = [
    { id: "available", label: { th: "ใช้ได้", en: "Available" } },
    { id: "used", label: { th: "ใช้แล้ว", en: "Used" } },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white">
        <Header language={lang}/>
        <Tabs
          language={lang}
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          primaryColor={page.bg_color}
        />
      </div>

      {isMyVouchersLoading && isProfileLoading ? (
        <VoucherCardShimmer />
      ) : (
        <MainContent
        activeTab={activeTab}
          vouchers={myVouchers || []}
          language={lang}
          primaryColor={page.bg_color}
        />
      )}
    </div>
  );
};

export default Route;
