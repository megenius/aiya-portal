import { pl } from 'date-fns/locale';
import { t } from 'i18next';
import React, { useEffect, useState } from 'react';
import { NumericFormat } from 'react-number-format';
import { toast } from 'react-toastify';
import useCurrentBillingPlan from '~/hooks/billings/useCurrentBillingPlan';
import { useStripeCheckout } from '~/hooks/billings/useStripeCheckout';
import { useLanguage } from '~/hooks/useLanguage';
import { useMe } from '~/hooks/useMe';


const getAnnualPrice = (monthlyPrice) => {
  const annual = monthlyPrice * 12;
  const discount = 0.15; // 15% discount for annual
  return Math.floor(annual * (1 - discount));
};

const getSavePrice = (monthlyPrice, annualPrice) => {
  return monthlyPrice * 12 - annualPrice;
}

const plansEn = [
  {
    name: "Free Trial",
    plan_type: "free",
    price: "0",
    monthlyPriceId: "",
    annualPriceId: "",
    icon: {
      rects: [{ y: 5, fill: "fill-blue-300 dark:fill-blue-600" }]
    },
    features: [
      "150 Smart Replies/mo",
      "20 Generative Replies/mo",
      "15 Slip Recognition/mo",
      "1 Workspace",
      "1 Bot per Workspace",
      "3 Knowledge Base per Bot",
      "100MB Storage",
      "2 Team Members per Workspace",
      "Text, Image, Link",
      "Community Support",
      "Unlimited LINE integration",
      "Unlimited Facebook Page integration"
    ],
    button: {
      text: "Start Free",
      disabled: false,
      primary: false
    }
  },
  {
    name: "Starter",
    plan_type: "starter",
    monthlyPrice: "1,890",
    annualPrice: "15,198",
    annualSavePrice: "2,382",
    monthlyPriceId: import.meta.env.VITE_STRIPE_STARTER_MONTHLY_PRICE_ID,
    annualPriceId: import.meta.env.VITE_STRIPE_STARTER_ANNUAL_PRICE_ID,
    icon: {
      rects: [
        { y: 5, fill: "fill-blue-300 dark:fill-blue-600" },
        { x: 14, y: 5, fill: "fill-blue-500 dark:fill-blue-700" }
      ]
    },
    popular: true,
    features: monthly => [
      `${monthly ? "3,000" : "3,600 (+20%)"} Smart Replies/mo`,
      `${monthly ? "1,200" : "1,440 (+20%)"} Generative Replies/mo`,
      `${monthly ? "300" : "360 (+20%)"} Slip Recognition/mo`,
      "3 Workspaces",
      "3 Bots per Workspace",
      "5 Knowledge Bases per Bot",
      "2G Storage",
      "3 Team Members per Workspace",
      "Text, Image, Link, Document (PDF, Word, Excel), Video",
      "Email Support",
      "Basic Analytics",
      "Unlimited LINE integration",
      "Unlimited Facebook Page integration"
    ],
    button: {
      text: "Choose Starter",
      disabled: false,
      primary: true
    }
  },
  {
    name: "Growth",
    plan_type: "growth",
    monthlyPrice: "2,990",
    annualPrice: "30,498",
    annualSavePrice: "5,382",
    monthlyPriceId: import.meta.env.VITE_STRIPE_GROWTH_MONTHLY_PRICE_ID,
    annualPriceId: import.meta.env.VITE_STRIPE_GROWTH_ANNUAL_PRICE_ID,
    icon: {
      rects: [
        { x: 7, y: 0, fill: "fill-blue-200 dark:fill-blue-500" },
        { y: 10, fill: "fill-blue-300 dark:fill-blue-600" },
        { x: 14, y: 10, fill: "fill-blue-500 dark:fill-blue-700" }
      ]
    },
    features: monthly => [
      `${monthly ? "8,000" : "9,600"} Smart Replies/mo`,
      `${monthly ? "3,000" : "3,600"} Generative Replies/mo`,
      `${monthly ? "900" : "1,080"} Slip Recognition/mo`,
      "5 Workspaces",
      "5 Bots per Workspace",
      "10 Knowledge Bases per Bot",
      "5G Storage",
      "5 Team Members per Workspace",
      "Text, Image, Link, Document (PDF, Word, Excel), Video",
      "Priority Support",
      "Advanced Analytics",
      "Unlimited LINE integration",
      "Unlimited Facebook Page integration"
    ],
    button: {
      text: "Choose Growth",
      disabled: false,
      primary: true
    }
  }
];

const plansTh = [
  {
    name: "Free Trial",
    plan_type: "free",
    price: "0",
    monthlyPriceId: "",
    annualPriceId: "",
    icon: {
      rects: [{ y: 5, fill: "fill-blue-300 dark:fill-blue-600" }]
    },
    features: [
      "150 Smart Replies/เดือน",
      "20 Generative Replies/เดือน",
      "15 ตรวจสลิป/เดือน",
      "1 เวิร์กสเปซ",
      "1 บอทต่อเวิร์กสเปซ",
      "3 ฐานความรู้ต่อบอท",
      "พื้นที่จัดเก็บ 100MB",
      "2 สมาชิกทีมต่อเวิร์กสเปซ",
      "ข้อความ, รูปภาพ, ลิงก์",
      "การสนับสนุนผ่านชุมชน",
      "ไม่จำกัดการเชื่อมต่อ LINE",
      "ไม่จำกัดการเชื่อมต่อเพจ Facebook"
    ],
    button: {
      text: "เริ่มใช้ฟรี",
      disabled: false,
      primary: false
    }
  },
  {
    name: "Starter",
    plan_type: "starter",
    monthlyPrice: 1890,
    annualPrice: getAnnualPrice(1890),
    annualSavePrice: getSavePrice(1890, getAnnualPrice(1890)),
    monthlyPriceId: import.meta.env.VITE_STRIPE_STARTER_MONTHLY_PRICE_ID,
    annualPriceId: import.meta.env.VITE_STRIPE_STARTER_ANNUAL_PRICE_ID,
    icon: {
      rects: [
        { y: 5, fill: "fill-blue-300 dark:fill-blue-600" },
        { x: 14, y: 5, fill: "fill-blue-500 dark:fill-blue-700" }
      ]
    },
    popular: true,
    features: monthly => [
      `${monthly ? "3,000" : "3,600 (+20%)"} Smart Replies/เดือน`,
      `${monthly ? "1,200" : "1,440 (+20%)"} Generative Replies/เดือน`,
      `${monthly ? "100" : "120 (+20%)"} ตรวจสลิป/เดือน`,
      "3 เวิร์กสเปซ",
      "3 บอทต่อเวิร์กสเปซ",
      "5 ฐานความรู้ต่อบอท",
      "พื้นที่จัดเก็บ 2GB",
      "3 สมาชิกทีมต่อเวิร์กสเปซ",
      "ข้อความ, รูปภาพ, ลิงก์, เอกสาร (PDF, Word, Excel), วิดีโอ",
      "การสนับสนุนทางอีเมล",
      "การวิเคราะห์ขั้นพื้นฐาน",
      "ไม่จำกัดการเชื่อมต่อ LINE",
      "ไม่จำกัดการเชื่อมต่อเพจ Facebook"
    ],
    button: {
      text: "เลือกแพ็คเกจ Starter",
      disabled: false,
      primary: true
    }
  },
  {
    name: "Growth",
    plan_type: "growth",
    monthlyPrice: 3490,
    annualPrice: getAnnualPrice(3490),
    annualSavePrice: getSavePrice(3490, getAnnualPrice(3490)),
    monthlyPriceId: import.meta.env.VITE_STRIPE_GROWTH_MONTHLY_PRICE_ID,
    annualPriceId: import.meta.env.VITE_STRIPE_GROWTH_ANNUAL_PRICE_ID,
    icon: {
      rects: [
        { x: 7, y: 0, fill: "fill-blue-200 dark:fill-blue-500" },
        { y: 10, fill: "fill-blue-300 dark:fill-blue-600" },
        { x: 14, y: 10, fill: "fill-blue-500 dark:fill-blue-700" }
      ]
    },
    features: monthly => [
      `${monthly ? "8,000" : "9,600 (+20%)"} Smart Replies/เดือน`,
      `${monthly ? "3,000" : "3,600 (+20%)"} Generative Replies/เดือน`,
      `${monthly ? "300" : "360 (+20%)"} ตรวจสลิป/เดือน`,
      "5 เวิร์กสเปซ",
      "5 บอทต่อเวิร์กสเปซ",
      "10 ฐานความรู้ต่อบอท",
      "พื้นที่จัดเก็บ 5GB",
      "5 สมาชิกทีมต่อเวิร์กสเปซ",
      "ข้อความ, รูปภาพ, ลิงก์, เอกสาร (PDF, Word, Excel), วิดีโอ",
      "การสนับสนุนแบบเร่งด่วน",
      "การวิเคราะห์ขั้นสูง",
      "ไม่จำกัดการเชื่อมต่อ LINE",
      "ไม่จำกัดการเชื่อมต่อเพจ Facebook"
    ],
    button: {
      text: "เลือกแพ็คเกจ Growth",
      disabled: false,
      primary: true
    }
  }
];


const PricingCards = ({ isAnnual }) => {
  const checkout = useStripeCheckout();
  const { currentLanguage } = useLanguage()
  const { data: currentPlan } = useCurrentBillingPlan()
  const { data: user } = useMe()

  const handleCheckout = async (priceId: string) => {
    if (!user?.email) {
      toast.error(t('billing.plan.error.email_required'));
      return;
    }

    checkout.mutate({ priceId, email: user?.email });
  }

  const plans = currentLanguage === 'en' ? plansEn : plansTh;

  return (
    <>
      <div className="max-w-[85rem] px-4 py-2 sm:px-6 lg:px-8 lg:py-4 mx-auto">
        {/* Price Cards */}
        <div className="grid lg:grid-cols-2 gap-6">
          {plans.slice(0, 2).map((plan, index) => (
            <div
              key={index}
              className={`p-4 sm:p-6 bg-white border ${plan.popular ? 'border-blue-500' : 'border-gray-200'
                } rounded-xl dark:bg-neutral-800 dark:border-neutral-700`}
            >
              {/* Icon and Popular Badge */}
              <div className="flex justify-between items-center gap-x-2 mb-3">
                <svg className="w-[34px] h-[30px]" width={34} height={30} viewBox="0 0 34 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {plan.icon.rects.map((rect, idx) => (
                    <rect
                      key={idx}
                      x={rect.x || 0}
                      y={rect.y || 0}
                      width={20}
                      height={20}
                      rx={10}
                      fill="currentColor"
                      className={rect.fill}
                    />
                  ))}
                </svg>
                {plan.popular && (
                  <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                    Most popular
                  </span>
                )}
              </div>

              {/* Plan Name and Price */}
              <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-200">
                {plan.name}
              </h3>
              <div className="mt-4 flex items-center gap-x-0.5">
                <span className="text-xl font-normal text-gray-800 dark:text-neutral-200">฿</span>
                <p className="text-gray-800 font-semibold text-3xl dark:text-neutral-200">
                  <NumericFormat thousandSeparator="," value={plan.price || (isAnnual ? plan.annualPrice : plan.monthlyPrice)} displayType="text" />

                </p>
              </div>
              <p className="mt-1 text-xs text-gray-500 dark:text-neutral-500">
                {plan.price === "0" ? "forever free" : `${isAnnual ? "per year incl. VAT" : "per month incl. VAT"}`}
              </p>

              {/* CTA Button */}
              <div className="mt-5">
                <button
                  type="button"
                  className={`w-full py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg ${plan.button.primary
                    ? "border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                    : "border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                    }`}
                  disabled={
                    plan.button.disabled ||
                    checkout.isPending ||
                    currentPlan?.subscription?.plan_type === plan.name?.toLowerCase() ||
                    (plan.name === "Free Trial" && currentPlan?.subscription?.plan_type === "starter")
                  }
                  onClick={() => handleCheckout(isAnnual ? plan.annualPriceId : plan.monthlyPriceId)}
                >
                  {currentPlan?.subscription?.plan_type === plan.plan_type?.toLowerCase() ? t('billing.plan.current') : plan.button.text}
                </button>
                {/* {!currentPlan?.subscription ? (
                  <button
                    type="button"
                    className={`w-full py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg ${plan.button.primary
                      ? "border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                      : "border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                      }`}
                    disabled={
                      plan.button.disabled ||
                      checkout.isPending ||
                      currentPlan?.subscription?.plan_type === plan.name?.toLowerCase() ||
                      (plan.name === "Free Trial" && currentPlan?.subscription?.plan_type === "starter")
                    }
                    onClick={() => handleCheckout(isAnnual ? plan.annualPriceId : plan.monthlyPriceId)}
                  >
                    {plan.button.text}
                  </button>
                ) : (
                  <button
                    type="button"
                    className={`w-full py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg ${plan.button.primary
                      ? "border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                      : "border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                      }`}
                    disabled={
                      plan.button.disabled ||
                      checkout.isPending ||
                      currentPlan?.subscription.plan_type === plan.name?.toLowerCase() ||
                      (plan.name === "Free Trial" && currentPlan?.subscription.plan_type === "starter")
                    }
                    onClick={() => handleCheckout(isAnnual ? plan.annualPriceId : plan.monthlyPriceId)}
                  >
                    {currentPlan?.subscription.plan_type === plan.name?.toLowerCase() ? t('billing.plan.current') : plan.button.text}
                  </button>
                )} */}
              </div>

              {/* Features List */}
              < ul className="mt-5 space-y-2.5" >
                {(typeof plan.features === 'function' ? plan.features(!isAnnual) : plan.features).map((feature, idx) => (
                  <li key={idx} className="flex gap-x-2">
                    <svg className="flex-shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-sm text-gray-800 dark:text-neutral-200">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div >

        {/* Annual Savings Note */}
        {
          isAnnual && (
            <div className="mt-6 text-center text-sm text-gray-500 dark:text-neutral-500">
              Save 15% with annual billing and get 20% extra credits monthly
            </div>
          )
        }
      </div >
    </>
  );
};

export default PricingCards;