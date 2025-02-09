import { Hono } from "hono";
import { Env } from "~/types/hono.types";
import * as FacebookHandler from "../handlers/facebook.handler"; // Import the handler

const facebookRoutes = new Hono<Env>();

facebookRoutes.post("/webhook/:botId", ...FacebookHandler.webhook);

export { facebookRoutes };
