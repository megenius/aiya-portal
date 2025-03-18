import {
  json,
  MetaFunction,
  ShouldRevalidateFunction,
  useLoaderData,
  useNavigate,
} from "@remix-run/react";
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
      navigate(`/a/${page.liff_id}/${page.slug}/myCoupons`);
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
        onError: () => {
          // if (error?.message?.includes('fully collected') || error?.message?.includes('out of stock')) {
          setShowFullyCollectedModal(true);
          // }
        },
      }
    );
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
      <div className="h-screen flex flex-col overflow-hidden">
        <Header
          language={lang}
          voucher={voucher}
          color={voucher.primaryColor ?? ""}
          isIsClient={liff?.isInClient() ?? false}
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
