import { useVouchers } from "~/hooks/voucher/useVouchers";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Loading from "~/components/Loading";
import { useLiff } from "~/hooks/useLiff";
import { useOutletContext } from "@remix-run/react";
import { PageLiff } from "~/types/page";

const Route = () => {
  const { page } = useOutletContext<{ page: PageLiff }>();
  const { language, isLoggedIn } = useLiff({ liffId: page.liff_id });
    const isThaiLanguage = language.startsWith("th");
  const {data : vouchers, isLoading : isVouchersLoading} = useVouchers({q: "", status: "published"});

  if (isVouchersLoading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <MainContent vouchers={vouchers ?? []} isThaiLanguage={isThaiLanguage}/>
    </div>
  );
};

export default Route;
