import React, { useState } from 'react';
import { NumericFormat } from 'react-number-format';

const ComparisonTable = ({ isAnnual }) => {
  // const [billingPeriod, setBillingPeriod] = useState('monthly');

  const getAnnualPrice = (monthlyPrice) => {
    const annual = monthlyPrice * 12;
    const discount = 0.15; // 15% discount for annual
    return Math.floor(annual * (1 - discount));
  };

  // Function to increase credits by 20% for annual plans
  const getCredits = (baseAmount, isAnnual) => {
    if (!isAnnual) return baseAmount;
    const bonus = Math.floor(baseAmount * 1.2);
    return bonus;
  };

  const plans = [
    {
      name: "Free Trial",
      monthlyPrice: "0",
      annualPrice: "0",
      period: "forever free",
      buttonText: "Start Free"
    },
    {
      name: "Starter",
      monthlyPrice: "990",
      annualPrice: getAnnualPrice(990),
      period: !isAnnual ? 'monthly' : 'yearly',
      buttonText: "Choose Starter",
      popular: true
    },
    {
      name: "Growth",
      monthlyPrice: "1,890",
      annualPrice: getAnnualPrice(1890),
      period: !isAnnual ? 'monthly' : 'yearly',
      buttonText: "Choose Growth"
    }
  ];

  const categories = [
    {
      title: "Usage Limits",
      features: [
        {
          name: "Workspaces",
          values: ["1", "3", "5"]
        },
        {
          name: "Smart Reply Credits",
          baseValues: [150, 1500, 4000],
          get values() {
            return this.baseValues.map(value =>
              `${getCredits(value, isAnnual).toLocaleString()}/mo`
            );
          }
        },
        {
          name: "Generative Reply Credits",
          baseValues: [20, 400, 1500],
          get values() {
            return this.baseValues.map(value =>
              `${getCredits(value, isAnnual).toLocaleString()}/mo`
            );
          }
        },
        {
          name: "Slip Recognition Credits",
          baseValues: [15, 150, 400],
          get values() {
            return this.baseValues.map(value =>
              `${getCredits(value, isAnnual).toLocaleString()}/mo`
            );
          }
        },
        {
          name: "Bots per Workspace",
          values: ["1", "3", "5"]
        },
        {
          name: "Knowledge Base per Bot",
          values: ["3", "5", "10"]
        }
      ]
    },
    {
      title: "Storage & Team",
      features: [
        {
          name: "Storage Limit",
          values: ["100MB", "500MB", "2GB"]
        },
        {
          name: "Team Members per Workspace",
          values: ["2", "3", "5"]
        }
      ]
    },
    {
      title: "Content Types",
      features: [
        {
          name: "Text",
          values: [true, true, true]
        },
        {
          name: "Image",
          values: [true, true, true]
        },
        {
          name: "Link",
          values: [true, true, true]
        },
        {
          name: "PDF Documents",
          values: [true, true, true]
        },
        {
          name: "Word Documents",
          values: [false, true, true]
        },
        {
          name: "Excel Documents",
          values: [false, true, true]
        },
        {
          name: "Video",
          values: [false, true, true]
        }
      ]
    },
    {
      title: "Support & Analytics",
      features: [
        {
          name: "Support Level",
          values: ["Community", "Email", "Priority"]
        },
        {
          name: "Analytics",
          values: [false, "Basic", "Advanced"]
        }
      ]
    }
  ];

  return (
    <div className="relative">
      {/* Title and Billing Toggle */}
      <div className="py-8 text-center">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-neutral-200 mb-6">
          Compare plans
        </h2>
      </div>

      {/* Header */}
      <div className="hidden lg:block sticky top-14 start-0 py-2 bg-white dark:bg-neutral-800 z-10">
        <div className="grid lg:grid-cols-5 lg:gap-x-6">
          <div className="col-span-2">
          </div>
          {plans.map((plan, index) => (
            <div key={index} className="col-span-1">
              <div className="p-4 h-full flex flex-col justify-between text-center relative">
                {plan.popular && (
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-3 py-1 text-xs font-medium rounded-full">
                      Popular
                    </span>
                  </div>
                )}
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                    {plan.name}
                  </h4>
                  <p className="mt-1">
                    <span className="text-2xl font-bold text-gray-800 dark:text-neutral-200">
                      <NumericFormat value={!isAnnual ? plan.monthlyPrice : plan.annualPrice} displayType={'text'} thousandSeparator={true} prefix={'฿'} />
                    </span>
                    <span className="text-sm text-gray-500 dark:text-neutral-500">/{plan.period}</span>
                  </p>
                </div>
                <div className="mt-4">
                  <button
                    type="button"
                    className={`w-full py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg ${plan.popular
                      ? "border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                      : "border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                      }`}
                  >
                    {plan.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories and Features */}
      {categories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="space-y-4 lg:space-y-0">
          {/* Category Title */}
          <ul className="grid lg:grid-cols-5 lg:gap-x-6">
            <li className="lg:col-span-2 lg:py-3">
              <span className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                {category.title}
              </span>
            </li>
            {[...Array(3)].map((_, i) => (
              <li key={i} className="hidden lg:block lg:col-span-1 py-0.5 lg:py-3 lg:text-center" />
            ))}
          </ul>

          {/* Features */}
          {category.features.map((feature, featureIndex) => (
            <ul key={featureIndex} className="grid lg:grid-cols-5 lg:gap-x-6">
              <li className="lg:col-span-2 pb-1.5 lg:py-2">
                <span className="text-sm font-medium lg:font-normal text-gray-800 dark:text-neutral-200">
                  {feature.name}
                </span>
              </li>
              {feature.values.map((value, valueIndex) => (
                <li key={valueIndex} className="col-span-1 py-0.5 lg:py-2 lg:text-center">
                  <div className="grid grid-cols-2 lg:block">
                    <span className="lg:hidden text-sm text-gray-500 dark:text-neutral-200">
                      {plans[valueIndex].name}
                    </span>
                    {typeof value === 'boolean' ? (
                      value ? (
                        <svg className="size-5 lg:mx-auto text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      ) : (
                        <svg className="size-4 lg:mx-auto text-gray-500 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14" />
                        </svg>
                      )
                    ) : (
                      <span className="text-sm text-gray-800 dark:text-neutral-200">
                        {value}
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ComparisonTable;