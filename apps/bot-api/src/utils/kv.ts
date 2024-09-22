import { Context } from "hono";
import { Env } from "~/types/hono.types";

export const hasItemUpdated = async (
  c: Context<Env>,
  cachedData: any,
  getKeyName: (c: Context<Env>) => string
) => {
  const cacheKey = getKeyName(c);
  console.log("hasItemUpdated.cacheKey:", cacheKey);

  const currentItem = await c.env.CACHING.get<any>(cacheKey, {
    type: "json",
  });

  // console.log("hasItemUpdated.currentItem:", currentItem);
  // console.log("hasItemUpdated.cachedData:", cachedData);
  
  if (!currentItem) {
    return true;
  }

  return currentItem.date_updated !== cachedData.date_updated;
};
