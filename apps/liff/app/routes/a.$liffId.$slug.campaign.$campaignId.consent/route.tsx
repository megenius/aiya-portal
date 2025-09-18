import {
  useOutletContext,
  useParams,
  useNavigate,
  useRouteError,
  isRouteErrorResponse,
} from "@remix-run/react";
import { useState, useEffect } from "react";
import { PageLiff } from "~/types/page";
import { useCampaign } from "~/hooks/campaigns";
import { useLineProfile } from "~/contexts/LineLiffContext";
import ErrorView from "~/components/ErrorView";
import { ArrowLeft, FileText, Shield } from "lucide-react";
import { getDirectusFileUrl } from "~/utils/files";
import MainContent from "./_components/MainContent";
import Header from "./_components/Header";

const Route = () => {
  const { page, lang } = useOutletContext<{ page: PageLiff; lang: string }>();
  const { liffId, slug, campaignId } = useParams();
  const navigate = useNavigate();
  const [hasAgreed, setHasAgreed] = useState(false);

  const {
    profile,
    isLoading: isProfileLoading,
    error: profileError,
  } = useLineProfile();

  const {
    data: campaign,
    isLoading: isCampaignLoading,
    error: campaignError,
  } = useCampaign({
    campaignId: campaignId || "",
    enabled: !!campaignId && !isProfileLoading && !!profile?.userId,
  });

  const primaryColor = page.bg_color || "#1DB446";

  // Handle redirects in useEffect to avoid render-time navigation
  useEffect(() => {
    if (!campaign) return;

    if (campaign.user_stats.has_agreed_pdpa) {
      const target = campaign.user_stats.is_registered
        ? `/a/${liffId}/${slug}/campaign/${campaignId}/dashboard`
        : `/a/${liffId}/${slug}/campaign/${campaignId}/register`;
      navigate(target, { replace: true });
    }
  }, [campaign, navigate, liffId, slug, campaignId]);

  // Handle loading states
  if (isProfileLoading || isCampaignLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white p-4">
          <div className="flex items-center gap-3">
            <div className="h-6 w-6 animate-pulse rounded bg-gray-200"></div>
            <div className="h-6 w-40 animate-pulse rounded bg-gray-200"></div>
          </div>
        </div>
        <div className="space-y-6 p-4">
          <div className="h-8 w-3/4 animate-pulse rounded bg-gray-200"></div>
          <div className="space-y-2">
            <div className="h-4 w-full animate-pulse rounded bg-gray-200"></div>
            <div className="h-4 w-5/6 animate-pulse rounded bg-gray-200"></div>
            <div className="h-4 w-4/6 animate-pulse rounded bg-gray-200"></div>
          </div>
        </div>
      </div>
    );
  }

  // Handle errors
  if (profileError || campaignError) {
    const language =
      typeof navigator !== "undefined" && navigator.language?.startsWith("en")
        ? ("en" as const)
        : ("th" as const);
    return (
      <ErrorView
        status={profileError ? 500 : 404}
        message={profileError?.message || "ไม่พบแคมเปญที่ต้องการ"}
        language={language}
      />
    );
  }

  if (!campaign) {
    return null;
  }

  // Don't render content if we need to redirect (handled by useEffect)
  if (campaign.user_stats.has_agreed_pdpa) {
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!hasAgreed) {
      alert(
        lang === "th"
          ? "กรุณายอมรับเงื่อนไขการใช้งาน"
          : "Please agree to the terms and conditions",
      );
      return;
    }

    const agreedAt = new Date().toISOString();
    // Navigate to registration with PDPA params; registration will submit both in one request
    navigate(
      `/a/${liffId}/${slug}/campaign/${campaignId}/register?pdpa=1&pdpaAt=${encodeURIComponent(
        agreedAt,
      )}`,
    );
  };

  return (
    <div
      className="flex h-screen-safe flex-col"
      style={{
        backgroundImage: `url(${getDirectusFileUrl(campaign.poster_image as string)})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Header lang={lang} />
      <MainContent
        lang={lang}
        handleSubmit={handleSubmit}
        hasAgreed={hasAgreed}
        setHasAgreed={setHasAgreed}
        isPending={false}
        primaryColor={primaryColor}
      />
    </div>
  );
};

export default Route;

export function ErrorBoundary() {
  const error = useRouteError();
  const language =
    typeof navigator !== "undefined" && navigator.language?.startsWith("en")
      ? ("en" as const)
      : ("th" as const);

  if (isRouteErrorResponse(error)) {
    return (
      <ErrorView
        status={error.status}
        message={error.data?.message || "เกิดข้อผิดพลาด"}
        language={language}
      />
    );
  }

  return (
    <ErrorView
      status={500}
      message="เกิดข้อผิดพลาดที่ไม่คาดคิด"
      language={language}
    />
  );
}
