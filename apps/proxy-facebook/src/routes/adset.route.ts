import { Hono } from "hono";
import { Env } from "~/@types/hono.types";
import * as Handler from "../handlers/adset.handler";

import { adMiddleware } from "~/middlewares/ads.middleware";

const adsetsRoutes = new Hono<Env>();

adsetsRoutes.get("/", adMiddleware, Handler.getAdsets);
// adsetsRoutes.get("/:adsetId", adMiddleware, Handler.getCampaignInsight);

export { adsetsRoutes };