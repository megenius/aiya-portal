import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { useState } from "react";
import { SectionHeader } from "~/components/SectionHeader";
import { PageApiService } from "~/services/page";
import { VoucherApiService } from "~/services/voucher";
import {
  createCategoryNameToIdMap,
  getCurrentCategoryName,
  getFilteredBrands,
  getFilteredVouchers,
  groupVouchersByCategory,
  mapVouchersToCategoryIds
} from "~/utils/categoryUtils";
import BrandsGrid from "./_components/BrandsGrid";
import { CategoryList } from "./_components/CategoryList";
import ComingSoon from "./_components/ComingSoon";
import LandscapeLayout from "./_components/LandscapeLayout";
import VoucherGrid from "./_components/VoucherGrid";

export const meta: MetaFunction = () => {
  return [
    { title: "AIYA Club - Exclusive Vouchers & Offers" },
    { name: "description", content: "Discover exclusive deals and offers with AIYA Club" },
  ];
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const [vouchers, brands, page] = await Promise.all([
    VoucherApiService.getVouchers(request),
    VoucherApiService.getVoucherBrands(request),
    PageApiService.getPages(request),
  ]);

  return json({ vouchers, brands, page });
};

export default function Index() {
  const { vouchers, brands, page } = useLoaderData<typeof loader>();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const categories = page?.metadata?.categories || [];
  
  // Use utility functions to process the data
  const categoryNameToId = createCategoryNameToIdMap(categories);
  const vouchersByCategory = groupVouchersByCategory(vouchers);
  const vouchersByCategoryId = mapVouchersToCategoryIds(vouchersByCategory, categoryNameToId);
  
  // Get filtered data based on selected category
  const filteredVouchers = getFilteredVouchers(selectedCategory, vouchers, vouchersByCategoryId);
  const filteredBrands = getFilteredBrands(selectedCategory, brands, categoryNameToId);
  const currentCategoryName = getCurrentCategoryName(selectedCategory, categories);

  // Category names that have vouchers
  const categoryNamesWithVouchers = Object.keys(vouchersByCategory);

  return (
    <LandscapeLayout>
      {/* Category selector */}
      {page?.metadata?.layout?.showCategory && (
        <div className="bg-white mb-6 flex items-center justify-center">
          <CategoryList
            language="en"
            categories={categories}
            selected={selectedCategory}
            onSelect={setSelectedCategory}
          />
        </div>
      )}

      {/* Popular vouchers section - only shown when "all" is selected */}
      {selectedCategory === 'all' && (
        <div className="bg-white p-6 mb-6">
          <SectionHeader title="Popular Vouchers" />
          <VoucherGrid vouchers={vouchers} />
        </div>
      )}

      {/* Brands section */}
      <div className="bg-white p-6 mb-6">
        <SectionHeader 
          title={selectedCategory === 'all' ? 'Brands' : `${currentCategoryName} Brands`} 
        />
        {filteredBrands.length > 0 ? (
          <BrandsGrid brands={filteredBrands} />
        ) : (
          <ComingSoon message={`No ${currentCategoryName} brands available yet`} />
        )}
      </div>

      {/* Vouchers by category section */}
      {selectedCategory === 'all' ? (
        // Display all categories when "all" is selected
        categoryNamesWithVouchers.map(category => {
          const categoryVouchers = vouchersByCategory[category].slice(0, 4);
          if (categoryVouchers.length === 0) return null;
          
          const categoryTitle = category.charAt(0).toUpperCase() + category.slice(1);
          
          return (
            <div key={category} className="bg-white rounded-2xl p-6 mb-6">
              <SectionHeader title={categoryTitle} />
              <VoucherGrid vouchers={categoryVouchers} />
            </div>
          );
        })
      ) : (
        // Display only the selected category
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
          <SectionHeader title={`${currentCategoryName} Vouchers`} />
          {filteredVouchers.length > 0 ? (
            <VoucherGrid vouchers={filteredVouchers} />
          ) : (
            <ComingSoon message={`No ${currentCategoryName} vouchers available yet`} />
          )}
        </div>
      )}
    </LandscapeLayout>
  );
}
