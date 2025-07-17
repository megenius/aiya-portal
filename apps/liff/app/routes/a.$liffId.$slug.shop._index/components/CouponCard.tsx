import { useNavigate, useOutletContext } from "@remix-run/react";
import React from "react";
import { Voucher } from "~/types/app";
import { PageLiff } from "~/types/page";
import { getDirectusFileUrl } from "~/utils/files";

interface CouponCardProps {
  coupon: Voucher;
  language: string;
}

const CouponCard: React.FC<CouponCardProps> = ({ coupon, language }) => {
  const { page } = useOutletContext<{ page: PageLiff }>();
  const navigate = useNavigate();
  const title = coupon.metadata.title[language];

  const navigateToCollectCoupon = (couponId: string) =>
    navigate(`/a/${page.liff_id}/${page.slug}/coupon/${couponId}`);

  return (
    <button
      onClick={() => navigateToCollectCoupon(coupon.id)}
      className="bg-white flex flex-col shrink-0 w-32"
    >
      <div className="h-32 relative">
        <img
          src={getDirectusFileUrl(coupon.cover as string) ?? ""}
          alt={title ?? ""}
          className="w-full h-32 object-cover rounded-2xl"
        />

        {/* Gradient Overlay */}
        <div className="absolute bottom-0 left-0 w-full h-[35%] bg-gradient-to-t from-black/60 via-black/15 to-transparent rounded-b-2xl" />

        <div className="absolute bottom-2 left-2">
          <img
            src={getDirectusFileUrl(
              (coupon?.voucher_brand_id?.logo as string) ?? ""
            )}
            alt={coupon?.voucher_brand_id?.name ?? ""}
            className="w-7 h-7 rounded-full object-cover border border-white shadow-sm"
          />
        </div>
      </div>

      <div className="pt-3">
        <h3 className="font-bold leading-snug text-start text-sm line-clamp-2">
          {coupon?.voucher_brand_id?.name}
        </h3>

        <div className="flex items-center justify-between">
          <span className="text-gray-400 text-start text-xs text-pretty font-medium line-clamp-2">
            {title}
          </span>
          {/* {expiry && (
            <span className="text-xs text-gray-500">
              เหลือ {expiry}
            </span>
          )} */}
        </div>
      </div>
    </button>
  );
};

export default CouponCard;
