import { createMiddleware } from "hono/factory";
import { MyDurableObject } from "~/durables/MyDurableObject";
import { Env } from "~/types/hono.types";

const durableFollowerObjectMiddleware = createMiddleware<Env>(async (c, next) => {
  const name = c.req.query("name");
  if (!name) {
    return c.text(
      "Select a Durable Object to contact by using the `name` URL query string parameter, for example, ?name=A"
    );
  }
  const id = c.env.COUNTERS.idFromName(name);
  const stub = c.env.COUNTERS.get(id);
  c.set("stub", stub);
  await next();
});

export { durableFollowerObjectMiddleware };
