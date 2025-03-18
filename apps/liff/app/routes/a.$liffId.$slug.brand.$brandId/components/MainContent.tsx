import React, { useState } from "react";
import { ChevronLeft, Search, Users, Ticket } from "lucide-react";
import FollowButton from "~/components/FollowButton";
import { getDirectusFileUrl } from "~/utils/files";
import VoucherCard from "./VoucherCard";
import { useNavigate, useParams } from "@remix-run/react";
import { useBrand } from "~/hooks/brands/useBrand";
import Loading from "~/components/Loading";

interface MainContentProps {}

const MainContent: React.FC<MainContentProps> = () => {
  const navigate = useNavigate();
  const { liffId, slug, brandId } = useParams();
  const [selectedTab, setSelectedTab] = useState<
    "all" | "popular" | "discount" | "freebie"
  >("all");
  const { data: brand, isLoading: brandLoading } = useBrand({
    id: brandId as string,
  });

  // กรองคูปองตามแท็บที่เลือก
  // const filteredCoupons =
  //   selectedTab === "all"
  //     ? coupons
  //     : coupons.filter((coupon) => coupon.type === selectedTab);

  if (brandLoading) {
    return <Loading />;
  }

  return (
    <>
      {/* Header */}
      <header
        className="sticky top-0 z-10 pt-4 pb-16 bg-primary text-white"
        style={{ backgroundColor: brand?.primaryColor ?? undefined }}
      >
        <div className="px-4 py-2 flex items-center justify-between">
          <div className="flex items-center">
            <button
              className="mr-2 p-1"
              onClick={() => navigate(`/a/${liffId}/${slug}/shop`)}
            >
              <ChevronLeft size={24} />
            </button>
            <h1 className="text-lg font-medium">Brand</h1>
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
              src={getDirectusFileUrl(brand?.logo as string) ?? ""}
              alt={brand?.name ?? ""}
              className="w-20 h-20 rounded-xl mr-4 border border-gray-100 shadow-sm"
            />
            <div className="flex-1">
              <div className="flex items-center mb-1">
                <h2 className="font-bold text-xl mr-2">{brand?.name}</h2>
                {/* {brand.verified && (
                  <div className="w-5 h-5 rounded-full flex items-center justify-center bg-primary">
                    <CheckCircle size={14} className="text-white" />
                  </div>
                )} */}
              </div>

              <div className="flex flex-wrap items-center text-sm mt-1">
                {/* <div className="flex items-center mr-4 mb-2">
                  <Star size={16} className="mr-1 text-yellow-500" />
                  <span className="font-medium">{brand.rating}</span>
                </div> */}
                <div className="flex items-center mr-4 mb-2">
                  <Users size={16} className="mr-1 text-gray-500" />
                  <span className="text-gray-600">10K Follower</span>
                </div>
                <span
                  className="bg-blue-50 text-primary text-xs px-2 py-1 rounded-full mb-2"
                  style={{
                    backgroundColor: `${brand?.primaryColor ? brand.primaryColor : undefined}25`,
                    color: brand?.primaryColor ?? undefined,
                  }}
                >
                  Technology
                </span>
              </div>
            </div>

            <FollowButton
              language={"en"}
              onClick={() => {}}
              isFollowed={false}
              primaryColor={brand?.primaryColor ?? ""}
            />
          </div>

          <div className="flex flex-wrap mt-4 pt-4 border-t border-gray-100">
            <InfoItem
              icon={<Ticket className="h-4 w-4" />}
              count={brand?.vouchers.length.toString() ?? '0'}
              subtitle="vouchers"
            />
            <InfoItem icon={<StoreIcon />} count="285" subtitle="branches" />
            {/* <InfoItem icon={<ClockIcon />} title="24 ชม." subtitle="เปิดตลอด" /> */}
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="sticky top-0 bg-white z-10 px-2 mt-4 shadow-sm">
        <div className="flex overflow-x-auto py-3 scrollbar-hide">
          {[
            { id: "all", label: "All" },
            { id: "popular", label: "Popular" },
            { id: "discount", label: "Discount" },
            { id: "freebie", label: "Freebie" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id as any)}
              className={`mx-2 px-4 py-2 rounded-lg text-sm whitespace-nowrap font-medium ${
                selectedTab === tab.id
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-600"
              }`}
              style={{
                backgroundColor:
                  selectedTab === tab.id
                    ? (brand?.primaryColor ?? undefined)
                    : undefined,
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Coupon Count */}
      {/* <div className="px-4 py-3 flex justify-between items-center">
        <h2 className="font-medium">พบ {filteredCoupons.length} คูปอง</h2>
        <select
          className="bg-gray-100 border-none text-sm rounded-lg py-1 px-3"
          defaultValue="latest"
        >
          <option value="latest">ล่าสุด</option>
          <option value="popular">ยอดนิยม</option>
          <option value="expiry">ใกล้หมดอายุ</option>
        </select>
      </div> */}

      {/* Coupons */}
      <div className="pt-4 px-4 pb-6 space-y-4">
        {brand?.vouchers.map((voucher) => (
          <VoucherCard
            key={voucher.id}
            brand={brand}
            voucher={voucher}
            language="en"
            onClick={() =>
              navigate(`/a/${liffId}/${slug}/voucher/${voucher.id}`)
            }
          />
          // <div
          //   key={coupon.id}
          //   className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100"
          // >
          //   {/* Coupon Header */}
          //   <div className="p-4 border-b border-dashed border-gray-200 relative">
          //     <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-8 bg-gray-100 rounded-r-full"></div>
          //     <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-4 h-8 bg-gray-100 rounded-l-full"></div>

          //     <div className="flex justify-between items-start">
          //       <div>
          //         <span className="inline-block text-xs font-medium px-2.5 py-1 rounded-full mb-2 bg-primary bg-opacity-10 text-primary">
          //           {coupon.tag === "ซื้อ 1 แถม 1" && (
          //             <Gift size={12} className="inline mr-1" />
          //           )}
          //           {coupon.tag === "ส่วนลด" && (
          //             <Tag size={12} className="inline mr-1" />
          //           )}
          //           {coupon.tag === "ของแถม" && (
          //             <Gift size={12} className="inline mr-1" />
          //           )}
          //           {coupon.tag}
          //         </span>
          //         <h3 className="font-bold text-gray-800 mb-1">
          //           {coupon.title}
          //         </h3>
          //         <p className="text-xs text-gray-600">{coupon.description}</p>
          //       </div>

          //       <button
          //         onClick={() => toggleSave(coupon.id)}
          //         className={`p-2 rounded-full ${
          //           coupon.saved ? "bg-yellow-50" : "bg-gray-100"
          //         }`}
          //       >
          //         {coupon.saved ? (
          //           <BookmarkIcon
          //             size={18}
          //             className="fill-yellow-500 text-yellow-500"
          //           />
          //         ) : (
          //           <BookmarkPlus size={18} className="text-gray-400" />
          //         )}
          //       </button>
          //     </div>
          //   </div>

          //   {/* Coupon Footer */}
          //   <div className="p-4 bg-gray-50 flex justify-between items-center">
          //     <div className="flex items-center text-xs text-gray-500">
          //       <Clock size={14} className="mr-1" />
          //       <span>หมดอายุ: {coupon.expiry}</span>
          //     </div>

          //     <div className="flex">
          //       <button
          //         className="mr-2 h-8 px-3 rounded-lg text-xs font-medium border border-gray-200 bg-white flex items-center"
          //         onClick={() => copyCode(coupon.code)}
          //       >
          //         <span className="mr-1 font-mono">{coupon.code}</span>
          //         <Copy size={12} />
          //       </button>

          //       <button className="h-8 px-4 rounded-lg text-xs font-medium bg-primary text-white">
          //         ใช้คูปอง
          //       </button>
          //     </div>
          //   </div>
          // </div>
        ))}
      </div>

      {/* Fixed Action Button */}
      {/* <div className="fixed bottom-6 right-6">
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
      </div> */}
    </>
  );
};

// Components
interface InfoItemProps {
  icon: React.ReactNode;
  count: string;
  subtitle: string;
}

const InfoItem: React.FC<InfoItemProps> = ({ icon, count: title, subtitle }) => (
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

export default MainContent;
