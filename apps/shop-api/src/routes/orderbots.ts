import { Hono } from "hono";
import * as OrderbotsHandler from "../handlers/orderbots.handler";
import { Env } from "~/types/hono.types";

const orderRoutes = new Hono<Env>();

orderRoutes.get("/:id", ...OrderbotsHandler.getProductHandler);
orderRoutes.patch("/:id", ...OrderbotsHandler.updateProductHandler);
// orderRoutes.delete("/:id", ...OrderbotsHandler.deleteProductHandler);

export { orderRoutes };
