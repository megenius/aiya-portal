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
  const { data: voucher, isLoading } = useVoucher(voucherId ?? "");
  const [collected, setCollected] = useState(false);
  const [pageState, setPageState] = useState("landing");
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
    <div className="min-h-screen flex flex-col">
      <Header title={voucher?.name} color={voucher?.primaryColor ?? ""} />
      {voucher && (
        <MainContent isThaiLanguage={isThaiLanguage} voucher={voucher} pageState={pageState} />
      )}
      <Footer
        color={voucher?.primaryColor ?? ""}
        buttonText={collected ? "ใช้คูปอง" : "เก็บคูปอง"}
        collected={collected}
        onClick={handleSubmit}
      />
    </div>
  );
};

export default Route;
