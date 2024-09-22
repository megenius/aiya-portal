import { Env as BasedEnv } from "@repo/shared";
import { BotIntent, BotKnowledge } from "./app";
import { TextEmbedding } from "~/services/text-embeding";

export type Env = BasedEnv & {
  Bindings: Bindings;
  Variables: Variables;
};

type Variables = {
  token: string;
  knowledge: BotKnowledge;
  intent: BotIntent;
  textEmbedding: TextEmbedding;
};

type Bindings = {
  NODE_ENV: string;
  LAMBDA_SECRET_KEY: string;
  DIRECTUS_SERVICE_TOKEN: string;
  VECTOR_SENTENCES: Vectorize;
  SENTENCE_EMBEDINGS_QUEUE: Queue;
  AWS_ACCESS_KEY_ID: string;
  AWS_SECRET_ACCESS_KEY: string;
  CACHING: KVNamespace;
  OPENSEARCH_ENDPOINT: string;
  OPENSEARCH_USERNAME: string;
  OPENSEARCH_PASSWORD: string;
};
