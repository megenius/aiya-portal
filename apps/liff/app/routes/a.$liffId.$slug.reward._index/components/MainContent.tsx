import { useState } from "react";
import Tabs, { TabItem } from "~/components/Tabs";

interface CouponCollectionAppProps {
  primaryColor: string;
}

const CouponCollectionApp: React.FC<CouponCollectionAppProps> = ({
  primaryColor,
}) => {
  const [activeTab, setActiveTab] = useState("history");

  const userPoints = 15;
  const totalPointsNeeded = 25;
  const percentComplete = (userPoints / totalPointsNeeded) * 100;

  const couponHistory = [
    {
      id: 1,
      store: "Café Amazon",
      points: 1,
      date: "18 มี.ค. 2025",
      logo: "☕",
      status: "ใช้แล้ว",
    },
    {
      id: 2,
      store: "7-Eleven",
      points: 1,
      date: "15 มี.ค. 2025",
      logo: "🏪",
      status: "ใช้แล้ว",
    },
    {
      id: 3,
      store: "Central",
      points: 1,
      date: "10 มี.ค. 2025",
      logo: "🛍️",
      status: "ใช้แล้ว",
    },
    {
      id: 4,
      store: "MK Restaurant",
      points: 1,
      date: "5 มี.ค. 2025",
      logo: "🍲",
      status: "ใช้แล้ว",
    },
    {
      id: 5,
      store: "Major Cineplex",
      points: 1,
      date: "1 มี.ค. 2025",
      logo: "🎬",
      status: "ใช้แล้ว",
    },
  ];

  const rewards = [
    {
      id: 1,
      name: "ส่วนลด 100 บาท",
      points: 500,
      image: "🎁",
      category: "ร้านอาหาร",
    },
    {
      id: 2,
      name: "กาแฟฟรี 1 แก้ว",
      points: 300,
      image: "☕",
      category: "เครื่องดื่ม",
    },
    {
      id: 3,
      name: "ตั๋วหนังฟรี",
      points: 800,
      image: "🎬",
      category: "บันเทิง",
    },
    {
      id: 4,
      name: "ส่วนลด 15%",
      points: 450,
      image: "🛒",
      category: "ช้อปปิ้ง",
    },
  ];

  const tabs: TabItem[] = [
    {
      id: "history",
      label: { th: "ประวัติการใช้คูปอง", en: "Coupon History" },
    },
    { id: "rewards", label: { th: "แลกรางวัล", en: "Rewards" } },
  ];

  return (
    <div className="bg-gray-50 flex flex-col h-screen">
      {/* Points Progress Section */}
      <div className="bg-white">
        {/* <div className="bg-white m-4">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-bold">คุณมีแต้มสะสม</h2>
            <h2>25</h2>
          </div>
        </div> */}
        <div className="bg-white p-4 m-4 rounded-lg border shadow-md">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-bold">แต้มสะสมของคุณ</h2>
          </div>

          <div className="flex items-baseline mb-2">
            <span className="text-3xl font-bold text-primary">
              {userPoints}
            </span>
            <span className="text-gray-500 ml-1">
              / {totalPointsNeeded} แต้ม
            </span>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div
              className="bg-primary h-2 rounded-full"
              style={{ width: `${percentComplete}%` }}
            ></div>
          </div>

          <div className="flex justify-between text-sm text-gray-500">
            <span>
              อีก {totalPointsNeeded - userPoints} แต้มเพื่อรับรางวัลพิเศษ
            </span>
            {/* <span className="text-indigo-600">ดูรางวัล</span> */}
          </div>
        </div>

        {/* Tabs */}

        <Tabs
          language="th"
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          primaryColor={primaryColor}
        />
      </div>

      {/* Content based on active tab */}
      <div className="flex-1 overflow-y-auto">
        {activeTab === "history" ? (
          <div className="p-4">
            {/* Coupon Usage History */}
            <div className="mb-4">
              <h3 className="text-lg font-medium mb-3">ประวัติการใช้คูปอง</h3>

              {couponHistory.map((coupon) => (
                <div
                  key={coupon.id}
                  className="bg-white p-3 rounded-lg shadow mb-3 flex items-center"
                >
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-xl">
                    {coupon.logo}
                  </div>
                  <div className="ml-3 flex-1">
                    <div className="font-medium">{coupon.store}</div>
                    <div className="text-gray-500 text-sm">{coupon.date}</div>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="text-primary font-bold">
                      +{coupon.points} แต้ม
                    </div>
                    <div className="text-xs text-gray-500">{coupon.status}</div>
                  </div>
                </div>
              ))}

              {/* <button className="w-full text-indigo-600 py-2 text-sm font-medium">
                ดูทั้งหมด
              </button> */}
            </div>

            {/* Partners */}
            {/* <div>
              <h3 className="text-lg font-medium mb-3">พาร์ทเนอร์</h3>
              <div className="grid grid-cols-4 gap-3">
                {['🏪', '☕', '🛍️', '🍔', '⛽', '📱', '🏬', '🍕'].map((emoji, index) => (
                  <div key={index} className="bg-white rounded-lg shadow p-2 flex items-center justify-center h-16 text-2xl">
                    {emoji}
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        ) : (
          <div className="p-4">
            {/* Categories */}
            {/* <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
              <button className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm whitespace-nowrap">
                ทั้งหมด
              </button>
              <button className="bg-white text-gray-700 px-4 py-1 rounded-full text-sm whitespace-nowrap border">
                ร้านอาหาร
              </button>
              <button className="bg-white text-gray-700 px-4 py-1 rounded-full text-sm whitespace-nowrap border">
                เครื่องดื่ม
              </button>
              <button className="bg-white text-gray-700 px-4 py-1 rounded-full text-sm whitespace-nowrap border">
                บันเทิง
              </button>
              <button className="bg-white text-gray-700 px-4 py-1 rounded-full text-sm whitespace-nowrap border">
                ช้อปปิ้ง
              </button>
            </div> */}

            {/* Rewards */}
            <div className="grid grid-cols-2 gap-3">
              {rewards.map((reward) => (
                <div
                  key={reward.id}
                  className="bg-white rounded-lg shadow overflow-hidden"
                >
                  <div className="h-24 bg-gray-100 flex items-center justify-center text-4xl">
                    {reward.image}
                  </div>
                  <div className="p-3">
                    <div className="text-xs text-gray-500 mb-1">
                      {reward.category}
                    </div>
                    <div className="font-medium mb-2 text-sm">
                      {reward.name}
                    </div>
                    <button
                      className={`w-full py-1 rounded text-sm ${
                        userPoints >= reward.points
                          ? "bg-primary text-white"
                          : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      {userPoints >= reward.points
                        ? "แลกรับ"
                        : `อีก ${reward.points - userPoints} แต้ม`}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CouponCollectionApp;
