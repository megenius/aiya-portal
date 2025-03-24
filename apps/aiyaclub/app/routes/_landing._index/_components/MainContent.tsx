import React, { useState } from "react";
import { PageLiff, Voucher, VoucherStats } from "~/@types/app.type";
import Loading from "~/components/Loading";
import { CategoryList } from "./CategoryList";
import SearchBar from "./SearchBar";
import VoucherList from "./VoucherList";
import VoucherSummary from "./VoucherSummary";

interface MainContentProps {
  page: PageLiff;
  language: string;
  voucherUserStats: VoucherStats;
}

// Helper function to get Directus file URL
const getDirectusFileUrl = (fileId: string): string => {
  const directusUrl = process.env.DIRECTUS_URL || "https://your-directus-url.com";
  if (!fileId) return "";
  // Check if fileId is already a full URL
  if (fileId.startsWith('http')) return fileId;
  // Otherwise, construct the URL
  return `${directusUrl}/assets/${fileId}`;
};

const MainContent: React.FC<MainContentProps> = ({ page, language, voucherUserStats }) => {
  const liffApi = process.env.LIFF_API_URL || "http://localhost:14200";
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [vouchers, setVouchers] = useState<Array<Voucher>>([]);
  const [brands, setBrands] = useState<Array<any>>([]);
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const vouchersResponse = await fetch(`${liffApi}/api/vouchers?status=published`);
        if (!vouchersResponse.ok) throw new Error("Failed to fetch vouchers");
        const vouchersData: Voucher[] = await vouchersResponse.json();

        const brandsResponse = await fetch(`${liffApi}/api/brands`);
        if (!brandsResponse.ok) throw new Error("Failed to fetch brands");
        const brandsData: Array<{ id: number; name: string; logo: string }> = await brandsResponse.json();

        setVouchers(vouchersData);
        setBrands(brandsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  
  const brandText = {
    th: "แบรนด์",
    en: "Brands",
  };
  const popularCouponsText = {
    th: "คูปองยอดนิยม",
    en: "Popular Coupons",
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="bg-white pb-3 space-y-3">
      <div className="px-4 space-y-3">
        <SearchBar language={'en'} />
        <VoucherSummary totalVouchers={voucherUserStats?.total} availableVouchers={voucherUserStats?.collected} usedVouchers={voucherUserStats?.used + voucherUserStats?.expired} language={language} />
        {page?.metadata?.layout?.showCategory && (
          <CategoryList
            language={'en'}
            categories={page?.metadata?.categories}
            selected={selectedCategory}
            onSelect={setSelectedCategory}
          />
        )}
      </div>

      <VoucherList
        vouchers={vouchers ?? []}
        language={language}
        title={popularCouponsText['en']}
      />

      <div className="space-y-2">
        <h3 className="px-4 text-lg font-medium">
          {brandText['en']}
        </h3>
        <div className="flex overflow-x-auto gap-3 px-4" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
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
              </div>
              <span className="text-xs text-gray-700 text-center">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
