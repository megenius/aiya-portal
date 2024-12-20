import { Hono } from "hono";
import * as Handler from "../handlers/setup.handler";
import { Env } from "~/types/hono.types";
import { directusMiddleware } from "~/middlewares/directus.middleware";

const setupRoutes = new Hono<Env>();

setupRoutes.post("/", directusMiddleware, ...Handler.setupCollection);

export { setupRoutes };
