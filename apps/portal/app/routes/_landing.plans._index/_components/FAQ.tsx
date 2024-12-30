import React from 'react';
import { useLanguage } from '~/hooks/useLanguage';

const FAQ = () => {
  const { currentLanguage } = useLanguage();

  const faqsEn = [
    {
      question: "How do Smart Reply and Generative Reply credits work?",
      answer: "Smart Reply uses Gemini for quick, context-aware responses, while Generative Reply uses Claude for more complex, detailed responses. Credits refresh monthly, and additional credits can be purchased at any time based on your tier's rates."
    },
    {
      question: "Can I switch between plans?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle. Unused credits don't roll over when switching plans."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept major credit/debit cards, bank transfers, and QR PromptPay for Thailand-based customers. All prices are in Thai Baht (THB), and we provide tax invoices for business customers."
    },
    {
      question: "How does the pricing work?",
      answer: "Our pricing is tiered based on usage and features. Each tier includes a set number of monthly credits, storage, and features. Additional credits can be purchased at preferential rates based on your tier."
    },
    // {
    //   question: "What kind of support do you provide?",
    //   answer: "Support varies by tier - from community support (Free) to Priority support (Pro). Response times are guaranteed by SLA, ranging from 48 hours to 4 hours based on your plan."
    // },
    // {
    //   question: "Is there a refund policy?",
    //   answer: "Yes, we offer a 30-day money-back guarantee for paid plans. If you're not satisfied, contact our support team at support@aiya.ai for a full refund."
    // },
    {
      question: "How do I integrate the chatbot with my website?",
      answer: "Not now"
      // answer: "We provide simple integration options including direct JavaScript snippet, WordPress plugin, and REST API access (available in Growth and Pro plans). Our documentation covers all integration methods."
    },
    // {
    //   question: "Do you offer custom AI training?",
    //   answer: "Custom AI training is available in the Pro plan. This allows you to train the AI on your specific business data, terminology, and use cases for more accurate responses."
    // },
    {
      question: "Do you offer team discounts?",
      answer: "Yes, we offer volume discounts for larger teams and annual billing options. Contact our sales team for custom enterprise pricing and features."
    }
  ];

  const faqsTh = [
    {
      question: "เครดิต Smart Reply และ Generative Reply ทำงานอย่างไร?",
      answer: "Smart Reply ใช้ Gemini สำหรับการตอบกลับแบบรวดเร็วตามบริบท ในขณะที่ Generative Reply ใช้ Claude สำหรับการตอบที่ซับซ้อนและมีรายละเอียดมากขึ้น เครดิตจะรีเซ็ตทุกเดือน และสามารถซื้อเครดิตเพิ่มเติมได้ตลอดเวลาตามอัตราของแต่ละแพ็คเกจ"
    },
    {
      question: "สามารถเปลี่ยนแพ็คเกจได้หรือไม่?",
      answer: "ได้ คุณสามารถอัพเกรดหรือดาวน์เกรดแพ็คเกจได้ตลอดเวลา การเปลี่ยนแปลงจะมีผลในรอบบิลถัดไป เครดิตที่ไม่ได้ใช้จะไม่ถูกโอนไปเมื่อเปลี่ยนแพ็คเกจ"
    },
    {
      question: "รับชำระเงินผ่านช่องทางใดบ้าง?",
      answer: "เรารับชำระผ่านบัตรเครดิต/เดบิต การโอนเงินผ่านธนาคาร และ QR PromptPay สำหรับลูกค้าในประเทศไทย ราคาทั้งหมดเป็นสกุลเงินบาทไทย (THB) และเราออกใบกำกับภาษีให้กับลูกค้าธุรกิจ"
    },
    {
      question: "ระบบราคาทำงานอย่างไร?",
      answer: "ราคาของเราแบ่งตามการใช้งานและฟีเจอร์ แต่ละแพ็คเกจจะมีจำนวนเครดิตรายเดือน พื้นที่จัดเก็บ และฟีเจอร์ที่กำหนด สามารถซื้อเครดิตเพิ่มเติมได้ในราคาพิเศษตามแพ็คเกจของคุณ"
    },
    // {
    //   question: "มีการสนับสนุนลูกค้าในรูปแบบใดบ้าง?",
    //   answer: "การสนับสนุนแตกต่างกันตามแพ็คเกจ - ตั้งแต่การสนับสนุนผ่านชุมชน (ฟรี) จนถึงการสนับสนุนแบบเร่งด่วน (Pro) เวลาตอบกลับรับประกันด้วย SLA ตั้งแต่ 48 ชั่วโมงถึง 4 ชั่วโมงขึ้นอยู่กับแพ็คเกจของคุณ"
    // },
    {
      question: "จะนำแชทบอทไปใช้กับเว็บไซต์ได้อย่างไร?",
      answer: "ยังไม่เปิดให้บริการ"
    },
    {
      question: "มีส่วนลดสำหรับทีมหรือไม่?",
      answer: "มี เรามีส่วนลดสำหรับทีมขนาดใหญ่และตัวเลือกการชำระเงินรายปี ติดต่อทีมขายของเราสำหรับราคาและฟีเจอร์แบบองค์กร"
    }
  ];

  const faqs = currentLanguage === 'th' ? faqsTh : faqsEn;


  return (
    <div className="space-y-5">
      <div className="pt-16 text-center">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-neutral-200">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-6 sm:gap-8 lg:gap-y-5 lg:gap-x-12">
        {faqs.map((faq, index) => (
          <div key={index}>
            <h3 className="font-medium text-gray-800 dark:text-neutral-200">
              {faq.question}
            </h3>
            <p className="mt-2 text-gray-500 dark:text-neutral-500">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>

      <div className="pt-3 flex justify-center items-center gap-x-3">
        <p className="text-sm text-gray-500 dark:text-neutral-500">
          Still have questions?
        </p>
        <a
          className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
          href="mailto:support@aiya.ai"
        >
          Contact Support
        </a>
      </div>
    </div>
  );
};

export default FAQ;