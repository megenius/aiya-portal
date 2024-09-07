import { OpenSearch } from "@repo/shared/aws/opensearch";
import { Hono } from "hono";
import { Env } from "~/@types/hono.types";

// Define types for OpenSearch operations
interface SearchRequest {
  index: string;
  query: object;
}

interface SearchResponse {
  hits: {
    total: { value: number };
    hits: Array<{ _source: any }>;
  };
}

const openSearchRoutes = new Hono<Env>();

openSearchRoutes.post("/search", async (c) => {
  const openSearch = new OpenSearch({
    endpoint: c.env.OPENSEARCH_ENDPOINT,
    username: c.env.OPENSEARCH_USERNAME,
    password: c.env.OPENSEARCH_PASSWORD,
  });

  const results = await openSearch.search({
    index: "bots_sentences_embeddings",
    query: {
      match_all: {},
    },
  });

  return c.json(results);
});

export { openSearchRoutes };
