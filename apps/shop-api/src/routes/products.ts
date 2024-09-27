import { Hono } from "hono";
import * as ProductsHandler from "../handlers/products.handler";
import { Env } from "~/types/hono.types";

const productsRoutes = new Hono<Env>();

productsRoutes.get("/:id", ...ProductsHandler.getProductHandler);
productsRoutes.patch("/:id", ...ProductsHandler.updateProductHandler);

export { productsRoutes };
