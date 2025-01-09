import { createMiddleware } from "hono/factory";
import { CounterDurable } from "~/durables/CounterDurable";
import { Env } from "~/types/hono.types";

const subscriptionDurableMiddleware = createMiddleware<Env>(async (c, next) => {
  const subscriptionId = c.req.param("subscriptionId");
  if (!subscriptionId) {
    return c.json({ error: "subscription ID is missing" }, 400);
  }
  const id = c.env.SUBSCRIPTION_DURABLE.idFromName(subscriptionId);
  const stub = c.env.SUBSCRIPTION_DURABLE.get(id);
  c.set("subscriptionDurable", stub);
  await next();
});

export { subscriptionDurableMiddleware };
