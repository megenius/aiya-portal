import React from 'react';
import { TrendingUp, Users, DollarSign, Award, ArrowRight, Zap, Target, Gift } from 'lucide-react';

const AffiliateHero = () => {
  const highlights = [
    {
      icon: <DollarSign className="w-6 h-6 text-blue-500" />,
      title: 'รายได้สูงสุด 15%',
      description: 'รับคอมมิชชันสูงสุด 15% ต่อการแนะนำ พร้อม Recurring Payment 6 เดือน'
    },
    {
      icon: <Gift className="w-6 h-6 text-green-500" />,
      title: 'โบนัสเลื่อนระดับ',
      description: 'รับโบนัสสูงสุด 3,000 บาท เมื่อเลื่อนระดับเป็น Advanced และ Master'
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: 'เริ่มต้นได้ทันที',
      description: 'ไม่มีค่าใช้จ่ายในการสมัคร ไม่มีเงื่อนไขขั้นต่ำสำหรับผู้เริ่มต้น'
    },
    {
      icon: <Target className="w-6 h-6 text-red-500" />,
      title: 'รายได้ไม่จำกัด',
      description: 'ไม่จำกัดจำนวนลูกค้าที่แนะนำ ยิ่งแนะนำมาก รายได้ยิ่งเพิ่ม'
    }
  ];

  const benefits = [
    {
      title: 'คอมมิชชันที่ยุติธรรม',
      points: [
        'First Payment ทันทีที่แนะนำลูกค้าสำเร็จ',
        'Recurring Payment ต่อเนื่อง 6 เดือน',
        'โบนัสพิเศษเมื่อเลื่อนระดับ'
      ]
    },
    {
      title: 'เครื่องมือครบครัน',
      points: [
        'Dashboard ติดตามผลแบบเรียลไทม์',
        'ลิงก์แนะนำที่ไม่ซ้ำใคร',
        'รายงานสถิติแบบละเอียด'
      ]
    },
    {
      title: 'การสนับสนุน',
      points: [
        'ทีมซัพพอร์ตพร้อมช่วยเหลือ 24/7',
        'คู่มือและวิดีโอสอนการใช้งาน',
        'ชุมชน Affiliate ให้คำแนะนำ'
      ]
    }
  ];

  return (
    <div className="max-w-[1200px] mx-auto p-4">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 md:p-12 mb-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            สร้างรายได้ไม่จำกัดกับ<br/>
            <span className="text-blue-600">Affiliate Program</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            เริ่มต้นธุรกิจของคุณวันนี้ ด้วยระบบ Affiliate ที่ให้ผลตอบแทนสูงสุด 
            พร้อมเครื่องมือที่จะช่วยให้คุณประสบความสำเร็จ
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              สมัครเลย
            </button>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium border border-blue-600 hover:bg-blue-50 transition-colors">
              ดูรายละเอียด
            </button>
          </div>
        </div>
      </div>

      {/* Highlights Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {highlights.map((highlight, index) => (
          <div key={index} className="bg-white border rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              {highlight.icon}
              <h3 className="font-semibold text-lg">{highlight.title}</h3>
            </div>
            <p className="text-gray-600">{highlight.description}</p>
          </div>
        ))}
      </div>

      {/* Benefits Section */}
      <div className="bg-white border rounded-xl p-8">
        <h2 className="text-2xl font-bold text-center mb-8">ทำไมต้องเลือกเรา?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl font-semibold">{benefit.title}</h3>
              <ul className="space-y-3">
                {benefit.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                    <span className="text-gray-600">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 bg-gray-50 rounded-lg p-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">15%</div>
            <div className="text-sm text-gray-600">คอมมิชชันสูงสุด</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">6 เดือน</div>
            <div className="text-sm text-gray-600">Recurring Payment</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">3,000฿</div>
            <div className="text-sm text-gray-600">โบนัสเลื่อนระดับ</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-sm text-gray-600">ทีมซัพพอร์ต</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffiliateHero;