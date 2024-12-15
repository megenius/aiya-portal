import { Hono } from "hono";
import * as BillingHandler from "../handlers/billing.handler";
import { directusMiddleware } from "~/middleware/directus.middleware";
import { Env } from "~/types/hono.types";
import { stripeMiddleware } from "~/middleware/stripe.middeware";

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
  "/stripe/webhook",
  directusMiddleware,
  stripeMiddleware,
  ...BillingHandler.stripeWebhook
);

export { billingsRoutes };
