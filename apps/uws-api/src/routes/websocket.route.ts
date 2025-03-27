import { Hono, Env } from "hono";
import * as Handler from "~/handlers/websocket.handler";
import { channelDurableMiddleware } from "~/middlewares/channel-durable.middleware";

const websocketRoutes = new Hono<Env>();

websocketRoutes.get(
  "/conversations/:providerId",
  channelDurableMiddleware,
  ...Handler.connectSubscription
);


export { websocketRoutes };
