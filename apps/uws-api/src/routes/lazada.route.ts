import { Hono } from "hono";
import { Env } from "~/types/hono.types";
import * as LazadaHandler from "../handlers/lazada.handler";

const lazadaRoutes = new Hono<Env>();

lazadaRoutes.post("/webhook/:botId", ...LazadaHandler.webhook);

export { lazadaRoutes };
