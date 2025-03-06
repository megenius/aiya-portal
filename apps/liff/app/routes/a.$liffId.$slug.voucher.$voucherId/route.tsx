import { useNavigate, useParams } from "@remix-run/react";
import { useLiff } from "~/hooks/useLiff";
import { useVoucher } from "~/hooks/voucher/useVoucher";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import { useState } from "react";

const Route = () => {
  const { liffId, slug, voucherId } = useParams();
  const { language, isLoggedIn } = useLiff({ liffId: liffId as string });
  const isThaiLanguage = language.startsWith("th");
  const lang = isThaiLanguage ? "th" : "en";
  const { data: voucher, isLoading } = useVoucher(voucherId ?? "");
  const [collected, setCollected] = useState(false);
  const [pageState, setPageState] = useState("landing");
  const buttonText = {
    instant : {
      th: "เก็บคูปอง",
      en: "Collect"
    },
    form : {
      th: "จอง",
      en: "Book"
    }
  }
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (
      pageState === "landing" &&
      voucher?.metadata.redemptionType === "form"
    ) {
      setPageState("form");
      return;
    }
    if (collected) {
      navigate(`/a/${liffId}/${slug}/myCoupons`);
      return;
    }

    setCollected(true);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Header language={lang} title={voucher.name} color={voucher?.primaryColor ?? ""} />
      {voucher && (
        <MainContent language={lang} voucher={voucher} pageState={pageState} />
      )}
      <Footer
        color={voucher?.primaryColor ?? ""}
        buttonText={collected ? "ใช้คูปอง" : buttonText[voucher?.metadata.redemptionType ?? "instant"][lang]}
        collected={collected}
        onClick={handleSubmit}
      />
    </div>
  );
};

export default Route;
