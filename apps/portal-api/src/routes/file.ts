import { Hono } from "hono";
import { getDirectusClient } from "../config/directus";
import { deleteFile, readAssetRaw, uploadFiles } from "@directus/sdk";
import { stream } from "hono/streaming";
import { cache } from "hono/cache";
import { Env } from "~/types/hono.types";
import { randomHexString } from "@repo/shared/utils";
import { cors } from 'hono/cors'

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
  .get(
    "/:id/:file_download",
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
  .post("/upload-bot-message", async (c) => {
    try {
      const body = await c.req.parseBody();

      if (!body.file || !(body.file instanceof File)) {
        return c.json({ error: "No file uploaded" }, 400);
      }
      const path = body.path;
      const file = body.file;
      const arrayBuffer = await file.arrayBuffer();

      // get file extension
      const fileExt = file.name.split(".").pop();
      const filename = `${randomHexString(16)}.${fileExt}`;

      const key = `${path}/${filename}`;
      // Upload to R2
      const result = await c.env.BOT_MESSAGE_BUCKET.put(key, arrayBuffer, {
        httpMetadata: {
          contentType: file.type,
        },
      });

      console.log("Uploaded file to R2:", result);

      return c.json({
        success: true,
        file: result,
        filename_download: file.name,
        url: `${c.env.BOT_MESSAGE_BUCKET_CDN}/${key}`,
      });
    } catch (error) {
      console.error("Error uploading file:", error);
      return c.json({ error: "Failed to upload file" }, 500);
    }
  })
  .post("/upload-automix", async (c) => {
    const { pictureUrl, path } = await c.req.json();

    // stream image to R2
    const image = await fetch(pictureUrl);
    const arrayBuffer = await image.arrayBuffer();
    const key = `${path}/${randomHexString(16)}.jpg`;

    const result = await c.env.BOT_MESSAGE_BUCKET.put(key, arrayBuffer, {
      httpMetadata: {
        contentType: image.headers.get("content-type") || "image/jpeg",
      },
    });

    const url = `${c.env.BOT_MESSAGE_BUCKET_CDN}/${key}`;
    const endpoint =
      "https://km8erw3hik.execute-api.ap-southeast-1.amazonaws.com/prod/image-analysis";

    const data = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImxhbWJkYSIsImlzcyI6ImxhbWJkYSIsImV4cCI6MTczMDQ4MTQ5MX0.GBznnaVIfW-fEvGcYUMUEUFLJ6MlmafXMl8LJV1uDVc`,
      },
      body: JSON.stringify({ image_url: url }),
    }).then((response) => response.json());


    return c.json(data);
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
