import { ChannelService } from "~/services/channel.service";

type Variables = {
  channelService: ChannelService;
};

export type Env = {
  Bindings: WorkerEnv;
  Variables: Variables;
};
