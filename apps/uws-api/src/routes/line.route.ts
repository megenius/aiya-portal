import { Hono } from "hono";
import * as LineHandler from "../handlers/line.handler";
import { Env } from "~/types/hono.types";

const lineRoutes = new Hono<Env>();

lineRoutes.post("/webhook/:botId", ...LineHandler.webhook);

export { lineRoutes };
