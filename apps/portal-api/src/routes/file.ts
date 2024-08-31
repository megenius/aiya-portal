import { Hono } from "hono";
import { getDirectusClient } from "../config/directus";
import { Env } from "~/types/hono.types";
import { deleteFile, readAssetRaw, uploadFiles } from "@directus/sdk";
import { stream } from "hono/streaming";
import { cache } from 'hono/cache'

const fileRoutes = new Hono<Env>()
  .get(
    "/:id",
    cache({
      cacheName: "file",
      cacheControl: "max-age=3600",
    }),
    async (c) => {
      const fileId = c.req.param("id") as string;
      const key = (c.req.query("key") as string) || "";
      const client = getDirectusClient();
      await client.setToken(c.env.DIRECTUS_SERVICE_TOKEN);

      const anotherReadableStream = await client.request(
        readAssetRaw(fileId, { key })
      );
      return stream(c, async (stream) => {
        await stream.pipe(anotherReadableStream);
      });
    }
  )
  .post("/upload", async (c) => {
    const body = await c.req.parseBody();
    const formData = new FormData();
    formData.append("file", body.file);
    const client = getDirectusClient();
    await client.setToken(c.env.DIRECTUS_SERVICE_TOKEN);
    const result = await client.request(uploadFiles(formData));
    return c.json(result);
  })
  .delete("/:id", async (c) => {
    const fileId = c.req.param("id") as string;
    const key = (c.req.query("key") as string) || "";
    const client = getDirectusClient();
    await client.setToken(c.env.DIRECTUS_SERVICE_TOKEN);
    await client.request(deleteFile(fileId));
    return c.json({});
  });

export { fileRoutes };
