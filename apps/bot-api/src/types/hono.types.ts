import { KVNamespace, Queue, Vectorize, R2Bucket } from "@cloudflare/workers-types";
import { BotIntent, BotKnowledge } from "./app";
import { ClientType, AdminClientType } from "~/utils/directus";
import { TextEmbedding } from "@repo/shared/utils";

export interface Env {
  Bindings: WorkerEnv;
  Variables: {
    token: string;
    knowledge: BotKnowledge;
    intent: BotIntent;
    textEmbedding: TextEmbedding;
    directus: ClientType;
    directAdmin: AdminClientType;
  };
}
