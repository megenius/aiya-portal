import { Context, Hono } from "hono";
import { Env } from "~/@types/hono.types";

// Caching middleware factory with revalidation
const createCachingMiddleware = (options: {
  ttl?: number;
  revalidate?: (c: Context<Env>, cachedData: any) => Promise<boolean>;
}) => {
  return async (c: Context<Env>, next: Function) => {
    const cacheKey = new URL(c.req.url).pathname;
    const kv = c.env.CACHING;
    const cachedResponse = await kv.get(cacheKey, "text");

    if (cachedResponse) {
      let shouldRevalidate = false;
      if (options.revalidate) {
        try {
          const cachedData = JSON.parse(cachedResponse);
          shouldRevalidate = await options.revalidate(c, cachedData);
        } catch (error) {
          console.error("Error parsing cached data:", error);
          shouldRevalidate = true;
        }
      }

      if (!shouldRevalidate) {
        return new Response(cachedResponse, {
          headers: { "Content-Type": "application/json", "X-Cache": "HIT" },
        });
      }
    }

    await next();

    if (c.res.ok) {
      const response = await c.res.clone().text();
      await kv.put(cacheKey, response, { expirationTtl: options.ttl || 3600 });
      c.res.headers.set("X-Cache", "MISS");
    }
  };
};

// Example revalidation function
const revalidateUserData = async (c: Context<Env>, cachedData: any) => {
  const userId = c.req.param("id");
  const lastUpdateTime = await getUserLastUpdateTime(userId);
  return lastUpdateTime > cachedData.timestamp;
};

// Create a caching middleware instance with revalidation
const userCache = createCachingMiddleware({
  ttl: 3600, // 1 hour
  revalidate: revalidateUserData,
});

const testRoutes = new Hono<Env>()
  // .get("*", async (c) => {
  //   return c.json({ message: "Hello, world!" });
  // })
  // Apply caching to user route
  .get("/users/:id", userCache, async (c) => {
    const id = c.req.param("id");
    console.log(`Fetching user data for user ${id}`);
    
    const userData = await fetchUserData(id);
    return c.json({ ...userData, timestamp: Date.now() });
  })
  .post("/users/:id", async (c) => {
    const id = c.req.param("id");
    const updatedData = await c.req.json();
    await updateUserData(id, updatedData);
    return c.json({ message: "User data updated successfully" });
  });

// Helper functions (implement these based on your data storage)
async function getUserLastUpdateTime(userId: string): Promise<number> {
  // Fetch the last update time for the user from your database
  // This is a placeholder implementation
  return Date.now() - Math.random() * 7200000; // Random time within the last 2 hours
}

async function fetchUserData(userId: string): Promise<any> {
  // Fetch user data from your database
  // This is a placeholder implementation
  await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate database delay
  return {
    id: userId,
    name: `User ${userId}`,
    email: `user${userId}@example.com`,
  };
}

async function updateUserData(userId: string, data: any): Promise<void> {
  // Update user data in your database
  // This is a placeholder implementation
  await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate database delay
  console.log(`Updated data for user ${userId}:`, data);
}

export default testRoutes;
