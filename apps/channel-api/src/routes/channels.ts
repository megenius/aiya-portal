import { Hono } from "hono";
import * as Handler from "../handlers/providers.handler";
import { Env } from "~/types/hono.types";
import { followersRoutes } from "./followers";

const channelsRoutes = new Hono<Env>();
channelsRoutes.get("/:providerId", ...Handler.getProvider);
channelsRoutes.patch("/:providerId", ...Handler.updateProvider);

channelsRoutes.route("/:providerId/followers", followersRoutes);

channelsRoutes.post("/line/webhook-endpoint", ...Handler.lineWebhookEndpoint);

export { channelsRoutes };