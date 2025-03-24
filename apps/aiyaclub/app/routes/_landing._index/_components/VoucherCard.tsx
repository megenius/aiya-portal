import { useNavigate } from "@remix-run/react";
import React from "react";
import { Voucher } from "~/@types/app.type";
import { getDirectusFileUrl } from "~/utils/files";

interface VoucherCardProps {
  voucher: Voucher;
}

const VoucherCard: React.FC<VoucherCardProps> = ({ voucher }) => {
  const navigate = useNavigate();
  
  // Get title and description from metadata with fallbacks
  const title = voucher.metadata?.title?.en || "Unnamed Voucher";
  const description = voucher.metadata?.description?.en || "";
  
  const navigateToVoucherDetail = (voucherId: string) =>
    navigate(`/voucher/${voucherId}`);
  
  return (
    <div 
      onClick={() => navigateToVoucherDetail(voucher.id)}
      className="voucher-card bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md hover:transform hover:-translate-y-1 transition-all cursor-pointer"
    >
      {/* Voucher Image */}
      <div className="relative h-40">
        {voucher.banner ? (
          <img 
            src={getDirectusFileUrl(voucher.banner as string)}
            alt={title}
            className="voucher-image w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
            <span className="text-white text-xl font-bold">AIYA</span>
          </div>
        )}
      </div>
      
      {/* Merchant Logo */}
      <div className="relative">
        <div className="merchant-logo-small w-10 h-10 rounded-full border-2 border-white shadow-sm overflow-hidden bg-white absolute -top-5 left-4">
          {voucher?.voucher_brand_id?.logo ? (
            <img 
              src={getDirectusFileUrl(voucher?.voucher_brand_id?.logo as string)}
              alt={voucher?.voucher_brand_id?.name || ""}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500 font-bold">A</span>
            </div>
          )}
        </div>
      </div>
      
      {/* Voucher Details */}
      <div className="voucher-details p-4 pt-6">
        <h3 className="merchant-name text-base font-semibold mb-1">
          {voucher?.voucher_brand_id?.name || "AIYA"}
        </h3>
        <p className="discount-details text-sm text-gray-600 line-clamp-2">
          {title}
        </p>
      </div>
    </div>
  );
};

export default VoucherCard;
