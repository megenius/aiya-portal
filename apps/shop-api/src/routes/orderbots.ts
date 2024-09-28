import { Hono } from "hono";
import * as OrderbotsHandler from "../handlers/orderbots.handler";
import { Env } from "~/types/hono.types";

const orderRoutes = new Hono<Env>();

orderRoutes.get("/:id", ...OrderbotsHandler.getOrderbotHandler);
orderRoutes.patch("/:id", ...OrderbotsHandler.updateOrderbotHandler);
orderRoutes.delete("/:id", ...OrderbotsHandler.deleteOrderHandler);

orderRoutes.get("/:id/channels", ...OrderbotsHandler.getOrderBotChannelsHandler);
orderRoutes.delete("/:id/channels", ...OrderbotsHandler.deleteOrderBotChannelHandler);

export { orderRoutes };
