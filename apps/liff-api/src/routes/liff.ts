import { Hono } from "hono";
import * as LiffHandler from "../handlers/liff.handler";
import { Env } from "~/types/hono.types";

const liffRoutes = new Hono<Env>();

liffRoutes.get("/:liffId/:slug", ...LiffHandler.getByLiffIdAndSlug);
liffRoutes.post("/encrypt-channel-secret", ...LiffHandler.encryptChannelSecret);

export { liffRoutes };
