import { useNavigate } from "@remix-run/react";
import React, { useState } from "react";
import { useCreateProfile } from "~/hooks/Profiles/useCreateProfile";
import { Profile } from "~/routes/a.$liffId.$slug.shop._index/_components/Header";
import { Category, PageLiff } from "~/types/page";
import { lightenColor } from "~/utils/colors";

interface MainContentProps {
  page: PageLiff;
  lineProfile?: Profile;
  language: string;
  dest?: string;
  referrerId?: string; // เพิ่ม prop รับข้อมูล referrer
}

const MainContent: React.FC<MainContentProps> = ({
  page,
  lineProfile,
  language,
  dest,
  referrerId
}) => {
  const navigate = useNavigate();
  const createProfile = useCreateProfile();
  const [selectedInterests, setSelectedInterests] = useState<Category[]>([]);

  const toggleInterest = (category: Category) => {
    setSelectedInterests((prev) => {
      if (prev.some((item) => item.id === category.id)) {
        return prev.filter((item) => item.id !== category.id);
      } else {
        return [...prev, category];
      }
    });
  };

  const handleNext = () => {
    // Add debugging information
    console.log('Line profile:', lineProfile);
    console.log('Page:', page);
    console.log('Selected interests:', selectedInterests);
    console.log('Referrer ID:', referrerId);
    
    if (!lineProfile?.userId) {
      console.error('Missing userId in lineProfile');
      alert('ไม่พบข้อมูลผู้ใช้ กรุณาลองใหม่อีกครั้ง');
      return;
    }
    
    if (!page.liff_id) {
      console.error('Missing liff_id in page');
      alert('ไม่พบ LIFF ID กรุณาลองใหม่อีกครั้ง');
      return;
    }
    
    const data = {
      uid: lineProfile.userId,
      liff_id: page.liff_id,
      display_name: lineProfile.displayName,
      picture_url: lineProfile.pictureUrl,
      interests: selectedInterests.map((item) => item.name.en),
      referrer_id: referrerId, // เพิ่มข้อมูล referrer (ถ้ามี)
    };
    
    console.log('Profile data to be sent:', data);
    
    createProfile.mutate(
      { variables: data },
      {
        onSuccess: (response) => {
          console.log('Profile created successfully:', response);
          if (dest) {
            navigate(
              `/a/${page.liff_id}/${page.slug}/${dest}`
            );
          } else {
            navigate(`/a/${page.liff_id}/${page.slug}/shop`);
          }
        },
        onError: (error: any) => {
          console.error('Profile creation error:', error);
          alert(`เกิดข้อผิดพลาดในการสร้างโปรไฟล์ [${error.message}]`);
        }
      }
    );
  };

  // จัดกลุ่มหมวดหมู่เป็นคู่ (แถวละ 2 รายการ)
  const categoryPairs: Category[][] = [];
  const categories = page.metadata.categories || [];

  for (let i = 0; i < categories.length; i += 2) {
    if (i + 1 < categories.length) {
      categoryPairs.push([categories[i], categories[i + 1]]);
    } else {
      categoryPairs.push([categories[i]]);
    }
  }

  const isSelected = (category: Category) =>
    selectedInterests.some((item) => item.id === category.id);

  return (
    <div className="bg-white h-screen-safe p-4 max-w-md mx-auto pb-32">
      {/* กำหนด CSS animation */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes pop {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
          
          .animate-fade-in {
            animation: fadeIn 0.5s ease-out forwards;
          }
          
          .animate-slide-up {
            animation: slideUp 0.5s ease-out forwards;
          }
          
          .animate-pop {
            animation: pop 0.3s ease-out;
          }
        `}
      </style>

      <div className="mb-6 animate-fade-in">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          เลือกความสนใจของคุณ
        </h1>
        <p className="text-gray-600 mb-1">
          รับคูปองและโปรโมชั่นที่เหมาะกับสิ่งที่คุณชื่นชอบ
        </p>
        <p
          className="text-primary font-medium"
          style={{ color: page.bg_color ?? undefined }}
        >
          เลือกอย่างน้อย 1 รายการ
        </p>
      </div>

      <div className="space-y-3 mb-6">
        {categoryPairs.map((pair, index) => (
          <div
            key={index}
            className="flex gap-3 animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {pair.map((category) => (
              <button
                key={category.id}
                onClick={() => toggleInterest(category)}
                className={`flex items-center flex-1 py-3 px-4 rounded-full cursor-pointer transition-all duration-300 border ${isSelected(category)
                  ? "bg-primaryLightest border-primary text-primary animate-pop"
                  : "bg-gray-100 border-transparent text-gray-800"
                  }`}
                style={{
                  backgroundColor: isSelected(category)
                    ? page.bg_color
                      ? lightenColor(page.bg_color, 85)
                      : undefined
                    : undefined,
                  borderColor: isSelected(category)
                    ? (page.bg_color ?? undefined)
                    : undefined,
                  color: isSelected(category)
                    ? (page.bg_color ?? undefined)
                    : undefined,
                }}
              >
                <span className="mr-2 text-xl">{category.icon}</span>
                <span className="font-medium text-sm">
                  {category.name[language]}
                </span>
              </button>
            ))}

            {/* ถ้ามีรายการเดียวในแถวสุดท้าย เพิ่ม div เปล่าเพื่อให้ layout สมดุล */}
            {pair.length === 1 && <div className="flex-1"></div>}
          </div>
        ))}
      </div>

      {/* Bottom Sticky Button Container */}
      <div
        className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100 shadow-md max-w-md mx-auto"
        style={{ marginLeft: "auto", marginRight: "auto" }}
      >
        <button
          onClick={handleNext}
          disabled={selectedInterests.length === 0}
          className={`w-full py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 active:scale-95 ${selectedInterests.length > 0
            ? "bg-primary text-white"
            : "bg-gray-200 text-gray-500"
            }`}
          style={{
            backgroundColor:
              selectedInterests.length > 0
                ? (page.bg_color ?? undefined)
                : undefined,
          }}
        >
          ถัดไป
        </button>

        {/* <div className="text-center mt-4">
          <button
            onClick={handleSkip}
            className="text-gray-500 text-sm py-2 transition-transform hover:scale-105 active:scale-95"
          >
            ข้ามขั้นตอนนี้
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default MainContent;
