import React from 'react';
import { Clock, CreditCard, Calculator, HelpCircle, AlertCircle, DollarSign, Calendar, CheckCircle, XCircle } from 'lucide-react';

const AffiliateFaqPayment = () => {
  const paymentTerms = [
    {
      icon: <Clock className="w-5 h-5" />,
      title: 'รอบการจ่ายเงิน',
      description: 'ทุกวันที่ 5 ของเดือน',
      details: [
        'คำนวณยอดรวมจากเดือนที่ผ่านมา',
        'โอนเข้าบัญชีภายใน 24 ชั่วโมง',
        'แจ้งเตือนผ่านอีเมลเมื่อโอนเรียบร้อย'
      ]
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      title: 'ระยะเวลาตรวจสอบ',
      description: '14 วันหลังการชำระเงิน',
      details: [
        'รอยืนยันการชำระเงินจากบัตรเครดิต',
        'พ้นช่วง Chargeback/Refund',
        'ตรวจสอบความถูกต้องของธุรกรรม'
      ]
    },
    {
      icon: <DollarSign className="w-5 h-5" />,
      title: 'ยอดขั้นต่ำการถอน',
      description: '500 บาท',
      details: [
        'สะสมยอดได้ไม่จำกัดระยะเวลา',
        'ถอนได้เมื่อครบยอดขั้นต่ำ',
        'ไม่มีค่าธรรมเนียมการถอน'
      ]
    },
    {
      icon: <CreditCard className="w-5 h-5" />,
      title: 'วิธีการจ่ายเงิน',
      description: 'โอนเข้าบัญชีธนาคาร',
      details: [
        'รองรับทุกธนาคารในไทย',
        'แก้ไขบัญชีได้เดือนละ 1 ครั้ง',
        'เก็บประวัติการโอนย้อนหลัง 12 เดือน'
      ]
    }
  ];

  const paymentScenarios = [
    {
      title: 'แพ็กเกจรายเดือน',
      icon: <CheckCircle className="w-5 h-5" />,
      color: 'green',
      scenarios: [
        {
          case: 'ชำระเงินสำเร็จ',
          result: 'รับ First Payment หลัง 14 วัน + Recurring 6 เดือน'
        },
        {
          case: 'Refund ภายใน 14 วัน',
          result: 'ไม่ได้รับ commission'
        },
        {
          case: 'ยกเลิกระหว่างทาง',
          result: 'Recurring Payment หยุดจ่ายทันที'
        }
      ]
    },
    {
      title: 'แพ็กเกจรายปี',
      icon: <CheckCircle className="w-5 h-5" />,
      color: 'blue',
      scenarios: [
        {
          case: 'ชำระเงินสำเร็จ',
          result: 'รับ Commission ครั้งเดียวหลัง 14 วัน'
        },
        {
          case: 'Refund ภายใน 14 วัน',
          result: 'ไม่ได้รับ commission'
        },
        {
          case: 'Refund หลัง 14 วัน',
          result: 'คำนวณ commission ตามระยะเวลาใช้งานจริง'
        }
      ]
    }
  ];

  const faqs = [
    // คำถามเกี่ยวกับค่าธรรมเนียมการโอน
    {
      category: 'การรับเงิน commission',
      questions: [
        {
          q: 'มีค่าธรรมเนียมการโอนเงินหรือไม่?',
          a: 'มีค่าธรรมเนียมการโอนในบางกรณี ดังนี้:\n\n' +
            '• ยอดต่ำกว่า 500 บาท: สะสมไปเดือนถัดไป\n' +
            '• ยอดรวม 500-9,999 บาท: มีค่าธรรมเนียมการโอน 1.5%\n' +
            '• ยอดตั้งแต่ 10,000 บาทขึ้นไป: ไม่มีค่าธรรมเนียมการโอน\n\n' +
            '💡 แนะนำ: ควรสะสมยอดให้ถึง 10,000 บาทก่อนถอน เพื่อประหยัดค่าธรรมเนียมและได้รับเงินเต็มจำนวน'
        },
        {
          q: 'สามารถดูตัวอย่างการคำนวณค่าธรรมเนียมได้หรือไม่?',
          a: 'ตัวอย่างการคำนวณ:\n\n' +
            '• ถอน 1,000 บาท หัก 1.5% = ได้รับ 985 บาท (เสียค่าธรรมเนียม 15 บาท)\n' +
            '• ถอน 3,000 บาท หัก 1.5% = ได้รับ 2,955 บาท (เสียค่าธรรมเนียม 45 บาท)\n' +
            '• ถอน 10,000 บาท = ได้รับเต็มจำนวน 10,000 บาท (ไม่มีค่าธรรมเนียม)\n\n' +
            '💡 การสะสมยอดถึง 10,000 บาท จะช่วยประหยัดค่าธรรมเนียมได้มากกว่าการถอนหลายครั้ง'
        }
      ]
    },
    {
      category: 'การจ่าย commission',
      questions: [
        {
          q: 'รายได้จากการแนะนำลูกค้าจ่ายเมื่อไหร่?',
          a: 'เราจ่ายค่าคอมมิชชันทุกวันที่ 5 ของเดือน สำหรับยอดขายที่ผ่านการตรวจสอบและพ้นระยะ Refund แล้วเท่านั้น'
        },
        {
          q: 'สามารถเลือกรอบการจ่ายเงินได้หรือไม่?',
          a: 'ระบบจะรวบรวมยอด commission ทั้งหมดและจ่ายพร้อมกันในวันที่ 5 ของทุกเดือน หากต้องการสะสมยอดไว้ถอนครั้งเดียว สามารถแจ้งผ่านระบบได้'
        }
      ]
    },
    {
      category: 'การคำนวณ commission',
      questions: [
        {
          q: 'ระบบคำนวณ commission อย่างไร?',
          a: 'แพ็กเกจรายเดือน: First Payment จ่ายหลังพ้นระยะ Refund 14 วัน และ Recurring Payment ต่อเนื่อง 6 เดือน\nแพ็กเกจรายปี: จ่าย commission ครั้งเดียวหลังพ้นระยะ Refund'
        },
        {
          q: 'กรณีลูกค้ายกเลิกกลางคัน จะได้ commission หรือไม่?',
          a: 'แพ็กเกจรายเดือน: Recurring Payment จะหยุดจ่ายเมื่อลูกค้ายกเลิก\nแพ็กเกจรายปี: หากมีการยกเลิกและ Refund จะคำนวณ commission ตามระยะเวลาที่ใช้งานจริง'
        }
      ]
    }
  ];

  return (
    <div className="max-w-[1200px] mx-auto p-4">
      <div className="bg-white border shadow-xs rounded-xl p-6">
        {/* Payment Terms Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">เงื่อนไขการจ่ายเงิน</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {paymentTerms.map((term, index) => (
              <div key={index} className="border rounded-xl p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    {term.icon}
                  </div>
                  <h3 className="font-medium">{term.title}</h3>
                </div>
                <p className="text-lg font-semibold mb-3">{term.description}</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  {term.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Scenarios Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">สถานการณ์การจ่าย Commission</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {paymentScenarios.map((scenario, index) => (
              <div key={index} className="border rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className={`p-2 bg-${scenario.color}-50 rounded-lg`}>
                    {scenario.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{scenario.title}</h3>
                </div>
                <div className="space-y-4">
                  {scenario.scenarios.map((item, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-lg p-3">
                      <p className="font-medium mb-1">{item.case}</p>
                      <p className="text-sm text-gray-600">{item.result}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Sections */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">คำถามที่พบบ่อย</h2>
          {faqs.map((section, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-xl font-semibold mb-4">{section.category}</h3>
              <div className="space-y-4">
                {section.questions.map((faq, idx) => (
                  <div key={idx} className="border rounded-lg p-4">
                    <div className="flex gap-3">
                      <div className="mt-1">
                        <HelpCircle className="w-5 h-5 text-blue-500" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">{faq.q}</h4>
                        <p className="text-gray-600 whitespace-pre-line">{faq.a}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tips Section */}
        <div className="mt-8 bg-blue-50 rounded-xl p-6">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-blue-500" />
            เคล็ดลับการรับ commission
          </h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start gap-2">
              <DollarSign className="w-4 h-4 mt-1 text-green-500" />
              <span>สะสมยอดถึง 10,000 บาทเพื่อประหยัดค่าธรรมเนียมการโอน</span>
            </li>
            <li className="flex items-start gap-2">
              <DollarSign className="w-4 h-4 mt-1 text-green-500" />
              <span>แนะนำแพ็กเกจรายปีเพื่อรับ commission ก้อนใหญ่ทันที</span>
            </li>
            <li className="flex items-start gap-2">
              <DollarSign className="w-4 h-4 mt-1 text-green-500" />
              <span>รักษายอดขั้นต่ำเพื่อคงสถานะและรับคอมมิชชันที่สูงขึ้น</span>
            </li>
          </ul>
        </div>

        {/* Important Notes */}
        <div className="mt-8 bg-blue-50 rounded-xl p-6">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <AlertCircle className="w-5 h-5" />
            ข้อควรทราบเพิ่มเติม
          </h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start gap-2">
              <div className="w-1 h-1 bg-blue-500 rounded-full mt-2"></div>
              <span>ตรวจสอบสถานะการชำระเงินและ commission ได้ที่ Dashboard ตลอด 24 ชั่วโมง</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1 h-1 bg-blue-500 rounded-full mt-2"></div>
              <span>แนะนำให้แจ้งนโยบายการคืนเงินให้ลูกค้าทราบก่อนการสมัครใช้บริการ</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1 h-1 bg-blue-500 rounded-full mt-2"></div>
              <span>กรณีมีข้อสงสัยเพิ่มเติม สามารถติดต่อทีมซัพพอร์ตได้ตลอด 24 ชั่วโมง</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AffiliateFaqPayment;