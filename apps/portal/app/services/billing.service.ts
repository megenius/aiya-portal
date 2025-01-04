import {
  Product,
  SaasPrice,
  SaasProduct,
  SaasSubscription,
} from "~/@types/app";
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
    smart_reply: number;
    generative_reply: number;
    auto_reply: number;
    check_slip: number;
  }>(`/billing/${subscriptionId}/current-usage`);

export const cancelSubscription = () =>
  api.post("/billing/cancel-subscription");

// plans
export const getPlans = ({
  lang,
  interval,
}: {
  lang: string;
  interval: string;
}) => api.get<SaasPrice>(`/billing/plans?lang=${lang}&interval=${interval}`);
