import { Hono } from "hono";
import * as QueqHandler from "../handlers/queq.handler";
import { Env } from "~/types/hono.types";

const queqRoutes = new Hono<Env>();

queqRoutes.get("/ads", ...QueqHandler.getAds);
queqRoutes.get("/ads/:id", ...QueqHandler.getAd);

export { queqRoutes };
