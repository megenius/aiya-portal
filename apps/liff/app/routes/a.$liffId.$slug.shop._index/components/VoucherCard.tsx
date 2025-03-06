import { useNavigate, useOutletContext } from "@remix-run/react";
import React from "react";
import { Voucher } from "~/types/app";
import { PageLiff } from "~/types/page";
import { getDirectusFileUrl } from "~/utils/files";

interface VoucherCardProps {
  voucher: Voucher;
  language: string;
}

const VoucherCard: React.FC<VoucherCardProps> = ({
  voucher,
  language,
}) => {
  const { page } = useOutletContext<{ page: PageLiff }>();
    const navigate = useNavigate();
    const title = voucher.metadata.title[language];

      const navigateToCollectCoupon = (voucherId: string) =>
        navigate(`/a/${page.liff_id}/${page.slug}/voucher/${voucherId}`);
  
  return (
    <button
      onClick={() => navigateToCollectCoupon(voucher.id)}
      className="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer flex flex-col shrink-0 w-36"
    >
      <div className="h-32 relative">
        <img
          src={getDirectusFileUrl(voucher.cover as string) ?? ""}
          alt={title ?? ""}
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
          {voucher.name}
        </h3>
        
        <div className="flex items-center justify-between">
          <span className="text-primary text-start text-xs text-pretty font-medium line-clamp-2">
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

export default VoucherCard;
