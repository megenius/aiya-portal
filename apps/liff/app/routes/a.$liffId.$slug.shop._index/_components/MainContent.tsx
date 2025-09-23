import React, { useState, useMemo, useCallback, useEffect } from "react";
import { useNavigate, useParams } from "@remix-run/react";
import { Search } from "lucide-react";
import { Brand, Category, Voucher, VoucherStats } from "~/types/app";
import { PageLiff } from "~/types/page";
import { Campaign } from "~/types/campaign";
import BrandList from "./BrandList";
import CategoryList from "./CategoryList";
import SearchBar from "./SearchBar";
import CouponList from "./CouponList";
import CouponSummary from "./CouponSummary";
import BannerSlider, { BannerItem } from "~/components/BannerSlider";
import {
  CouponListSkeleton,
  BrandListSkeleton,
  CategorySkeleton,
  BannerSkeleton,
  SearchResultsSkeleton,
} from "./LoadingStates";
import { t } from "~/i18n/messages";

interface MainContentProps {
  page: PageLiff;
  language: string;
  voucherUserStats: VoucherStats;
  vouchers?: Voucher[];
  populars?: Voucher[];
  banner_vouchers?: Voucher[];
  banner_campaigns?: Campaign[];
  brands?: Brand[];
  isLoading?: boolean;
}

const MainContent: React.FC<MainContentProps> = ({
  page,
  language,
  voucherUserStats,
  vouchers,
  populars,
  banner_vouchers,
  banner_campaigns,
  brands,
  isLoading = false,
}) => {
  const navigate = useNavigate();
  const { liffId, slug } = useParams();
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null,
  );
  const [searchQuery, setSearchQuery] = useState("");

  // Memoized layout settings
  const layoutSettings = useMemo(
    () => ({
      showVoucherSummary: page?.metadata?.layout?.showVoucherSummary ?? true,
      showCategories: page?.metadata?.layout?.showCategories ?? true,
      showPopulars: page?.metadata?.layout?.showPopulars ?? true,
      showBrands: page?.metadata?.layout?.showBrands ?? true,
      showBannerVouchers: page?.metadata?.layout?.showBannerVouchers ?? true,
      showSearch: page?.metadata?.layout?.showSearch ?? true,
    }),
    [page?.metadata?.layout],
  );

  // Memoized categories
  const { categories, allCategory, categoriesWithAll } = useMemo(() => {
    const cats = page?.categories ?? [];
    const allCat = {
      id: "all",
      icon_name: "Component",
      name: { th: "ทั้งหมด", en: "All" },
    } as Category;
    return {
      categories: cats,
      allCategory: allCat,
      categoriesWithAll: [allCat, ...cats],
    };
  }, [page?.categories]);

  // Initialize selected category
  useEffect(() => {
    if (!selectedCategory) {
      setSelectedCategory(allCategory);
    }
  }, [selectedCategory, allCategory]);

  // Memoized banner items (vouchers + campaigns)
  const bannerItems: BannerItem[] = useMemo(() => {
    const voucherBanners = (banner_vouchers || [])
      .filter((banner_voucher) => banner_voucher.banner)
      .map((banner_voucher) => {
        return {
          id: banner_voucher.id,
          image: banner_voucher.banner as string,
          alt: `Banner for ${banner_voucher.metadata?.title?.[language]}`,
          type: "voucher" as const,
        };
      })
      .filter((banner) => !!banner.image); // Remove empty images

    const campaignBanners = (banner_campaigns || []).map((campaign) => {
      return {
        id: campaign.id,
        image: campaign.banner_image as string,
        // title: campaign.title[language],
        alt: `Campaign banner for ${campaign.title[language]}`,
        type: "campaign" as const,
      };
    });

    return [...campaignBanners, ...voucherBanners];
  }, [banner_vouchers, banner_campaigns, language]);

  // Callbacks
  const handleBannerClick = useCallback(
    (banner: BannerItem) => {
      if (banner.type === "campaign") {
        navigate(`/a/${liffId}/${slug}/campaign/${banner.id}`);
      } else {
        // Default to voucher/coupon
        navigate(`/a/${liffId}/${slug}/coupon/${banner.id}`);
      }
    },
    [navigate, liffId, slug],
  );

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query.toLowerCase());
  }, []);

  const handleCategorySelect = useCallback((category: Category) => {
    setSelectedCategory(category);
    setSearchQuery(""); // Clear search when changing category
  }, []);

  // Merge vouchers from multiple sources (vouchers, populars, banner_vouchers) with de-duplication
  const allVouchers = useMemo(() => {
    const list = [
      ...(vouchers || []),
      ...(populars || []),
      ...(banner_vouchers || []),
    ];
    const map = new Map<string, Voucher>();
    for (const v of list) {
      if (v && !map.has(v.id)) {
        map.set(v.id, v);
      }
    }
    return Array.from(map.values());
  }, [vouchers, populars, banner_vouchers]);

  // Memoized filtered vouchers
  const filteredVouchers = useMemo(() => {
    let filtered = allVouchers;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter((voucher) => {
        const title = voucher.metadata?.title?.[language]?.toLowerCase() || "";
        const brandName = voucher.voucher_brand_id?.name?.toLowerCase() || "";
        return title.includes(searchQuery) || brandName.includes(searchQuery);
      });
    }

    // Filter by category (only if not searching)
    if (!searchQuery && selectedCategory && selectedCategory.id !== "all") {
      filtered = filtered.filter((voucher) =>
        (voucher.categories || []).some(
          (cat) => cat.id === selectedCategory.id,
        ),
      );
    }

    return filtered;
  }, [allVouchers, searchQuery, selectedCategory, language]);

  // Memoized vouchers by category
  const vouchersByCategory = useMemo(() => {
    if (searchQuery) return {};

    const grouped: Record<string, Voucher[]> = {};
    categories.forEach((category) => {
      grouped[category.id] = allVouchers.filter((voucher) =>
        (voucher.categories || []).some((cat) => cat.id === category.id),
      );
    });
    return grouped;
  }, [allVouchers, categories, searchQuery]);

  // Memoized filtered brands
  const filteredBrands = useMemo(() => {
    if (!brands || !searchQuery) return brands;

    return brands.filter((brand) =>
      brand.name?.toLowerCase().includes(searchQuery),
    );
  }, [brands, searchQuery]);

  return (
    <div className="space-y-6 bg-white pb-3">
      {/* Banner Slider */}
      <div className="space-y-6 px-4">
        {layoutSettings.showSearch && (
          <SearchBar
            language={language}
            primaryColor={page.bg_color ?? ""}
            onSearch={handleSearch}
            isLoading={isLoading}
          />
        )}
        {layoutSettings.showVoucherSummary && (
          <CouponSummary
            totalVouchers={voucherUserStats?.total}
            availableVouchers={voucherUserStats?.collected}
            usedVouchers={voucherUserStats?.used}
            primaryColor={page.bg_color ?? ""}
            language={language}
          />
        )}

        {layoutSettings.showBannerVouchers &&
          bannerItems.length > 0 &&
          !searchQuery && (
            <div className="overflow-hidden rounded-xl">
              {isLoading ? (
                <BannerSkeleton />
              ) : bannerItems.length > 0 ? (
                <BannerSlider
                  banners={bannerItems}
                  autoPlay={true}
                  autoPlayInterval={4000}
                  showDots={true}
                  aspectRatio="16/9"
                  onBannerClick={handleBannerClick}
                />
              ) : null}
            </div>
          )}
      </div>
      {layoutSettings.showCategories &&
        categories.length > 0 &&
        !searchQuery &&
        selectedCategory && (
          <>
            {isLoading ? (
              <div className="relative flex snap-x snap-mandatory overflow-x-auto overflow-y-visible whitespace-nowrap px-4">
                <CategorySkeleton />
              </div>
            ) : (
              <CategoryList
                language={language}
                categories={categoriesWithAll}
                selected={selectedCategory}
                primaryColor={page.bg_color || ""}
                onSelect={handleCategorySelect}
              />
            )}
          </>
        )}

      {/* Search Results */}
      {searchQuery && (
        <div className="space-y-4">
          {isLoading ? (
            <SearchResultsSkeleton />
          ) : (
            <>
              <div className="px-4">
                <h2 className="text-lg font-medium">
                  {t(language as "th" | "en", "search.resultsFor", {
                    query: searchQuery,
                  })}
                </h2>
                <p
                  id="search-results-count"
                  className="text-sm text-gray-500"
                  role="status"
                  aria-live="polite"
                >
                  {t(language as "th" | "en", "search.resultsCount", {
                    count:
                      filteredVouchers.length + (filteredBrands?.length || 0),
                  })}
                </p>
              </div>

              {filteredVouchers.length > 0 && (
                <CouponList
                  coupons={filteredVouchers}
                  language={language}
                  title={t(language as "th" | "en", "search.vouchers")}
                  scrollDirection="vertical"
                />
              )}

              {filteredBrands && filteredBrands.length > 0 && (
                <BrandList
                  brands={filteredBrands}
                  page={page}
                  language={language}
                />
              )}

              {filteredVouchers.length === 0 &&
                (!filteredBrands || filteredBrands.length === 0) && (
                  <div className="flex flex-col items-center justify-center px-4 py-12">
                    <div className="mb-4 text-gray-400">
                      <Search className="h-12 w-12" />
                    </div>
                    <h3 className="mb-2 text-lg font-medium text-gray-900">
                      {t(language as "th" | "en", "search.emptyTitle")}
                    </h3>
                    <p className="text-center text-gray-500">
                      {t(language as "th" | "en", "search.emptySuggestion")}
                    </p>
                  </div>
                )}
            </>
          )}
        </div>
      )}

      {/* Category-based content (when not searching) */}
      {!searchQuery && selectedCategory && (
        <>
          {selectedCategory.id === "all" &&
            layoutSettings.showPopulars &&
            (isLoading ? (
              <CouponListSkeleton />
            ) : (
              <CouponList
                coupons={populars}
                language={language}
                title={t(language as "th" | "en", "home.popularVouchers")}
              />
            ))}

          {selectedCategory.id === "all" &&
            layoutSettings.showBrands &&
            (isLoading ? (
              <BrandListSkeleton />
            ) : (
              <BrandList brands={brands} page={page} language={language} />
            ))}

          <div className="space-y-4">
            {selectedCategory.id === "all" &&
              !isLoading &&
              ((categories?.length || 0) > 0 ? (
                categories.map((category) => {
                  const byCategory = vouchersByCategory[category.id] || [];
                  return byCategory.length > 0 ? (
                    <CouponList
                      key={category.id}
                      coupons={byCategory}
                      language={language}
                      title={
                        category.name[language as keyof typeof category.name]
                      }
                    />
                  ) : null;
                })
              ) : (
                <CouponList
                  coupons={allVouchers}
                  language={language}
                  title={t(language as "th" | "en", "home.allVouchers")}
                />
              ))}
          </div>
          {selectedCategory.id === "all" && isLoading && (
            <>
              <CouponListSkeleton />
              <CouponListSkeleton />
            </>
          )}

          {selectedCategory.id !== "all" &&
            (isLoading ? (
              <CouponListSkeleton vertical />
            ) : (
              <CouponList
                coupons={vouchersByCategory[selectedCategory.id] || []}
                language={language}
                scrollDirection="vertical"
              />
            ))}
        </>
      )}
    </div>
  );
};

export default MainContent;
