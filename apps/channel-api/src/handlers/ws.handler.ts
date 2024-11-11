import { Env } from "~/types/hono.types";
import { createFactory } from "hono/factory";
import { providerDOMiddleware } from "~/middlewares/provider-do.middleware";

const factory = createFactory<Env>();

export const connectProvider = factory.createHandlers(
  providerDOMiddleware,
  async (c) => {
    if (c.req.header("upgrade") !== "websocket") {
      return c.text("Expected Upgrade: websocket", 426);
    }
    const stub = c.get("providerDO");
    return stub.fetch(c.req.raw);
  }
);

export const broadcast = factory.createHandlers(
  providerDOMiddleware,
  async (c) => {
    const { roomId, userId } = c.req.query();
    const stub = c.get("providerDO");
    const result = await stub.broadcast(await c.req.json(), {
      filter: { roomId, userId },
    });
    return c.json({ result });
  }
);
