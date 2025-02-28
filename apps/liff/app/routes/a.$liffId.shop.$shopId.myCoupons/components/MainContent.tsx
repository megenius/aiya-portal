import { useState } from "react";
import { useNavigate } from "@remix-run/react";
import Header from "./Header";
import NavigationTabs from "./NavigationTabs";
import CouponCard from "./CouponCard";

interface MainContentProps {}

const MainContent: React.FC<MainContentProps> = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("available");

  const navigateToUseCoupon = (couponId: string) =>
    navigate(`/a/mockup/coupon/${couponId}`);

  const myCoupons = [
    {
      id: 1,
      image: "https://placehold.co/200x150",
      store: "Store 1",
      category: "Category 1",
      discount: "10% off",
    },
    {
      id: 2,
      image: "https://placehold.co/200x150",
      store: "Store 2",
      category: "Category 2",
      discount: "20% off",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <NavigationTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="p-4">
        {myCoupons.map((coupon) => (
          <CouponCard
            key={coupon.id}
            coupon={coupon}
            onClick={navigateToUseCoupon}
          />
        ))}
      </main>
    </div>
  );
};

export default MainContent;
