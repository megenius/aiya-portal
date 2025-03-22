import React from 'react';
import { BadgeCheck, TrendingUp, Trophy, Users, DollarSign, Calendar, AlertCircle, CheckCircle } from 'lucide-react';

const AffiliateTiers = () => {
  const commissionTypes = [
    {
      title: 'แพ็กเกจรายเดือน',
      icon: <DollarSign className="w-5 h-5 text-blue-500" />,
      points: [
        'First Payment: จ่ายครั้งเดียวเมื่อลูกค้าสมัครใหม่',
        'Recurring Payment: จ่ายต่อเนื่อง 6 เดือนเท่านั้น',
        'หลังจาก 6 เดือน จะไม่ได้รับ Recurring Payment อีก'
      ]
    },
    {
      title: 'แพ็กเกจรายปี',
      icon: <Calendar className="w-5 h-5 text-blue-500" />,
      points: [
        'จ่าย Commission ครั้งเดียวจากยอดรวมทั้งปี',
        'ไม่มี Recurring Payment',
        'ลูกค้าได้ส่วนลด 15% จากราคาปกติ'
      ]
    }
  ];

  const tiers = [
    {
      name: 'Starter Affiliate',
      icon: <BadgeCheck className="w-8 h-8" />,
      colorClass: 'border-blue-400 bg-blue-50',
      iconColorClass: 'text-blue-500',
      requirement: 'ไม่มีขั้นต่ำ',
      commission: {
        monthly: {
          first: '6%',
          recurring: '3% (6 เดือน)',
          exampleStarter: '89.4 บาท + (44.7 บาท × 6 เดือน)',
          exampleGrowth: '179.4 บาท + (89.7 บาท × 6 เดือน)'
        },
        yearly: {
          rate: '6%',
          exampleStarter: '914.94 บาท (ครั้งเดียว)',
          exampleGrowth: '1,829.88 บาท (ครั้งเดียว)'
        }
      },
      benefits: [
        'ไม่มีเงื่อนไขขั้นต่ำ',
        'เริ่มรับรายได้ได้ทันที',
        'Dashboard สำหรับติดตามผล',
        'เครื่องมือช่วยแนะนำลูกค้า'
      ],
      highlight: 'เหมาะสำหรับผู้เริ่มต้น'
    },
    {
      name: 'Advanced Affiliate',
      icon: <TrendingUp className="w-8 h-8" />,
      colorClass: 'border-green-400 bg-green-50',
      iconColorClass: 'text-green-500',
      requirement: '6 คน/เดือน',
      commission: {
        monthly: {
          first: '10%',
          recurring: '6% (6 เดือน)',
          exampleStarter: '149 บาท + (89.4 บาท × 6 เดือน)',
          exampleGrowth: '299 บาท + (179.4 บาท × 6 เดือน)'
        },
        yearly: {
          rate: '10%',
          exampleStarter: '1,524.90 บาท (ครั้งเดียว)',
          exampleGrowth: '3,049.80 บาท (ครั้งเดียว)'
        }
      },
      bonus: '1,000 THB',
      benefits: [
        'โบนัสเลื่อนระดับ 1,000 บาท',
        'คอมมิชชันที่สูงขึ้น',
        'สิทธิพิเศษสำหรับลูกค้า',
        'ทีมซัพพอร์ตเฉพาะ'
      ],
      highlight: 'สำหรับผู้ที่มีประสบการณ์'
    },
    {
      name: 'Master Affiliate',
      icon: <Trophy className="w-8 h-8" />,
      colorClass: 'border-yellow-400 bg-yellow-50',
      iconColorClass: 'text-yellow-500',
      requirement: '16 คน/เดือน',
      commission: {
        monthly: {
          first: '15%',
          recurring: '9% (6 เดือน)',
          exampleStarter: '223.5 บาท + (134.1 บาท × 6 เดือน)',
          exampleGrowth: '448.5 บาท + (269.1 บาท × 6 เดือน)'
        },
        yearly: {
          rate: '15%',
          exampleStarter: '2,287.35 บาท (ครั้งเดียว)',
          exampleGrowth: '4,574.70 บาท (ครั้งเดียว)'
        }
      },
      bonus: '2,000 THB',
      benefits: [
        'โบนัสเลื่อนระดับ 2,000 บาท',
        'คอมมิชชันสูงสุด',
        'สิทธิพิเศษพรีเมียม',
        'ผู้จัดการบัญชีส่วนตัว'
      ],
      highlight: 'สำหรับมืออาชีพ'
    }
];

  return (
    <div className="max-w-[1200px] mx-auto p-4">
      <div className="bg-white border shadow-xs rounded-xl p-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">ระดับ Affiliate</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            เลือกเส้นทางความสำเร็จของคุณ ยิ่งแนะนำลูกค้ามาก รายได้ยิ่งเพิ่มขึ้น พร้อมรับสิทธิประโยชน์พิเศษมากมาย
          </p>
        </div>

        {/* Commission Types */}
        <div className="mb-8 grid md:grid-cols-2 gap-6">
          {commissionTypes.map((type, index) => (
            <div key={index} className="border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                {type.icon}
                <h3 className="font-semibold">{type.title}</h3>
              </div>
              <ul className="space-y-2 text-sm">
                {type.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Tiers */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {tiers.map((tier) => (
            <div 
              key={tier.name} 
              className={`border-2 rounded-xl p-6 relative hover:shadow-lg transition-shadow ${tier.colorClass}`}
            >
              {/* Tier Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-white">
                  {React.cloneElement(tier.icon, {
                    className: `w-8 h-8 ${tier.iconColorClass}`
                  })}
                </div>
                <div>
                  <h3 className="text-xl font-bold">{tier.name}</h3>
                  <p className="text-sm text-gray-600">{tier.highlight}</p>
                </div>
              </div>

              {/* Requirement */}
              <div className="mb-4 p-3 bg-white rounded-lg">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-gray-500" />
                  <span className="font-medium">เงื่อนไข: {tier.requirement}</span>
                </div>
              </div>

              {/* Commission Rates */}
              <div className="space-y-3 mb-4">
                {/* Monthly Package */}
                <div className="p-3 bg-white rounded-lg">
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-gray-500" />
                    แพ็กเกจรายเดือน
                  </h4>
                  <div className="pl-4 space-y-2">
                    <div className="flex justify-between">
                      <span>First Payment</span>
                      <span className="font-semibold">{tier.commission.monthly.first}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Recurring</span>
                      <span className="font-semibold">{tier.commission.monthly.recurring}</span>
                    </div>
                    <div className="text-sm text-gray-600 mt-2">
                      <p>Starter Plan: {tier.commission.monthly.exampleStarter}</p>
                      <p>Growth Plan: {tier.commission.monthly.exampleGrowth}</p>
                    </div>
                  </div>
                </div>

                {/* Yearly Package */}
                <div className="p-3 bg-white rounded-lg">
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-gray-500" />
                    แพ็กเกจรายปี
                  </h4>
                  <div className="pl-4 space-y-2">
                    <div className="flex justify-between">
                      <span>Commission</span>
                      <span className="font-semibold">{tier.commission.yearly.rate}</span>
                    </div>
                    <div className="text-sm text-gray-600 mt-2">
                      <p>Starter Plan: {tier.commission.yearly.exampleStarter}</p>
                      <p>Growth Plan: {tier.commission.yearly.exampleGrowth}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="p-3 bg-white rounded-lg">
                <h4 className="font-medium mb-3">สิทธิประโยชน์:</h4>
                <ul className="space-y-2">
                  {tier.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bonus Badge */}
              {tier.bonus && (
                <div className="absolute -top-4 -right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  โบนัส {tier.bonus}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Important Notes */}
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="font-semibold mb-4">หมายเหตุสำคัญ:</h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-red-500 mt-1" />
              <span>Recurring Payment สำหรับแพ็กเกจรายเดือนจะได้รับเพียง 6 เดือนเท่านั้น นับจากวันที่ลูกค้าสมัครใช้บริการ</span>
            </li>
            <li className="flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-yellow-500 mt-1" />
              <span>จำเป็นต้องรักษายอดขั้นต่ำทุกเดือนเพื่อคงระดับ Affiliate ของคุณ</span>
            </li>
            <li className="flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-blue-500 mt-1" />
              <span>แพ็กเกจรายปีจะได้รับ Commission ครั้งเดียวทันทีหลังพ้นระยะ Refund</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AffiliateTiers;