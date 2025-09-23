import {
  useOutletContext,
  useParams,
  useNavigate,
  useRouteError,
  isRouteErrorResponse,
} from "@remix-run/react";
import { useState } from "react";
import { PageLiff } from "~/types/page";
import { useCampaignCredits } from "~/hooks/campaigns";
import { useLineProfile } from "~/contexts/LineLiffContext";
import ErrorView from "~/components/ErrorView";
import { ArrowLeft, Star, Plus, Minus, Calendar, Filter, TrendingUp, Award, Target } from "lucide-react";
import { t } from "~/i18n/messages";

const Route = () => {
  const { page, lang } = useOutletContext<{ page: PageLiff; lang: string }>();
  const { liffId, slug, campaignId } = useParams();
  const navigate = useNavigate();

  const [filterType, setFilterType] = useState<'all' | 'earned' | 'spent'>('all');
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');

  const {
    profile,
    isLoading: isProfileLoading,
    error: profileError,
  } = useLineProfile();

  const {
    data: credits,
    isLoading: isCreditsLoading,
    error: creditsError,
  } = useCampaignCredits({ campaignId: campaignId || "", enabled: !!campaignId && !isProfileLoading && !!profile?.userId });

  const primaryColor = page.bg_color || "#1DB446";

  // Handle loading states
  if (isProfileLoading || isCreditsLoading) {
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
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-16 w-full animate-pulse rounded-lg bg-gray-200"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Handle errors
  if (profileError || creditsError) {
    const language =
      typeof navigator !== "undefined" && navigator.language?.startsWith("en")
        ? ("en" as const)
        : ("th" as const);
    return (
      <ErrorView
        status={profileError ? 500 : 404}
        message={profileError?.message || t(language, "credits.loadError")}
        language={language}
      />
    );
  }

  if (!credits) {
    return null;
  }

  // Filter and sort transactions
  let filteredTransactions = credits.transactions || [];

  if (filterType === 'earned') {
    filteredTransactions = filteredTransactions.filter(t => t.amount > 0);
  } else if (filterType === 'spent') {
    filteredTransactions = filteredTransactions.filter(t => t.amount < 0);
  }

  if (sortOrder === 'newest') {
    filteredTransactions = filteredTransactions.sort((a, b) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
  } else {
    filteredTransactions = filteredTransactions.sort((a, b) =>
      new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
    );
  }

  const pageTitle = t(lang as "th" | "en", "credits.pageTitle");

  const getTransactionIcon = (transaction: typeof credits.transactions[0]) => {
    if (transaction.amount > 0) {
      if (transaction.type === 'mission_reward') {
        return <Target size={16} className="text-green-600" />;
      }
      return <Plus size={16} className="text-green-600" />;
    }
    return <Minus size={16} className="text-red-600" />;
  };

  const getTransactionTitle = (transaction: typeof credits.transactions[0]) => {
    if (transaction.type === 'mission_reward') {
      return t(lang as "th" | "en", "credits.transactionTypes.missionReward");
    }
    if (transaction.type === 'bonus') {
      return t(lang as "th" | "en", "credits.transactionTypes.bonus");
    }
    if (transaction.type === 'redemption') {
      return t(lang as "th" | "en", "credits.transactionTypes.redemption");
    }
    if (transaction.type === 'refund') {
      return t(lang as "th" | "en", "credits.transactionTypes.refund");
    }
    return transaction.description || t(lang as "th" | "en", "credits.transactionTypes.other");
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(
      lang === 'th' ? 'th-TH' : 'en-US',
      {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }
    );
  };

  const earnedThisMonth = credits.transactions
    ?.filter(t => t.amount > 0 && new Date(t.created_at).getMonth() === new Date().getMonth())
    .reduce((sum, t) => sum + t.amount, 0) || 0;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white p-4 shadow-sm">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate(`/a/${liffId}/${slug}/campaign/${campaignId}/dashboard`)}
            className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-gray-100"
          >
            <ArrowLeft size={20} />
          </button>
          <div className="flex items-center gap-2">
            <Star size={20} style={{ color: primaryColor }} />
            <h1 className="text-lg font-semibold text-gray-900">
              {pageTitle}
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-6 p-4">
        {/* Credit Summary Cards */}
        <div className="grid grid-cols-2 gap-4">
          {/* Current Balance */}
          <div className="rounded-lg bg-white p-4 shadow-sm">
            <div className="flex items-center gap-2">
              <div
                className="flex h-8 w-8 items-center justify-center rounded-full text-white"
                style={{ backgroundColor: primaryColor }}
              >
                <Star size={16} />
              </div>
              <div className="flex-1">
                <div className="text-2xl font-bold text-gray-900">{credits.current_balance}</div>
                <div className="text-sm text-gray-600">
                  {t(lang as "th" | "en", "credits.currentBalance")}
                </div>
              </div>
            </div>
          </div>

          {/* Total Earned */}
          <div className="rounded-lg bg-white p-4 shadow-sm">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                <TrendingUp size={16} className="text-green-600" />
              </div>
              <div className="flex-1">
                <div className="text-2xl font-bold text-gray-900">{credits.total_earned}</div>
                <div className="text-sm text-gray-600">
                  {t(lang as "th" | "en", "credits.totalEarned")}
                </div>
              </div>
            </div>
          </div>

          {/* This Month */}
          <div className="rounded-lg bg-white p-4 shadow-sm">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                <Calendar size={16} className="text-blue-600" />
              </div>
              <div className="flex-1">
                <div className="text-2xl font-bold text-gray-900">{earnedThisMonth}</div>
                <div className="text-sm text-gray-600">
                  {t(lang as "th" | "en", "credits.thisMonth")}
                </div>
              </div>
            </div>
          </div>

          {/* Achievement Badge */}
          <div className="rounded-lg bg-white p-4 shadow-sm">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-100">
                <Award size={16} className="text-yellow-600" />
              </div>
              <div className="flex-1">
                <div className="text-lg font-bold text-gray-900">
                  {credits.total_earned >= 1000 ? '🏆' :
                   credits.total_earned >= 500 ? '🥈' :
                   credits.total_earned >= 100 ? '🥉' : '⭐'}
                </div>
                <div className="text-sm text-gray-600">
                  {t(lang as "th" | "en", "credits.level")}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="rounded-lg bg-white p-4 shadow-sm">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <Filter size={16} />
              {t(lang as "th" | "en", "credits.filters")}
            </div>

            {/* Transaction Type Filter */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setFilterType('all')}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  filterType === 'all'
                    ? 'text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                style={filterType === 'all' ? { backgroundColor: primaryColor } : {}}
              >
                {t(lang as "th" | "en", "credits.all")}
              </button>
              <button
                onClick={() => setFilterType('earned')}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  filterType === 'earned'
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {t(lang as "th" | "en", "credits.earned")}
              </button>
              <button
                onClick={() => setFilterType('spent')}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  filterType === 'spent'
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {t(lang as "th" | "en", "credits.spent")}
              </button>
            </div>

            {/* Sort Order */}
            <div className="flex gap-2">
              <button
                onClick={() => setSortOrder('newest')}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  sortOrder === 'newest'
                    ? 'text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                style={sortOrder === 'newest' ? { backgroundColor: primaryColor } : {}}
              >
                {t(lang as "th" | "en", "credits.newest")}
              </button>
              <button
                onClick={() => setSortOrder('oldest')}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  sortOrder === 'oldest'
                    ? 'text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                style={sortOrder === 'oldest' ? { backgroundColor: primaryColor } : {}}
              >
                {t(lang as "th" | "en", "credits.oldest")}
              </button>
            </div>
          </div>
        </div>

        {/* Transaction History */}
        <div className="rounded-lg bg-white shadow-sm">
          <div className="border-b border-gray-200 p-4">
            <h3 className="text-lg font-semibold text-gray-900">
              {t(lang as "th" | "en", "credits.transactionHistory")}
            </h3>
            <p className="text-sm text-gray-600">
              {filteredTransactions.length} {t(lang as "th" | "en", "credits.transactions")}
            </p>
          </div>

          {filteredTransactions.length === 0 ? (
            <div className="p-8 text-center">
              <Star size={48} className="mx-auto mb-4 text-gray-400" />
              <div className="text-gray-600">
                {t(lang as "th" | "en", "credits.noTransactions")}
              </div>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {filteredTransactions.map((transaction) => (
                <div key={transaction.id} className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-full ${
                        transaction.amount > 0 ? 'bg-green-100' : 'bg-red-100'
                      }`}>
                        {getTransactionIcon(transaction)}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900">
                          {getTransactionTitle(transaction)}
                        </div>
                        {transaction.description && transaction.description !== getTransactionTitle(transaction) && (
                          <div className="text-sm text-gray-600">
                            {transaction.description}
                          </div>
                        )}
                        <div className="text-xs text-gray-500">
                          {formatDate(transaction.created_at)}
                        </div>
                      </div>
                    </div>
                    <div className={`text-right font-semibold ${
                      transaction.amount > 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {transaction.amount > 0 ? '+' : ''}{transaction.amount}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Back Button */}
        <button
          onClick={() => navigate(`/a/${liffId}/${slug}/campaign/${campaignId}/dashboard`)}
          className="w-full rounded-lg border border-gray-300 bg-white py-3 px-4 font-semibold text-gray-700 transition-colors hover:bg-gray-50"
        >
          {t(lang as "th" | "en", "credits.backToDashboard")}
        </button>
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