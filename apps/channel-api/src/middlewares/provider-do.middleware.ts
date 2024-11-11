import { createMiddleware } from "hono/factory";
import { Env } from "~/types/hono.types";

const providerDOMiddleware = createMiddleware<Env>(async (c, next) => {
  const providerId = c.req.param("providerId") as string;
  const id = c.env.PROVIDERS.idFromName(providerId);
  const stub = c.env.PROVIDERS.get(id);
  c.set("providerDO", stub);
  await next();
});

export { providerDOMiddleware };
