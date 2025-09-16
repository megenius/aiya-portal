import React, { useState } from "react";
import { Brand, Category, Voucher, VoucherStats } from "~/types/app";
import { PageLiff } from "~/types/page";
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
  const showVoucherSummary = page?.metadata?.layout?.showVoucherSummary ?? true;
  const showCategory = page?.metadata?.layout?.showCategory ?? true;
  const showPopulars = page?.metadata?.layout?.showPopulars ?? true;
  const showBrands = page?.metadata?.layout?.showBrands ?? true;
  const categories = page?.categories ?? [];
  const allCategory = {
    id: "all",
    icon_name: "Component",
    name: { th: "ทั้งหมด", en: "All" },
  } as Category;
  const categoriesWithAll = [allCategory, ...categories];
  const [selectedCategory, setSelectedCategory] =
    useState<Category>(allCategory);
  const popularVouchersText = {
    th: "คูปองใกล้ฉัน",
    en: "Coupons Close to You",
  };

  const filterVouchers = () => {
    return vouchers?.filter((voucher) =>
      (voucher.categories || []).some((cat) => cat.id === selectedCategory.id),
    );
  };

  return (
    <div className="space-y-3 bg-white pb-3">
      <div className="space-y-3 px-4 pb-1">
        <SearchBar
          language={language}
          primaryColor={page.bg_color ?? ""}
          showSearch={page?.metadata?.layout?.showSearch}
        />
        {showVoucherSummary && (
          <CouponSummary
            totalVouchers={voucherUserStats?.total}
            availableVouchers={voucherUserStats?.collected}
            usedVouchers={voucherUserStats?.used}
            primaryColor={page.bg_color ?? ""}
            language={language}
          />
        )}
      </div>
      {showCategory && (
        <CategoryList
          language={language}
          categories={categoriesWithAll}
          selected={selectedCategory}
          primaryColor={page.bg_color || ""}
          onSelect={setSelectedCategory}
        />
      )}

      {showPopulars && (
        <CouponList
          coupons={populars}
          language={language}
          title={popularVouchersText[language]}
        />
      )}

      {selectedCategory.id === "all" && showBrands && (
        <BrandList brands={brands} page={page} language={language} />
      )}

      {selectedCategory.id === "all" &&
        categories?.map((category) => {
          const byCategory = (vouchers ?? []).filter((voucher) =>
            (voucher.categories ?? []).some((cat) => cat.id === category.id),
          );
          return byCategory.length > 0 ? (
            <CouponList
              key={category.id}
              coupons={byCategory}
              language={language}
              title={category.name[language]}
            />
          ) : null;
        })}

      {selectedCategory.id !== "all" && (
        <CouponList
          coupons={filterVouchers()}
          language={language}
          scrollDirection="vertical"
        />
      )}
    </div>
  );
};

export default MainContent;
