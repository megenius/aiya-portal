import { Hono } from "hono";
import * as BotsHandler from "../handlers/bots.handler";
import { Env } from "~/types/hono.types";

const botsRoutes = new Hono<Env>();

botsRoutes.get("/:id", ...BotsHandler.getBotHandler);
botsRoutes.patch("/:id", ...BotsHandler.updateBotHandler);
botsRoutes.post("/:id/logs", ...BotsHandler.logsHandler);

botsRoutes.get("/:id/channels", ...BotsHandler.getBotChannelsHandler);
// botsRoutes.delete("/:id/channels", BotsHandler.deleteBotChannel);

botsRoutes.get("/:id/knowledges", ...BotsHandler.searchBotKnowledgesHandler);
botsRoutes.post("/:id/knowledges", ...BotsHandler.createBotKnowledgeHandler);
botsRoutes.get("/:id/search", ...BotsHandler.searchBotHandler);

//get channels
botsRoutes.get("/:id/channels", ...BotsHandler.getBotChannelsHandler);
//delete channel
botsRoutes.delete("/:id/channels", ...BotsHandler.deleteBotChannelHandler);

botsRoutes.post("/webhook", ...BotsHandler.webhookHandler);


export { botsRoutes };
