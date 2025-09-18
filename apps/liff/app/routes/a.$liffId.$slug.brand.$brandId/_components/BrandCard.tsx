import { Ticket } from "lucide-react";
import React from "react";
import LazyImage from "~/components/LazyImage";
import { Brand } from "~/types/app";
import { getDirectusFileUrl } from "~/utils/files";
import InfoItem from "./InfoItem";

interface BrandCardProps {
  brand: Brand;
  couponCount: number;
  language: string;
}

const BrandCard: React.FC<BrandCardProps> = ({
  brand,
  couponCount,
  language,
}) => {
  const vouchersText = {
    th: "คูปอง",
    en: "Coupons",
  };

  return (
    <div
      className={`relative z-20 mx-4 -mt-12 overflow-hidden rounded-2xl bg-white shadow-lg`}
    >
      <div className="p-5">
        <div className="flex items-start">
          <LazyImage
            src={getDirectusFileUrl(brand?.logo as string) ?? ""}
            alt={brand?.name ?? ""}
            wrapperClassName="mr-4 h-20 w-20"
            className="h-full w-full rounded-xl border border-gray-100 object-cover shadow-sm"
            placeholder="blur"
            blurDataURL={getDirectusFileUrl(brand?.logo as string, {
              width: 24,
              height: 24,
            })}
          />
          <div className="flex-1">
            <div className="mb-1 flex items-center">
              <h2 className="mr-2 text-xl font-bold">{brand?.name}</h2>
            </div>

            <div className="mt-1 flex flex-wrap items-center text-sm">
              {/* <div className="flex items-center mr-4 mb-2">
                <Star size={16} className="mr-1 text-yellow-500" />
                <span className="font-medium">{brand.rating}</span>
              </div> */}
              {/* <div className="flex items-center mr-4 mb-2">
                <Users size={16} className="mr-1 text-gray-500" />
                <span className="text-gray-600">10K {followerText[language]}</span>
              </div> */}
              {brand.categories?.map((category, index) => {
                return (
                  <span
                    key={index}
                    className="mb-2 rounded-full bg-blue-50 px-2 py-1 text-xs text-primary"
                    style={{
                      backgroundColor: `${brand?.primaryColor ? brand.primaryColor : undefined}25`,
                      color: brand?.primaryColor ?? undefined,
                    }}
                  >
                    {category.name[language]}
                  </span>
                );
              })}
            </div>
          </div>

          {/* <FollowButton
            language={language}
            onClick={() => {}}
            isFollowed={false}
            primaryColor={brand?.primaryColor ?? ""}
          /> */}
        </div>

        <div className="mt-4 flex flex-wrap border-t border-gray-100 pt-4">
          <InfoItem
            icon={<Ticket className="h-4 w-4" />}
            count={couponCount.toString() ?? "0"}
            subtitle={vouchersText[language]}
          />
          {/* <InfoItem 
            icon={<Store className="h-4 w-4" />} 
            count="285" 
            subtitle={branchesText[language]} 
          /> */}
          {/* <InfoItem icon={<ClockIcon />} title="24 ชม." subtitle="เปิดตลอด" /> */}
        </div>
      </div>
    </div>
  );
};

export default BrandCard;
