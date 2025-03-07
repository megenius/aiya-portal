import React, { useState } from "react";
import { SearchBar } from "./SearchBar";
import { CategoryList } from "./CategoryList";
import { PageLiff } from "~/types/page";
import { useLiff } from "~/hooks/useLiff";
import Loading from "~/components/Loading";
import VoucherSummary from "./VoucherSummary";
import VoucherList from "./VoucherList";
import { useVouchers } from "~/hooks/voucher/useVouchers";
import { VoucherStats } from "~/types/app";

interface MainContentProps {
  page: PageLiff;
  language: string;
  voucherUserStats: VoucherStats;
}

const MainContent: React.FC<MainContentProps> = ({ page,language,voucherUserStats }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const {data : vouchers, isLoading : isVouchersLoading} = useVouchers({q: "", status: "published"});
  const brandText = {
    th: "แบรนด์",
    en: "Brands",
  };
  const popularCouponsText = {
    th: "คูปองยอดนิยม",
    en: "Popular Coupons",
  };

  const brands = [
    { id: 1, name: "Starbucks", logo: "https://placehold.co/60x60" },
    { id: 2, name: "McDonald's", logo: "https://placehold.co/60x60" },
    { id: 3, name: "KFC", logo: "https://placehold.co/60x60" },
    { id: 4, name: "MK", logo: "https://placehold.co/60x60" },
    { id: 5, name: "CentralWorld", logo: "https://placehold.co/60x60" },
    { id: 6, name: "UNIQLO", logo: "https://placehold.co/60x60" },
  ];

  if (isVouchersLoading) {
    return <Loading />;
  }

  return (
    <div className="bg-white pb-3 space-y-3">
      <div className="px-4 space-y-3">
        <SearchBar />
        <VoucherSummary totalVouchers={voucherUserStats?.total} availableVouchers={voucherUserStats?.collected} usedVouchers={voucherUserStats?.used + voucherUserStats?.expired} language={language} />
        {page?.metadata?.layout?.showCategory && (
          <CategoryList
            language={language}
            categories={page?.metadata?.categories}
            selected={selectedCategory}
            onSelect={setSelectedCategory}
          />
        )}
      </div>

      <VoucherList
        vouchers={vouchers ?? []}
        language={language}
        title={popularCouponsText[language]}
      />

      <div className="space-y-2">
        <h3 className="px-4 text-lg font-medium">
          {brandText[language]}
        </h3>
        <div className="flex overflow-x-auto gap-3 px-4" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="flex flex-col items-center gap-1 min-w-16"
            >
              <div className="w-14 h-14 rounded-full border border-gray-200 p-0.5">
                {/* <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-full h-full object-cover rounded-full"
                /> */}
                <div className="w-full h-full flex justify-center items-center text-sm bg-gray-100 rounded-full">
                  LOGO
                  </div>
              </div>
              <span className="text-xs text-gray-700 text-center">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* <VoucherList
        vouchers={page?.metadata?.coupons.filter((coupon) => coupon.category === "2" || coupon.category === "3")}
        isThaiLanguage={isThaiLanguage}
        titleTH="อาหารและเครื่องดื่ม"
        titleEN="Food & Beverage"
      /> */}
    </div>
  );
};

export default MainContent;
