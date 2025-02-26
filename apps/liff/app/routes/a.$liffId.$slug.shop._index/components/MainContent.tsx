import React, { useState } from "react";
import { Tag } from "lucide-react";
import { useNavigate } from "@remix-run/react";
import { SearchBar } from "./SearchBar";
import { CategoryList } from "./CategoryList";
import { PageLiff } from "~/types/page";
import { useLiff } from "~/hooks/useLiff";
import Loading from "~/components/Loading";

interface MainContentProps {
  page : PageLiff;
}

const MainContent: React.FC<MainContentProps> = ({ page }) => {
  const { language, isLoggedIn } = useLiff({ liffId: page.liff_id });
  const isThaiLanguage = language.startsWith("th");
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const navigateToCollectCoupon = (couponId: string) =>
    navigate(`/a/mockup/coupon/${couponId}`);

  // const categories = [
  //   { id: "all", name: "All", icon: "🛍️" },
  //   { id: "food", name: "Food", icon: "🍜" },
  //   { id: "music", name: "Music", icon: "🎧" },
  //   { id: "clothes", name: "Clothes", icon: "👕" },
  //   { id: "shoes", name: "Shoes", icon: "👟" },
  // ];

  const coupons = [
    {
      id: 1,
      type: "booking",
      store: "ร้านอาหารอร่อยดี",
      category: "food",
      discount: "ส่วนลด 25%",
      expiry: "7 วัน",
      image: "https://placehold.co/200x150",
    },
    {
      id: 2,
      type: "instant",
      store: "ร้านกาแฟดัง",
      category: "food",
      discount: "ลด 50 บาท",
      expiry: "30 วัน",
      image: "https://placehold.co/200x150",
    },
  ];

  if (!isLoggedIn && !page) {
    return <Loading />;
  }

  return (
    <div className="bg-white">
      <SearchBar />
      <CategoryList
        isThaiLanguage={isThaiLanguage}
        categories={page?.metadata?.categories}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />

      <div className="p-4">
        <div className="grid grid-cols-2 gap-4">
          {coupons.map((coupon) => (
            <button
              key={coupon.id}
              onClick={() => navigateToCollectCoupon(coupon.id.toString())}
              className="bg-white rounded-2xl shadow-sm overflow-hidden cursor-pointer"
            >
              <img
                src={coupon.image}
                alt={coupon.store}
                className="w-full h-32 object-cover"
              />
              <div className="p-3">
                <div className="flex items-center gap-1 text-xs text-gray-600 mb-1">
                  <Tag className="h-3 w-3" />
                  <span>{coupon.category}</span>
                  {coupon.type === "instant" && (
                    <span className="bg-green-100 text-green-700 px-1.5 py-0.5 rounded text-xs">
                      รับได้ทันที
                    </span>
                  )}
                </div>
                <h3 className="font-medium leading-snug mb-2 text-sm">
                  {coupon.store}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-green-600 text-sm font-medium">
                    {coupon.discount}
                  </span>
                  <span className="text-xs text-gray-500">
                    เหลือ {coupon.expiry}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
