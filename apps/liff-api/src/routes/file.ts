import { Hono } from "hono";
import { Env } from "~/types/hono.types";
import * as Handler from "../handlers/file.handler";

const fileRoutes = new Hono<Env>()
  .get("/:id", ...Handler.getFile)
  .get("/:id/:file_download", ...Handler.downloadFile)
  .post("/upload", ...Handler.uploadFile)
  .delete("/:id", ...Handler.deleteFile);

export { fileRoutes };
