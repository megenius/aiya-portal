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
}

import { formatDate } from "~/utils/helpers";

const CouponCard: React.FC<CouponCardProps> = ({ couponId,cover, logo, title, description, endDate, language, width = "full" }) => {
  const { liffId, slug } = useParams();
  const navigate = useNavigate();

  const navigateToCollectCoupon = () =>
    navigate(`/a/${liffId}/${slug}/coupon/${couponId}`);
  return (
    <button onClick={() => navigateToCollectCoupon()} className={`bg-white flex flex-col shrink-0 ${width === "full" ? "w-full" : `w-[${width}px]`}`}>
      <div className="aspect-square relative">
        <img
          src={getDirectusFileUrl(cover) ?? ""}
          alt={title ?? ""}
          className="w-full h-full object-cover rounded-2xl"
        />
        {/* Gradient Overlay */}
        <div className="absolute bottom-0 left-0 w-full h-[35%] bg-gradient-to-t from-black/60 via-black/15 to-transparent rounded-b-2xl" />
        {logo && (
          <div className="absolute bottom-2 left-2">
            <img
              src={getDirectusFileUrl(logo) ?? ""}
              alt="Logo"
              className="w-7 h-7 rounded-full object-cover border border-white shadow-sm"
            />
          </div>
        )}
      </div>
      <div className="text-start pt-3">
        <h3 className="font-bold leading-snug text-start text-sm line-clamp-2">
          {title}
        </h3>
        {description && (
          <p className="text-xs text-gray-600 mt-1">{description}</p>
        )}
        {endDate && (
          <p className="text-xs text-gray-500 mt-1">
            {language === "th" ? "หมดเขต" : "Expires"}: {formatDate(endDate)}
          </p>
        )}
      </div>
    </button>
  );
};

export default CouponCard;
