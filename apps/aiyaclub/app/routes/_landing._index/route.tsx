import type { MetaFunction } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { Voucher, VoucherBrand } from "~/@types/app.type";
import BrandsGrid from "./_components/BrandsGrid";
import LandscapeLayout from "./_components/LandscapeLayout";
import VoucherGrid from "./_components/VoucherGrid";

export const meta: MetaFunction = () => {
  return [
    { title: "AIYA Club - Exclusive Vouchers & Offers" },
    { name: "description", content: "Discover exclusive deals and offers with AIYA Club" },
  ];
};

export const loader = async () => {
  const liffApi = process.env.LIFF_API_URL || "http://localhost:14200";

  const vouchers = await fetch(`${liffApi}/api/vouchers`)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    }).catch((error) => {
      console.error("Error fetching vouchers:", error);
      return [];
    }) as Array<Voucher>;
    
  const brands = await fetch(`${liffApi}/api/vouchers/voucher-brands`)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    }).catch((error) => {
      console.error("Error fetching brands:", error);
      return [];
    }) as Array<VoucherBrand>;
  
  return {
    vouchers,
    brands,
    user: {
      name: "Lalitchaya",
      points: 15,
      vouchersCollected: 0,
      vouchersUsed: 0
    }
  };
}

export default function Index() {
  const { vouchers, brands, user } = useLoaderData<typeof loader>();
  
  // Get first 3 vouchers for popular section
  const popularVouchers = vouchers.slice(0, 3);
  
  // Get food category vouchers (can be modified based on your data structure)
  const foodVouchers = vouchers.slice(0, 4);
  
  return (
    <LandscapeLayout user={user}>
      <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
        <h2 className="text-xl font-semibold mb-4 pl-3 border-l-4 border-blue-500">Popular Vouchers</h2>
        <VoucherGrid vouchers={popularVouchers} />
      </div>
      
      <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
        <h2 className="text-xl font-semibold mb-4 pl-3 border-l-4 border-blue-500">Brands</h2>
        <BrandsGrid brands={brands} />
      </div>
      
      <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
        <h2 className="text-xl font-semibold mb-4 pl-3 border-l-4 border-blue-500">Food</h2>
        <VoucherGrid vouchers={foodVouchers} />
      </div>
    </LandscapeLayout>
  );
}
