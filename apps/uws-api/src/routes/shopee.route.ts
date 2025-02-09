import { Hono } from "hono";
import { Env } from "~/types/hono.types";
import * as ShopeeHandler from "../handlers/shopee.handler";

const shopeeRoutes = new Hono<Env>();

shopeeRoutes.post("/webhook/:botId", ...ShopeeHandler.webhook);

export { shopeeRoutes };
