import React from "react"
import { Suspense } from "react"
import { ClientOnly } from "remix-utils/client-only"
import Plan from "./_components/Plan"
import PaymentMethod from "./_components/PaymentMethod"
import BillingTable from "./_components/BillingTable"
import { useNavigate } from "@remix-run/react"

const Route = () => {
  const navigate = useNavigate()

  return (
    <>
      <Suspense fallback="">
        <ClientOnly>
          {() =>
            <main id="content" className="pb-[40px] sm:pb-[64px] ">
              {/* End Breadcrumb */}
              <div className="p-2 sm:p-5 sm:py-0 md:pt-5 space-y-3">

                {/* Account Card */}
                <div className="p-5 md:p-8 bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
                  {/* Title */}
                  <div className="flex justify-between gap-x-3 mb-4 xl:mb-8">
                    <div>
                      <h1 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                        Plan &amp; Billing
                      </h1>
                      <p className="text-sm text-gray-500 dark:text-neutral-500">
                        View your plan information or switch plans according to your needs.
                      </p>
                    </div>
                    {/* End Col */}
                    <div className="shrink-0">
                      <button type="button" className="py-2 px-3 flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" data-hs-overlay="#hs-pro-dmgprom"
                      
                        onClick={() => navigate('/affiliates')}
                      >
                        <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10" /><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" /><path d="M12 18V6" />
                        </svg>
                        Affiliate program
                      </button>
                    </div>
                  </div>
                  {/* End Title */}
                  <div className="space-y-11">
                    {/* Grid */}
                    <div className="grid xl:grid-cols-1 gap-6">
                      <Plan />
                      {/* <PaymentMethod /> */}
                    </div>
                    {/* End Grid */}
                    <div className="border-t border-gray-200 dark:border-neutral-700" />
                    <BillingTable />
                  </div>
                </div>
                {/* End Account Card */}
              </div>
            </main>
          }
        </ClientOnly>
      </Suspense>
    </>
  )
}

export default Route


