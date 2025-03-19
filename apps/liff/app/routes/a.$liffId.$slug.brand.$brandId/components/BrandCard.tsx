import React from "react";
import { Users, Ticket, Store } from "lucide-react";
import FollowButton from "~/components/FollowButton";
import { getDirectusFileUrl } from "~/utils/files";
import InfoItem from "./InfoItem";
import { Brand } from "~/types/app";

interface BrandCardProps {
  brand: Brand;
  language: string;
  isInClient: boolean;
}

const BrandCard: React.FC<BrandCardProps> = ({ brand, language, isInClient }) => {
  const followerText = {
    th: "ผู้ติดตาม",
    en: "Followers",
  };
  
  const vouchersText = {
    th: "คูปอง",
    en: "Vouchers",
  };
  
  const branchesText = {
    th: "สาขา",
    en: "Branches",
  };
  console.log("BrandCard", isInClient);
  

  return (
    <div className={`mx-4 ${isInClient ? "-mt-16" : "-mt-12"} rounded-2xl bg-white shadow-lg overflow-hidden relative z-20`}>
      <div className="p-5">
        <div className="flex items-start">
          <img
            src={getDirectusFileUrl(brand?.logo as string) ?? ""}
            alt={brand?.name ?? ""}
            className="w-20 h-20 object-cover rounded-xl mr-4 border border-gray-100 shadow-sm"
          />
          <div className="flex-1">
            <div className="flex items-center mb-1">
              <h2 className="font-bold text-xl mr-2">{brand?.name}</h2>
            </div>

            <div className="flex flex-wrap items-center text-sm mt-1">
              {/* <div className="flex items-center mr-4 mb-2">
                <Star size={16} className="mr-1 text-yellow-500" />
                <span className="font-medium">{brand.rating}</span>
              </div> */}
              <div className="flex items-center mr-4 mb-2">
                <Users size={16} className="mr-1 text-gray-500" />
                <span className="text-gray-600">10K {followerText[language]}</span>
              </div>
              <span
                className="bg-blue-50 text-primary text-xs px-2 py-1 rounded-full mb-2"
                style={{
                  backgroundColor: `${brand?.primaryColor ? brand.primaryColor : undefined}25`,
                  color: brand?.primaryColor ?? undefined,
                }}
              >
                {brand?.metadata.category?.name[language]}
              </span>
            </div>
          </div>

          <FollowButton
            language={language}
            onClick={() => {}}
            isFollowed={false}
            primaryColor={brand?.primaryColor ?? ""}
          />
        </div>

        <div className="flex flex-wrap mt-4 pt-4 border-t border-gray-100">
          <InfoItem
            icon={<Ticket className="h-4 w-4" />}
            count={brand?.vouchers.length.toString() ?? '0'}
            subtitle={vouchersText[language]}
          />
          <InfoItem 
            icon={<Store className="h-4 w-4" />} 
            count="285" 
            subtitle={branchesText[language]} 
          />
          {/* <InfoItem icon={<ClockIcon />} title="24 ชม." subtitle="เปิดตลอด" /> */}
        </div>
      </div>
    </div>
  );
};

export default BrandCard;
