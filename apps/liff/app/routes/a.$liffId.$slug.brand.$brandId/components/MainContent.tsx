import React, { useState } from "react";
import {
  ChevronLeft,
  Search,
  Copy,
  BookmarkPlus,
  Gift,
  Tag,
  Clock,
  Users,
  Star,
  CheckCircle,
} from "lucide-react";
import FollowButton from "~/components/FollowButton";

interface BrandInfo {
  name: string;
  logo: string;
  secondaryColor: string;
  followers: string;
  rating: string;
  verified: boolean;
}

interface CouponInfo {
  id: number;
  title: string;
  description: string;
  code: string;
  discount: string;
  expiry: string;
  tag: string;
  type: "popular" | "discount" | "freebie";
  saved: boolean;
}

interface MainContentProps {}

const MainContent: React.FC<MainContentProps> = () => {
  const [selectedTab, setSelectedTab] = useState<
    "all" | "popular" | "discount" | "freebie"
  >("all");

  // ข้อมูลแบรนด์
  const brand: BrandInfo = {
    name: "Starbucks",
    logo: "/api/placeholder/80/80",
    secondaryColor: "#CBA258", // สีทองของ Starbucks
    followers: "125.4K",
    rating: "4.8",
    verified: true,
  };

  // ข้อมูลคูปอง
  const coupons: CouponInfo[] = [
    {
      id: 1,
      title: "ซื้อ 1 แถม 1 สำหรับเครื่องดื่มทุกเมนู",
      description:
        "รับฟรี 1 แก้ว เมื่อซื้อเครื่องดื่ม Starbucks ขนาดใดก็ได้ในราคาปกติ",
      code: "BUY1GET1SB",
      discount: "ฟรี 1 แก้ว",
      expiry: "31 มี.ค. 2025",
      tag: "ซื้อ 1 แถม 1",
      type: "popular",
      saved: true,
    },
    {
      id: 2,
      title: "ส่วนลด 40% สำหรับเมนูกาแฟ",
      description: "รับส่วนลด 40% สำหรับเมนูกาแฟทั้งร้อนและเย็น ทุกขนาด",
      code: "COFFEE40",
      discount: "ลด 40%",
      expiry: "20 มี.ค. 2025",
      tag: "ส่วนลด",
      type: "discount",
      saved: false,
    },
    {
      id: 3,
      title: "เค้กฟรี เมื่อซื้อเมนูพรีเมียม",
      description:
        "รับเค้กชิ้นเล็กฟรี 1 ชิ้น เมื่อซื้อเครื่องดื่มเมนูพรีเมียมขนาด Grande ขึ้นไป",
      code: "FREECAKE",
      discount: "เค้กฟรี",
      expiry: "15 มี.ค. 2025",
      tag: "ของแถม",
      type: "freebie",
      saved: true,
    },
  ];

  // ฟังก์ชันคัดลอกรหัสคูปอง
  const copyCode = (code: string): void => {
    console.log(`Copied code: ${code}`);
    // ในแอพจริงจะเรียกใช้ navigator.clipboard.writeText(code)
  };

  // ฟังก์ชันบันทึกคูปอง
  const toggleSave = (id: number): void => {
    console.log(`Toggle saved status for coupon id: ${id}`);
  };

  // กรองคูปองตามแท็บที่เลือก
  const filteredCoupons =
    selectedTab === "all"
      ? coupons
      : coupons.filter((coupon) => coupon.type === selectedTab);

  // สไตล์สำหรับปุ่มสีรอง
  const secondaryButtonStyle = {
    backgroundColor: brand.secondaryColor,
    color: "#ffffff",
  };

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-10 pt-4 pb-16 bg-primary text-white">
        <div className="px-4 py-2 flex items-center justify-between">
          <div className="flex items-center">
            <button className="mr-2 p-1">
              <ChevronLeft size={24} />
            </button>
            <h1 className="text-lg font-medium">คูปอง</h1>
          </div>
          <button className="p-1">
            <Search size={20} />
          </button>
        </div>
      </header>

      {/* Brand Card - โดดเด่นมากขึ้น */}
      <div className="mx-4 -mt-12 rounded-2xl bg-white shadow-lg overflow-hidden relative z-20">
        <div className="p-5">
          <div className="flex items-start">
            <img
              src={brand.logo}
              alt={brand.name}
              className="w-20 h-20 rounded-xl mr-4 border-2 border-white shadow-sm"
            />
            <div className="flex-1">
              <div className="flex items-center mb-1">
                <h2 className="font-bold text-xl mr-2">{brand.name}</h2>
                {brand.verified && (
                  <div className="w-5 h-5 rounded-full flex items-center justify-center bg-primary">
                    <CheckCircle size={14} className="text-white" />
                  </div>
                )}
              </div>

              <div className="flex flex-wrap items-center text-sm mt-1">
                <div className="flex items-center mr-4 mb-2">
                  <Star size={16} className="mr-1 text-yellow-500" />
                  <span className="font-medium">{brand.rating}</span>
                </div>
                <div className="flex items-center mr-4 mb-2">
                  <Users size={16} className="mr-1 text-gray-500" />
                  <span className="text-gray-600">
                    {brand.followers} ผู้ติดตาม
                  </span>
                </div>
                <span className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded-full mb-2">
                  ร้านกาแฟ
                </span>
              </div>
            </div>

            <FollowButton
              language={"th"}
              onClick={() => {}}
              isFollowed={false}
            />
          </div>

          <div className="flex flex-wrap mt-4 pt-4 border-t border-gray-100">
            <InfoItem icon={<CouponIcon />} title="3" subtitle="คูปอง" />
            <InfoItem icon={<StoreIcon />} title="285" subtitle="สาขา" />
            <InfoItem icon={<ClockIcon />} title="24 ชม." subtitle="เปิดตลอด" />
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="sticky top-0 bg-white z-10 px-2 mt-4 shadow-sm">
        <div className="flex overflow-x-auto py-3 scrollbar-hide">
          {[
            { id: "all", label: "ทั้งหมด" },
            { id: "popular", label: "ยอดนิยม" },
            { id: "discount", label: "ส่วนลด" },
            { id: "freebie", label: "ของแถม" },
          ].map((tab) => (
            <button
              key={tab.id}
              className={`mx-2 px-4 py-2 rounded-lg text-sm whitespace-nowrap font-medium ${
                selectedTab === tab.id
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-600"
              }`}
              onClick={() => setSelectedTab(tab.id as any)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Coupon Count */}
      <div className="px-4 py-3 flex justify-between items-center">
        <h2 className="font-medium">พบ {filteredCoupons.length} คูปอง</h2>
        <select
          className="bg-gray-100 border-none text-sm rounded-lg py-1 px-3"
          defaultValue="latest"
        >
          <option value="latest">ล่าสุด</option>
          <option value="popular">ยอดนิยม</option>
          <option value="expiry">ใกล้หมดอายุ</option>
        </select>
      </div>

      {/* Coupons */}
      <div className="px-4 pb-6 space-y-4">
        {filteredCoupons.map((coupon) => (
          <div
            key={coupon.id}
            className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100"
          >
            {/* Coupon Header */}
            <div className="p-4 border-b border-dashed border-gray-200 relative">
              <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-8 bg-gray-100 rounded-r-full"></div>
              <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-4 h-8 bg-gray-100 rounded-l-full"></div>

              <div className="flex justify-between items-start">
                <div>
                  <span className="inline-block text-xs font-medium px-2.5 py-1 rounded-full mb-2 bg-primary bg-opacity-10 text-primary">
                    {coupon.tag === "ซื้อ 1 แถม 1" && (
                      <Gift size={12} className="inline mr-1" />
                    )}
                    {coupon.tag === "ส่วนลด" && (
                      <Tag size={12} className="inline mr-1" />
                    )}
                    {coupon.tag === "ของแถม" && (
                      <Gift size={12} className="inline mr-1" />
                    )}
                    {coupon.tag}
                  </span>
                  <h3 className="font-bold text-gray-800 mb-1">
                    {coupon.title}
                  </h3>
                  <p className="text-xs text-gray-600">{coupon.description}</p>
                </div>

                <button
                  onClick={() => toggleSave(coupon.id)}
                  className={`p-2 rounded-full ${
                    coupon.saved ? "bg-yellow-50" : "bg-gray-100"
                  }`}
                >
                  {coupon.saved ? (
                    <BookmarkIcon
                      size={18}
                      className="fill-yellow-500 text-yellow-500"
                    />
                  ) : (
                    <BookmarkPlus size={18} className="text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            {/* Coupon Footer */}
            <div className="p-4 bg-gray-50 flex justify-between items-center">
              <div className="flex items-center text-xs text-gray-500">
                <Clock size={14} className="mr-1" />
                <span>หมดอายุ: {coupon.expiry}</span>
              </div>

              <div className="flex">
                <button
                  className="mr-2 h-8 px-3 rounded-lg text-xs font-medium border border-gray-200 bg-white flex items-center"
                  onClick={() => copyCode(coupon.code)}
                >
                  <span className="mr-1 font-mono">{coupon.code}</span>
                  <Copy size={12} />
                </button>

                <button className="h-8 px-4 rounded-lg text-xs font-medium bg-primary text-white">
                  ใช้คูปอง
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Fixed Action Button */}
      <div className="fixed bottom-6 right-6">
        <button className="w-12 h-12 rounded-full shadow-lg flex items-center justify-center bg-primary text-white">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </button>
      </div>
    </>
  );
};

// Components
interface InfoItemProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

const InfoItem: React.FC<InfoItemProps> = ({ icon, title, subtitle }) => (
  <div className="flex items-center mr-6 mb-1">
    <div className="bg-gray-100 w-8 h-8 rounded-full flex items-center justify-center mr-2">
      {icon}
    </div>
    <div>
      <div className="font-bold text-sm">{title}</div>
      <div className="text-xs text-gray-500">{subtitle}</div>
    </div>
  </div>
);

interface IconProps {
  size?: number;
  className?: string;
}

const BookmarkIcon: React.FC<IconProps> = ({ size = 16, className = "" }) => (
  <svg
    width={size}
    height={size}
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
  </svg>
);

const CouponIcon: React.FC = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 8.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-4.96.46 2.5 2.5 0 0 0-4.96-.46A2.5 2.5 0 0 0 2 8.5c0 2.7 5.3 6 9.96 11.5C16.7 14.5 22 11.2 22 8.5z"></path>
  </svg>
);

const StoreIcon: React.FC = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
    <path d="M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4"></path>
    <path d="M9 14v2"></path>
    <path d="M15 12v4"></path>
  </svg>
);

const ClockIcon: React.FC = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

export default MainContent;
