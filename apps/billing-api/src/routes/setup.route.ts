import { Hono } from "hono";
import * as Handler from "../handlers/setup.handler";
import { Env } from "~/types/hono.types";
import { directusMiddleware } from "~/middlewares/directus.middleware";

const setupRoutes = new Hono<Env>()
.post("/", directusMiddleware, ...Handler.setupCollection)
.get("/collections/:collection", directusMiddleware, ...Handler.getCollection)
.get("/fields/:collection", directusMiddleware, ...Handler.getFields)
.get("/relations/:collection", directusMiddleware, ...Handler.getRelations);

export { setupRoutes };
