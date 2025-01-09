import { TextEmbedding } from "@repo/shared/utils";
import { createFactory } from "hono/factory";
import { Env } from "~/types/hono.types";

const factory = createFactory<Env>();

export const textEmbeddingMiddleware = factory.createMiddleware(
  async (c, next) => {
    if (!c.get("textEmbedding")) {
      const textEmbedding = new TextEmbedding(
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
  }
);
