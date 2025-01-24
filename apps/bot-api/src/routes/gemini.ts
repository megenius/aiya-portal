import { Hono } from "hono";
import * as GeminiHandler from "../handlers/gemini.handler";
import { Env } from "~/types/hono.types";

const geminiRoutes = new Hono<Env>();

geminiRoutes.post("/generate", ...GeminiHandler.generateHandler);

export default geminiRoutes;
