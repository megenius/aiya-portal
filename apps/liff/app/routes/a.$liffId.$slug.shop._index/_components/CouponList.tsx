import React from "react";
import CouponCard from "./CouponCard";
import { Voucher } from "~/types/app";

interface CouponListProps {
  coupons?: Voucher[];
  title?: string;
  language: string;
  scrollDirection?: "horizontal" | "vertical";
}

const CouponList: React.FC<CouponListProps> = ({
  coupons,
  title,
  language,
  scrollDirection = "horizontal",
}) => {
  if (!coupons?.length) return null;

  return (
    <div className="space-y-2">
      <h3 className="px-4 text-lg font-medium">{title}</h3>
      {scrollDirection === "horizontal" ? (
        <div
          className={"flex gap-4 overflow-x-auto px-4"}
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {coupons?.map((coupon, index) => (
            <CouponCard
              key={coupon.id}
              couponId={coupon.id}
              cover={coupon.cover as string}
              logo={coupon.voucher_brand_id?.logo as string}
              title={coupon.voucher_brand_id?.name as string}
              description={coupon.metadata?.title[language]}
              endDate={coupon.end_date as string}
              language={language}
              width={32}
              height={32}
              priority={index < 3}
              placeholder={index < 3 ? "shimmer" : "blur"}
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3 p-4">
          {coupons.map((coupon, index) => (
            <CouponCard
              key={coupon.id || index}
              couponId={coupon.id}
              cover={typeof coupon.cover === "string" ? coupon.cover : ""}
              logo={
                typeof coupon.voucher_brand_id?.logo === "string"
                  ? coupon.voucher_brand_id.logo
                  : undefined
              }
              title={coupon.metadata?.title[language] ?? ""}
              endDate={coupon.end_date as string}
              language={language}
              priority={index < 4}
              placeholder={index < 4 ? "shimmer" : "blur"}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CouponList;
