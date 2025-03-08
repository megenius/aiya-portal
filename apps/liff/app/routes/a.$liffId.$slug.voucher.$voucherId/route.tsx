import { useNavigate, useParams } from "@remix-run/react";
import { useLiff } from "~/hooks/useLiff";
import { useVoucher } from "~/hooks/vouchers/useVoucher";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import { useState } from "react";
import { useCollectVoucher } from "~/hooks/vouchers/useCollectVoucher";
import { CollectVoucher } from "~/types/app";
import { useLineProfile } from "~/hooks/useLineProfile";
import { useVouchersUser } from "~/hooks/vouchers/useVouchersUser";
import { useVoucherCodeStats } from "~/hooks/vouchers/useVoucherCodeStats";

const Route = () => {
  const { data: profile, isLoading: isProfileLoading } = useLineProfile();
  const { liffId, slug, voucherId } = useParams();
  const { language, isLoggedIn } = useLiff({ liffId: liffId as string });
  const isThaiLanguage = language.startsWith("th");
  // const lang = isThaiLanguage ? "th" : "en";
  const lang = "en";
  const { data: voucher, isLoading: isVoucherLoading } = useVoucher(voucherId ?? "");
  const { data: myVouchers, isLoading: isMyVouchersLoading } = useVouchersUser({
    userId: profile?.userId || "",
  });
  const { data: codeStats, isLoading: isCodeStatsLoading } = useVoucherCodeStats({
    voucherId: voucherId ?? "",
  });
  const collectVoucher = useCollectVoucher();
  const myVoucher = myVouchers?.find((v) => v.code.voucher.id === voucherId);
  const [isCollected, setIsCollected] = useState(Boolean(myVoucher));
  const [pageState, setPageState] = useState("landing");
  const buttonText = {
    instant: {
      th: "เก็บคูปอง",
      en: "Collect",
    },
    form: {
      th: "จอง",
      en: "Book",
    },
    collected:{
      th: "ใช้คูปอง",
      en: "Use Coupon"
    },
    used:{
      th: "ใช้แล้ว",
      en: "Used"
    },
    expired:{
      th: "หมดอายุแล้ว",
      en: "Expired"
    },
    fully_redeemed:{
      th: "หมดแล้ว",
      en: "Fully Redeemed"
    }
  };
  const status = myVoucher ? myVoucher.code.code_status ?? "collected" : codeStats?.available === 0 ? "fully_redeemed"  : voucher?.metadata.redemptionType ?? "instant";
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (status === "used" || status === "expired" || status === "fully_redeemed") {
      return;
    }
    if (isCollected) {
      navigate(`/a/${liffId}/${slug}/myCoupons`);
      return;
    }
    if (
      pageState === "landing" &&
      voucher?.metadata.redemptionType === "form"
    ) {
      setPageState("form");
      return;
    }

    const collectVoucherData: CollectVoucher = {
      voucher: voucher?.id as string,
      collected_by: profile?.userId as string,
    };

    await collectVoucher.mutateAsync(
      {
        variables: collectVoucherData,
      },
      {
        onSuccess: () => {
          setIsCollected(true);
        },
      }
    );
  };

  if (isVoucherLoading && isProfileLoading && isMyVouchersLoading && isCodeStatsLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {voucher && <Header
        language={lang}
        voucher={voucher}
        color={voucher?.primaryColor ?? ""}
      />}
      {voucher && codeStats && (
        <MainContent language={lang} voucher={voucher} codeStats={codeStats} pageState={pageState} />
      )}
      <Footer
        color={voucher?.primaryColor ?? ""}
        buttonText={
          buttonText[status][lang]
        }
        status={status}
        onClick={handleSubmit}
      />
    </div>
  );
};

export default Route;
