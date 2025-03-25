import * as sdk from "@directus/sdk";
import { stream } from "hono/streaming";
import { cache } from "hono/cache";
import { Env } from "~/types/hono.types";
import { randomHexString } from "@repo/shared/utils";
import { logger as honoLogger } from "hono/logger";
import { directusMiddleware } from "~/middleware/directus.middleware";
import { createFactory } from "hono/factory";

const factory = createFactory<Env>();

/**
 * Utility function to get a Directus asset URL
 * @param env Environment variables containing DIRECTUS_URL
 * @param fileId The file ID in Directus
 * @param key Optional access key
 * @param options Optional transformation parameters
 * @returns The complete URL to the Directus asset
 */
function getDirectusAssetUrl(
  env: Env["Bindings"],
  fileId: string,
  key?: string,
  options?: {
    width?: number;
    height?: number;
    fit?: "cover" | "contain" | "inside" | "outside";
    quality?: number;
    format?: "jpg" | "png" | "webp" | "tiff";
    transforms?: Record<string, string | number>;
  }
) {
  if (!fileId) return null;

  const baseUrl = env.DIRECTUS_URL.endsWith("/")
    ? env.DIRECTUS_URL.slice(0, -1)
    : env.DIRECTUS_URL;

  let url = `${baseUrl}/assets/${fileId}`;

  // Add query parameters
  const params = new URLSearchParams();

  // Add key if provided
  if (key) {
    params.set("key", key);
  }

  // Add transformation parameters
  if (options) {
    if (options.width) params.set("width", options.width.toString());
    if (options.height) params.set("height", options.height.toString());
    if (options.fit) params.set("fit", options.fit);
    if (options.quality) params.set("quality", options.quality.toString());
    if (options.format) params.set("format", options.format);

    // Add any other custom transforms
    if (options.transforms) {
      Object.entries(options.transforms).forEach(([key, value]) => {
        params.set(key, value.toString());
      });
    }
  }

  // Add the query parameters to the URL if there are any
  const queryString = params.toString();
  if (queryString) {
    url += `?${queryString}`;
  }

  return url;
}

/**
 * Creates a cache configuration with appropriate settings for file endpoints
 * @param name The cache name to use
 * @param duration The max-age duration in seconds (default: 1 hour)
 * @param edgeDuration The s-maxage duration in seconds (default: 1 day)
 * @returns A cache configuration object for Hono
 */
function createFileCache(name: string, duration = 3600, edgeDuration = 86400) {
  return cache({
    cacheName: (c) => {
      // Get the request URL and use it as part of the cache key
      const url = new URL(c.req.url);

      // Extract all query parameters - this ensures all transformations are captured
      const queryParams = Object.fromEntries(url.searchParams.entries());

      // Get the file ID from the route parameter
      const fileId = c.req.param("id") || "";

      // Create a stable representation of all query parameters
      const queryString = new URLSearchParams(
        Object.entries(queryParams).sort(([keyA], [keyB]) =>
          keyA.localeCompare(keyB)
        )
      ).toString();

      // Combine file ID with sorted query parameters to create a deterministic cache key
      const cacheKey = `${fileId}-${queryString}`;

      console.log(`Generated cache key for ${name}: ${cacheKey}`);
      return cacheKey;
    },
    cacheControl: `public, max-age=${duration}, s-maxage=${edgeDuration}`,
    vary: ["Accept-Encoding", "Accept"],
  });
}

// Example endpoint to get a file URL (useful for the frontend)
export const getFileUrl = factory.createHandlers(
  honoLogger(),
  directusMiddleware,
  // Use shorter cache time for URLs since they're smaller and less expensive to generate
  createFileCache("file-urls222", 1800, 43200), // 30 min browser, 12 hours edge
  async (c) => {
    try {
      const fileId = c.req.param("id") as string;
      const key = (c.req.query("key") as string) || "";

      // Get optional transformation parameters
      const width = c.req.query("width")
        ? parseInt(c.req.query("width") as string)
        : undefined;
      const height = c.req.query("height")
        ? parseInt(c.req.query("height") as string)
        : undefined;
      const fit = c.req.query("fit") as
        | "cover"
        | "contain"
        | "inside"
        | "outside"
        | undefined;
      const quality = c.req.query("quality")
        ? parseInt(c.req.query("quality") as string)
        : undefined;
      const format = c.req.query("format") as
        | "jpg"
        | "png"
        | "webp"
        | "tiff"
        | undefined;

      // Get file URL
      const url = getDirectusAssetUrl(c.env, fileId, key, {
        width,
        height,
        fit,
        quality,
        format,
      });

      if (!url) {
        return c.json({ error: "Invalid file ID" }, 400);
      }

      return c.json({ url });
    } catch (error) {
      console.error("Error generating file URL:", error);
      return c.json({ error: "Failed to generate file URL" }, 500);
    }
  }
);

// Enhanced version of getFile that also demonstrates how URLs are constructed
export const getFile = factory.createHandlers(
  honoLogger(),
  directusMiddleware,
  // Use longer cache times for actual file content
  createFileCache("file-content", 3600, 604800), // 1 hour browser, 1 week edge
  async (c) => {
    try {
      const fileId = c.req.param("id") as string;
      const key = (c.req.query("key") as string) || "";
      const directus = c.get("directAdmin");

      console.log("Reading file from directus:", fileId, key);

      // Add ETag support for conditional requests
      const etagValue = `"file-${fileId}${key ? `-${key}` : ""}"`;
      c.header("ETag", etagValue);

      // Check if client has a valid cached copy
      const ifNoneMatch = c.req.header("If-None-Match");
      if (ifNoneMatch === etagValue) {
        return new Response(null, { status: 304 }); // Not Modified
      }

      // First, try using the SDK method
      try {
        const assetStream = await directus.request(
          sdk.readAssetRaw(fileId, { key })
        );

        return stream(c, async (stream) => {
          await stream.pipe(assetStream);
        });
      } catch (error) {
        console.error("Error using SDK to fetch file:", error);

        // Fallback to direct URL access
        const assetUrl = getDirectusAssetUrl(c.env, fileId, key);
        console.log("Falling back to direct URL:", assetUrl);

        const response = await fetch(assetUrl);
        if (!response.ok) {
          throw new Error(`Failed to fetch file: ${response.status}`);
        }

        return response;
      }
    } catch (error) {
      console.error("Error retrieving file:", error);
      return c.json({ error: "Failed to retrieve file" }, 500);
    }
  }
);

// Apply improved caching to downloadFile as well
export const downloadFile = factory.createHandlers(
  honoLogger(),
  directusMiddleware,
  // Use medium cache times for downloads
  createFileCache("file-downloads", 1800, 86400), // 30 min browser, 1 day edge
  async (c) => {
    try {
      const fileId = c.req.param("id") as string;
      const key = (c.req.query("key") as string) || "";
      const directus = c.get("directAdmin");

      // Add ETag support for conditional requests
      const etagValue = `"file-download-${fileId}${key ? `-${key}` : ""}"`;
      c.header("ETag", etagValue);

      // Check if client has a valid cached copy
      const ifNoneMatch = c.req.header("If-None-Match");
      if (ifNoneMatch === etagValue) {
        return new Response(null, { status: 304 }); // Not Modified
      }

      const anotherReadableStream = await directus.request(
        sdk.readAssetRaw(fileId, { key })
      );

      // Try to get filename from metadata
      let filename = "file";
      try {
        const fileInfo = await directus.request(sdk.readFile(fileId));
        if (fileInfo?.filename_download) {
          filename = fileInfo.filename_download;
        }
      } catch (err) {
        console.warn("Unable to fetch filename:", err);
      }

      return stream(c, async (stream) => {
        // Set download headers
        stream.headers.set(
          "Content-Disposition",
          `attachment; filename="${filename}"`
        );
        await stream.pipe(anotherReadableStream);
      });
    } catch (error) {
      console.error("Error downloading file:", error);
      return c.json({ error: "Failed to download file" }, 500);
    }
  }
);

export const uploadFile = factory.createHandlers(
  honoLogger(),
  directusMiddleware,
  async (c) => {
    const body = await c.req.parseBody();
    const formData = new FormData();
    formData.append("file", body.file);
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
