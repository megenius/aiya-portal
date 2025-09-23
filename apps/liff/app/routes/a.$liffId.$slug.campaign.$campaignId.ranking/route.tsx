import {
  useOutletContext,
  useParams,
  useNavigate,
  useRouteError,
  isRouteErrorResponse,
} from "@remix-run/react";
import { PageLiff } from "~/types/page";
import { useLineProfile } from "~/contexts/LineLiffContext";
import ErrorView from "~/components/ErrorView";
import { Crown, Medal, Award } from "lucide-react";
import BackButton from "~/components/BackButton";
import { useCampaignRanking } from "~/hooks/campaigns/useCampaignRanking";
import { t } from "~/i18n/messages";

// use API data instead of mock

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
    data: ranking,
    isLoading: isRankingLoading,
    error: rankingError,
  } = useCampaignRanking({
    campaignId: campaignId || "",
    enabled: !!campaignId && !isProfileLoading && !!profile?.userId,
    limit: 50,
  });

  if (isProfileLoading || isRankingLoading) {
    return (
      <div className="h-full overflow-hidden bg-gray-50">
        <div className="bg-white p-4">
          <div className="flex items-center gap-3">
            <div className="h-6 w-6 animate-pulse rounded bg-gray-200"></div>
            <div className="h-6 w-40 animate-pulse rounded bg-gray-200"></div>
          </div>
        </div>
        <div className="space-y-4 p-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="h-16 w-full animate-pulse rounded-lg bg-gray-200"
            ></div>
          ))}
        </div>
      </div>
    );
  }

  if (profileError || rankingError) {
    const language =
      typeof navigator !== "undefined" && navigator.language?.startsWith("en")
        ? ("en" as const)
        : ("th" as const);
    let rankingMessage: string | undefined;
    if (rankingError && typeof rankingError === "object" && "message" in rankingError) {
      const msg = (rankingError as { message?: unknown }).message;
      rankingMessage = typeof msg === "string" ? msg : undefined;
    }
    const fallback = language === "th" ? "เกิดข้อผิดพลาด" : "An error occurred";
    return (
      <ErrorView
        status={500}
        message={profileError?.message || rankingMessage || fallback}
        language={language}
      />
    );
  }

  return (
    <div className="flex h-full flex-col overflow-hidden bg-gradient-to-b from-indigo-800 via-purple-700 to-fuchsia-600">
      <div className="min-h-0 flex-1 overflow-y-auto">
        {/* Header */}
        <div className="space-y-2">
          <div className="px-4 pt-4">
            <div className="flex items-center justify-between">
              <BackButton
                onClick={() =>
                  navigate(
                    `/a/${liffId}/${slug}/campaign/${campaignId}/dashboard`,
                  )
                }
                variant="overlay"
                showText={true}
                text={t(lang as "th" | "en", "common.back")}
              />
            </div>
            <h1 className="mt-12 text-center text-3xl font-semibold tracking-tight text-white">
              {t(lang as "th" | "en", "ranking.title")}
            </h1>
            <p className="mt-2 text-center text-white/80">
              {t(lang as "th" | "en", "ranking.subtitle")}
            </p>
          </div>

          {/* Current User Card */}
          <div className="px-4 py-6">
            <div className="mb-4 text-center text-sm font-medium text-white/90">
              {t(lang as "th" | "en", "ranking.yourRank")}
            </div>
            <div className="flex items-center rounded-xl border border-white/20 bg-white/10 p-4 shadow-lg backdrop-blur-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-xl font-bold text-white">
                #{ranking?.me?.rank ?? 0}
              </div>
              <div className="ml-4 flex-1">
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-white/30">
                    {profile?.pictureUrl ? (
                      <img
                        src={profile.pictureUrl}
                        alt="Profile"
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-white/20 text-white">
                        👤
                      </div>
                    )}
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      {ranking?.me?.name || profile?.displayName || ""}
                    </div>
                    <div className="text-sm text-white/80">
                      {t(lang as "th" | "en", "ranking.you")}
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-white">
                  {(ranking?.me?.credits ?? 0).toLocaleString()}
                </div>
                <div className="text-sm text-white/80">
                  {t(lang as "th" | "en", "common.creditsLabel")}
                </div>
              </div>
            </div>
          </div>

          {/* Top 3 Podium */}
          <div className="px-4">
            <div className="mb-6 text-center text-sm font-medium text-white/90">
              {t(lang as "th" | "en", "ranking.topPlayers")}
            </div>

            <div className="mb-8 flex items-end justify-center gap-6">
              {/* 2nd Place */}
              <div className="flex flex-col items-center">
                <div className="relative mb-3">
                  <div className="border-3 h-14 w-14 overflow-hidden rounded-full border-gray-300">
                    {ranking?.items?.[1]?.pictureUrl ? (
                      <img
                        src={ranking.items[1].pictureUrl}
                        alt={ranking.items[1].name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-white/20 text-white">
                        👤
                      </div>
                    )}
                  </div>
                  <div className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-gray-300">
                    <Medal className="h-4 w-4 text-gray-600" />
                  </div>
                </div>
                <div className="h-16 w-16 rounded-t-lg bg-gradient-to-t from-gray-400 to-gray-300 shadow-lg"></div>
                <div className="mt-2 text-center text-xs font-medium text-white">
                  <div className="font-bold">
                    {ranking?.items?.[1]?.name ?? "-"}
                  </div>
                  <div>
                    {(ranking?.items?.[1]?.credits ?? 0).toLocaleString()}
                  </div>
                </div>
              </div>

              {/* 1st Place */}
              <div className="flex flex-col items-center">
                <div className="relative mb-3">
                  <div className="h-18 w-18 overflow-hidden rounded-full border-4 border-yellow-400">
                    {ranking?.items?.[0]?.pictureUrl ? (
                      <img
                        src={ranking.items[0].pictureUrl}
                        alt={ranking.items[0].name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-white/20 text-white">
                        👤
                      </div>
                    )}
                  </div>
                  <div className="absolute -right-1 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-yellow-400">
                    <Crown className="h-5 w-5 text-yellow-700" />
                  </div>
                </div>
                <div className="h-20 w-20 rounded-t-lg bg-gradient-to-t from-yellow-500 to-yellow-400 shadow-xl"></div>
                <div className="mt-2 text-center text-xs font-medium text-white">
                  <div className="font-bold">
                    {ranking?.items?.[0]?.name ?? "-"}
                  </div>
                  <div>
                    {(ranking?.items?.[0]?.credits ?? 0).toLocaleString()}
                  </div>
                </div>
              </div>

              {/* 3rd Place */}
              <div className="flex flex-col items-center">
                <div className="relative mb-3">
                  <div className="border-3 h-14 w-14 overflow-hidden rounded-full border-amber-600">
                    {ranking?.items?.[2]?.pictureUrl ? (
                      <img
                        src={ranking.items[2].pictureUrl}
                        alt={ranking.items[2].name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-white/20 text-white">
                        👤
                      </div>
                    )}
                  </div>
                  <div className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-amber-600">
                    <Award className="h-4 w-4 text-white" />
                  </div>
                </div>
                <div className="h-12 w-16 rounded-t-lg bg-gradient-to-t from-amber-700 to-amber-600 shadow-lg"></div>
                <div className="mt-2 text-center text-xs font-medium text-white">
                  <div className="font-bold">
                    {ranking?.items?.[2]?.name ?? "-"}
                  </div>
                  <div>
                    {(ranking?.items?.[2]?.credits ?? 0).toLocaleString()}
                  </div>
                </div>
              </div>
            </div>

            {/* Ranking List */}
            <div className="space-y-3 pb-6">
              {(ranking?.items ?? []).slice(3).map((user) => (
                <div
                  key={user.id}
                  className="flex items-center rounded-xl border border-white/20 bg-white/10 p-4 shadow-sm backdrop-blur-sm"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-sm font-bold text-white">
                    #{user.rank}
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 overflow-hidden rounded-full border border-white/30">
                        {user.pictureUrl ? (
                          <img
                            src={user.pictureUrl}
                            alt={user.name}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center bg-white/20 text-white">
                            👤
                          </div>
                        )}
                      </div>
                      <div>
                        <div className="font-semibold text-white">
                          {user.name}
                        </div>
                        <div className="text-sm text-white/70">
                          @{user.displayName}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-white">
                      {user.credits.toLocaleString()}
                    </div>
                    <div className="text-sm text-white/70">
                      {t(lang as "th" | "en", "common.creditsLabel")}
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
