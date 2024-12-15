import React from 'react';

const ComparisonTable = () => {
  // Header data
  const plans = [
    { 
      name: "Free Trial", 
      price: "0", 
      period: "forever free",
      buttonText: "Start Free"
    },
    { 
      name: "Starter", 
      price: "990", 
      period: "monthly, billed monthly",
      buttonText: "Choose Starter"
    },
    { 
      name: "Growth", 
      price: "1,890", 
      period: "monthly, billed monthly",
      buttonText: "Choose Growth",
      popular: true
    },
    { 
      name: "Pro", 
      price: "4,290", 
      period: "monthly, billed monthly",
      buttonText: "Choose Pro"
    }
  ];

  const categories = [
    {
      title: "Usage Limits",
      features: [
        {
          name: "Smart Reply Credits",
          values: ["100/mo", "1,500/mo", "4,000/mo", "10,000/mo"]
        },
        {
          name: "Generative Reply Credits",
          values: ["10/mo", "400/mo", "1,500/mo", "4,000/mo"]
        },
        {
          name: "Additional Smart Reply",
          values: ["฿0.15/credit", "฿0.15/credit", "฿0.13/credit", "฿0.11/credit"]
        },
        {
          name: "Additional Gen Reply",
          values: ["฿0.30/credit", "฿0.30/credit", "฿0.25/credit", "฿0.22/credit"]
        }
      ]
    },
    {
      title: "Features",
      features: [
        {
          name: "Team Members",
          values: ["2", "5", "10", "Unlimited"]
        },
        {
          name: "Storage",
          values: ["100MB", "500MB", "2GB", "5GB"]
        },
        {
          name: "Custom Templates",
          values: [true, true, true, true]
        },
        {
          name: "API Access",
          values: [false, false, true, true]
        }
      ]
    },
    {
      title: "Support & Analytics",
      features: [
        {
          name: "Support Level",
          values: ["Community", "Email", "Priority", "24/7"]
        },
        {
          name: "Response Time",
          values: ["48h", "24h", "12h", "4h"]
        },
        {
          name: "Analytics Dashboard",
          values: [false, true, true, true]
        },
        {
          name: "Custom Reports",
          values: [false, false, true, true]
        }
      ]
    },
    {
      title: "Advanced Features",
      features: [
        {
          name: "Custom AI Training",
          values: [false, false, false, true]
        },
        {
          name: "Multi-language Support",
          values: [false, true, true, true]
        },
        {
          name: "Advanced Integrations",
          values: [false, false, true, true]
        },
        {
          name: "White-labeling",
          values: [false, false, false, true]
        }
      ]
    }
  ];

  return (
    <div className="relative">
      {/* Title */}
      <div className="py-8 text-center">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-neutral-200">
          Compare plans
        </h2>
      </div>

      {/* Header */}
      <div className="hidden lg:block sticky top-14 start-0 py-2 bg-white dark:bg-neutral-800">
        <div className="grid lg:grid-cols-6 lg:gap-x-6">
          <div className="col-span-2">
          </div>
          {plans.map((plan, index) => (
            <div key={index} className="col-span-1">
              <div className="p-4 h-full flex flex-col justify-between text-center">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                    {plan.name}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-neutral-500">
                    ฿{plan.price} {plan.period}
                  </p>
                </div>
                <div className="mt-2">
                  <button 
                    type="button" 
                    className={`w-full py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg ${
                      plan.popular
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
          <ul className="grid lg:grid-cols-6 lg:gap-x-6">
            <li className="lg:col-span-2 lg:py-3">
              <span className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                {category.title}
              </span>
            </li>
            {[...Array(4)].map((_, i) => (
              <li key={i} className="hidden lg:block lg:col-span-1 py-0.5 lg:py-3 lg:text-center" />
            ))}
          </ul>

          {/* Features */}
          {category.features.map((feature, featureIndex) => (
            <ul key={featureIndex} className="grid lg:grid-cols-6 lg:gap-x-6">
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