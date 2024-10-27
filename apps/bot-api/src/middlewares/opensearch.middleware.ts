import { createFactory } from "hono/factory";
import { Env } from "~/types/hono.types";
import { OpenSearch } from "@repo/shared";

const factory = createFactory<Env>();

let openSearch: OpenSearch;

export const opensearchMiddleware = factory.createMiddleware(
  async (c, next) => {
    if (!openSearch) {
      openSearch = new OpenSearch({
        endpoint: c.env.OPENSEARCH_ENDPOINT,
        username: c.env.OPENSEARCH_USERNAME,
        password: c.env.OPENSEARCH_PASSWORD,
      });
    }

    c.set("opensearch", openSearch);
    await next();
  }
);
