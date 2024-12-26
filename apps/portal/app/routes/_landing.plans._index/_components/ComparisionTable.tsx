import React, { useState } from 'react';
import { NumericFormat } from 'react-number-format';
import { useStripeCheckout } from '~/hooks/billings/useStripeCheckout';
import { useLanguage } from '~/hooks/useLanguage';

const ComparisonTable = ({ isAnnual }) => {
  const checkout = useStripeCheckout();
  const { currentLanguage } = useLanguage()

  const handleCheckout = async (priceId: string) => {
    checkout.mutate({ priceId })
  }

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

  const plansEn = [
    {
      name: "Free Trial",
      monthlyPrice: "0",
      annualPrice: "0",
      monthlyPriceId: "",
      annualPriceId: "",
      period: "forever free",
      buttonText: "Start Free"
    },
    {
      name: "Starter",
      monthlyPrice: "1890",
      annualPrice: getAnnualPrice(1890),
      monthlyPriceId: import.meta.env.VITE_STRIPE_STARTER_MONTHLY_PRICE_ID,
      annualPriceId: import.meta.env.VITE_STRIPE_STARTER_ANNUAL_PRICE_ID,
      period: !isAnnual ? 'monthly' : 'yearly',
      buttonText: "Choose Starter",
      popular: true
    },
    {
      name: "Growth",
      monthlyPrice: "2,990",
      annualPrice: getAnnualPrice(2990),
      monthlyPriceId: import.meta.env.VITE_STRIPE_GROWTH_MONTHLY_PRICE_ID,
      annualPriceId: import.meta.env.VITE_STRIPE_GROWTH_ANNUAL_PRICE_ID,
      period: !isAnnual ? 'monthly' : 'yearly',
      buttonText: "Choose Growth"
    }
  ];

  const categoriesEn = [
    {
      title: "Usage Limits",
      features: [
        {
          name: "Workspaces",
          values: ["1", "3", "5"]
        },
        {
          name: "Smart Reply Credits",
          baseValues: [150, 3000, 4000],
          get values() {
            return this.baseValues.map(value =>
              `${getCredits(value, isAnnual).toLocaleString()}/mo`
            );
          }
        },
        {
          name: "Generative Reply Credits",
          baseValues: [20, 1200, 1500],
          get values() {
            return this.baseValues.map(value =>
              `${getCredits(value, isAnnual).toLocaleString()}/mo`
            );
          }
        },
        {
          name: "Slip Recognition Credits",
          baseValues: [15, 300, 400],
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
          values: ["100MB", "2GB", "5GB"]
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
          values: [false, true, true]
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

  const plansTh = [
    {
      name: "ทดลองใช้ฟรี",
      monthlyPrice: "0",
      annualPrice: "0",
      monthlyPriceId: "",
      annualPriceId: "",
      period: "ฟรีตลอดไป",
      buttonText: "เริ่มใช้ฟรี"
    },
    {
      name: "Starter",
      monthlyPrice: "1890",
      annualPrice: getAnnualPrice(1890),
      monthlyPriceId: import.meta.env.VITE_STRIPE_STARTER_MONTHLY_PRICE_ID,
      annualPriceId: import.meta.env.VITE_STRIPE_STARTER_ANNUAL_PRICE_ID,
      period: !isAnnual ? 'รายเดือน' : 'รายปี',
      buttonText: "เลือกแพ็คเกจ Starter",
      popular: true
    },
    {
      name: "Growth",
      monthlyPrice: "3490",
      annualPrice: getAnnualPrice(3490),
      monthlyPriceId: import.meta.env.VITE_STRIPE_GROWTH_MONTHLY_PRICE_ID,
      annualPriceId: import.meta.env.VITE_STRIPE_GROWTH_ANNUAL_PRICE_ID,
      period: !isAnnual ? 'รายเดือน' : 'รายปี',
      buttonText: "เลือกแพ็คเกจ Growth"
    }
  ];

  const categoriesTh = [
    {
      title: "ขีดจำกัดการใช้งาน",
      features: [
        {
          name: "เวิร์กสเปซ",
          values: ["1", "3", "5"]
        },
        {
          name: "เครดิต Smart Reply",
          baseValues: [150, 3000, 4000],
          get values() {
            return this.baseValues.map(value =>
              `${getCredits(value, isAnnual).toLocaleString()}/เดือน`
            );
          }
        },
        {
          name: "เครดิต Generative Reply",
          baseValues: [20, 1200, 1500],
          get values() {
            return this.baseValues.map(value =>
              `${getCredits(value, isAnnual).toLocaleString()}/เดือน`
            );
          }
        },
        {
          name: "เครดิตการตรวจจับสลิป",
          baseValues: [15, 100, 400],
          get values() {
            return this.baseValues.map(value =>
              `${getCredits(value, isAnnual).toLocaleString()}/เดือน`
            );
          }
        },
        {
          name: "บอทต่อเวิร์กสเปซ",
          values: ["1", "3", "5"]
        },
        {
          name: "ฐานความรู้ต่อบอท",
          values: ["3", "5", "10"]
        }
      ]
    },
    {
      title: "พื้นที่จัดเก็บและทีม",
      features: [
        {
          name: "ขีดจำกัดพื้นที่จัดเก็บ",
          values: ["100MB", "500MB", "2GB"]
        },
        {
          name: "สมาชิกทีมต่อเวิร์กสเปซ",
          values: ["2", "3", "5"]
        }
      ]
    },
    {
      title: "ประเภทเนื้อหา",
      features: [
        {
          name: "ข้อความ",
          values: [true, true, true]
        },
        {
          name: "รูปภาพ",
          values: [true, true, true]
        },
        {
          name: "ลิงก์",
          values: [true, true, true]
        },
        {
          name: "เอกสาร PDF",
          values: [false, true, true]
        },
        {
          name: "เอกสาร Word",
          values: [false, true, true]
        },
        {
          name: "เอกสาร Excel",
          values: [false, true, true]
        },
        {
          name: "วิดีโอ",
          values: [false, true, true]
        }
      ]
    },
    {
      title: "การสนับสนุนและการวิเคราะห์",
      features: [
        {
          name: "ระดับการสนับสนุน",
          values: ["ชุมชน", "อีเมล", "เร่งด่วน"]
        },
        {
          name: "การวิเคราะห์",
          values: [false, "พื้นฐาน", "ขั้นสูง"]
        }
      ]
    }
  ];

  const plans = currentLanguage === 'th' ? plansTh : plansEn;
  const categories = currentLanguage === 'th' ? categoriesTh : categoriesEn;

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
        <div className="grid lg:grid-cols-4 lg:gap-x-6">
          <div className="col-span-2">
          </div>
          {plans.slice(0, 2).map((plan, index) => (
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
                    disabled={checkout.isPending}
                    onClick={() => handleCheckout(!isAnnual ? plan.monthlyPriceId : plan.annualPriceId)}
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
          <ul className="grid lg:grid-cols-3 lg:gap-x-6">
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
            <ul key={featureIndex} className="grid lg:grid-cols-4 lg:gap-x-6">
              <li className="lg:col-span-2 pb-1.5 lg:py-2">
                <span className="text-sm font-medium lg:font-normal text-gray-800 dark:text-neutral-200">
                  {feature.name}
                </span>
              </li>
              {feature.values.slice(0,2).map((value, valueIndex) => (
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