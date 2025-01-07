import { Hono } from "hono";
import * as BillingHandler from "../handlers/billing.handler";
import * as StripeHandler from "../handlers/stripe.handler";
import { Env } from "~/types/hono.types";
import { directusMiddleware } from "~/middlewares/directus.middleware";
import { stripeMiddleware } from "~/middlewares/stripe.middeware";
import { userMiddleware } from "~/middlewares/user.middleware";
import { subscriptionDurableMiddleware } from "~/middlewares/subscription-durable.middleware";
import { cache } from "hono/cache";
import { billingAdminMiddleware, billingMiddleware } from "~/middlewares/billing.middleware";

const billingsRoutes = new Hono<Env>();

// write function to
// get plans
billingsRoutes.get(
  "/plans",
  // cache({
  //   cacheName: "plans-v2",
  //   cacheControl: "max-age=3600", // 1 minute
  // }),
  directusMiddleware,
  stripeMiddleware,
  billingMiddleware,
  ...BillingHandler.getPlans
);

// create free plan
billingsRoutes.post(
  "/create-free-plan",
  directusMiddleware,
  userMiddleware,
  stripeMiddleware,
  ...BillingHandler.createOnboardFreePlan
);

// checkout for a plan
billingsRoutes.post(
  "/checkout",
  directusMiddleware,
  userMiddleware,
  stripeMiddleware,
  ...BillingHandler.createCheckout
);

// get checkout session
billingsRoutes.get(
  "/checkout-session/:sessionId",
  directusMiddleware,
  stripeMiddleware,
  ...BillingHandler.getCheckoutSession
);

// cancel subscription
billingsRoutes.post(
  "/cancel-subscription",
  directusMiddleware,
  userMiddleware,
  stripeMiddleware,
  ...BillingHandler.cancelSubscription
);

// get current billing plan
billingsRoutes.get(
  "/current",
  directusMiddleware,
  userMiddleware,
  ...BillingHandler.getCurrentBillingPlan
);

// get current usage
billingsRoutes.get(
  "/:subscriptionId/current-usage",
  // cache({
  //   cacheName: "subscription-usage",
  //   cacheControl: "max-age=60", // 1 minute
  // }),
  subscriptionDurableMiddleware,
  ...BillingHandler.getCurrentUsage
);

// create usage history
billingsRoutes.post(
  "/record",
  directusMiddleware,
  ...BillingHandler.recordUsage
);

// handle stripe webhook
billingsRoutes.post(
  "/stripe/webhook",
  directusMiddleware,
  stripeMiddleware,
  billingAdminMiddleware,
  ...StripeHandler.webhook
);

export { billingsRoutes };
