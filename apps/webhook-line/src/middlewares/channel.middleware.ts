import { createFactory } from "hono/factory";
import { WebhookRequestBody } from "@line/bot-sdk";
import { sign, decode, verify } from "hono/jwt";
import { WorkerEnv } from "../types";

const factory = createFactory<WorkerEnv>();

export const channelMiddleware = factory.createMiddleware(async (c, next) => {
  const body: WebhookRequestBody = await c.req.json();
  const providerId = body.destination;
  const cache = await c.env.KV_PORTAL.get(`channel.providerId=${providerId}`);
  if (cache) {
    const channel = JSON.parse(cache);
    c.set("forward_urls", channel?.forward_urls);
  }
  await next();
});
