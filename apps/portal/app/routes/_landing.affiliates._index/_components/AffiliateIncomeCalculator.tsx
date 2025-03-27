import React from 'react';
import { Users, TrendingUp, Calculator, DollarSign, Calendar } from 'lucide-react';

const AffiliateIncomeCalculator = () => {
  const scenarios = [
    {
      title: "สถานการณ์ที่ 1: เริ่มต้นเป็น Starter Affiliate",
      description: "เริ่มต้นแนะนำลูกค้า 3 ราย ในเดือนแรก",
      tier: "Starter Affiliate (First Payment 6%, Recurring 3%)",
      cases: [
        {
          title: "กรณีลูกค้าสมัครแพ็กเกจรายเดือน Starter Plan (1,890 บาท/เดือน)",
          calculations: [
            {
              label: "First Payment",
              detail: "1,890 × 6% × 3 ราย",
              result: "340.20 บาท"
            },
            {
              label: "Recurring Payment (6 เดือน)",
              detail: "1,890 × 3% × 3 ราย × 6 เดือน",
              result: "1,020.60 บาท"
            },
            {
              label: "รวมรายได้ทั้งหมด",
              detail: "340.20 + 1,020.60",
              result: "1,360.80 บาท"
            }
          ]
        },
        {
          title: "กรณีลูกค้าสมัครแพ็กเกจรายปี Starter Plan (15,249 บาท/ปี)",
          calculations: [
            {
              label: "Commission (ครั้งเดียว)",
              detail: "15,249 × 6% × 3 ราย",
              result: "2,744.82 บาท"
            }
          ],
          note: "ได้รับเงินก้อนใหญ่ทันทีและไม่ต้องกังวลเรื่องลูกค้ายกเลิกกลางทาง"
        }
      ]
    },
    {
      title: "สถานการณ์ที่ 2: เลื่อนระดับเป็น Advanced Affiliate",
      description: "แนะนำลูกค้าครบ 6 ราย ได้เลื่อนระดับพร้อมโบนัส",
      tier: "Advanced Affiliate (First Payment 10%, Recurring 6%)",
      cases: [
        {
          title: "กรณีลูกค้าทั้งหมดเลือกแพ็กเกจ Growth Plan",
          calculations: [
            {
              label: "แพ็กเกจรายเดือน (3,490 บาท/เดือน)",
              detail: [
                "First Payment: 3,490 × 10% × 6 ราย = 2,094 บาท",
                "Recurring: 3,490 × 6% × 6 ราย × 6 เดือน = 7,538.40 บาท",
                "โบนัสเลื่อนระดับ = 1,000 บาท"
              ],
              result: "10,632.40 บาท"
            },
            {
              label: "แพ็กเกจรายปี (30,498 บาท/ปี)",
              detail: [
                "Commission: 30,498 × 10% × 6 ราย = 18,298.80 บาท",
                "โบนัสเลื่อนระดับ = 1,000 บาท"
              ],
              result: "19,298.80 บาท"
            }
          ]
        }
      ]
    },
    {
      title: "สถานการณ์ที่ 3: Master Affiliate ทำยอดเต็มเดือน",
      description: "แนะนำลูกค้าครบ 16 ราย (เกณฑ์ขั้นต่ำ)",
      tier: "Master Affiliate (First Payment 15%, Recurring 9%)",
      cases: [
        {
          title: "กรณีลูกค้าผสมผสานระหว่างแพ็กเกจรายเดือนและรายปี",
          calculations: [
            {
              label: "รายเดือน Growth Plan 10 ราย",
              detail: [
                "First Payment: 3,490 × 15% × 10 ราย = 5,235 บาท",
                "Recurring: 3,490 × 9% × 10 ราย × 6 เดือน = 18,846 บาท"
              ],
              result: "24,081 บาท"
            },
            {
              label: "รายปี Growth Plan 6 ราย",
              detail: "30,498 × 15% × 6 ราย = 27,448.20 บาท",
              result: "27,448.20 บาท"
            },
            {
              label: "โบนัสเลื่อนระดับ",
              detail: "2,000 บาท",
              result: "2,000 บาท"
            },
            {
              label: "รวมรายได้ทั้งหมด",
              detail: "24,081 + 27,448.20 + 2,000",
              result: "53,529.20 บาท"
            }
          ]
        }
      ]
    }
  ];

  return (
    <>
      <div className="max-w-[1200px] mx-auto p-4">
        <div className="bg-white border shadow-xs rounded-xl p-6">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">ตัวอย่างการคำนวณรายได้</h2>
            <p className="text-gray-600">
              ตัวอย่างการคำนวณรายได้ในสถานการณ์ต่างๆ เพื่อให้เห็นภาพรวมของรายได้ที่เป็นไปได้
            </p>
          </div>

          {/* Scenarios */}
          <div className="space-y-8">
            {scenarios.map((scenario, index) => (
              <div key={index} className="border rounded-xl p-6">
                {/* Scenario Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    {index === 0 ? (
                      <Users className="w-6 h-6 text-blue-500" />
                    ) : index === 1 ? (
                      <TrendingUp className="w-6 h-6 text-green-500" />
                    ) : (
                      <Calculator className="w-6 h-6 text-yellow-500" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{scenario.title}</h3>
                    <p className="text-gray-600">{scenario.description}</p>
                    <p className="text-sm font-medium mt-2 text-blue-600">{scenario.tier}</p>
                  </div>
                </div>

                {/* Cases */}
                <div className="space-y-6">
                  {scenario.cases.map((case_, caseIndex) => (
                    <div key={caseIndex} className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-medium mb-4">{case_.title}</h4>

                      {/* Calculations */}
                      <div className="space-y-4">
                        {case_.calculations.map((calc, calcIndex) => (
                          <div key={calcIndex} className="bg-white rounded-lg p-4">
                            <div className="flex justify-between items-start mb-2">
                              <span className="font-medium">{calc.label}</span>
                              <span className="font-bold text-blue-600">{calc.result}</span>
                            </div>
                            {Array.isArray(calc.detail) ? (
                              <div className="text-sm text-gray-600 space-y-1">
                                {calc.detail.map((detail, detailIndex) => (
                                  <p key={detailIndex}>{detail}</p>
                                ))}
                              </div>
                            ) : (
                              <p className="text-sm text-gray-600">{calc.detail}</p>
                            )}
                          </div>
                        ))}
                      </div>

                      {/* Case Note if exists */}
                      {case_.note && (
                        <div className="mt-4 bg-blue-50 rounded-lg p-3">
                          <p className="text-sm text-blue-600">{case_.note}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tips Section */}
          <div className="mt-8 bg-gray-50 rounded-xl p-6">
            <h3 className="font-semibold mb-4">เคล็ดลับเพิ่มรายได้:</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-3">สำหรับแพ็กเกจรายเดือน</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-green-500" />
                    <span>พยายามรักษาลูกค้าให้ใช้บริการต่อเนื่อง 6 เดือน</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-green-500" />
                    <span>แนะนำแพ็กเกจ Growth Plan เพื่อรายได้ที่มากขึ้น</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3">สำหรับแพ็กเกจรายปี</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-green-500" />
                    <span>รับรายได้ก้อนใหญ่ทันทีโดยไม่ต้องรอ Recurring</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-green-500" />
                    <span>ลูกค้าได้ส่วนลด 15% ช่วยปิดการขายได้ง่ายขึ้น</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AffiliateIncomeCalculator;