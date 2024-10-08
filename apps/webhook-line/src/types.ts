import { WorkerEntrypoint } from "cloudflare:workers";
import { RequestIdVariables } from "hono/request-id";

export type WorkerEnv = {
  Bindings: Bindings;
  Variables: Variables;
};

export type Bindings = {
  DB: D1Database;
  AWS_REGION: string;
  AWS_ACCESS_KEY_ID: string;
  AWS_SECRET_ACCESS_KEY: string;
  SNS_TOPIC_ARN: string;
  LAMBDA_SECRET_KEY: string;
  KV_PORTAL: KVNamespace;
  WORKER_CHANNEL: any
};

export type Variables = {
  forward_urls: Array<{
    name: string;
    url: string;
    enabled: boolean;
  }>;
} & RequestIdVariables;
