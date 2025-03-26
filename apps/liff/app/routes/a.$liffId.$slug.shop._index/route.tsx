import { useOutletContext } from "@remix-run/react";
import { PageLiff } from "~/types/page";
import MainContent from "./components/MainContent";
import { useLiff } from "~/hooks/useLiff";
import Loading from "~/components/Loading";
import { useLineProfile } from "~/hooks/useLineProfile";
import { useVoucherUserStats } from "~/hooks/vouchers/useVoucherUserStats";
import { HeaderSkeleton } from "./components/SkeletonLoad/HeaderSkeleton";
import { useBrands } from "~/hooks/brands/useBrands";
import { useVouchers } from "~/hooks/vouchers/useVouchers";
import Header from "./components/Header";
import { MainContentSkeleton } from "./components/SkeletonLoad/MainContentSkeleton";
import _ from "lodash";
import { useProfile } from "~/hooks/Profiles/useProfile";

const Route = () => {
  const { page } = useOutletContext<{ page: PageLiff }>();
  const { language, isLoggedIn } = useLiff({ liffId: page.liff_id });
  const isThaiLanguage = language.startsWith("th");
  const lang = "en";
  const { data: profile, isLoading: isProfileLoading } = useLineProfile();
  const { data: voucherUserStats, isLoading: isVoucherUserStatsLoading } =
    useVoucherUserStats({ userId: profile?.userId || "" });
  const { data: vouchers, isLoading: isVouchersLoading } = useVouchers({
    q: "",
    status: "published",
  });
  const { data: brands, isLoading: isBrandsLoading } = useBrands({
    status: "published",
  });

  const { data: userProfile, isLoading: isUserProfileLoading } = 
    useProfile({ 
      uid: profile?.userId || "",
      liff_id: page.liff_id,
      enabled: isLoggedIn && !isProfileLoading && !!profile?.userId
    });

  if (!isLoggedIn || isProfileLoading || isUserProfileLoading) {
    return <Loading />;
  }

  if (
    isProfileLoading ||
    isVoucherUserStatsLoading ||
    isVouchersLoading ||
    isBrandsLoading
  ) {
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

  return (
    <>
      {page?.liff_id && (
        <>
          <Header 
            page={page} 
            profile={profile} 
            language={lang}
            userProfileId={userProfile?.id}
          />
          {voucherUserStats && (
            <MainContent
              page={page}
              language={lang}
              voucherUserStats={voucherUserStats}
              vouchers={vouchers}
              brands={brands}
            />
          )}
        </>
      )}
    </>
  );
};

export default Route;
