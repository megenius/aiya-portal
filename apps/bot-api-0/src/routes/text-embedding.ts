// Example usage
import { Hono } from "hono";
import { Metadata, TextEmbedding } from "@repo/shared/utils/text-embeding";
import { Env } from "~/@types/hono.types";
import { cache } from "hono/cache";

interface ProductMetadata extends Metadata {
  category: string;
  price: number;
}

const textEmbeddingRoutes = new Hono<Env>()
  .use("*", async (c, next) => {
    if (!c.get("textEmbedding")) {
      const textEmbedding = new TextEmbedding<ProductMetadata>(
        {
          endpoint: c.env.OPENSEARCH_ENDPOINT,
          username: c.env.OPENSEARCH_USERNAME,
          password: c.env.OPENSEARCH_PASSWORD,
        },
        "text_embedding"
      );
      c.set("textEmbedding", textEmbedding);
    }
    await next();
  })
  .post("/create-index", async (c) => {
    const textEmbedding = c.get("textEmbedding") as TextEmbedding<Metadata>;
    await textEmbedding.createIndex();
    return c.json({
      success: true,
      message: "Index created or already exists",
    });
  })
  .post("/add", async (c) => {
    const textEmbedding = c.get(
      "textEmbedding"
    ) as TextEmbedding<ProductMetadata>;
    const { text, metadata } = await c.req.json<{
      text: string;
      metadata?: ProductMetadata;
    }>();
    const id = await textEmbedding.addDocument(text, metadata);
    return c.json({ id });
  })
  .get(
    "/search",
    cache({
      cacheName: "text-embedding-search",
      cacheControl: "max-age=15",
    }),
    async (c) => {
      const textEmbedding = c.get(
        "textEmbedding"
      ) as TextEmbedding<ProductMetadata>;

      // Get query parameters
      const query = c.req.query("q");
      const topK = parseInt(c.req.query("topK") || "5", 10);
      const filtersParam = c.req.query("filters");

      if (!query) {
        return c.json({ error: "Query parameter 'q' is required" }, 400);
      }

      // Parse filters
      const filters: Record<string, unknown> = {};
      if (filtersParam) {
        const filterParts = filtersParam.split(" AND ");
        filterParts.forEach((part) => {
          const [key, value] = part.split(":");
          if (key && value) {
            filters[key.trim()] = value.trim();
          }
        });
      }

      try {
        const results = await textEmbedding.search(query, { topK, filters });
        return c.json(results);
      } catch (error) {
        console.error("Search error:", error);
        return c.json({ error: "An error occurred during the search" }, 500);
      }
    }
  )
  .post("/search", async (c) => {
    const textEmbedding = c.get(
      "textEmbedding"
    ) as TextEmbedding<ProductMetadata>;
    const { query, topK, filters } = await c.req.json<{
      query: string;
      topK?: number;
      filters?: Record<string, unknown>;
    }>();
    const results = await textEmbedding.search(query, { topK, filters });
    return c.json(results);
  })
  .delete("/delete/:id", async (c) => {
    const textEmbedding = c.get(
      "textEmbedding"
    ) as TextEmbedding<ProductMetadata>;
    const id = c.req.param("id");
    await textEmbedding.deleteDocument(id);
    return c.json({ success: true });
  })
  .put("/update/:id", async (c) => {
    const textEmbedding = c.get(
      "textEmbedding"
    ) as TextEmbedding<ProductMetadata>;
    const id = c.req.param("id");
    const { text, metadata } = await c.req.json<{
      text: string;
      metadata?: Partial<ProductMetadata>;
    }>();
    await textEmbedding.updateDocument(id, text, metadata);
    return c.json({ success: true });
  });

export { textEmbeddingRoutes };
