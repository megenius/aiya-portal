import { useNavigate, useParams } from "@remix-run/react";
import React from "react";
import { getDirectusFileUrl } from "~/utils/files";

interface CouponCardProps {
  couponId: string;
  cover: string;
  logo?: string;
  title: string;
  description?: string;
  endDate?: string;
  language: string;
  width?: number | "full";
  height?: number | "full";
}

import { formatDate } from "~/utils/helpers";

function formatHHMM(dateStr?: string) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return "";
  const hh = String(d.getHours()).padStart(2, "0");
  const mm = String(d.getMinutes()).padStart(2, "0");
  return `${hh}:${mm}`;
}

const CouponCard: React.FC<CouponCardProps> = ({
  couponId,
  cover,
  logo,
  title,
  description,
  endDate,
  language,
  width = "full",
  height = "full",
}) => {
  const { liffId, slug } = useParams();
  const navigate = useNavigate();

  const navigateToCollectCoupon = () =>
    navigate(`/a/${liffId}/${slug}/coupon/${couponId}`);
  return (
    <button
      onClick={() => navigateToCollectCoupon()}
      className={`flex shrink-0 flex-col bg-white ${width === "full" ? "w-full" : `w-32`}`}
    >
      <div
        className={`relative aspect-square ${height === "full" ? "h-full" : `h-32`}`}
      >
        <img
          src={getDirectusFileUrl(cover) ?? ""}
          alt={title ?? ""}
          className={`w-full ${height === "full" ? "h-full" : `h-32`} rounded-2xl object-cover`}
        />
        {/* Gradient Overlay */}
        <div className="absolute bottom-0 left-0 h-[35%] w-full rounded-b-2xl bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
        {logo && (
          <div className="absolute bottom-2 left-2">
            <img
              src={getDirectusFileUrl(logo) ?? ""}
              alt="Logo"
              className="h-7 w-7 rounded-full border border-white object-cover shadow-sm"
            />
          </div>
        )}
      </div>
      <div className="pt-3 text-start">
        <h3 className="line-clamp-2 text-start text-sm font-semibold leading-snug">
          {title}
        </h3>
        {description && (
          <p className="mt-1 text-xs text-gray-600">{description}</p>
        )}
        {endDate && (
          <p className="mt-1 text-xs text-gray-500">
            {language === "th" ? "หมดเขต" : "Expires"}: {formatDate(endDate)} - {formatHHMM(endDate)}
          </p>
        )}
      </div>
    </button>
  );
};

export default CouponCard;
