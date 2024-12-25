import { Product, SaasProduct, SaasSubscription } from "~/@types/app";
import api from "./api";
import Stripe from "stripe";

//checkout
export const createCheckoutSession = (data: any) =>
  api.post<{
    sessionId: string;
  }>("/billing/checkout", data);

// checkout-session
export const getCheckoutSession = (sessionId: string) =>
  api.get<Stripe.Checkout.Session>(`/billing/checkout-session/${sessionId}`);

export const getCurrentBillingPlan = (userId: string) =>
  api.get<{
    subscription: SaasSubscription;
    product: SaasProduct;
  }>(`/billing/current`);
