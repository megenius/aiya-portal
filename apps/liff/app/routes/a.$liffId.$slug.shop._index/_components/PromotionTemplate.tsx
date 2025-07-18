import React, { useState, useEffect } from "react";
import { Voucher } from "~/types/app";
import { getDirectusFileUrl } from "~/utils/files";
import CouponCard from "./CouponCard";
import { MapPin } from "lucide-react";
import { useNavigate, useParams } from "@remix-run/react";

interface Location {
  id: string;
  name: string;
  distance?: string;
}

interface PromotionTemplateProps {
  vouchers?: Voucher[];
  populars?: Voucher[];
  location?: string;
  primaryColor?: string;
  language: string;
}

const PromotionTemplate: React.FC<PromotionTemplateProps> = ({
  vouchers,
  populars,
  location = "MBK Center ชั้น 2",
  primaryColor = "#FF0000",
  language,
}) => {
  const { liffId, slug } = useParams();
  const navigate = useNavigate();
//   const [timeLeft, setTimeLeft] = useState({
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//   });

  // Get first popular voucher for main banner
  const mainBannerVoucher = populars?.[0];

//   useEffect(() => {
//     if (!mainBannerVoucher?.end_date) return;

//     const timer = setInterval(() => {
//       const now = new Date().getTime();
//       const distance =
//         new Date(mainBannerVoucher.end_date as string).getTime() - now;

//       if (distance < 0) {
//         clearInterval(timer);
//         setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
//         return;
//       }

//       const hours = Math.floor(
//         (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//       );
//       const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//       const seconds = Math.floor((distance % (1000 * 60)) / 1000);

//       setTimeLeft({ hours, minutes, seconds });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [mainBannerVoucher?.end_date]);

  const couponText = {
    th: "คูปอง",
    en: "Coupons",
  };

  return (
    <div className="bg-white p-4 space-y-4">
      {/* {mainBannerVoucher?.end_date && (
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">
            {language === "th" ? "เริ่มแจกคูปองภายใน" : "Coupons available in"}
          </span>
          <div className="flex items-center gap-1">
            <div className="bg-black text-white px-2 py-1 rounded font-bold min-w-[32px] text-center">
              {String(timeLeft.hours).padStart(2, "0")}
            </div>
            <span className="font-bold">:</span>
            <div className="bg-black text-white px-2 py-1 rounded font-bold min-w-[32px] text-center">
              {String(timeLeft.minutes).padStart(2, "0")}
            </div>
            <span className="font-bold">:</span>
            <div className="bg-black text-white px-2 py-1 rounded font-bold min-w-[32px] text-center">
              {String(timeLeft.seconds).padStart(2, "0")}
            </div>
          </div>
        </div>
      )} */}

      {/* Location Badge */}
      {location && (
        <div className="pb-1">
          <div
            className="flex items-center gap-1 border border-primary text-primary rounded-full px-3 py-2 w-fit bg-white"
            style={{ borderColor: primaryColor, color: primaryColor }}
          >
            <MapPin className="w-4 h-4 mr-1" strokeWidth={2} />
            <span className="text-sm font-medium">{location}</span>
          </div>
        </div>
      )}

      {mainBannerVoucher && (
        <button
          onClick={() =>
            navigate(`/a/${liffId}/${slug}/coupon/${mainBannerVoucher.id}`)
          }
          className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden"
        >
          <img
            src={
              getDirectusFileUrl(mainBannerVoucher.cover as string) ||
              "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&h=450&fit=crop"
            }
            alt={mainBannerVoucher.name || "Promotion"}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex justify-center items-center">
            <div className="p-4 text-white">
              <h2 className="text-2xl font-bold mb-1">
                {mainBannerVoucher.name}
              </h2>
              {/* {mainBannerVoucher.description && (
                <p className="text-sm opacity-90">{mainBannerVoucher.description}</p>
              )} */}
            </div>
          </div>
        </button>
      )}

      {location && (
        <div className="flex items-center justify-start">
          <h3 className="text-lg font-bold">
            {couponText[language]} {location}
          </h3>
          {/* <button
            className="text-sm font-medium"
            style={{ color: primaryColor }}
          >
            {locationText[language]} &gt;
          </button> */}
        </div>
      )}

      {/* <div className="pt-3 pb-1">
        <h3 className="text-lg font-semibold">
          {language === "th" ? "คูปองใกล้ฉัน" : "Coupons Close to You"}
        </h3>
      </div> */}

      {vouchers && vouchers.length > 0 && (
        <div>
          <div className="grid grid-cols-2 gap-3">
            {vouchers.map((voucher, index) => (
              <CouponCard
                key={voucher.id || index}
                couponId={voucher.id}
                cover={typeof voucher.cover === "string" ? voucher.cover : ""}
                logo={
                  typeof voucher.voucher_brand_id?.logo === "string"
                    ? voucher.voucher_brand_id.logo
                    : undefined
                }
                title={voucher.name ?? ""}
                endDate={voucher.end_date as string}
                language={language}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PromotionTemplate;
