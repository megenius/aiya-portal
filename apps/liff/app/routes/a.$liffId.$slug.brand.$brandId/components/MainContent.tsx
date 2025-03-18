import React, { useState } from "react";
import { ChevronLeft, Search } from "lucide-react";
import { useNavigate, useParams } from "@remix-run/react";
import { useBrand } from "~/hooks/brands/useBrand";
import Loading from "~/components/Loading";
import VoucherCard from "./VoucherCard";
import BrandCard from "./BrandCard";

interface MainContentProps {
  language: string;
}

const MainContent: React.FC<MainContentProps> = ({ language }) => {
  const navigate = useNavigate();
  const { liffId, slug, brandId } = useParams();
  const [selectedTab, setSelectedTab] = useState<
    "all" | "popular" | "discount" | "freebie"
  >("all");
  const { data: brand, isLoading: brandLoading } = useBrand({
    id: brandId as string,
  });

  // กรองคูปองตามแท็บที่เลือก
  // const filteredCoupons =
  //   selectedTab === "all"
  //     ? coupons
  //     : coupons.filter((coupon) => coupon.type === selectedTab);

  if (brandLoading) {
    return <Loading />;
  }

  return (
    <>
      {/* Header */}
      <header
        className="sticky top-0 z-10 pt-4 pb-16 bg-primary text-white"
        style={{ backgroundColor: brand?.primaryColor ?? undefined }}
      >
        <div className="px-4 py-2 flex items-center justify-between">
          <div className="flex items-center">
            <button
              className="mr-2 p-1"
              onClick={() => navigate(`/a/${liffId}/${slug}/shop`)}
            >
              <ChevronLeft size={24} />
            </button>
            <h1 className="text-lg font-medium">{brand?.name}</h1>
          </div>
          <button className="p-1">
            <Search size={20} />
          </button>
        </div>
      </header>

      {/* Brand Card Component */}
      {brand && <BrandCard brand={brand} language={language} />}

      {/* Tab Navigation */}
      <div className="sticky top-0 bg-white z-10 mt-4">
        <div className="flex justify-center overflow-x-auto py-3 scrollbar-hide shadow-sm">
          {[
            { id: "all", label: "All" },
            { id: "popular", label: "Popular" },
            { id: "discount", label: "Discount" },
            { id: "freebie", label: "Freebie" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id as any)}
              className={`mx-2 px-4 py-2 rounded-lg text-sm whitespace-nowrap font-medium ${
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
        <div className="h-full py-4 px-4 space-y-4 ">
          {brand?.vouchers.map((voucher) => (
            <VoucherCard
              key={voucher.id}
              brand={brand}
              voucher={voucher}
              language={language}
              onClick={() =>
                navigate(`/a/${liffId}/${slug}/voucher/${voucher.id}`)
              }
            />
          ))}
        </div>
      </div>

      {/* Coupons */}
    </>
  );
};

export default MainContent;
