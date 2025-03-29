import * as sdk from "@directus/sdk";
import { stream } from "hono/streaming";
import { cache } from "hono/cache";
import { Env } from "~/types/hono.types";
import { randomHexString } from "@repo/shared/utils";
import { logger as honoLogger } from "hono/logger";
import { directusMiddleware } from "~/middleware/directus.middleware";
import { createFactory } from "hono/factory";
import { DirectusError } from "@repo/shared/exceptions/directus";

const factory = createFactory<Env>();

export const getFile = factory.createHandlers(
  honoLogger(),
  directusMiddleware,
  // cache({
  //   cacheName: "file",
  //   cacheControl: "max-age=3600",
  // }),
  async (c) => {
    const fileId = c.req.param("id") as string;
    const key = (c.req.query("key") as string) || "";
    const directus = c.get("directAdmin");
    console.log("Reading file from directus:", fileId, key);
    const anotherReadableStream = await directus.request(
      sdk.readAssetRaw(fileId, { key })
    );

    return stream(c, async (stream) => {
      await stream.pipe(anotherReadableStream);
    });
  }
);

export const downloadFile = factory.createHandlers(
  honoLogger(),
  directusMiddleware,
  cache({
    cacheName: "file",
    cacheControl: "max-age=3600",
  }),
  async (c) => {
    const fileId = c.req.param("id") as string;
    const key = (c.req.query("key") as string) || "";
    const directus = c.get("directAdmin");

    const anotherReadableStream = await directus.request(
      sdk.readAssetRaw(fileId, { key })
    );
    return stream(c, async (stream) => {
      await stream.pipe(anotherReadableStream);
    });
  }
);

export const uploadFile = factory.createHandlers(
  honoLogger(),
  directusMiddleware,
  async (c) => {
    const formData = await c.req.formData();
    console.log("Uploading file to directus:", formData);
    if (!formData.has("file")) {
      return c.json({ error: "No file uploaded" }, 400);
    }

    const directus = c.get("directAdmin");
    const result = await directus.request(sdk.uploadFiles(formData));
    return c.json(result);
  }
);

export const uploadBotMessage = factory.createHandlers(
  honoLogger(),
  directusMiddleware,
  async (c) => {
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
  }
);

export const uploadAutomix = factory.createHandlers(
  honoLogger(),
  directusMiddleware,
  async (c) => {
    const { pictureUrl, path } = await c.req.json();
    console.log("Uploading file to R2:", pictureUrl);

    // stream image to R2
    const image = await fetch(pictureUrl);
    const arrayBuffer = await image.arrayBuffer();
    const key = `${path}/${randomHexString(16)}.jpg`;

    console.log("Uploading file to R2:", key);

    const result = await c.env.BOT_MESSAGE_BUCKET.put(key, arrayBuffer, {
      httpMetadata: {
        contentType: image.headers.get("content-type") || "image/jpeg",
      },
    });

    const url = `${c.env.BOT_MESSAGE_BUCKET_CDN}/${key}`;
    const endpoint =
      "https://km8erw3hik.execute-api.ap-southeast-1.amazonaws.com/prod/image-analysis";

    console.log("Analyzing image:", url);

    const data = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImxhbWJkYSIsImlzcyI6ImxhbWJkYSIsImV4cCI6MTczMzQ0NzI0MH0.GoNGA9oTRZVATth8UjnkPariVCj8x8KlV7Q011v6_Yc`,
      },
      body: JSON.stringify({ image_url: url }),
    })
      .then((response) => response.json())
      .catch((error) => {
        console.error("Error analyzing image:", error);
        return {};
      });

    return c.json(data);
  }
);

export const deleteFile = factory.createHandlers(
  honoLogger(),
  directusMiddleware,
  async (c) => {
    const fileId = c.req.param("id") as string;
    const key = (c.req.query("key") as string) || "";
    const directus = c.get("directAdmin");
    await directus.request(sdk.deleteFile(fileId));
    return c.json({});
  }
);

export const listFolders = factory.createHandlers(
  honoLogger(),
  directusMiddleware,
  async (c) => {
    const directus = c.get("directAdmin");
    try {
      const folders = await directus.request(sdk.readFolders());
      return c.json(folders);
    } catch (error) {
      console.error("Error listing folders:", error);
      throw DirectusError.fromDirectusResponse(error);
    }
  }
);
