import { useOutletContext } from "@remix-run/react";
import { PageLiff } from "~/types/page";
import MainContent from "./components/MainContent";
import PromotionTemplate from "./components/PromotionTemplate";
import { useLiff } from "~/hooks/useLiff";
import Loading from "~/components/Loading";
import { useLineProfile } from "~/hooks/useLineProfile";
import { useVoucherUserStats } from "~/hooks/vouchers/useVoucherUserStats";
import { HeaderSkeleton } from "./components/SkeletonLoad/HeaderSkeleton";
import Header from "./components/Header";
import { MainContentSkeleton } from "./components/SkeletonLoad/MainContentSkeleton";
import { useProfile } from "~/hooks/Profiles/useProfile";

const Route = () => {
  const { page } = useOutletContext<{ page: PageLiff }>();
  const { language, isLoggedIn } = useLiff({ liffId: page.liff_id as string });
  const isThaiLanguage = language.startsWith("th");
  const lang = "th";
  const { data: profile, isLoading: isProfileLoading } = useLineProfile();
  const { data: voucherUserStats, isLoading: isVoucherUserStatsLoading } =
    useVoucherUserStats({
      userId: profile?.userId || "",
      enabled: isLoggedIn && !isProfileLoading && !!profile?.userId,
    });
  // const { data: vouchers, isLoading: isVouchersLoading } = useVouchers({
  //   q: "",
  //   status: "published",
  // });
  // const { data: brands, isLoading: isBrandsLoading } = useBrands({
  //   status: "published",
  // });

  const { data: userProfile, isLoading: isUserProfileLoading } = useProfile({
    uid: profile?.userId || "",
    liff_id: page.liff_id as string,
    enabled: isLoggedIn && !isProfileLoading && !!profile?.userId,
  });

  if (!isLoggedIn) {
    return <Loading />;
  }

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
  const templateType = (page?.metadata as any)?.template || 'promotion';

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
          {templateType === 'promotion' ? (
            <PromotionTemplate
            vouchers={page?.vouchers }
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
