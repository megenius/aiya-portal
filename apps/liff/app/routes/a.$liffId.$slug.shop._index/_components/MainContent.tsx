import React, { useState } from "react";
import { useNavigate, useParams } from "@remix-run/react";
import { Brand, Category, Voucher, VoucherStats } from "~/types/app";
import { PageLiff } from "~/types/page";
import BrandList from "./BrandList";
import CategoryList from "./CategoryList";
import SearchBar from "./SearchBar";
import CouponList from "./CouponList";
import CouponSummary from "./CouponSummary";
import BannerSlider, { BannerItem } from "~/components/BannerSlider";
import { getDirectusFileUrl } from "~/utils/files";

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
  const navigate = useNavigate();
  const { liffId, slug } = useParams();
  const showVoucherSummary = page?.metadata?.layout?.showVoucherSummary ?? true;
  const showCategory = page?.metadata?.layout?.showCategory ?? true;
  const showPopulars = page?.metadata?.layout?.showPopulars ?? true;
  const showBrands = page?.metadata?.layout?.showBrands ?? true;
  const showBannerVouchers = page?.metadata?.layout?.showBannerVouchers ?? true;
  const categories = page?.categories ?? [];
  const allCategory = {
    id: "all",
    icon_name: "Component",
    name: { th: "ทั้งหมด", en: "All" },
  } as Category;
  const categoriesWithAll = [allCategory, ...categories];
  const [selectedCategory, setSelectedCategory] =
    useState<Category>(allCategory);
  const popularVouchersText = page.metadata.popularVouchersText ?? {
    th: "คูปองยอดนิยม",
    en: "Popular Coupons",
  };

  // Convert populars to banner items
  const bannerItems: BannerItem[] = (populars || [])
    .filter((popular) => popular.banner) // Only show vouchers with banner images
    .map((popular) => ({
      id: popular.id,
      image: getDirectusFileUrl(popular.banner as string),
      alt: `Banner for ${popular.name?.[language] || popular.name?.th || popular.name?.en}`,
    }));

  const handleBannerClick = (banner: BannerItem) => {
    navigate(`/a/${liffId}/${slug}/coupon/${banner.id}`);
  };

  const filterVouchers = () => {
    return vouchers?.filter((voucher) =>
      (voucher.categories || []).some((cat) => cat.id === selectedCategory.id),
    );
  };

  return (
    <div className="space-y-3 bg-white pb-3">
      {/* Banner Slider */}
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

        {showBannerVouchers && bannerItems.length > 0 && (
          <div className="overflow-hidden rounded-xl">
            <BannerSlider
              banners={bannerItems}
              autoPlay={true}
              autoPlayInterval={4000}
              showDots={true}
              aspectRatio="16/9"
              onBannerClick={handleBannerClick}
            />
          </div>
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

      {selectedCategory.id === "all" && showPopulars && (
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
