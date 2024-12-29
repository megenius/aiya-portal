import { useMutation } from "@tanstack/react-query";
import { loadStripe } from "@stripe/stripe-js";
import { createCheckoutSession } from "~/services/billing.service";
import { useLanguage } from "../useLanguage";

// Initialize Stripe
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

interface CheckoutSessionRequest {
  priceId: string;
  email?: string;
  quantity?: number;
  successUrl?: string;
  cancelUrl?: string;
}

interface CheckoutSessionResponse {
  sessionId: string;
}

export const useStripeCheckout = () => {
  const { currentLanguage } = useLanguage();

  return useMutation({
    mutationFn: async (data: CheckoutSessionRequest) =>
      createCheckoutSession({ ...data, language: currentLanguage }).then(
        (res) => res.data
      ),
    onSuccess: async (data) => {
      const stripe = await stripePromise;
      if (!stripe) throw new Error("Stripe failed to initialize");

      const result = await stripe.redirectToCheckout({
        sessionId: data.sessionId,
      });

      if (result.error) {
        throw new Error(result.error.message);
      }
    },
  });
};
