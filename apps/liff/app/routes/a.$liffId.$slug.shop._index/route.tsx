import {
  useOutletContext,
  useRouteError,
  isRouteErrorResponse,
} from "@remix-run/react";
import { PageLiff } from "~/types/page";
import MainContent from "./_components/MainContent";
import PromotionTemplate from "./_components/PromotionTemplate";
import { HeaderSkeleton } from "./_components/SkeletonLoad/HeaderSkeleton";
import Header from "./_components/Header";
import { MainContentSkeleton } from "./_components/SkeletonLoad/MainContentSkeleton";
import { useMe } from "~/hooks/useMe";
import { useLineProfile } from "~/contexts/LineLiffContext";
import ErrorView from "~/components/ErrorView";

const Route = () => {
  const { page, lang } = useOutletContext<{ page: PageLiff; lang: string }>();
  const {
    profile,
    isLoading: isProfileLoading,
    error: profileError,
  } = useLineProfile();
  const { data: me, isLoading: isMeLoading } = useMe();

  if (
    isProfileLoading ||
    profileError ||
    isMeLoading
  ) {
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
    return (
      <>
        {page?.liff_id && (
          <>
            <HeaderSkeleton />
            <MainContentSkeleton />
          </>
        )}
      </>
    );
  }

  const templateType = page?.metadata?.template || "base";

  return (
    <>
      {page?.liff_id && (
        <>
          <Header
            page={page}
            profile={profile}
            language={lang}
            userProfileId={me?.id}
            voucherUserStats={me?.voucherUserStats}
          />
          {templateType === "promotion" ? (
            <PromotionTemplate
              vouchers={page?.vouchers}
              populars={page?.populars}
              primaryColor={page.bg_color || ""}
              language={lang}
            />
          ) : (
            me?.voucherUserStats && (
              <MainContent
                page={page}
                language={lang}
                voucherUserStats={me.voucherUserStats}
                populars={page?.populars}
                vouchers={page?.vouchers}
                banner_vouchers={page?.banner_vouchers}
                banner_campaigns={page?.campaigns}
                brands={page?.brands}
              />
            )
          )}
        </>
      )}
    </>
  );
};

export default Route;

export function ErrorBoundary() {
  const error = useRouteError();
  const isResponse = isRouteErrorResponse(error);
  const status = isResponse ? error.status : 500;
  const message = isResponse
    ? error.statusText
    : error instanceof Error
      ? error.message
      : undefined;

  // Safe language detection without relying on outlet context (which may not exist during errors)
  const language =
    typeof navigator !== "undefined" && navigator.language?.startsWith("en")
      ? ("en" as const)
      : ("th" as const);

  return <ErrorView status={status} message={message} language={language} />;
}
