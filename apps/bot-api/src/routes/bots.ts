import { Hono } from "hono";
import * as BotsHandler from "../handlers/bots.handler";
import insightsRoutes from "./insights";

import { Schema } from "~/types/directus";
import { Env } from "~/types/hono.types";
import * as WebhookHandler from "../handlers/webhook.handler";

const botsRoutes = new Hono<Env>();
function isValidCollection(collection: any): collection is keyof Schema {
    const validCollections: Array<keyof Schema> = []; // Add valid collection names here
    return true;
}
botsRoutes.get("/test", ...BotsHandler.getTest)

botsRoutes.get("/:id", ...BotsHandler.getBotHandler);
botsRoutes.patch("/:id", ...BotsHandler.updateBotHandler);
botsRoutes.post("/:id/logs", ...BotsHandler.insertLogsHandler);

botsRoutes.get("/:id/channels", ...BotsHandler.getBotChannelsHandler);
// botsRoutes.delete("/:id/channels", BotsHandler.deleteBotChannel);

botsRoutes.get("/:id/knowledges", ...BotsHandler.searchBotKnowledgesHandler);
botsRoutes.post("/:id/knowledges", ...BotsHandler.createBotKnowledgeHandler);

// search
botsRoutes.get("/:id/search", ...BotsHandler.searchBotHandler);

//get channels
botsRoutes.get("/:id/channels", ...BotsHandler.getBotChannelsHandler);
//delete channel
botsRoutes.delete("/:id/channels", ...BotsHandler.deleteBotChannelHandler);

// Insert channels_bots
botsRoutes.post("/channelsbots", ...BotsHandler.insertChannelsBotsHandler);

botsRoutes.route("/:id/insights", insightsRoutes);


//get muted users
botsRoutes.get("/:id/muted-users", ...BotsHandler.getMutedUsersHandler);
botsRoutes.post("/:id/muted-users", ...BotsHandler.muteUserHandler);
botsRoutes.delete("/:id/muted-users", ...BotsHandler.unmuteUserHandler);

botsRoutes.get("/:id/orders", ...BotsHandler.ordersHandler);
botsRoutes.get("/:id/slips", ...BotsHandler.slipsHandler);
botsRoutes.get("/:id/capi-logs", ...BotsHandler.capiLogsHandler);
botsRoutes.get("/:id/templates", ...BotsHandler.orderTemplatesHandler);

//gpt

botsRoutes.post("/:id/chat", ...BotsHandler.chatsHandler);

// webhook
botsRoutes.post("/webhook", ...WebhookHandler.webhookHandler);

// Insert bot
botsRoutes.post("/", ...BotsHandler.insertBotHandler);

botsRoutes.post("/admin/service", ...BotsHandler.serviceHandler);


// inquiries
botsRoutes.get("/:id/inquiries", ...BotsHandler.inquiriesHandler);
botsRoutes.post("/:id/inquiries", ...BotsHandler.inquiriesHandler);

// get bot model
botsRoutes.get("/model", ...BotsHandler.getBotModelHandler);

export { botsRoutes };
