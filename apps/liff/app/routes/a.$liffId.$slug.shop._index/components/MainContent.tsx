import React, { useState } from "react";
import { PageLiff } from "~/types/page";
import VoucherSummary from "./VoucherSummary";
import VoucherList from "./VoucherList";
import { Brand, Voucher, VoucherStats } from "~/types/app";
import { getDirectusFileUrl } from "~/utils/files";
import SearchBar from "./SearchBar";
import CategoryList from "./CategoryList";

interface MainContentProps {
  page: PageLiff;
  language: string;
  voucherUserStats: VoucherStats;
  vouchers?: Voucher[];
  brands?: Brand[];
}

const MainContent: React.FC<MainContentProps> = ({
  page,
  language,
  voucherUserStats,
  vouchers,
  brands,
}) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const brandText = {
    th: "แบรนด์",
    en: "Brands",
  };
  const popularVouchersText = {
    th: "คูปองยอดนิยม",
    en: "Popular Vouchers",
  };

  // const brands = [
  //   { id: 1, name: "Starbucks", logo: "https://placehold.co/60x60" },
  //   { id: 2, name: "McDonald's", logo: "https://placehold.co/60x60" },
  //   { id: 3, name: "KFC", logo: "https://placehold.co/60x60" },
  //   { id: 4, name: "MK", logo: "https://placehold.co/60x60" },
  //   { id: 5, name: "CentralWorld", logo: "https://placehold.co/60x60" },
  //   { id: 6, name: "UNIQLO", logo: "https://placehold.co/60x60" },
  // ];

  return (
    <div className="bg-white pb-3 space-y-3">
      <div className="px-4 space-y-3">
        <SearchBar language={language} />
        <VoucherSummary
          totalVouchers={voucherUserStats?.total}
          availableVouchers={voucherUserStats?.collected}
          usedVouchers={voucherUserStats?.used + voucherUserStats?.expired}
          language={language}
        />
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
        title={popularVouchersText[language]}
      />

      <div className="space-y-2">
        <h3 className="px-4 text-lg font-medium">{brandText[language]}</h3>
        <div
          className="flex overflow-x-auto gap-3 px-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {brands?.map((brand) => (
            <div
              key={brand.id}
              className="flex flex-col items-center gap-1 min-w-16"
            >
              <div className="w-14 h-14 rounded-full border border-gray-200 p-0.5">
                <img
                  src={getDirectusFileUrl(brand.logo as string) ?? ""}
                  alt={brand.id}
                  className="w-full h-full object-cover rounded-full"
                />
                {/* <div className="w-full h-full flex justify-center items-center text-sm bg-gray-100 rounded-full">
                  LOGO
                  </div> */}
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
