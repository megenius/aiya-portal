import React from "react";
import CouponCard from "./CouponCard";
import { Voucher } from "~/types/app";

interface CouponListProps {
  coupons?: Voucher[];
  title: string;
  language: string;
}

const CouponList: React.FC<CouponListProps> = ({
  coupons,
  title,
  language
}) => {

  if (!coupons?.length) return null;

  return (
    <div className="space-y-2">
      <h3 className="font-medium text-lg px-4">{title}</h3>
      <div
        className="flex overflow-x-auto gap-4 px-4"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {coupons?.map((coupon) => (
          <CouponCard
            key={coupon.id}
            coupon={coupon}
            language={language}
          />
        ))}
      </div>
    </div>
  );
};

export default CouponList;
