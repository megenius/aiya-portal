import { ChannelDurableObject } from "~/durables/channel.durable";
import { ChannelService } from "~/services/channel.service";

type Variables = {
  channelService: ChannelService;
  channelDurable: DurableObjectStub<ChannelDurableObject>;
  providerId: string;
};

export type Env = {
  Bindings: WorkerEnv;
  Variables: Variables;
};
