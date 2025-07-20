import { useOutletContext } from "@remix-run/react";
import { PageLiff } from "~/types/page";
import MainContent from "./_components/MainContent";
import PromotionTemplate from "./_components/PromotionTemplate";
import { useVoucherUserStats } from "~/hooks/vouchers/useVoucherUserStats";
import { HeaderSkeleton } from "./_components/SkeletonLoad/HeaderSkeleton";
import Header from "./_components/Header";
import { MainContentSkeleton } from "./_components/SkeletonLoad/MainContentSkeleton";
import { useMe } from "~/hooks/useMe";
import { useLineProfile } from "~/contexts/LineLiffContext";

const Route = () => {
  const { page, lang } = useOutletContext<{ page: PageLiff; lang: string }>();
  const { profile, isLoading: isProfileLoading, error: profileError } = useLineProfile();
  const { data: voucherUserStats, isLoading: isVoucherUserStatsLoading } =
    useVoucherUserStats({
      userId: profile?.userId || "",
      enabled: !isProfileLoading && !!profile?.userId,
    });

  const { data: me, isLoading: isMeLoading } = useMe();

  if (isProfileLoading || profileError || isVoucherUserStatsLoading || isMeLoading) {
    if (profileError) return <div className="text-red-500">{profileError.message}</div>;
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
            voucherUserStats={voucherUserStats}
          />
          {templateType === "promotion" ? (
            <PromotionTemplate
              vouchers={page?.vouchers}
              populars={page?.populars}
              primaryColor={page.bg_color || ""}
              language={lang}
            />
          ) : (
            voucherUserStats && (
              <MainContent
                page={page}
                language={lang}
                voucherUserStats={voucherUserStats}
                populars={page?.populars}
                vouchers={page?.vouchers}
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
