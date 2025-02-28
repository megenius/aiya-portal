import { useNavigate } from "@remix-run/react";
import React from "react";
import { Coupon } from "~/types/page";

interface CouponCardProps {
  coupon: Coupon;
  isThaiLanguage: boolean;
}

const CouponCard: React.FC<CouponCardProps> = ({
  coupon,
  isThaiLanguage,
}) => {
    const navigate = useNavigate();
    const title = isThaiLanguage ? coupon.titleTH : coupon.titleEN;
    const promotion = isThaiLanguage ? coupon.promotionTH : coupon.promotionEN;

      const navigateToCollectCoupon = (couponId: string) =>
        navigate(`/a/mockup/coupon/${couponId}`);
  
  return (
    <button
      onClick={() => navigateToCollectCoupon(coupon.id)}
      className="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer flex flex-col shrink-0 w-36"
    >
      <div className="h-32 relative">
        <img
          src={coupon.image}
          alt={title}
          className="w-full h-32 object-cover"
        />
        <div className="absolute bottom-2 left-2">
          {/* {shopLogo ? (
            <img 
              src={shopLogo} 
              alt="Shop logo" 
              className="w-7 h-7 rounded-full object-cover border border-white shadow-sm"
            />
          ) : ( */}
            <div className="w-7 h-7 flex items-center justify-center rounded-full object-cover bg-white border border-white shadow-sm text-[6px]">
              LOGO
            </div>
          {/* )} */}
        </div>
      </div>
      <div className="p-3">
        <h3 className="font-medium leading-snug text-start text-sm line-clamp-2">
          {title}
        </h3>
        
        <div className="flex items-center justify-between">
          <span className="text-primary text-start text-xs text-pretty font-medium line-clamp-2">
            {promotion}
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
