import React, { useEffect, useState } from 'react';
import { useStripeCheckout } from '~/hooks/billings/useStripeCheckout';

const plans = [
  {
    name: "Free Trial",
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
      "2 Workspace",
      "1 Bot per Workspace",
      "3 Knowledge Base per Bot",
      "100MB Storage",
      "2 Team Members per Workspace",
      "Text, Image, Link, Document (PDF)",
      "Community Support"
    ],
    button: {
      text: "Start Free",
      disabled: false,
      primary: false
    }
  },
  {
    name: "Starter",
    monthlyPrice: "990",
    annualPrice: "10,098",
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
      `${monthly ? "1,500" : "1,800"} Smart Replies/mo`,
      `${monthly ? "400" : "480"} Generative Replies/mo`,
      `${monthly ? "150" : "180"} Slip Recognition/mo`,
      "3 Workspaces",
      "3 Bots per Workspace",
      "5 Knowledge Bases per Bot",
      "500MB Storage",
      "3 Team Members per Workspace",
      "Text, Image, Link, Document (PDF, Word, Excel), Video",
      "Email Support",
      "Basic Analytics"
    ],
    button: {
      text: "Choose Starter",
      disabled: false,
      primary: true
    }
  },
  {
    name: "Growth",
    monthlyPrice: "1,890",
    annualPrice: "19,278",
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
      `${monthly ? "4,000" : "4,800"} Smart Replies/mo`,
      `${monthly ? "1,500" : "1,800"} Generative Replies/mo`,
      `${monthly ? "400" : "480"} Slip Recognition/mo`,
      "5 Workspaces",
      "5 Bots per Workspace",
      "10 Knowledge Bases per Bot",
      "2GB Storage",
      "5 Team Members per Workspace",
      "Text, Image, Link, Document (PDF, Word, Excel), Video",
      "Priority Support",
      "Advanced Analytics"
    ],
    button: {
      text: "Choose Growth",
      disabled: false,
      primary: true
    }
  }
];


const PricingCards = ({ isAnnual }) => {
  const checkout = useStripeCheckout();

  const handleCheckout = async (priceId: string) => {
    checkout.mutate({ priceId })
  }

  return (
    <>
      <div className="max-w-[85rem] px-4 py-2 sm:px-6 lg:px-8 lg:py-4 mx-auto">
        {/* Price Cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
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
                  {plan.price || (isAnnual ? plan.annualPrice : plan.monthlyPrice)}
                </p>
              </div>
              <p className="mt-1 text-xs text-gray-500 dark:text-neutral-500">
                {plan.price === "0" ? "forever free" : `${isAnnual ? "per year excl. VAT" : "per month excl. VAT"}`}
              </p>

              {/* CTA Button */}
              <div className="mt-5">
                <button
                  type="button"
                  className={`w-full py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg ${plan.button.primary
                    ? "border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                    : "border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                    }`}
                  disabled={plan.button.disabled || checkout.isPending}
                  onClick={() => handleCheckout(isAnnual ? plan.annualPriceId : plan.monthlyPriceId)}
                >
                  {plan.button.text}
                </button>
              </div>

              {/* Features List */}
              <ul className="mt-5 space-y-2.5">
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
        </div>

        {/* Annual Savings Note */}
        {isAnnual && (
          <div className="mt-6 text-center text-sm text-gray-500 dark:text-neutral-500">
            Save 15% with annual billing and get 20% extra credits monthly
          </div>
        )}
      </div>
    </>
  );
};

export default PricingCards;