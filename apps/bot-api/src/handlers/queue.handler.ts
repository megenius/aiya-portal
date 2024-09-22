import { getTextEmbedding } from "../utils/vector";
import { MD5, TextEmbedding } from "@repo/shared/utils";

interface QueueMessage {
  bot_id: string;
  knowledge_id: string;
  intent_id: string;
  text: string;
  id: string;
}

export async function handleQueueMessage(
  batch: MessageBatch<QueueMessage>,
  env: WorkerEnv
) {
  if (batch.queue === "sentences-embeddings") {
    await handleSentenceEmbeddings(batch, env);
  } else if (batch.queue === "sentences-embeddings2") {
    await handleSentenceEmbeddings2(batch, env);
  }
}

async function handleSentenceEmbeddings(
  batch: MessageBatch<QueueMessage>,
  env: WorkerEnv
) {
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
      const { bot_id, knowledge_id, intent_id, text, id } = message.body;
      const metadata = { bot_id, knowledge_id, intent_id, id };
      return textEmbedding.addDocument(text, metadata);
    })
  );

  console.log(results);
}

async function handleSentenceEmbeddings2(
  batch: MessageBatch<QueueMessage>,
  env: WorkerEnv
) {
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
          metadata: { bot_id, knowledge_id, intent_id, text },
        };
      });
    })
  );

  if (!env.VECTOR_SENTENCES) {
    console.log("VECTOR_SENTENCES is not available (not local support)");
    return;
  }

  const result = await env.VECTOR_SENTENCES.upsert(vectors);
  console.log("result.ids", result.ids);
}
