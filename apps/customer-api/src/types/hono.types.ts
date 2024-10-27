import { BotIntent, BotKnowledge } from "./app";
import { ClientType, AdminClientType } from "~/utils/directus";
import { TextEmbedding } from "@repo/shared/utils";
import { MyDurableObject } from "~/durables/MyDurableObject";
import { WorkerEnv } from "./worker-configuration";

export interface Env {
  Bindings: WorkerEnv;
  Variables: {
    token: string;
    knowledge: BotKnowledge;
    intent: BotIntent;
    textEmbedding: TextEmbedding;
    directus: ClientType;
    directAdmin: AdminClientType;
    stub: DurableObjectStub<MyDurableObject>;
    count: number;
  };
}
