import { Context, Next } from "hono";

export async function channelDurableMiddleware(c: Context, next: Next) {
  const providerId = c.get("providerId"); // This is the channel ID from webhook
  // Get Channel Durable Object using providerId
  const id = c.env.CHANNEL.idFromName(providerId);
  const channelDO = c.env.CHANNEL.get(id);
  c.set("channelDurable", channelDO);
  await next();
}
