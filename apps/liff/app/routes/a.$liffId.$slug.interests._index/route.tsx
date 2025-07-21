import {
  useOutletContext,
  useSearchParams,
} from "@remix-run/react";
import Loading from "~/components/Loading";
import MainContent from "./_components/MainContent";
import { PageLiff } from "~/types/page";
import { useLineLiff, useLineProfile } from "~/contexts/LineLiffContext";

const Route = () => {
  const { page, lang } = useOutletContext<{ page: PageLiff,lang: string }>();
  const { isLoggedIn } = useLineLiff();
  const [search] = useSearchParams()
  const dest = search.get("dest") || "";
  const referrerId = search.get("ref") || undefined; // เพิ่มการดึงค่า referrer จาก URL

  const { profile, isLoading: isProfileLoading, error: profileError } = useLineProfile();

  if (!isLoggedIn || isProfileLoading) {
    return <Loading primaryColor={page?.bg_color as string} />;
  }

  if (profileError) {
    return <div className="text-red-500">{profileError.message}</div>;
  }

  if (!profile) {
    return <Loading primaryColor={page?.bg_color as string} />
  }

  return (
    <>
      <MainContent 
        page={page} 
        lineProfile={profile} 
        language={lang} 
        dest={dest} 
        referrerId={referrerId} // ส่งค่า referrer ไปยัง MainContent
      />
    </>
  );
};

export default Route;
