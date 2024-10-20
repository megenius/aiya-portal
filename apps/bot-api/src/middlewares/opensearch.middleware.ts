import { createFactory } from "hono/factory";
import { Env } from "~/types/hono.types";
import { OpenSearch } from "@repo/shared";

const factory = createFactory<Env>();

let initialized = false;

export const opensearchMiddleware = factory.createMiddleware(
  async (c, next) => {
    if (initialized) {
      await next();
      return;
    }
    
    const openSearch = new OpenSearch({
      endpoint: c.env.OPENSEARCH_ENDPOINT,
      username: c.env.OPENSEARCH_USERNAME,
      password: c.env.OPENSEARCH_PASSWORD,
    });

    c.set("opensearch", openSearch);

    initialized = true;
    await next();
  }
);
