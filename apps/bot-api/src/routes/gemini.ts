import { Hono } from "hono";
import * as GeminiHandler from "../handlers/gemini.handler";
import { Env } from "~/types/hono.types";
import { gcloudMiddleware } from "~/middlewares/gcloud.middleware";

const geminiRoutes = new Hono<Env>();

geminiRoutes.post(
  "/generate",
  gcloudMiddleware,
  ...GeminiHandler.generateHandler
);

export default geminiRoutes;
