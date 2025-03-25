import { useOutletContext } from "@remix-run/react";
import { PageLiff } from "~/types/page";
import { useLiff } from "~/hooks/useLiff";
import Loading from "~/components/Loading";
import { useLineProfile } from "~/hooks/useLineProfile";

const Route = () => {
  const { page } = useOutletContext<{ page: PageLiff }>();
  const { language, isLoggedIn } = useLiff({ liffId: page.liff_id });
  const isThaiLanguage = language.startsWith("th");
  const lang = isThaiLanguage ? "th" : "en";
  
  const { data: profile, isLoading: isProfileLoading } = useLineProfile();

  if (!isLoggedIn) {
    return <Loading />;
  }

  if (isProfileLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-pulse text-primary-500">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          {lang === "th" ? "แบบสำรวจ" : "Survey"}
        </h1>
        <p className="text-gray-600">
          {lang === "th" 
            ? "ยินดีต้อนรับสู่หน้าแบบสำรวจ กรุณารอการอัพเดตเพิ่มเติม"
            : "Welcome to the survey page. Please wait for further updates."}
        </p>
        
        {profile && (
          <div className="mt-4 p-3 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-500">
              {lang === "th" ? "เข้าสู่ระบบโดย:" : "Logged in as:"}
            </p>
            <div className="flex items-center mt-2">
              {profile.pictureUrl && (
                <img 
                  src={profile.pictureUrl} 
                  alt="Profile" 
                  className="w-10 h-10 rounded-full mr-3"
                />
              )}
              <span className="font-medium">{profile.displayName}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Route;
