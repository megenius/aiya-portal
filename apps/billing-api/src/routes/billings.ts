import { Hono } from "hono";
import * as BillingHandler from "../handlers/billing.handler";
import { Env } from "~/types/hono.types";
import { directusMiddleware } from "~/middlewares/directus.middleware";
import { stripeMiddleware } from "~/middlewares/stripe.middeware";
import { userMiddleware } from "~/middlewares/user.middleware";

const billingsRoutes = new Hono<Env>();

billingsRoutes.get("/", directusMiddleware, ...BillingHandler.getBillings);
billingsRoutes.post(
  "/checkout",
  directusMiddleware,
  stripeMiddleware,
  ...BillingHandler.createCheckout
);

billingsRoutes.get(
  "/checkout-session/:sessionId",
  directusMiddleware,
  stripeMiddleware,
  ...BillingHandler.getCheckoutSession
);

billingsRoutes.post(
  "/cancel-subscription",
  directusMiddleware,
  ...BillingHandler.cancelSubscription
);

billingsRoutes.get(
  "/current",
  directusMiddleware,
  userMiddleware,
  ...BillingHandler.getCurrentBillingPlan
);

billingsRoutes.post(
  "/stripe/webhook",
  directusMiddleware,
  stripeMiddleware,
  ...BillingHandler.stripeWebhook
);

export { billingsRoutes };
