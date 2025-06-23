import { OpenSearch } from "@repo/shared";
import { MD5, TextEmbedding } from "@repo/shared/utils";
import { NsCapi } from "~/types/app";
import { getTextEmbedding } from "../utils/vector";

interface QueueMessage {
  operation:
    | "deleteIntent"
    | "addQuestion"
    | "updateQuestion"
    | "deleteQuestion";
  bot_id: string;
  knowledge_id: string;
  intent_id: string;
  text: string;
  id: string;
}

let textEmbedding: TextEmbedding;
let opensearch: OpenSearch;

export async function handleQueueMessage(batch: MessageBatch, env: WorkerEnv) {
  // sentences-embeddings-prod
  const suffix = env.NODE_ENV === "development" ? "-dev" : "-prod";

  console.log(batch.queue);
  console.log("env.NODE_ENV", env.NODE_ENV);
  console.log(suffix);
  
  if (batch.queue === "sentences-embeddings" + suffix) {
    await handleSentenceEmbeddings(batch, env);
  } else if (batch.queue === "sentences-embeddings2" + suffix) {
    await handleSentenceEmbeddings2(batch, env);
  } else if (batch.queue === "capi-queue" + suffix) {
    await handleCapiEvents(batch, env);
  }

  console.log("batch", JSON.stringify(batch));
  
}

async function handleSentenceEmbeddings(batch: MessageBatch, env: WorkerEnv) {
  if (!textEmbedding) {
    textEmbedding = new TextEmbedding(
      {
        endpoint: env.OPENSEARCH_ENDPOINT,
        username: env.OPENSEARCH_USERNAME,
        password: env.OPENSEARCH_PASSWORD,
      },
      "text_embedding"
    );
  }

  const results = await Promise.all(
    batch.messages.map(async (message) => {
      const { bot_id, knowledge_id, intent_id, text, id, operation } =
        message.body as QueueMessage;

      console.log("operation", operation, message.body);

      switch (operation) {
        case "deleteIntent":
          return textEmbedding.deleteDocumentByMetadata({
            bot_id,
            knowledge_id,
            intent_id,
          });

        case "addQuestion":
          return textEmbedding.addDocument(text, {
            bot_id,
            knowledge_id,
            intent_id,
            id,
          });

        case "updateQuestion":
          const metadata = {
            bot_id,
            knowledge_id,
            intent_id,
            id,
          };
          await textEmbedding.deleteDocumentByMetadata(metadata);
          return textEmbedding.addDocument(text, metadata);

        case "deleteQuestion":
          return textEmbedding.deleteDocumentByMetadata({
            bot_id,
            knowledge_id,
            intent_id,
            id,
          });
      }
    })
  );

  console.log(results);
}

async function handleSentenceEmbeddings2(batch: MessageBatch, env: WorkerEnv) {
  const vectors = await Promise.all(
    batch.messages.map(async (message) => {
      const { bot_id, knowledge_id, intent_id, text } =
        message.body as QueueMessage;
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

async function handleCapiEvents(batch: MessageBatch, env: WorkerEnv) {
  const messages = batch.messages.map(
    (message) => message.body as NsCapi.RequestBody
  );

  const results = await Promise.all<{
    events_received: number;
    messages: string[];
    fbtrace_id: string;
  }>(
    messages.map(async (message) => {
      console.log("message", message);
      const url = `https://graph.facebook.com/${message.dataset}/events?access_token=${message.accessToken}`;
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: [message.event],
          partner_agent: "AIYA",
        }),
      };

      return await fetch(url, options).then((res) => res.json());
    })
  );

  if (!opensearch) {
    opensearch = new OpenSearch({
      endpoint: env.OPENSEARCH_ENDPOINT,
      username: env.OPENSEARCH_USERNAME,
      password: env.OPENSEARCH_PASSWORD,
    });
  }

  for (const [index, message] of messages.entries()) {
    const result = results[index];
    await opensearch.index("capi_events", {
      ...message.event,
      bot_id: message.botId,
      dataset: message.dataset,
      fbtrace_id: result.fbtrace_id,
      created_at: new Date().toISOString(),
    });
  }
}