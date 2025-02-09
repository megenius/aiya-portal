import { Hono } from "hono";
import { Env } from "~/types/hono.types";
import * as Handler from "~/handlers/conversation.handler";

const conversationRoutes = new Hono<Env>();

conversationRoutes.get("/channels/:providerId/conversations", Handler.getConversations);

export { conversationRoutes };
