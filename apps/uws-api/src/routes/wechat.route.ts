import { Hono } from "hono";
import { Env } from "~/types/hono.types";
import * as WechatHandler from "../handlers/wechat.handler";

const wechatRoutes = new Hono<Env>();

wechatRoutes.post("/webhook/:botId", ...WechatHandler.webhook);

export { wechatRoutes };
