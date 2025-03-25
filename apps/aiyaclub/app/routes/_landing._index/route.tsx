import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { useState } from "react";
import { ApiService } from "~/services/api.service";
import BrandsGrid from "./_components/BrandsGrid";
import LandscapeLayout from "./_components/LandscapeLayout";
import VoucherGrid from "./_components/VoucherGrid";

export const meta: MetaFunction = () => {
  return [
    { title: "AIYA Club - Exclusive Vouchers & Offers" },
    { name: "description", content: "Discover exclusive deals and offers with AIYA Club" },
  ];
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const [vouchers, brands, allBrands] = await Promise.all([
    ApiService.getVouchers(request),
    ApiService.getVoucherBrands(request),
    ApiService.getBrands(request)
  ]);
  
  // Use json function for proper header setting
  return json({
    vouchers,
    brands,
    allBrands
  });
};

export default function Index() {
  const { vouchers, brands, allBrands } = useLoaderData<typeof loader>();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const categories = [
    { id: 'all', icon: '🏠', name: 'All' },
    { id: 'food', icon: '🍜', name: 'Food' },
    { id: 'beverage', icon: '🍹', name: 'Beverage' },
    { id: 'technology', icon: '💻', name: 'Technology' },
    { id: 'beauty', icon: '💄', name: 'Beauty' },
    { id: 'entertainment', icon: '🎭', name: 'Entertainment' }
  ];
  
  // Filter vouchers based on selected category
  // const filteredVouchers = selectedCategory === 'all' 
  //   ? vouchers 
  //   : vouchers.filter(voucher => voucher.category?.toLowerCase() === selectedCategory);
  
  const popularVouchers = vouchers.slice(0, 10);
  // const foodVouchers = vouchers.filter(v => v.category?.toLowerCase() === 'food').slice(0, 4);
  
  return (
    <LandscapeLayout>
      {/* Categories as horizontal scrollable list */}
      <div className="bg-white rounded-2xl p-5 shadow-sm mb-6">
        <h2 className="text-xl font-semibold mb-4 pl-3 border-l-4 border-blue-500">Categories</h2>
        <div className="flex overflow-x-auto space-x-4 pb-2 no-scrollbar">
          {categories.map(category => (
            <div 
              key={category.id}
              className={`flex flex-col items-center cursor-pointer min-w-max px-3 py-2 ${
                selectedCategory === category.id ? 'text-blue-500' : 'text-gray-700'
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-2 
                ${selectedCategory === category.id ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'}`}
              >
                {category.icon}
              </div>
              <span className="text-sm font-medium text-center">{category.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
        <h2 className="text-xl font-semibold mb-4 pl-3 border-l-4 border-blue-500">Popular Vouchers</h2>
        <VoucherGrid vouchers={popularVouchers} />
      </div>
      
      <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
        <h2 className="text-xl font-semibold mb-4 pl-3 border-l-4 border-blue-500">Brands</h2>
        <BrandsGrid brands={brands} />
      </div>
      
      {/* <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
        <h2 className="text-xl font-semibold mb-4 pl-3 border-l-4 border-blue-500">Food</h2>
        <VoucherGrid vouchers={foodVouchers} />
      </div> */}
    </LandscapeLayout>
  );
}
