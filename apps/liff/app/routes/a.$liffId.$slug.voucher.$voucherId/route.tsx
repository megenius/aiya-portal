import { useNavigate, useParams } from "@remix-run/react";
import { useLiff } from "~/hooks/useLiff";
import { useVoucher } from "~/hooks/vouchers/useVoucher";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import { useState } from "react";
import { useCollectVoucher } from "~/hooks/vouchers/useCollectVoucher";
import { CollectVoucher, FieldData, LeadSubmission } from "~/types/app";
import { useLineProfile } from "~/hooks/useLineProfile";
import { useVouchersUser } from "~/hooks/vouchers/useVouchersUser";
import { useVoucherCodeStats } from "~/hooks/vouchers/useVoucherCodeStats";
import confetti from "canvas-confetti";
import Loading from "~/components/Loading";
import { useInsertLeadSubmission } from "~/hooks/leadSubmissions/useInsertLeadSubmissions";
import FullyCollectedModal from "./components/FullyCollectedModal";

const Route = () => {
  const navigate = useNavigate();
  const { data: profile, isLoading: isProfileLoading } = useLineProfile();
  const { liffId, slug, voucherId } = useParams();
  const { language, isLoggedIn } = useLiff({ liffId: liffId as string });
  const isThaiLanguage = language.startsWith("th");
  // const lang = isThaiLanguage ? "th" : "en";
  const lang = "en";
  const { data: voucher, isLoading: isVoucherLoading } = useVoucher(
    voucherId ?? ""
  );
  const { data: myVouchers, isLoading: isMyVouchersLoading } = useVouchersUser({
    userId: profile?.userId || "",
  });
  const {
    data: codeStats,
    isLoading: isCodeStatsLoading,
    refetch: refetchCodeStats,
    isRefetching: isCodeStatsRefetching,
  } = useVoucherCodeStats({
    voucherId: voucherId ?? "",
  });
  const collectVoucher = useCollectVoucher();
  const leadSubmission = useInsertLeadSubmission();
  const myVoucher = myVouchers?.find((v) => v.code.voucher.id === voucherId);
  const [isCollected, setIsCollected] = useState(Boolean(myVoucher));
  const [pageState, setPageState] = useState("landing");
  const [isFormValid, setIsFormValid] = useState(false);
  const [formData, setFormData] = useState<FieldData[]>([]);
  const [showFullyCollectedModal, setShowFullyCollectedModal] = useState(false);

  const buttonText = {
    instant: {
      th: "เก็บคูปอง",
      en: "Collect",
    },
    form: {
      th: "ลงทะเบียน",
      en: "Register",
    },
    collected: {
      th: "ใช้คูปอง",
      en: "Redeem",
    },
    used: {
      th: "ใช้แล้ว",
      en: "Redeemed",
    },
    expired: {
      th: "หมดอายุแล้ว",
      en: "Expired",
    },
    fully_collected: {
      th: "หมดแล้ว",
      en: "Fully Collected",
    },
  };
  const status = myVoucher
    ? (myVoucher.code.code_status ?? "collected")
    : codeStats?.available === 0
      ? "fully_collected"
      : (voucher?.metadata.redemptionType ?? "instant");

  const handleSubmit = async () => {
    if (
      status === "used" ||
      status === "expired" ||
      status === "fully_collected"
    ) {
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
        onSuccess: (res) => {
          setIsCollected(true);
          setPageState("landing");
          const data: Partial<LeadSubmission> = {
            source: "voucher",
            source_id: res.id as string,
            data: { form: { fields: formData } },
            metadata: voucher?.metadata,
          };
          leadSubmission.mutateAsync({
            variables: data,
          });

          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.9 },
          });
        },
        onError: (error) => {
          // if (error?.message?.includes('fully collected') || error?.message?.includes('out of stock')) {
          setShowFullyCollectedModal(true);
          // }
        },
      }
    );
  };

  if (
    isVoucherLoading &&
    isProfileLoading &&
    isMyVouchersLoading &&
    isCodeStatsLoading &&
    isCodeStatsRefetching
  ) {
    return <Loading />;
  }

  return (
    voucher && (
      <div className="h-screen flex flex-col overflow-hidden">
        <Header
          language={lang}
          voucher={voucher}
          color={voucher.primaryColor ?? ""}
        />
        {codeStats && (
          <MainContent
            language={lang}
            voucher={voucher}
            codeStats={codeStats}
            pageState={pageState}
            onFormValidationChange={setIsFormValid}
            onFormDataChange={setFormData}
          />
        )}
        <Footer
          color={voucher.primaryColor ?? ""}
          buttonText={buttonText[status][lang]}
          status={status}
          onClick={handleSubmit}
          disabled={pageState === "form" && !isFormValid}
        />

        <FullyCollectedModal
          isOpen={showFullyCollectedModal}
          onClose={() => {
            setShowFullyCollectedModal(false);
            refetchCodeStats();
          }}
          language={lang}
          primaryColor={voucher.primaryColor ?? ""}
        />
      </div>
    )
  );
};

export default Route;
