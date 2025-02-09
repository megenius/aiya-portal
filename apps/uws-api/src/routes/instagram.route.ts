import { Hono } from "hono";
import { Env } from "~/types/hono.types";
import * as InstagramHandler from "../handlers/instagram.handler"; // Import the handler

const instagramRoutes = new Hono<Env>();

instagramRoutes.post("/webhook/:botId", ...InstagramHandler.webhook);

export { instagramRoutes };
