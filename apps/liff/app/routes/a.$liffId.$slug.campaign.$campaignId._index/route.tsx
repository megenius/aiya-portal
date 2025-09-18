import {
  useOutletContext,
  useParams,
  useRouteError,
  isRouteErrorResponse,
  useNavigate,
} from "@remix-run/react";
import { PageLiff } from "~/types/page";
import { useCampaign } from "~/hooks/campaigns";
import { useLineProfile } from "~/contexts/LineLiffContext";
import ErrorView from "~/components/ErrorView";
import CampaignDetailContent from "./_components/CampaignDetailContent";
import CampaignDetailSkeleton from "./_components/CampaignDetailSkeleton";
import { useEffect } from "react";

const Route = () => {
  const { page, lang } = useOutletContext<{ page: PageLiff; lang: string }>();
  const { liffId, slug, campaignId } = useParams();
  const navigate = useNavigate();
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

  // If user already registered/has data, redirect to dashboard (in effect to avoid navigating during render)
  useEffect(() => {
    if (
      !isProfileLoading &&
      !isCampaignLoading &&
      campaign?.user_stats?.is_registered
    ) {
      navigate(`/a/${liffId}/${slug}/campaign/${campaignId}/dashboard`, {
        replace: true,
      });
    }
  }, [
    isProfileLoading,
    isCampaignLoading,
    campaign?.user_stats?.is_registered,
    navigate,
    liffId,
    slug,
    campaignId,
  ]);

  // Guard to prevent flicker while the redirect triggers
  if (campaign?.user_stats?.is_registered) {
    return null;
  }

  // Handle loading states
  if (isProfileLoading || isCampaignLoading) {
    return <CampaignDetailSkeleton />;
  }

  // Handle profile error
  if (profileError) {
    const language =
      typeof navigator !== "undefined" && navigator.language?.startsWith("en")
        ? ("en" as const)
        : ("th" as const);
    return (
      <ErrorView
        status={500}
        message={profileError.message}
        language={language}
      />
    );
  }

  // Handle campaign error
  if (campaignError) {
    const language =
      typeof navigator !== "undefined" && navigator.language?.startsWith("en")
        ? ("en" as const)
        : ("th" as const);
    return (
      <ErrorView
        status={404}
        message="ไม่พบแคมเปญที่ต้องการ"
        language={language}
      />
    );
  }

  if (!campaign) {
    return null;
  }

  return (
    <CampaignDetailContent campaign={campaign} page={page} language={lang} />
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
