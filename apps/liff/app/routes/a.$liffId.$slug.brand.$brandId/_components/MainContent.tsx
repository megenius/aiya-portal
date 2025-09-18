import React, { useState } from "react";
import { useNavigate, useParams } from "@remix-run/react";
import VoucherCard from "./VoucherCard";
import BrandCard from "./BrandCard";
import Header from "./Header";
import { Brand } from "~/types/app";
import { useLineLiff } from "~/contexts/LineLiffContext";

interface MainContentProps {
  brand: Brand;
  language: string;
}

const MainContent: React.FC<MainContentProps> = ({ brand, language }) => {
  const { liff } = useLineLiff();
  const navigate = useNavigate();
  const { liffId, slug } = useParams();
  const [selectedTab, setSelectedTab] = useState<
    "all" | "popular" | "discount" | "freebie"
  >("all");

  // V2: backend already returns vouchers filtered by page. Only handle tab filtering here.
  const displayedVouchers = React.useMemo(() => {
    const source = brand?.vouchers ?? [];
    if (selectedTab === "popular") {
      return source.filter((v) => v.isPopular === true);
    }
    return source;
  }, [brand?.vouchers, selectedTab]);

  return (
    <>
      {/* Header */}
      <Header brand={brand} isInClient={liff?.isInClient() ?? false} />

      {/* Brand Card Component */}
      {brand && (
        <BrandCard
          brand={brand}
          couponCount={brand?.vouchers?.length ?? 0}
          language={language}
        />
      )}

      {/* Tab Navigation */}
      <div className="sticky top-0 z-10 mt-4 bg-white">
        {/* <div className="scrollbar-hide mx-4 flex justify-start space-x-4 overflow-x-auto py-3">
          {[
            { id: "all", label: "All" },
            { id: "popular", label: "Popular" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id as "all" | "popular")}
              className={`whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium ${
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
        </div> */}
        <div className="h-full space-y-4 px-4 py-4">
          {displayedVouchers.length > 0 ? (
            displayedVouchers.map((voucher) => (
              <VoucherCard
                key={voucher.id}
                brand={brand}
                voucher={voucher}
                language={language}
                onClick={() =>
                  navigate(`/a/${liffId}/${slug}/coupon/${voucher.id}`)
                }
              />
            ))
          ) : (
            <div className="py-8 text-center text-gray-500">
              No coupons available
            </div>
          )}
        </div>
      </div>

      {/* Coupons */}
    </>
  );
};

export default MainContent;
