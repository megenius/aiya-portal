import React, { useEffect, useState } from "react"
import { Suspense } from "react"
import { ClientOnly } from "remix-utils/client-only"
import PricingCards from "./_components/PriceCards"
import ComparisonTable from "./_components/ComparisionTable"
import FAQ from "./_components/FAQ"
import usePlans from "~/hooks/billings/usePlans"
import PricingCards2 from "./_components/PriceCards2"
import { useLanguage } from "~/hooks/useLanguage"

const Route = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const { lang } = useLanguage();
  const { data: plans, refetch } = usePlans({
    lang,
    interval: isAnnual ? "year" : "month",
  })

  useEffect(() => {
    refetch()
  }, [isAnnual])

  if (!plans) {
    return null
  }

  return (
    <>
      <Suspense fallback="">
        <ClientOnly>
          {() =>
            <main id="content" className="pb-[40px] sm:pb-[64px] ">
              {/* Breadcrumb */}
              <ol className="lg:hidden pt-3 md:pt-5 sm:pb-2 md:pb-0 px-2 sm:px-5 flex items-center whitespace-nowrap">
                <li className="flex items-center text-sm text-gray-600 dark:text-neutral-500">
                  Dashboard
                  <svg className="shrink-0 overflow-visible size-4 ms-1.5 text-gray-400 dark:text-neutral-600" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M6 13L10 3" stroke="currentColor" strokeLinecap="round" />
                  </svg>
                </li>
                <li className="ps-1.5 flex items-center font-semibold text-gray-800 dark:text-neutral-200 text-sm">
                  Plans
                </li>
              </ol>
              {/* End Breadcrumb */}
              <div className="p-2 sm:p-5 sm:py-0 md:pt-5 space-y-5">
                {/* Pricing Card */}
                <div className="p-5 md:p-8 space-y-12 bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
                  {/* Pricing */}
                  <div>
                    {/* Title */}
                    <div className="text-center mb-12">
                      <h1 className="text-2xl font-semibold text-gray-800 dark:text-neutral-200">
                        AIYA Plans
                      </h1>
                    </div>
                    {/* End Title */}

                    {/* Billing Toggle */}
                    <div className="flex justify-center mb-8">
                      <div id="hs-pro-toggle-count" className="inline-block bg-gray-100 rounded-full dark:bg-neutral-900">
                        <label htmlFor="toggle-count-by-card" className="relative inline-block py-1.5 px-2">
                          <button
                            onClick={() => setIsAnnual(false)}
                            className={`px-4 py-2 rounded-full text-sm font-medium round ${!isAnnual
                              ? "bg-white text-gray-800 shadow dark:bg-neutral-700 dark:text-neutral-200"
                              : "text-gray-600 dark:text-neutral-400"
                              }`}
                          >
                            Monthly
                          </button>
                        </label>
                        <label htmlFor="toggle-count-with-paypal" className="relative inline-block py-1.5 px-2">
                          <button
                            onClick={() => setIsAnnual(true)}
                            className={`px-4 py-2 rounded-full text-sm font-medium ${isAnnual
                              ? "bg-white text-gray-800 shadow dark:bg-neutral-700 dark:text-neutral-200"
                              : "text-gray-600 dark:text-neutral-400"
                              }`}
                          >
                            Annual
                          </button>
                          <span className="absolute -top-6 start-10">
                            <span className="flex items-center -mt-5">
                              <svg className="shrink-0 -mr-6 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 99.3 57" width={48}>
                                <path fill="none" stroke="currentColor" strokeWidth={4} strokeLinecap="round" strokeMiterlimit={10} d="M2,39.5l7.7,14.8c0.4,0.7,1.3,0.9,2,0.4L27.9,42" />
                                <path fill="none" stroke="currentColor" strokeWidth={4} strokeLinecap="round" strokeMiterlimit={10} d="M11,54.3c0,0,10.3-65.2,86.3-50" />
                              </svg>
                              <span className="block mt-3">
                                <span className="inline-flex items-center gap-1.5 py-1 px-2 whitespace-nowrap text-xs font-medium bg-blue-600 text-white rounded-full dark:bg-blue-500">
                                  Save up to 15% and Get +20% extra credits
                                </span>
                              </span>
                            </span>
                          </span></label>
                      </div>
                    </div>


                    <PricingCards isAnnual={isAnnual} plans={plans} />
                    {/* <PricingCards2 isAnnual={isAnnual}/> */}
                    {/* End Pricing Cards Grid */}
                    <div className="mt-6 flex justify-center items-center gap-x-3">
                      <p className="text-sm text-gray-500 dark:text-neutral-500">
                        Need a custom plan?
                      </p>
                      <a className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                        href="mailto:hello@aiya.ai">
                        Get in touch
                      </a>
                    </div>
                  </div>
                  {/* End Pricing */}

                  {/* <ComparisonTable isAnnual={isAnnual}/> */}

                  <FAQ />
                </div>
                {/* End Pricing Card */}
              </div>
            </main>
          }
        </ClientOnly>
      </Suspense>
    </>
  )
}

export default Route


