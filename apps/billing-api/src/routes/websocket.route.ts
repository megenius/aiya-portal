import { Hono, Env } from "hono";
import { subscriptionDurableMiddleware } from "~/middlewares/subscription-durable.middleware";
import * as Handler from "~/handlers/websocket.handler";

const websocketRoutes = new Hono<Env>();

websocketRoutes.get(
  "/subscription/:subscriptionId",
  subscriptionDurableMiddleware,
  ...Handler.connectSubscription
);

export { websocketRoutes };
