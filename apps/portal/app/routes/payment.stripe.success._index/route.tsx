import { useSearchParams } from "@remix-run/react"
import { Loading } from "@repo/preline"
import React, { useEffect, useState } from "react"
import useStripeGetCheckoutSession from "~/hooks/billings/useStripCheckoutSession"
import { CheckCircle, ArrowRight, Download } from 'lucide-react';

const Route = () => {
  const [error, setError] = useState<string>('')
  const [search] = useSearchParams()
  const checkoutSession = useStripeGetCheckoutSession({ sessionId: search.get('session_id') as string })


  useEffect(() => {
    if (checkoutSession.error) {
      setError(checkoutSession.error.message)
    }
  }, [checkoutSession.error])

  useEffect(() => {
    if (checkoutSession.isSuccess) {
      setTimeout(() => {
        window.location.href = '/billing'
      }, 3000)
    }
  }, [checkoutSession.isSuccess])

  if (checkoutSession.isLoading) {
    return (
      <Loading />
    )
  }

  if (error) {
    return (
      <div className="max-w-[50rem] mx-auto p-6 sm:p-10">
        <div className="bg-white border border-gray-200 rounded-xl shadow-xs">
          <div className="text-center p-8 sm:p-10">
            <CheckCircle className="inline-block h-16 w-16 text-red-600 mb-4" />

            <h1 className="block text-2xl font-bold text-gray-800 sm:text-3xl">
              Payment failed
            </h1>
            <p className="mt-2 text-gray-600">
              {error}
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="max-w-[50rem] mx-auto p-6 sm:p-10">
        {/* Main Card */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-xs">
          {/* Success Header */}
          <div className="text-center p-8 sm:p-10">
            <CheckCircle className="inline-block h-16 w-16 text-green-600 mb-4" />

            <h1 className="block text-2xl font-bold text-gray-800 sm:text-3xl">
              Payment successful!
            </h1>
            <p className="mt-2 text-gray-600">
              Thank you for your purchase. Your order has been processed successfully.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600">Redirecting you in 3 seconds...</p>
        </div>

        {/* Support Section */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            Need help? <a href="mailto:support@aiya.ai" className="text-blue-600 hover:text-blue-700 font-medium">Contact our support</a>
          </p>
        </div>
      </div>
    </>
  )
}

export default Route


