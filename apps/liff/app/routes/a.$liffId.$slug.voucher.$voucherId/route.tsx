import {
  ShouldRevalidateFunction,
  useLoaderData,
  useNavigate,
} from "@remix-run/react";

import { json, MetaFunction } from "@remix-run/cloudflare";

import { useLiff } from "~/hooks/useLiff";
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
import { LoaderFunctionArgs } from "@remix-run/node";
import _ from "lodash";
import { fetchByLiffIdAndSlug } from "~/services/page-liff";
import { fetchVoucher } from "~/services/vouchers";
import { useLineLiff } from "~/hooks/useLineLiff";
import RedeemModal from "./components/RedeemModal";

export const meta: MetaFunction<typeof clientLoader> = ({ data }) => {
  const page = data?.page;
  const voucher = data?.voucher;
  return [
    { title: voucher?.voucher_brand_id?.name || "Loading..." },
    {
      tagName: "link",
      rel: "icon",
      type: "image/x-icon",
      href: page?.favicon || "/images/favicon.ico",
    },
  ];
};

export const shouldRevalidate: ShouldRevalidateFunction = ({
  currentParams,
  nextParams,
}) => {
  return !!!_.isEqual(currentParams, nextParams);
};

export const clientLoader = async ({ request, params }: LoaderFunctionArgs) => {
  const { liffId, slug, voucherId } = params;
  const page = await fetchByLiffIdAndSlug(liffId as string, slug as string);
  const voucher = await fetchVoucher({ voucherId });
  return json({
    page,
    voucher,
  });
};

const Route = () => {
  const { page, voucher } = useLoaderData<typeof clientLoader>();
  const { data: liff } = useLineLiff();
  const navigate = useNavigate();
  const { data: profile, isLoading: isProfileLoading } = useLineProfile();
  const { language } = useLiff({ liffId: page?.liff_id as string });
  const isThaiLanguage = language.startsWith("th");
  // const lang = isThaiLanguage ? "th" : "en";
  const lang = "en";
  const { data: myVouchers, isLoading: isMyVouchersLoading } = useVouchersUser({
    userId: profile?.userId || "",
  });
  const {
    data: codeStats,
    isLoading: isCodeStatsLoading,
    refetch: refetchCodeStats,
    isRefetching: isCodeStatsRefetching,
  } = useVoucherCodeStats({
    voucherId: voucher.id ?? "",
  });
  const collectVoucher = useCollectVoucher();
  const leadSubmission = useInsertLeadSubmission();
  const myVoucher = myVouchers?.find((v) => v.code.voucher.id === voucher.id);
  const [isCollected, setIsCollected] = useState(Boolean(myVoucher));
  const [pageState, setPageState] = useState("landing");
  const [isFormValid, setIsFormValid] = useState(false);
  const [formData, setFormData] = useState<FieldData[]>([]);
  const [isRedeemedModalOpen, setIsRedeemedModalOpen] = useState(false);
  const [showFullyCollectedModal, setShowFullyCollectedModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [state, setState] = useState("redeem");

  const buttonText = {
    th: {
      instant: "เก็บคูปอง",
      form: "ลงทะเบียน",
      collected: "ใช้คูปอง",
      pending_confirmation: "ใช้คูปอง",
      used: "ใช้แล้ว",
      expired: "หมดอายุแล้ว",
      fully_collected: "หมดแล้ว",
    },
    en: {
      instant: "Collect",
      form: "Register",
      collected: "Redeem",
      pending_confirmation: "Redeem",
      used: "Redeemed",
      expired: "Expired",
      fully_collected: "Fully Collected",
    },
  };
  const status = myVoucher
    ? (myVoucher.code.code_status ?? "collected")
    : codeStats?.available === 0
      ? "fully_collected"
      : (voucher?.metadata.redemptionType ?? "instant");

  const isExpired = myVoucher ? (myVoucher.expired_date && new Date(myVoucher.expired_date) < new Date()) : false;

  let timeLeft = 0;
  if (myVoucher?.used_date) {
    const usedDateTime = new Date(myVoucher.used_date).getTime();
    const expiryTime = usedDateTime + 15 * 60 * 1000; // 15 minutes after used_date
    const now = new Date().getTime();
    timeLeft = Math.floor((expiryTime - now) / 1000);
  }

  const handleSubmit = async () => {
    if (
      isExpired ||
      (status === "pending_confirmation" && timeLeft <= 0) ||
      status === "used" ||
      status === "expired" ||
      status === "fully_collected"
    ) {
      return;
    }
    
    if (isCollected || status === "pending_confirmation") {
      // navigate(`/a/${page.liff_id}/${page.slug}/myVouchers`);
      setIsRedeemedModalOpen(true);
      return;
    }
    console.log(3);
    
    if (
      pageState === "landing" &&
      voucher?.metadata.redemptionType === "form"
    ) {
      setPageState("form");
      return;
    }
    setIsSubmitting(true);
    const collectVoucherData: CollectVoucher = {
      voucher: voucher?.id as string,
      collected_by: profile?.userId as string,
      channel: page?.channel as string,
    };

    await collectVoucher
      .mutateAsync(
        {
          variables: collectVoucherData,
        },
        {
          onSuccess: (res) => {
            setIsCollected(true);
            setPageState("landing");
            setState("collected");
            const data: Partial<LeadSubmission> = {
              source: "voucher",
              source_id: res.id as string,
              data:
                voucher?.metadata.redemptionType === "form"
                  ? { form: { fields: formData } }
                  : undefined,
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
            setIsRedeemedModalOpen(true);
          },
          onError: () => {
            // if (error?.message?.includes('fully collected') || error?.message?.includes('out of stock')) {
            setShowFullyCollectedModal(true);
            // }
          },
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  if (
    isProfileLoading &&
    isMyVouchersLoading &&
    isCodeStatsLoading &&
    isCodeStatsRefetching
  ) {
    return <Loading />;
  }

  return (
    voucher && (
      <div className="h-screen-safe flex flex-col overflow-hidden">
        <Header
          language={lang}
          voucher={voucher}
          color={voucher.voucher_brand_id.primaryColor ?? ""}
          isIsClient={liff?.isInClient() ?? false}
        />
        {codeStats && (
          <MainContent
            language={lang}
            voucher={voucher}
            codeStats={codeStats}
            pageState={pageState}
            status={isExpired ? "expired" : status}
            onFormValidationChange={setIsFormValid}
            onFormDataChange={setFormData}
          />
        )}
        <Footer
          color={voucher.voucher_brand_id.primaryColor ?? ""}
          buttonText={isSubmitting ? "Collecting" : isExpired ? buttonText[lang]["expired"] : (status === "pending_confirmation" && timeLeft <= 0) ? buttonText[lang]["used"] : buttonText[lang][status]}
          onClick={handleSubmit}
          disabled={
            (pageState === "form" && !isFormValid) ||
            isExpired ||
            (status === "pending_confirmation" && timeLeft <= 0) ||
            status === "used" ||
            status === "expired" ||
            status === "fully_collected" ||
            isSubmitting
          }
        />

        <FullyCollectedModal
          isOpen={showFullyCollectedModal}
          onClose={() => {
            setShowFullyCollectedModal(false);
            refetchCodeStats();
          }}
          language={lang}
          primaryColor={voucher.voucher_brand_id.primaryColor ?? ""}
        />

        {myVoucher && (
          <RedeemModal
           page={page}
            voucherUser={myVoucher}
            language={lang}
            primaryColor={voucher.voucher_brand_id.primaryColor ?? ""}
            state={state}
            isOpen={isRedeemedModalOpen}
            onClose={() => {
              refetchCodeStats();
              setIsRedeemedModalOpen(false);
            }}
          />
        )}
      </div>
    )
  );
};

export default Route;
