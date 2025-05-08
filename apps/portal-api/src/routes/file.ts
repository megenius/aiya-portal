import { Hono } from "hono";
import { Env } from "~/types/hono.types";
import * as Handler from "../handlers/file.handler";

const fileRoutes = new Hono<Env>() // list folders
  .get("/folders", ...Handler.listFolders)
  .get("/:id", ...Handler.getFile)
  .get("/:id/:file_download", ...Handler.downloadFile)
  .post("/upload", ...Handler.uploadFile)
  .post("/upload-bot-message", ...Handler.uploadBotMessage)
  .post("/upload-automix", ...Handler.uploadAutomix)
  .delete("/:id", ...Handler.deleteFile);

export { fileRoutes };
