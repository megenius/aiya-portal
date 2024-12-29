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

export const getCurrentBillingPlan = () =>
  api.get<{
    subscription: SaasSubscription;
  }>(`/billing/current`);

export const getCurrentBillingUsage = (subscriptionId: string) =>
  api.get<{
    smart_reploy: number;
    generative_reply: number;
    auto_reply: number;
    check_slips: number;
  }>(`/billing/${subscriptionId}/current-usage`);

export const cancelSubscription = () =>
  api.post("/billing/cancel-subscription");
