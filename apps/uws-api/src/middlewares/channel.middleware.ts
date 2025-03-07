import { createFactory } from "hono/factory";
import { Env } from "~/types/hono.types";
import { ChannelService } from "~/services/channel.service";
import * as jwt from "hono/jwt";
import { LineWebhookPayload } from "~/types/line.types";

const factory = createFactory<Env>();

export const channelMiddleware = factory.createMiddleware(async (c, next) => {
  const channelApi = c.env.CHANNEL_API;
  const channelApiUrl =  `${c.env.PORTAL_URL}/api/channels` //c.env.CHANNEL_API_URL; // Get the base URL from env

  if (!channelApi) {
    throw new Error("CHANNEL_API binding is not configured");
  }

  if (!channelApiUrl) {
    throw new Error("CHANNEL_API_URL is not configured");
  }

  const payload = {
    iss: "lambda",
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + (60*60), // 1 hour expiration
  };
  const token = await jwt.sign(payload, c.env.DIRECTUS_SECRET_KEY);
  
  const channelService = ChannelService.getInstance(
    channelApi,
    channelApiUrl,
    token
  ); // Pass the base URL
  c.set("channelService", channelService);

  const body = (await c.req.json()) as LineWebhookPayload;
  const providerId = body.destination;
  c.set("providerId", providerId);

  await next();
});
