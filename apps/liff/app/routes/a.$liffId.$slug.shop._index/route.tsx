import { useOutletContext } from "@remix-run/react";
import { PageLiff } from "~/types/page";
import MainContent from "./_components/MainContent";
import PromotionTemplate from "./_components/PromotionTemplate";
import { useLineProfile } from "~/hooks/useLineProfile";
import { useVoucherUserStats } from "~/hooks/vouchers/useVoucherUserStats";
import { HeaderSkeleton } from "./_components/SkeletonLoad/HeaderSkeleton";
import Header from "./_components/Header";
import { MainContentSkeleton } from "./_components/SkeletonLoad/MainContentSkeleton";
import { useMe } from "~/hooks/useMe";

const Route = () => {
  const { page, lang } = useOutletContext<{ page: PageLiff; lang: string }>();
  const { data: profile, isLoading: isProfileLoading } = useLineProfile();
  const { data: voucherUserStats, isLoading: isVoucherUserStatsLoading } =
    useVoucherUserStats({
      userId: profile?.userId || "",
      enabled: !isProfileLoading && !!profile?.userId,
    });
  // const { data: vouchers, isLoading: isVouchersLoading } = useVouchers({
  //   q: "",
  //   status: "published",
  // });
  // const { data: brands, isLoading: isBrandsLoading } = useBrands({
  //   status: "published",
  // });

  const { data: userProfile, isLoading: isUserProfileLoading } = useMe();

  if (isProfileLoading || isVoucherUserStatsLoading || isUserProfileLoading) {
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

  // Check page template type from metadata
  const templateType = page?.metadata?.template || "promotion";

  return (
    <>
      {page?.liff_id && (
        <>
          <Header
            page={page}
            profile={profile}
            language={lang}
            userProfileId={userProfile?.id}
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
            <MainContent
              page={page}
              language={lang}
              voucherUserStats={voucherUserStats}
              populars={page?.populars}
              vouchers={page?.vouchers}
              brands={page?.brands}
            />
          )}
        </>
      )}
    </>
  );
};

export default Route;
