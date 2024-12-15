import React from "react"
import { Suspense } from "react"
import { ClientOnly } from "remix-utils/client-only"
import PricingCards from "./_components/PriceCards"
import ComparisonTable from "./_components/ComparisionTable"
import FAQ from "./_components/FAQ"

const Route = () => {
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
                        Preline Plans
                      </h1>
                    </div>
                    {/* End Title */}
                    {/* Toggle */}
                    <div className="flex justify-center mb-6">
                      <div id="hs-pro-toggle-count" className="p-0.5 inline-block bg-gray-100 rounded-full dark:bg-neutral-900">
                        <label htmlFor="toggle-count-by-card" className="relative inline-block py-1.5 px-3.5">
                          <input id="toggle-count-by-card" name="hs-pro-toggle-count" type="radio" className="peer absolute top-0 end-0 size-full border-transparent bg-transparent bg-none text-transparent rounded-full cursor-pointer disabled:opacity-50 disabled:pointer-events-none before:absolute before:inset-0 before:size-full before:rounded-full focus:ring-offset-0 checked:before:bg-white checked:before:shadow-sm checked:bg-none focus:ring-transparent dark:checked:before:bg-neutral-800 dark:focus:ring-offset-transparent" defaultChecked />
                          <span className="relative z-10 inline-flex justify-center items-center gap-x-2 text-sm font-medium text-gray-800 cursor-pointer peer-disabled:cursor-default dark:text-neutral-200">
                            Monthly
                          </span>
                        </label>
                        <label htmlFor="toggle-count-with-paypal" className="relative inline-block py-1.5 px-3.5">
                          <input id="toggle-count-with-paypal" name="hs-pro-toggle-count" type="radio" className="peer absolute top-0 end-0 size-full border-transparent bg-transparent bg-none text-transparent rounded-full cursor-pointer disabled:opacity-50 disabled:pointer-events-none before:absolute before:inset-0 before:size-full before:rounded-full focus:ring-offset-0 checked:before:bg-white checked:before:shadow-sm checked:bg-none focus:ring-transparent dark:checked:before:bg-neutral-800 dark:focus:ring-offset-transparent" />
                          <span className="relative z-10 inline-flex justify-center items-center gap-x-2 text-sm font-medium text-gray-800 cursor-pointer peer-disabled:cursor-default dark:text-neutral-200">
                            Annual
                          </span>
                          <span className="absolute -top-6 start-10">
                            <span className="flex items-center -mt-5">
                              <svg className="shrink-0 -mr-6 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 99.3 57" width={48}>
                                <path fill="none" stroke="currentColor" strokeWidth={4} strokeLinecap="round" strokeMiterlimit={10} d="M2,39.5l7.7,14.8c0.4,0.7,1.3,0.9,2,0.4L27.9,42" />
                                <path fill="none" stroke="currentColor" strokeWidth={4} strokeLinecap="round" strokeMiterlimit={10} d="M11,54.3c0,0,10.3-65.2,86.3-50" />
                              </svg>
                              <span className="block mt-3">
                                <span className="inline-flex items-center gap-1.5 py-1 px-2 whitespace-nowrap text-xs font-medium bg-blue-600 text-white rounded-full dark:bg-blue-500">
                                  Save up to 10%
                                </span>
                              </span>
                            </span>
                          </span>
                        </label>
                      </div>
                    </div>
                    {/* End Toggle */}
                    <PricingCards />
                    {/* End Pricing Cards Grid */}
                    <div className="mt-6 flex justify-center items-center gap-x-3">
                      <p className="text-sm text-gray-500 dark:text-neutral-500">
                        Need a custom plan?
                      </p>
                      <a className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" href="#">
                        Get in touch
                      </a>
                    </div>
                  </div>
                  {/* End Pricing */}

                  <ComparisonTable />

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


