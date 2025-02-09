import { Hono } from "hono";
import { Env } from "~/types/hono.types";
import * as TiktokHandler from "../handlers/tiktok.handler";

const tiktokRoutes = new Hono<Env>();

tiktokRoutes.post("/webhook/:botId", ...TiktokHandler.webhook);

export { tiktokRoutes };
