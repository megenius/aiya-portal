import { Context, Next } from "hono";
import { ChannelDurableObject } from "~/durables/channel.durable";
import { Env } from "~/types/hono.types";

export async function channelDurableMiddleware(c: Context<Env>, next: Next) {
  const providerId = c.get("providerId") || c.req.param("providerId"); // This is the channel ID from webhook
  if (!providerId) {
    throw new Error("providerId is required");
  }

  // Get Channel Durable Object using providerId
  const id = c.env.CHANNEL_DURABLE.idFromName(providerId);
  const channelDO = c.env.CHANNEL_DURABLE.get(id);
  c.set("channelDurable", channelDO);

  await next();
}
