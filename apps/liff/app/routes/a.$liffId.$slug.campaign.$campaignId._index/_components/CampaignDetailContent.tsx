import React from "react";
import { useNavigate, useParams } from "@remix-run/react";
import { CampaignWithUserStats } from "~/types/campaign";
import { PageLiff } from "~/types/page";
import { getDirectusFileUrl } from "~/utils/files";
import BackButton from "~/components/BackButton";

interface CampaignDetailContentProps {
  campaign: CampaignWithUserStats;
  page: PageLiff;
  language: string;
}

const CampaignDetailContent: React.FC<CampaignDetailContentProps> = ({
  campaign,
  page,
  language,
}) => {
  const navigate = useNavigate();
  const { liffId, slug } = useParams();

  const primaryColor = page.bg_color || "#1DB446";

  const handleJoinCampaign = () => {
    if (campaign.user_stats.has_agreed_pdpa) {
      if (campaign.user_stats.is_registered) {
        // Go to dashboard
        navigate(`/a/${liffId}/${slug}/campaign/${campaign.id}/dashboard`);
      } else {
        // Go to registration form
        navigate(`/a/${liffId}/${slug}/campaign/${campaign.id}/register`);
      }
    } else {
      // Go to PDPA consent
      navigate(`/a/${liffId}/${slug}/campaign/${campaign.id}/consent`);
    }
  };

  const getActionButtonText = () => {
    const { user_stats } = campaign;

    if (user_stats.is_registered) {
      return language === "th" ? "เข้าสู่แคมเปญ" : "Enter Campaign";
    } else if (user_stats.has_agreed_pdpa) {
      return language === "th" ? "ลงทะเบียน" : "Register";
    } else {
      return language === "th" ? "เข้าร่วมแคมเปญ" : "Join Campaign";
    }
  };

  const isExpired = campaign.end_date
    ? new Date() > new Date(campaign.end_date)
    : false;
  const isNotStarted = campaign.start_date
    ? new Date() < new Date(campaign.start_date)
    : false;

  return (
    <div
      className="relative flex min-h-screen flex-col"
      style={{
        backgroundImage: `url(${getDirectusFileUrl(campaign.poster_image as string)})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for better text readability */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-20"></div> */}

      {/* Header - Back button */}
      <BackButton
        onClick={() => navigate(-1)}
        variant="overlay"
        showText={true}
        text={language === "th" ? "กลับหน้าหลัก" : "Back"}
      />

      {/* Spacer to push button to bottom */}
      <div className="flex-1"></div>

      {/* Action Button - Bottom center */}
      <div className="relative z-10 pb-20">
        <div className="flex justify-center px-10">
          <button
            onClick={handleJoinCampaign}
            disabled={isExpired || isNotStarted}
            className="mx-auto w-full transform rounded-xl border-0 bg-white py-4 text-lg font-semibold text-primary transition sm:text-2xl"
            style={{
              backgroundColor:
                isExpired || isNotStarted ? "#9CA3AF" : undefined,
              minWidth: "200px",
            }}
          >
            {getActionButtonText()}
          </button>
        </div>

        {/* Warning Messages - if needed */}
        {(isExpired || isNotStarted) && (
          <div className="mx-4 mt-4 rounded-lg bg-yellow-500 bg-opacity-90 p-3">
            <p className="text-center text-sm font-medium text-white">
              {isExpired &&
                (language === "th"
                  ? "แคมเปญนี้สิ้นสุดแล้ว"
                  : "This campaign has ended")}
              {isNotStarted &&
                (language === "th"
                  ? "แคมเปญนี้ยังไม่เริ่ม"
                  : "This campaign has not started yet")}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CampaignDetailContent;
