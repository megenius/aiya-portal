import { createMiddleware } from "hono/factory";
import { Env } from "~/types/hono.types";

const followerDOMiddleware = createMiddleware<Env>(async (c, next) => {
  const providerId = c.req.param("providerId") as string;
  const id = c.env.FOLLOWERS.idFromName(providerId);
  const stub = c.env.FOLLOWERS.get(id);
  c.set("followerDO", stub);
  await next();
});

export { followerDOMiddleware };
