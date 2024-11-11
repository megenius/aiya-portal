import { FollowerDO } from "~/durables/FollowerDO";
import { ProviderDO } from "~/durables/ProviderDO";
import { BotIntent, BotKnowledge, Channel } from "./app";
import { TextEmbedding } from "@repo/shared/utils";
import { ClientType, AdminClientType } from "~/utils/directus";
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
    followerDO: DurableObjectStub<FollowerDO>;
    providerDO: DurableObjectStub<ProviderDO>;
    count: number;
    channel: Channel;
  };
}
