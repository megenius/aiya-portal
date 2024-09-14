import { Hono } from "hono";
import { botsRoutes } from "./routes/bots";
import { Env as HonoEnv } from "~/@types/hono.types";
import { authMiddleware } from "@repo/shared/middlewares/auth";
import { lambdaAuthMiddleware } from "./middlewares/lambda-auth";
import { knowledgesRoutes } from "./routes/knowledges";
import { getTextEmbedding } from "./utils/vector";
import { awsRoutes } from "./routes/aws";
import testRoutes from "./routes/test";
import { textEmbeddingRoutes } from "./routes/text-embedding";
import { TextEmbedding } from "@repo/shared/utils/text-embeding";
import { MD5 } from "@repo/shared/utils";
// import { cache } from 'hono/cache'

const app = new Hono<HonoEnv>()
  .basePath("/api")
  .use("*", (c: any, next) => {
    const hostname = new URL(c.req.url).hostname;

    console.log("hostname", hostname);
    if (hostname.includes("lambda-api")) {
      return lambdaAuthMiddleware(c, next);
    }

    return authMiddleware(c, next);
  })
  // .get("/hello", async (c) => {
  //   return c.json({ message: "Hello, world!" });
  // })
  .route("/bots", botsRoutes)
  .route("/bots/knowledges", knowledgesRoutes)
  .route("/aws", awsRoutes)
  .route("/bots/test", testRoutes)
  .route("/bots/embedding", textEmbeddingRoutes)
  .onError((err, c) => {
    return c.json({ error: err.message });
  });

// export default app;

export default {
  fetch: app.fetch,
  async queue(
    batch: MessageBatch<{
      bot_id: string;
      knowledge_id: string;
      intent_id: string;
      text: string;
      idx: number
    }>,
    env: Env
  ) {
    if (batch.queue == "sentences-embeddings") {
      // const id = await textEmbedding.addDocument(text, metadata);
      const textEmbedding = new TextEmbedding(
        {
          endpoint: env.OPENSEARCH_ENDPOINT,
          username: env.OPENSEARCH_USERNAME,
          password: env.OPENSEARCH_PASSWORD,
        },
        "text_embedding"
      );
      const results = await Promise.all(
        batch.messages.map(async (message) => {
          const { bot_id, knowledge_id, intent_id, text, idx } = message.body;
          const metadata = {
            bot_id,
            knowledge_id,
            intent_id,
            idx
          };
          return textEmbedding.addDocument(text, metadata);
        })
      );

      console.log(results);
      
    }

    if (batch.queue == "sentences-embeddings2") {
      const vectors = await Promise.all(
        batch.messages.map(async (message) => {
          const { bot_id, knowledge_id, intent_id, text } = message.body;
          const id = crypto.randomUUID();
          const hash = await MD5(text);
          console.log(bot_id, knowledge_id, intent_id, text, hash);
          return getTextEmbedding(text).then((embedding) => {
            return {
              id,
              values: embedding,
              metadata: {
                bot_id,
                knowledge_id,
                intent_id,
                text,
                // hash,
              },
            };
          });
        })
      );

      if (!env.VECTOR_SENTENCES) {
        console.log("VECTOR_SENTENCES is not available (not local support)");
      }
      const result = await env.VECTOR_SENTENCES.upsert(vectors);
      console.log("result.ids", result.ids);
    }
  },
};

export type AppType = typeof app;
