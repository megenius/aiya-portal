import { Hono } from "hono";
import { Env } from "~/types/hono.types";
import * as Handler from "~/handlers/conversation.handler";
import { channelDurableMiddleware } from "~/middlewares/channel-durable.middleware";

const conversationRoutes = new Hono<Env>();

conversationRoutes.get(
  "/channels/:providerId/conversations",
  channelDurableMiddleware,
  Handler.getConversations
);

export { conversationRoutes };
