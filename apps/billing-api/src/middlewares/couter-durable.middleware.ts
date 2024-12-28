import { createMiddleware } from "hono/factory";
import { CounterDurable } from "~/durables/CounterDurable";
import { Env } from "~/types/hono.types";

const counterDurableMiddleware = createMiddleware<Env>(async (c, next) => {
  const counterId = c.req.param("counterId");
  if (!counterId) {
    return c.json({ error: "Counter ID is missing" }, 400);
  }
  const id = c.env.COUNTER_DURABLE.idFromName(counterId);
  const stub = c.env.COUNTER_DURABLE.get(id);
  c.set("counterDurable", stub);
  await next();
});

export { counterDurableMiddleware };
