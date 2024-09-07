// Example usage
import { Hono } from "hono";
import { Metadata, TextEmbedding } from "../services/text-embeding";
import { Env } from "~/@types/hono.types";

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
  .post('/create-index', async (c) => {
    const textEmbedding = c.get('textEmbedding') as TextEmbedding<Metadata>;
    await textEmbedding.createIndex();
    return c.json({ success: true, message: 'Index created or already exists' });
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
