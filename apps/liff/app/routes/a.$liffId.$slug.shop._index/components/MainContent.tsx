import React, { useState } from "react";
import { PageLiff } from "~/types/page";
import VoucherSummary from "./VoucherSummary";
import VoucherList from "./VoucherList";
import { Brand, Voucher, VoucherStats } from "~/types/app";
import SearchBar from "./SearchBar";
import CategoryList from "./CategoryList";
import BrandList from "./BrandList";

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
  const popularVouchersText = {
    th: "คูปองยอดนิยม",
    en: "Popular Vouchers",
  };

  return (
    <div className="bg-white pb-3 space-y-3">
      <div className="px-4 pb-1 space-y-3">
        <SearchBar language={language} />
        <VoucherSummary
          totalVouchers={voucherUserStats?.total}
          availableVouchers={voucherUserStats?.collected}
          usedVouchers={voucherUserStats?.used + voucherUserStats?.expired}
          language={language}
        />
      </div>
      {page?.metadata?.layout?.showCategory && (
        <CategoryList
          language={language}
          categories={page?.metadata?.categories}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />
      )}
      <VoucherList
        vouchers={vouchers ?? []}
        language={language}
        title={popularVouchersText[language]}
      />

      <BrandList brands={brands} page={page} language={language} />
    </div>
  );
};

export default MainContent;
