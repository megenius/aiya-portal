import React, { useState } from "react";
import { Brand, Voucher, VoucherStats } from "~/types/app";
import { Category, PageLiff } from "~/types/page";
import BrandList from "./BrandList";
import CategoryList from "./CategoryList";
import SearchBar from "./SearchBar";
import CouponList from "./CouponList";
import CouponSummary from "./CouponSummary";

interface MainContentProps {
  page: PageLiff;
  language: string;
  voucherUserStats: VoucherStats;
  vouchers?: Voucher[];
  populars?: Voucher[];
  brands?: Brand[];
}

const MainContent: React.FC<MainContentProps> = ({
  page,
  language,
  voucherUserStats,
  vouchers,
  populars,
  brands,
}) => {
  let categories = page?.metadata?.categories;
  categories?.unshift({
    id: "0",
    name: {
      th: "ทั้งหมด",
      en: "All",
    },
    image: "https://cdn.sable.asia/automix/home.png",
    icon: "🏠",
  });
  categories = Array.from(new Map(categories.map((c) => [c.id, c])).values());
  const [selectedCategory, setSelectedCategory] = useState<Category>(
    categories[0]
  );
  const popularVouchersText = {
    th: "คูปองใกล้ฉัน",
    en: "Coupons Close to You"
  };

  const filterVouchers = () => {
    if (selectedCategory.name.en === "All") return populars;
    return vouchers?.filter(
      (voucher) =>
        voucher.voucher_brand_id?.metadata?.category.name.en ===
        selectedCategory.name.en
    );
  };

  const filterBrands = () => {
    if (selectedCategory.name.en === "All") return brands;
    return brands?.filter(
      (brand) => brand.metadata.category?.name.en === selectedCategory.name.en
    );
  };

  return (
    <div className="bg-white pb-3 space-y-3">
      <div className="px-4 pb-1 space-y-3">
        <SearchBar language={language} primaryColor={page.bg_color ?? ""} showSearch={page?.metadata?.layout?.showSearch} />
        <CouponSummary
          totalVouchers={voucherUserStats?.total}
          availableVouchers={voucherUserStats?.collected}
          usedVouchers={voucherUserStats?.used}
          primaryColor={page.bg_color ?? ""}
          language={language}
        />
      </div>
      {page?.metadata?.layout?.showCategory && (
        <CategoryList
          language={language}
          categories={categories}
          selected={selectedCategory}
          primaryColor={page.bg_color || ""}
          onSelect={setSelectedCategory}
        />
      )}
      {<CouponList
        coupons={filterVouchers()}
        language={language}
        title={
          selectedCategory.name.en === "All"
            ? popularVouchersText[language]
            : selectedCategory.name[language]
        }
      />}

      <BrandList brands={filterBrands()} page={page} language={language} />

      {selectedCategory.name.en === "All" &&
        categories
          ?.slice(1)
          .map(
            (category) =>
              vouchers &&
              vouchers?.filter(
                (voucher) =>
                  voucher.voucher_brand_id?.metadata?.category.name.en ===
                  category.name.en
              ).length > 0 && (
                <CouponList
                  key={category.id}
                  coupons={
                    vouchers?.filter(
                      (voucher) =>
                        voucher.voucher_brand_id?.metadata?.category.name.en ===
                        category.name.en
                    ) ?? []
                  }
                  language={language}
                  title={category.name[language]}
                />
              )
          )}
    </div>
  );
};

export default MainContent;
