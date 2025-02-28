import React from "react";
import { useParams, useNavigate } from "@remix-run/react";
import { ArrowLeft, Clock } from "lucide-react";


interface MainContentProps {
  selectedCoupon: {
    id: number;
    image: string;
    store: string;
    discount: string;
    expiry: string;
    type: string;
  };
}

const MainContent: React.FC<MainContentProps> = ({selectedCoupon}) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const navigateToLanding = () => navigate("/a/mockup/landing");

  return (
    <div className="min-h-screen bg-gray-50">
        <div className="bg-white">
          <div className="flex items-center p-4">
            <button onClick={() => navigateToLanding} className="mr-4">
              <ArrowLeft className="h-6 w-6" />
            </button>
            <h1 className="text-lg font-semibold">รายละเอียดคูปอง</h1>
          </div>
        </div>

        <div className="p-4">
          <div className="bg-white rounded-xl p-4 mb-4">
            <img
              src={selectedCoupon.image}
              alt={selectedCoupon.store}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{selectedCoupon.store}</h2>
            <span className="text-green-600 text-lg font-medium block mb-4">
              {selectedCoupon.discount}
            </span>

            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-gray-500 mb-2">รายละเอียด</h3>
                <p className="text-gray-700">
                  {selectedCoupon.type === 'booking' 
                    ? 'ส่วนลดสำหรับอาหารทุกรายการ (ไม่รวมเครื่องดื่ม) เมื่อทานที่ร้านเท่านั้น'
                    : 'ส่วนลดสำหรับเครื่องดื่มทุกรายการ สามารถใช้ได้ที่หน้าร้านหรือสั่งกลับบ้าน'}
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-500 mb-2">ระยะเวลา</h3>
                <div className="flex items-center gap-2 text-gray-700">
                  <Clock className="h-5 w-5" />
                  <span>หมดอายุ: {selectedCoupon.expiry}</span>
                </div>
              </div>

              <div>
                <h3 className="font-medium text-gray-500 mb-2">เงื่อนไขการใช้งาน</h3>
                <ul className="space-y-2 text-gray-700">
                  {selectedCoupon.type === 'booking' ? (
                    <>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>จองล่วงหน้าอย่างน้อย 1 วัน</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>ใช้ได้ที่สาขาที่ร่วมรายการเท่านั้น</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>ไม่สามารถใช้ร่วมกับโปรโมชั่นอื่นได้</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>จำกัด 1 สิทธิ์ต่อโต๊ะ ต่อบิล</span>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>จำกัด 1 สิทธิ์ต่อท่าน</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>ใช้ได้ที่สาขาที่ร่วมรายการเท่านั้น</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>ไม่สามารถใช้ร่วมกับโปรโมชั่นอื่นได้</span>
                      </li>
                    </>
                  )}
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-gray-500 mb-2">สาขาที่ร่วมรายการ</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>สาขาเซ็นทรัลเวิลด์ ชั้น 7</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>สาขาสยามพารากอน ชั้น 4</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>สาขาเอ็มควอเทียร์ ชั้น 5</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              if (selectedCoupon.type === 'booking') {
                console.log('booking');
                
              } else {
                alert('รับคูปองสำเร็จ');
              }
            }}
            className="w-full bg-green-600 text-white py-4 rounded-xl font-medium"
          >
            {selectedCoupon.type === 'booking' ? 'จองเลย' : 'รับคูปอง'}
          </button>
        </div>
      </div>
  );
}

export default MainContent;
