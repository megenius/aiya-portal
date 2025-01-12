import React from "react"
import { Suspense } from "react"
import { ClientOnly } from "remix-utils/client-only"
import Plan from "./_components/Plan"
import PaymentMethod from "./_components/PaymentMethod"
import BillingTable from "./_components/BillingTable"
import { useNavigate } from "@remix-run/react"
import { useTranslation } from "react-i18next"
import useCurrentBillingPlan from "~/hooks/billings/useCurrentBillingPlan"
import { Loading } from "@repo/preline"
import { useCancelSubscription } from "~/hooks/billings/useCancelSubscription"
import { toast } from "react-toastify"
import Container from "../_landing/_components/Container"

const Route = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const { data, refetch } = useCurrentBillingPlan()
  const cancelSubscription = useCancelSubscription()
  const [isCanceling, setIsCanceling] = React.useState(false)

  const handleCancel = () => {
    setIsCanceling(true)
    cancelSubscription.mutateAsync({
      stripeSubscriptionId: data?.subscription.id as string
    }).then(() => {
      setTimeout(() => {
        toast.success(t('billing.subscription.cancel.success'))
        refetch()
        setIsCanceling(false)
      }, 3000)
    })
  }

  if (!data) {
    return <Loading />
  }

  if (isCanceling) {
    return (
      <>
        <Loading />
      </>
    )
  }

  return (
    <>
      <Suspense fallback="">
        <ClientOnly>
          {() =>
            <Container>
              {/* Title */}
              <div className="flex justify-between gap-x-3 mb-4 xl:mb-8">
                <div>
                  <h1 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                    {t('billing.title')}
                  </h1>
                  <p className="text-sm text-gray-500 dark:text-neutral-500">
                    {t('billing.subtitle')}
                  </p>
                </div>
                {/* End Col */}
                <div className="shrink-0 hidden">
                  <button type="button" className="py-2 px-3 flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" data-hs-overlay="#hs-pro-dmgprom"
                    onClick={() => navigate('/affiliates')}
                  >
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" /><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" /><path d="M12 18V6" />
                    </svg>
                    {t('billing.affiliate_program')}
                  </button>
                </div>
              </div>
              {/* End Title */}
              <div className="space-y-11">
                {/* Grid */}
                <div className="grid xl:grid-cols-1 gap-6">
                  {data?.subscription && data?.subscription.status === 'active' &&
                    <Plan
                      subscription={data?.subscription}
                      plan={data?.plan}
                      onCanceled={handleCancel}
                    />}
                  {/* <PaymentMethod /> */}
                </div>
                {/* End Grid */}
                {/* <div className="border-t border-gray-200 dark:border-neutral-700" /> */}
                {/* <BillingTable /> */}
              </div>
            </Container>
          }
        </ClientOnly>
      </Suspense>
    </>
  )
}

export default Route


