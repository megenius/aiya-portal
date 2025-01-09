import { Hono } from "hono";
import { Env } from "~/types/hono.types";
import * as Handler from "../handlers/public.handler";

const publicRoutes = new Hono<Env>().get("/helpdesk", ...Handler.getHelpDesk);

export { publicRoutes };
