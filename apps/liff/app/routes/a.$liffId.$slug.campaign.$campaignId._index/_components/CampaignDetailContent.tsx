import React, { useState } from "react";
import { useNavigate, useParams } from "@remix-run/react";
import { ArrowLeft, Calendar, Trophy, Users } from "lucide-react";
import { CampaignWithUserStats } from "~/types/campaign";
import { PageLiff } from "~/types/page";
import LazyImage from "~/components/LazyImage";
import { getDirectusFileUrl } from "~/utils/files";

interface CampaignDetailContentProps {
  campaign: CampaignWithUserStats;
  page: PageLiff;
  language: string;
  profile?: {
    userId: string;
    displayName: string;
    pictureUrl?: string;
  } | null;
}

const CampaignDetailContent: React.FC<CampaignDetailContentProps> = ({
  campaign,
  page,
  language,
  profile,
}) => {
  const navigate = useNavigate();
  const { liffId, slug } = useParams();
  const [imageLoading, setImageLoading] = useState(true);

  const primaryColor = page.bg_color || "#1DB446";

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === "th" ? "th-TH" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

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

  const isExpired = new Date() > new Date(campaign.end_date);
  const isNotStarted = new Date() < new Date(campaign.start_date);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white p-4 shadow-sm">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-gray-100"
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-lg font-semibold text-gray-900">
            {language === "th" ? "รายละเอียดแคมเปญ" : "Campaign Details"}
          </h1>
        </div>
      </div>

      {/* Campaign Banner */}
      <div className="bg-white">
        <div className="relative aspect-video w-full overflow-hidden">
          <LazyImage
            src={getDirectusFileUrl(campaign.banner_image)}
            alt={`Banner for ${campaign.title}`}
            className="h-full w-full object-cover"
            aspectRatio="16/9"
            placeholder="blur"
            onLoad={() => setImageLoading(false)}
          />
          {imageLoading && (
            <div className="absolute inset-0 animate-pulse bg-gray-200"></div>
          )}
        </div>
      </div>

      {/* Campaign Content */}
      <div className="space-y-6 bg-white p-4">
        {/* Title and Status */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-gray-900">
            {campaign.title?.[language]}
          </h2>
        </div>

        {/* Description */}
        <div className="prose prose-sm max-w-none text-gray-700">
          <p className="whitespace-pre-line">
            {campaign.description?.[language] || ""}
          </p>
        </div>

        {/* Campaign Period */}
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Calendar size={16} />
          <span>
            {formatDate(campaign.start_date)} - {formatDate(campaign.end_date)}
          </span>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-lg border border-gray-200 p-4 text-center">
            <div className="flex items-center justify-center gap-2 text-2xl font-bold text-gray-900">
              <Trophy size={24} style={{ color: primaryColor }} />
              {campaign.user_stats.total_credits}
            </div>
            <p className="text-sm text-gray-600">
              {language === "th" ? "สิทธิ์ที่ได้รับ" : "Credits Earned"}
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 p-4 text-center">
            <div className="flex items-center justify-center gap-2 text-2xl font-bold text-gray-900">
              <Users size={24} style={{ color: primaryColor }} />
              {campaign.user_stats.is_registered ? "1" : "0"}
            </div>
            <p className="text-sm text-gray-600">
              {language === "th" ? "สถานะการเข้าร่วม" : "Participation Status"}
            </p>
          </div>
        </div>

        {/* Warning Messages */}
        {(isExpired || isNotStarted) && (
          <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4">
            <p className="text-sm text-yellow-800">
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

        {/* Action Button */}
        <div className="pt-4">
          <button
            onClick={handleJoinCampaign}
            disabled={isExpired || isNotStarted}
            className="w-full rounded-lg px-4 py-3 font-semibold text-white transition-colors disabled:cursor-not-allowed disabled:opacity-50"
            style={{
              backgroundColor:
                isExpired || isNotStarted
                  ? "#9CA3AF"
                  : primaryColor,
            }}
          >
            {getActionButtonText()}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetailContent;
