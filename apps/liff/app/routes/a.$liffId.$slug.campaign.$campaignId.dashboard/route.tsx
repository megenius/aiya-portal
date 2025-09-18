import {
  useOutletContext,
  useParams,
  useNavigate,
  useRouteError,
  isRouteErrorResponse,
  Link,
} from "@remix-run/react";
import { PageLiff } from "~/types/page";
import { useCampaign, useCampaignMissions, useCampaignCredits } from "~/hooks/campaigns";
import { useLineProfile } from "~/contexts/LineLiffContext";
import ErrorView from "~/components/ErrorView";
import { ArrowLeft, Trophy, Target, Star, Clock, CheckCircle, Circle, Lock } from "lucide-react";

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
  } = useCampaign({ campaignId: campaignId || "", enabled: !!campaignId && !isProfileLoading && !!profile?.userId });

  const {
    data: missions,
    isLoading: isMissionsLoading,
    error: missionsError,
  } = useCampaignMissions({ campaignId: campaignId || "", enabled: !!campaignId && !isProfileLoading && !!profile?.userId });

  const {
    data: credits,
    isLoading: isCreditsLoading,
    error: creditsError,
  } = useCampaignCredits({ campaignId: campaignId || "", enabled: !!campaignId && !isProfileLoading && !!profile?.userId });

  const primaryColor = page.bg_color || "#1DB446";

  // Handle loading states
  if (isProfileLoading || isCampaignLoading || isMissionsLoading || isCreditsLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
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
              <div key={i} className="h-24 w-full animate-pulse rounded-lg bg-gray-200"></div>
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

  // Redirect if not registered
  if (!campaign.user_stats.is_registered) {
    navigate(`/a/${liffId}/${slug}/campaign/${campaignId}`, { replace: true });
    return null;
  }

  const getMissionStatusIcon = (mission: typeof missions.data[0]) => {
    if (mission.user_progress.is_completed) {
      return <CheckCircle size={20} className="text-green-500" />;
    }
    if (mission.user_progress.has_started) {
      return <Circle size={20} className="text-yellow-500" />;
    }
    if (!mission.user_progress.is_available) {
      return <Lock size={20} className="text-gray-400" />;
    }
    return <Circle size={20} className="text-gray-400" />;
  };

  const getMissionStatusText = (mission: typeof missions.data[0]) => {
    if (mission.user_progress.is_completed) {
      return lang === 'th' ? 'เสร็จสิ้น' : 'Completed';
    }
    if (mission.user_progress.has_started) {
      return lang === 'th' ? 'กำลังดำเนินการ' : 'In Progress';
    }
    if (!mission.user_progress.is_available) {
      return lang === 'th' ? 'ยังไม่เปิด' : 'Locked';
    }
    return lang === 'th' ? 'พร้อมเริ่ม' : 'Ready';
  };

  const completedMissions = missions.data.filter(m => m.user_progress.is_completed).length;
  const totalMissions = missions.data.length;
  const progressPercentage = totalMissions > 0 ? (completedMissions / totalMissions) * 100 : 0;

  const pageTitle = lang === 'th' ? 'แดชบอร์ดแคมเปญ' : 'Campaign Dashboard';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white p-4 shadow-sm">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate(`/a/${liffId}/${slug}/campaign/${campaignId}`)}
            className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-gray-100"
          >
            <ArrowLeft size={20} />
          </button>
          <div className="flex items-center gap-2">
            <Trophy size={20} style={{ color: primaryColor }} />
            <h1 className="text-lg font-semibold text-gray-900">
              {pageTitle}
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-6 p-4">
        {/* Campaign Info Card */}
        <div className="rounded-lg bg-white p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div
                className="flex h-16 w-16 items-center justify-center rounded-full text-white"
                style={{ backgroundColor: primaryColor }}
              >
                <Trophy size={24} />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-900">{campaign.title[lang]}</h2>
              <p className="mt-1 text-sm text-gray-600">{campaign.description[lang]}</p>

              {/* Progress Bar */}
              <div className="mt-4">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>{lang === 'th' ? 'ความก้าวหน้า' : 'Progress'}</span>
                  <span>{completedMissions}/{totalMissions} {lang === 'th' ? 'ภารกิจ' : 'missions'}</span>
                </div>
                <div className="mt-2 h-3 w-full rounded-full bg-gray-200">
                  <div
                    className="h-3 rounded-full transition-all duration-300"
                    style={{
                      width: `${progressPercentage}%`,
                      backgroundColor: primaryColor,
                    }}
                  ></div>
                </div>
                <div className="mt-1 text-right text-xs text-gray-500">
                  {Math.round(progressPercentage)}% {lang === 'th' ? 'เสร็จสิ้น' : 'complete'}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Credits Summary */}
        <Link
          to={`/a/${liffId}/${slug}/campaign/${campaignId}/credits`}
          className="block rounded-lg bg-white p-6 shadow-sm hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-lg font-semibold text-gray-900">
              <Star size={20} />
              {lang === 'th' ? 'เครดิตของคุณ' : 'Your Credits'}
            </div>
            <div className="text-gray-400">→</div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-blue-50 p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">{credits.total_earned}</div>
              <div className="text-sm text-blue-600">{lang === 'th' ? 'เครดิตที่ได้รับ' : 'Credits Earned'}</div>
            </div>
            <div className="rounded-lg bg-green-50 p-4 text-center">
              <div className="text-2xl font-bold text-green-600">{credits.current_balance}</div>
              <div className="text-sm text-green-600">{lang === 'th' ? 'เครดิตปัจจุบัน' : 'Current Balance'}</div>
            </div>
          </div>
          <div className="mt-2 text-center text-sm text-gray-500">
            {lang === 'th' ? 'แตะเพื่อดูประวัติเครดิต' : 'Tap to view credit history'}
          </div>
        </Link>

        {/* Missions List */}
        <div className="rounded-lg bg-white p-6 shadow-sm">
          <div className="flex items-center gap-2 text-lg font-semibold text-gray-900">
            <Target size={20} />
            {lang === 'th' ? 'ภารกิจทั้งหมด' : 'All Missions'}
          </div>
          <div className="mt-4 space-y-3">
            {missions.data.map((mission) => {
              const isAccessible = mission.user_progress.is_available || mission.user_progress.has_started || mission.user_progress.is_completed;

              return (
                <div key={mission.id} className="rounded-lg border border-gray-200 p-4">
                  {isAccessible ? (
                    <Link
                      to={`/a/${liffId}/${slug}/campaign/${campaignId}/mission/${mission.id}`}
                      className="flex items-center gap-4 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex-shrink-0">
                        {getMissionStatusIcon(mission)}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{mission.title[lang]}</h3>
                        <p className="text-sm text-gray-600">{mission.description}</p>
                        <div className="mt-2 flex items-center gap-4 text-xs text-gray-500">
                          <div className="flex items-center gap-1">
                            <Star size={12} />
                            {mission.reward_credits} {lang === 'th' ? 'เครดิต' : 'credits'}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock size={12} />
                            {getMissionStatusText(mission)}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ) : (
                    <div className="flex items-center gap-4 opacity-60">
                      <div className="flex-shrink-0">
                        {getMissionStatusIcon(mission)}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{mission.title[lang]}</h3>
                        <p className="text-sm text-gray-600">{mission.description}</p>
                        <div className="mt-2 flex items-center gap-4 text-xs text-gray-500">
                          <div className="flex items-center gap-1">
                            <Star size={12} />
                            {mission.reward_credits} {lang === 'th' ? 'เครดิต' : 'credits'}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock size={12} />
                            {getMissionStatusText(mission)}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Campaign Status */}
        <div className="rounded-lg bg-white p-6 shadow-sm">
          <div className="text-center">
            {progressPercentage === 100 ? (
              <div className="text-green-600">
                <CheckCircle size={48} className="mx-auto mb-2" />
                <div className="text-lg font-semibold">
                  {lang === 'th' ? 'ยินดีด้วย! คุณทำภารกิจครบแล้ว' : 'Congratulations! You completed all missions'}
                </div>
              </div>
            ) : (
              <div className="text-blue-600">
                <Target size={48} className="mx-auto mb-2" />
                <div className="text-lg font-semibold">
                  {lang === 'th' ? 'เหลืออีก' : 'Remaining'} {totalMissions - completedMissions} {lang === 'th' ? 'ภารกิจ' : 'missions'}
                </div>
                <div className="text-sm text-gray-600">
                  {lang === 'th' ? 'ทำภารกิจให้เสร็จเพื่อรับเครดิตเพิ่มเติม' : 'Complete missions to earn more credits'}
                </div>
              </div>
            )}
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