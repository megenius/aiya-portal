import React, { useEffect, useState } from "react"
import { Suspense } from "react"
import { ClientOnly } from "remix-utils/client-only"

import { loadStripe } from '@stripe/stripe-js'
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { createCheckoutSession } from "~/services/billing.service"

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY)

const CheckoutForm = () => {
  const stripe = useStripe()
  const elements = useElements()
  const [errorMessage, setErrorMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!stripe || !elements) return

    setIsLoading(true)

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/completion`,
      },
    })

    if (error) {
      setErrorMessage(error.message as string)
    }

    setIsLoading(false)
  }

  return (
    <div className="w-full max-w-md mx-auto p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <PaymentElement />
        <button
          disabled={!stripe || isLoading}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {isLoading ? 'Processing...' : 'Pay now'}
        </button>
        {errorMessage && (
          <div className="text-red-600 text-sm">{errorMessage}</div>
        )}
      </form>
    </div>
  )
}

const Route = () => {
  const [clientSecret, setClientSecret] = useState('')

  useEffect(() => {
    // Create PaymentIntent on component mount
    createCheckoutSession({ amount: 2000 })
      .then(res => res.data)
      .then(data => setClientSecret(data.sessionId))
  }, [])

  if (!clientSecret) return <div>Loading...</div>

  return (
    <>
      <Suspense fallback="">
        <ClientOnly>
          {() =>
            <main id="content" className="pb-[40px] sm:pb-[64px] ">
              <Elements stripe={stripePromise} options={{ clientSecret }}>
                <CheckoutForm />
              </Elements>
            </main>
          }
        </ClientOnly>
      </Suspense>
    </>
  )
}

export default Route


