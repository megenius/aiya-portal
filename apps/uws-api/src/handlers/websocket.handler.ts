import { Env } from "~/types/hono.types";
import { createFactory } from "hono/factory";
import { channelDurableMiddleware } from "~/middlewares/channel-durable.middleware";

const factory = createFactory<Env>();

export const connectSubscription = factory.createHandlers(
  channelDurableMiddleware,
  async (c) => {
    if (c.req.header("upgrade") !== "websocket") {
      return c.text("Expected Upgrade: websocket", 426);
    }
    const stub = c.get("channelDurable");
    return stub.fetch(c.req.raw);
  }
);
