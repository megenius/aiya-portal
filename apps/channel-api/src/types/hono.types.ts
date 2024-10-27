import { FollowerDurableObject } from "~/durables/Follower";
import { BotIntent, BotKnowledge } from "./app";
import { TextEmbedding } from "@repo/shared/utils";
import { WorkerEnv } from "./worker-configuration";
import { ClientType, AdminClientType } from "~/utils/directus";

export interface Env {
  Bindings: WorkerEnv;
  Variables: {
    token: string;
    knowledge: BotKnowledge;
    intent: BotIntent;
    textEmbedding: TextEmbedding;
    directus: ClientType;
    directAdmin: AdminClientType;
    followerStub: DurableObjectStub<FollowerDurableObject>;
    count: number;
  };
}
