import { useNavigate } from "@remix-run/react";
import React from "react";
import { Voucher } from "~/@types/app.type";
import { getDirectusFileUrl } from "~/utils/files";

interface VoucherCardProps {
  voucher: Voucher;
}

const VoucherCard: React.FC<VoucherCardProps> = ({ voucher }) => {
  const navigate = useNavigate();
  const title = voucher.metadata?.title?.en || "Unnamed Voucher";
  
  const navigateToVoucherDetail = (voucherId: string) =>
    navigate(`/voucher/${voucherId}`);
  
  return (
    <div 
      onClick={() => navigateToVoucherDetail(voucher.id)}
      className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer"
    >
      {/* Voucher Image */}
      <div className="relative h-40">
        {voucher.cover && (
          <img 
            src={getDirectusFileUrl(voucher.cover as string)}
            alt={voucher?.metadata?.title?.en || "Voucher Image"}
            className="w-full h-full object-cover"
          />
        )}
      </div>
      
      {/* Merchant Logo */}
      <div className="relative">
        <div className="w-10 h-10 rounded-full border-2 border-white shadow-sm overflow-hidden bg-white absolute -top-5 left-4">
          {voucher?.voucher_brand_id?.logo && (
            <img 
              src={getDirectusFileUrl(voucher?.voucher_brand_id?.logo as string || "https://images.unsplash.com/photo-1531489956451-20957fab52f2?q=80&w=480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")}
              alt={voucher?.voucher_brand_id?.name || ""}
              className="w-full h-full object-cover"
            />
          )}
        </div>
      </div>
      
      {/* Voucher Details */}
      <div className="p-4 pt-6">
        <h3 className="text-base font-semibold mb-1">
          {voucher?.voucher_brand_id?.name}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-2">
          {title}
        </p>
      </div>
    </div>
  );
};

export default VoucherCard;
