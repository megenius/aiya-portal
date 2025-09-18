import {
  useOutletContext,
  useParams,
  useNavigate,
  useRouteError,
  isRouteErrorResponse,
} from "@remix-run/react";
import { PageLiff } from "~/types/page";
import {
  useCampaign,
  useCampaignMissions,
  useCampaignCredits,
} from "~/hooks/campaigns";
import { useLineProfile } from "~/contexts/LineLiffContext";
import ErrorView from "~/components/ErrorView";
import { ArrowLeft, Target, History } from "lucide-react";
import { useEffect } from "react";
import { Mission } from "~/components/Mission";

const Route = () => {
  const { lang } = useOutletContext<{ page: PageLiff; lang: string }>();
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

  const {
    data: missions,
    isLoading: isMissionsLoading,
    error: missionsError,
  } = useCampaignMissions({
    campaignId: campaignId || "",
    enabled: !!campaignId && !isProfileLoading && !!profile?.userId,
  });

  const {
    data: credits,
    isLoading: isCreditsLoading,
    error: creditsError,
  } = useCampaignCredits({
    campaignId: campaignId || "",
    enabled: !!campaignId && !isProfileLoading && !!profile?.userId,
  });

  // const primaryColor = page.bg_color || "#1DB446";

  // Redirect if not registered (useEffect to avoid navigating during render)
  useEffect(() => {
    if (campaign && !campaign.user_stats.is_registered) {
      navigate(`/a/${liffId}/${slug}/campaign/${campaignId}`, {
        replace: true,
      });
    }
  }, [campaign, navigate, liffId, slug, campaignId]);

  // Handle loading states
  if (
    isProfileLoading ||
    isCampaignLoading ||
    isMissionsLoading ||
    isCreditsLoading
  ) {
    return (
      <div className="h-full overflow-hidden bg-gray-50">
        <div className="bg-white p-4">
          <div className="flex items-center gap-3">
            <div className="h-6 w-6 animate-pulse rounded bg-gray-200"></div>
            <div className="h-6 w-40 animate-pulse rounded bg-gray-200"></div>
          </div>
        </div>
        <div className="space-y-6 p-4">
          <div className="h-32 w-full animate-pulse rounded-lg bg-gray-200"></div>
          <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="h-24 w-full animate-pulse rounded-lg bg-gray-200"
              ></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Handle errors
  if (profileError || campaignError || missionsError || creditsError) {
    const language =
      typeof navigator !== "undefined" && navigator.language?.startsWith("en")
        ? ("en" as const)
        : ("th" as const);
    return (
      <ErrorView
        status={profileError ? 500 : 404}
        message={profileError?.message || "ไม่พบข้อมูลแคมเปญ"}
        language={language}
      />
    );
  }

  if (!campaign || !missions || !credits) {
    return null;
  }

  // Don't render while redirecting
  if (campaign && !campaign.user_stats.is_registered) {
    return null;
  }

  // Compute last updated from latest credit transaction or campaign updated date
  const locale = lang === "th" ? "th-TH" : "en-US";
  const latestTxAt =
    credits.transactions && credits.transactions.length > 0
      ? credits.transactions.reduce(
          (max, t) =>
            new Date(t.created_at) > new Date(max) ? t.created_at : max,
          credits.transactions[0].created_at,
        )
      : null;
  const lastUpdatedISO = latestTxAt ?? campaign?.date_updated ?? null;
  const lastUpdatedText = lastUpdatedISO
    ? new Date(lastUpdatedISO).toLocaleString(locale, {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    : null;

  // const pageTitle = lang === "th" ? "แดชบอร์ดแคมเปญ" : "Campaign Dashboard";

  return (
    <div className="flex h-full flex-col overflow-hidden bg-gradient-to-b from-indigo-800 via-purple-700 to-fuchsia-600">
      <div className="min-h-0 flex-1 overflow-y-auto">
        {/* Gradient Hero */}
        <div className="space-y-2">
          <div className="px-4 pt-4">
            <div className="flex items-center justify-between">
              <button
                onClick={() => navigate(`/a/${liffId}/${slug}`)}
                className="flex items-center gap-2 text-lg text-white/90"
              >
                <ArrowLeft className="h-6 w-6" />
                <span>{lang === "th" ? "กลับหน้าหลัก" : "Back"}</span>
              </button>
              <button
                onClick={() =>
                  navigate(
                    `/a/${liffId}/${slug}/campaign/${campaignId}/credits`,
                  )
                }
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-gray-400"
                title={lang === "th" ? "ประวัติเครดิต" : "Credit History"}
              >
                <History className="h-6 w-6" />
              </button>
            </div>
            <h1 className="mt-6 text-center text-3xl font-semibold tracking-tight text-white">
              {lang === "th" ? "สิทธิ์ที่ได้รับ" : "Credits Earned"}
            </h1>

            {/* Big Circle */}
            <div className="mt-5 flex items-center justify-center">
              <div className="flex h-56 w-56 flex-col items-center justify-center rounded-full bg-white text-indigo-700 shadow-xl">
                <div className="text-6xl font-extrabold leading-none">
                  {credits.total_earned ?? 0}
                </div>
                <div className="mt-2 text-2xl font-semibold text-indigo-600">
                  {lang === "th" ? "สิทธิ์" : "credits"}
                </div>
              </div>
            </div>
            {lastUpdatedText && (
              <div className="mt-4 text-center text-xs text-white/80">
                {lang === "th" ? "อัปเดตล่าสุด: " : "Last updated: "}
                {lastUpdatedText}
              </div>
            )}
          </div>

          {/* Missions Section */}
          <div>
            <div className="flex items-center gap-2 p-4 text-lg font-semibold text-white">
              <Target size={20} />
              {lang === "th" ? "ภารกิจทั้งหมด" : "All Missions"}
            </div>
            <div
              className="flex snap-x snap-mandatory scroll-px-4 flex-nowrap gap-5 overflow-x-auto overscroll-x-contain px-4 pb-4"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {missions.map((mission) => (
                <div key={mission.id} className="w-40 flex-shrink-0 snap-start">
                  <Mission
                    mission={mission}
                    liffId={liffId || ""}
                    slug={slug || ""}
                    campaignId={campaignId || ""}
                    lang={lang}
                  />
                </div>
              ))}
            </div>

            {/* Campaign Status */}
            {/* <div className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="text-center">
            {progressPercentage === 100 ? (
              <div className="text-green-600">
                <CheckCircle size={48} className="mx-auto mb-2" />
                <div className="text-lg font-semibold">
                  {lang === "th"
                    ? "ยินดีด้วย! คุณทำภารกิจครบแล้ว"
                    : "Congratulations! You completed all missions"}
                </div>
              </div>
            ) : (
              <div className="text-indigo-600">
                <Target size={48} className="mx-auto mb-2" />
                <div className="text-lg font-semibold">
                  {lang === "th" ? "เหลืออีก" : "Remaining"}{" "}
                  {totalMissions - completedMissions}{" "}
                  {lang === "th" ? "ภารกิจ" : "missions"}
                </div>
                <div className="text-sm text-gray-600">
                  {lang === "th"
                    ? "ทำภารกิจให้เสร็จเพื่อรับเครดิตเพิ่มเติม"
                    : "Complete missions to earn more credits"}
                </div>
              </div>
            )}
          </div>
        </div> */}
          </div>
        </div>
      </div>
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
