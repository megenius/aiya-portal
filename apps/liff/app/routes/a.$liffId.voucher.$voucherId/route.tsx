import { useParams } from "@remix-run/react";
import { useLiff } from "~/hooks/useLiff";
import { useVoucher } from "~/hooks/voucher/useVoucher";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

const Route = () => {
  const { liffId, voucherId } = useParams();
  const { language, isLoggedIn } = useLiff({ liffId: liffId as string });
  const isThaiLanguage = language.startsWith("th");
  const { data: voucher, isLoading } = useVoucher(voucherId ?? "");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header title={voucher?.name} color={voucher?.primaryColor ?? ""}/>
      {voucher && <MainContent isThaiLanguage={isThaiLanguage} voucher={voucher}/>}
      <Footer color={voucher?.primaryColor ?? ""}/>
    </div>
  );
};

export default Route;
