import React from 'react';

const PricingCards = () => {
  const plans = [
    {
      name: "Free Trial",
      price: "0",
      icon: {
        rects: [{ y: 5, fill: "fill-blue-300 dark:fill-blue-600" }]
      },
      features: [
        "100 Smart Replies/mo",
        "10 Generative Replies/mo",
        "100MB Storage",
        "2 Team Members",
        "Basic Templates",
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
      price: "990",
      icon: {
        rects: [
          { y: 5, fill: "fill-blue-300 dark:fill-blue-600" },
          { x: 14, y: 5, fill: "fill-blue-500 dark:fill-blue-700" }
        ]
      },
      popular: true,
      features: [
        "1,500 Smart Replies/mo",
        "400 Generative Replies/mo",
        "500MB Storage",
        "5 Team Members",
        "Custom Templates",
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
      price: "1,890",
      icon: {
        rects: [
          { x: 7, y: 0, fill: "fill-blue-200 dark:fill-blue-500" },
          { y: 10, fill: "fill-blue-300 dark:fill-blue-600" },
          { x: 14, y: 10, fill: "fill-blue-500 dark:fill-blue-700" }
        ]
      },
      features: [
        "4,000 Smart Replies/mo",
        "1,500 Generative Replies/mo",
        "2GB Storage",
        "10 Team Members",
        "Advanced Templates",
        "Priority Support",
        "Advanced Analytics",
        "Basic API Access"
      ],
      button: {
        text: "Choose Growth",
        disabled: false,
        primary: true
      }
    },
    {
      name: "Pro",
      price: "4,290",
      icon: {
        rects: [
          { x: 0, y: 0, fill: "fill-blue-200 dark:fill-blue-500" },
          { y: 10, fill: "fill-blue-300 dark:fill-blue-600" },
          { x: 14, y: 10, fill: "fill-blue-400 dark:fill-blue-700" },
          { x: 14, y: 0, fill: "fill-blue-600 dark:fill-blue-800" }
        ]
      },
      features: [
        "10,000 Smart Replies/mo",
        "4,000 Generative Replies/mo",
        "5GB Storage",
        "Unlimited Team Members",
        "Custom AI Training",
        "24/7 Support",
        "Full Analytics Suite",
        "Priority API Access"
      ],
      button: {
        text: "Choose Pro",
        disabled: false,
        primary: true
      }
    }
  ];

  return (
    <div className="grid lg:grid-cols-4 2xl:gap-6 gap-4">
      {plans.map((plan, index) => (
        <div key={index} className="p-4 sm:p-6 bg-white border border-gray-200 rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
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
              <span className="inline-flex items-center gap-1.5 py-1.5 px-2 text-xs font-medium bg-blue-100 text-blue-800 rounded-md dark:bg-blue-500/10 dark:text-blue-500">
                Most popular
              </span>
            )}
          </div>

          {/* Plan Name */}
          <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-200">
            {plan.name}
          </h3>

          {/* Price */}
          <div className="mt-4 flex items-center gap-x-0.5">
            <span className="text-xl font-normal text-gray-800 dark:text-neutral-200">฿</span>
            <p className="text-gray-800 font-semibold text-3xl dark:text-neutral-200">
              {plan.price}
            </p>
          </div>
          <p className="mt-1 text-xs text-gray-500 dark:text-neutral-500">
            monthly, billed monthly
          </p>

          {/* Button */}
          <div className="mt-5">
            <button
              type="button"
              disabled={plan.button.disabled}
              className={`w-full py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg ${
                plan.button.primary
                  ? "border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                  : "border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              }`}
            >
              {plan.button.text}
            </button>
          </div>

          {/* Features List */}
          <ul className="mt-5 space-y-1">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex gap-x-2">
                <svg
                  className="shrink-0 mt-0.5 size-4 text-gray-500 dark:text-neutral-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
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
  );
};

export default PricingCards;