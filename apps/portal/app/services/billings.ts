import api from "./api";
import Stripe from "stripe";

//checkout
export const createCheckoutSession = (data: any) =>
  api.post<{
    sessionId: string;
  }>("/billings/checkout", data);

// checkout-session
export const getCheckoutSession = (sessionId: string) =>
  api.get<Stripe.Checkout.Session>(`/billings/checkout-session/${sessionId}`);
