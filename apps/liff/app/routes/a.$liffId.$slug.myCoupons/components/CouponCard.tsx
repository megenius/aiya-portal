import React from "react";
import { Tag, QrCode } from "lucide-react";

interface CouponCardProps {
  coupon: Coupon;
  onClick: (couponId: string) => void;
}

interface Coupon {
    id: number;
    image: string;
    store: string;
    category: string;
    discount: string;
}

const CouponCard: React.FC<CouponCardProps> = ({ coupon, onClick }) => (
  <button
    className="w-full bg-white rounded-xl shadow-sm mb-4 overflow-hidden cursor-pointer"
    onClick={() => onClick(coupon.id.toString())}
  >
    <div className="flex items-start p-4">
      <img
        src={coupon.image}
        alt={coupon.store}
        className="w-20 h-20 rounded-lg object-cover"
      />
      <div className="ml-4 flex-1 flex flex-col">
        <h3 className="text-start font-medium mb-1">{coupon.store}</h3>
        <div className="flex items-center gap-1 text-sm text-gray-600 mb-1">
          <Tag className="h-4 w-4" />
          <span>{coupon.category}</span>
        </div>
        <span className="text-start text-green-600 font-medium">
          {coupon.discount}
        </span>
        <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
          <QrCode className="h-4 w-4" />
          <span>แตะเพื่อใช้คูปอง</span>
        </div>
      </div>
    </div>
  </button>
);

export default CouponCard;
