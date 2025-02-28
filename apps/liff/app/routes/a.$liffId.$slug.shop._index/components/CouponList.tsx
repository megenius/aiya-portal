import React from "react";
import CouponCard from "./CouponCard";
import { Coupon } from "~/types/page";

interface CouponListProps {
  coupons: Coupon[];
  isThaiLanguage: boolean;
  titleTH?: string;
  titleEN?: string;
}

const CouponList: React.FC<CouponListProps> = ({
  coupons,
  isThaiLanguage,
  titleTH,
  titleEN,
}) => {
  const displayTitle = isThaiLanguage ? titleTH : titleEN;

  return (
    <div className="space-y-2">
      {displayTitle && <h3 className="font-medium text-lg px-4">{displayTitle}</h3>}
      <div
        className="flex overflow-x-auto pb-2 gap-4 px-4"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {coupons?.map((coupon) => (
          <CouponCard
            key={coupon.id}
            coupon={coupon}
            isThaiLanguage={isThaiLanguage}
          />
        ))}
      </div>
    </div>
  );
};

export default CouponList;
