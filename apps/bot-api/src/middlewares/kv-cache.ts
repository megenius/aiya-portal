import { createMiddleware } from "hono/factory";
import { Context } from "hono";
import { Env } from "~/@types/hono.types";
import * as _ from "lodash";

type RevalidateFunction = (c: Context<Env>, cachedData: any) => Promise<boolean>;

interface CachingOptions {
  ttl?: number;
  revalidate?: RevalidateFunction;
}

export const cachingMiddleware = (options: CachingOptions) => {
  return createMiddleware<Env>(async (c, next) => {
    const cacheKey = new URL(c.req.url).pathname;
    console.log('cacheKey:', cacheKey);

    const kv = c.env.CACHING;
    const cachedResponse = await kv.get(cacheKey, "text");
    
    if (cachedResponse) {
      let shouldRevalidate = false;
      if (options.revalidate) {
        try {
          const cachedData = JSON.parse(cachedResponse);
          shouldRevalidate = await options.revalidate(c, cachedData);
        } catch (error) {
          console.error('Error parsing cached data:', error);
          shouldRevalidate = true;
        }
      }

      console.log('shouldRevalidate:', shouldRevalidate);
      

      if (!shouldRevalidate) {
        return new Response(cachedResponse, {
          headers: { "Content-Type": "application/json", "X-Cache": "HIT" },
        });
      }
      // If shouldRevalidate is true, we'll fall through to refresh the cache
    }

    await next();

    if (c.res.ok) {
      const response = await c.res.clone().text();
      await kv.put(cacheKey, response, { expirationTtl: options.ttl || 3600 });
      c.res.headers.set("X-Cache", "MISS");
    }
  });
};