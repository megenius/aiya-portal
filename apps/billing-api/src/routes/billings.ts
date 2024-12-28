import { Hono } from "hono";
import * as BillingHandler from "../handlers/billing.handler";
import { Env } from "~/types/hono.types";
import { directusMiddleware } from "~/middlewares/directus.middleware";
import { stripeMiddleware } from "~/middlewares/stripe.middeware";
import { userMiddleware } from "~/middlewares/user.middleware";
import { counterDurableMiddleware } from "~/middlewares/couter-durable.middleware";
import { subscriptionDurableMiddleware } from "~/middlewares/subscription-durable.middleware";

const billingsRoutes = new Hono<Env>();

billingsRoutes.get("/", directusMiddleware, ...BillingHandler.getBillings);
billingsRoutes.post(
  "/checkout",
  directusMiddleware,
  userMiddleware,
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
  userMiddleware,
  stripeMiddleware,
  ...BillingHandler.cancelSubscription
);

billingsRoutes.get(
  "/current",
  directusMiddleware,
  userMiddleware,
  ...BillingHandler.getCurrentBillingPlan
);

billingsRoutes.get(
  "/:subscriptionId/current-usage",
  subscriptionDurableMiddleware,
  ...BillingHandler.getCurrentUsage
);

billingsRoutes.post("/record", directusMiddleware, ...BillingHandler.recordUsage);

billingsRoutes.post(
  "/stripe/webhook",
  directusMiddleware,
  stripeMiddleware,
  ...BillingHandler.stripeWebhook
);

// websockets have to be at the top
billingsRoutes.get("/counter/:counterId", counterDurableMiddleware, ...BillingHandler.getCounter);
billingsRoutes.get("/counter/:counterId/increment", counterDurableMiddleware, ...BillingHandler.incrementCounter);
billingsRoutes.get("/counter/:counterId/decrement", counterDurableMiddleware, ...BillingHandler.decrementCounter);
billingsRoutes.get("/counter/:counterId/websocket", counterDurableMiddleware, ...BillingHandler.connectCounter);
billingsRoutes.get("/websocket/counter/:counterId", counterDurableMiddleware, ...BillingHandler.connectCounter);

export { billingsRoutes };
