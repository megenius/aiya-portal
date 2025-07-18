import React, { useState } from "react";
import { useNavigate, useParams } from "@remix-run/react";
import VoucherCard from "./VoucherCard";
import BrandCard from "./BrandCard";
import Header from "./Header";
import { Brand } from "~/types/app";
import { PageLiff } from "~/types/page";
import { useLineLiff } from "~/hooks/useLineLiff";

interface MainContentProps {
  brand: Brand;
  language: string;
  page:PageLiff;
}

const MainContent: React.FC<MainContentProps> = ({ brand, language, page }) => {
  const { data : liff } = useLineLiff();
  const navigate = useNavigate();
  const { liffId, slug } = useParams();
  const [selectedTab, setSelectedTab] = useState<
    "all" | "popular" | "discount" | "freebie"
  >("all");

  // Filter vouchers to only include those in page.vouchers or page.populars
  const filteredVouchers = React.useMemo(() => {
    if (!brand?.vouchers) return [];
    
    const pageVoucherIds = new Set([
      ...(page.vouchers?.map(v => v.id) || []),
      ...(page.populars?.map(p => p.id) || [])
    ]);
    
    return brand.vouchers.filter(voucher => pageVoucherIds.has(voucher.id));
  }, [brand?.vouchers, page.vouchers, page.populars]);

  // Filter vouchers by selected tab
  const displayedVouchers = React.useMemo(() => {
    if (selectedTab === 'popular') {
      const popularVoucherIds = new Set(page.populars?.map(p => p.id) || []);
      return filteredVouchers.filter(v => popularVoucherIds.has(v.id));
    }
    return filteredVouchers;
  }, [filteredVouchers, selectedTab, page.populars]);

  return (
    <>
      {/* Header */}
       <Header brand={brand} isInClient={liff?.isInClient() ?? false} />

      {/* Brand Card Component */}
      {brand && <BrandCard brand={brand} couponCount={filteredVouchers.length} language={language} isInClient={liff?.isInClient() ?? false} />}

      {/* Tab Navigation */}
      <div className="sticky top-0 bg-white z-10 mt-4">
        <div className="flex justify-start overflow-x-auto mx-4 py-3 space-x-4 scrollbar-hide">
          {[
            { id: "all", label: "All" },
            { id: "popular", label: "Popular" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id as any)}
              className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap font-medium ${
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
        <div className="h-full py-4 px-4 space-y-4">
          {displayedVouchers.length > 0 ? (
            displayedVouchers.map((voucher) => (
              <VoucherCard
                key={voucher.id}
                brand={brand}
                voucher={voucher}
                language={language}
                onClick={() =>
                  navigate(`/a/${liffId}/${slug}/voucher/${voucher.id}`)
                }
              />
            ))
          ) : (
            <div className="text-center py-8 text-gray-500">
              No vouchers available
            </div>
          )}
        </div>
      </div>

      {/* Coupons */}
    </>
  );
};

export default MainContent;
