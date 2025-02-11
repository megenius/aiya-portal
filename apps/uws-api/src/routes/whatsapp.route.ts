import { Hono } from "hono";
import { Env } from "~/types/hono.types";
import * as WhatsappHandler from "../handlers/whatsapp.handler"; // Import the handler

const whatsappRoutes = new Hono<Env>();

whatsappRoutes.post("/webhook/:botId", ...WhatsappHandler.webhook);

export { whatsappRoutes };
