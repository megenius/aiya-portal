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
            couponId={coupon.id}
            cover={coupon.cover as string}
            logo={coupon.voucher_brand_id?.logo as string}
            title={coupon.voucher_brand_id?.name as string}
            description={coupon.metadata?.title[language]}
            endDate={coupon.end_date as string}
            language={language}
          />
        ))}
      </div>
    </div>
  );
};

export default CouponList;
