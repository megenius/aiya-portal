import { Hono } from "hono";
import { Env } from "~/types/hono.types";
import { directusMiddleware } from "~/middlewares/directus.middleware";
import * as referralHandlers from "../handlers/referral.handlers";

const referralRoutes = new Hono<Env>()
  .post("/", directusMiddleware, ...referralHandlers.createReferral)
  .post("/:referralCode/convert", directusMiddleware, ...referralHandlers.convertReferral);

export { referralRoutes };