import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { useState } from "react";
import { PageApiService } from "~/services/page";
import { VoucherApiService } from "~/services/voucher";
import BrandsGrid from "./_components/BrandsGrid";
import { CategoryList } from "./_components/CategoryList";
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

  // Use json function for proper header setting
  return json({
    vouchers,
    brands,
    page
  });
};

export default function Index() {
  const { vouchers, brands, page } = useLoaderData<typeof loader>();
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Group vouchers by category
  const vouchersByCategory = vouchers.reduce((acc, voucher) => {
    const category = voucher.voucher_brand_id.metadata.category.name.en?.toLowerCase() || 'other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(voucher);
    return acc;
  }, {} as Record<string, typeof vouchers>);

  // Get categories with vouchers
  const categoriesWithVouchers = Object.keys(vouchersByCategory);
  
  // Filter vouchers based on selected category
  const popularVouchers = vouchers.slice(0, 10);

  return (
    <LandscapeLayout>
      {/* Categories as horizontal scrollable list */}
      {page?.metadata?.layout?.showCategory && (
        <div className="bg-white mb-6 flex items-center justify-center">
        <CategoryList
          language={"en"}
          categories={page?.metadata?.categories}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />
        </div>
      )}

      <div className="bg-white p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4 pl-3 border-l-4 border-blue-500">Popular Vouchers</h2>
        <VoucherGrid vouchers={popularVouchers} />
      </div>

      <div className="bg-white p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4 pl-3 border-l-4 border-blue-500">Brands</h2>
        <BrandsGrid brands={brands} />
      </div>

      {/* Display vouchers by category */}
      {selectedCategory === 'all' ? (
        // Show all categories when "all" is selected
        categoriesWithVouchers.map(category => {
          const categoryVouchers = vouchersByCategory[category].slice(0, 4);
          if (categoryVouchers.length === 0) return null;
          
          return (
            <div key={category} className="bg-white rounded-2xl p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4 pl-3 border-l-4 border-blue-500">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </h2>
              <VoucherGrid vouchers={categoryVouchers} />
            </div>
          );
        })
      ) : (
        // Show only the selected category
        vouchersByCategory[selectedCategory.toLowerCase()] ? (
          <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
            <h2 className="text-xl font-semibold mb-4 pl-3 border-l-4 border-blue-500">
              {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
            </h2>
            <VoucherGrid vouchers={vouchersByCategory[selectedCategory.toLowerCase()]} />
          </div>
        ) : null
      )}
    </LandscapeLayout>
  );
}
