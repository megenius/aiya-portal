import { Env } from "~/types/hono.types";
import { createFactory } from "hono/factory";
import { subscriptionDurableMiddleware } from "~/middlewares/subscription-durable.middleware";

const factory = createFactory<Env>();

export const connectSubscription = factory.createHandlers(
  subscriptionDurableMiddleware,
  async (c) => {
    if (c.req.header("upgrade") !== "websocket") {
      return c.text("Expected Upgrade: websocket", 426);
    }
    const stub = c.get("subscriptionDurable");
    return stub.fetch(c.req.raw);
  }
);
