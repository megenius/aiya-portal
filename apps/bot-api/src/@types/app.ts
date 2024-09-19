import { components } from "../config/schema";

export type Workspace = components["schemas"]["ItemsSaasTeams"];
export type Bot = components["schemas"]["ItemsBots"];
export type User = components["schemas"]["Users"];
export type Channel = components["schemas"]["ItemsChannels"];

export type WorkspaceBot = Bot;
export type WorkspaceChannel = Channel;
export type BotChannelStatus = Channel & { enabled: boolean };

export type BotKnowledge = {
  id: string;
  name: string;
  bot: string;
  raw_data?: BotIntentRaw[];
  intents: BotIntent[];
  total_intent: number;
  date_updated: string;
};

export type BotIntentRaw = {
  id: string;
  name: string;
  questions: string;
  responses: string;
};

export type BotIntent = {
  id: string;
  name: string;
  intent: string;
  questions: string[];
  responses: any[];
  quick_reply: string;
  tags: string[];
};

export interface AuthTokens {
  access_token: string;
  expires: number;
  refresh_token?: string;
}

export interface WorkspaceMember {
  id: string;
  name: string;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
  last_access: string;
  role: string;
  date_accepted: any;
}

export interface AdApp {
  id: string;
  name: string;
  description: string;
  status: string;
  date_created: string;
  date_updated: string;
  team: string;
  metadata: {
    basic: {};
    enabled: number;
    ad_name: string;
    ad_info: {
      ad_type: string;
      ad_platform: string;
      ad_campaign: string;
      ad_target: string;
      ad_content: string;
    };
  };
}

export interface ChatApp {
  id: string;
  name: string;
  description: string;
  status: string;
  date_created: string;
  date_updated: string;
  team: string;
}

export interface BeaconApp {
  id: string;
  name: string;
  description: string;
  status: string;
  date_created: string;
  date_updated: string;
  team: string;
}



export interface PageInfo {
  id: string;
  name: string;
  accessToken: string;
  category: string;
  pictureUrl: string;
  ig: string;
}


export interface VectorIntentMatch {
  id: string;
  text: string;
  score: number;
  metadata: {
    bot_id: string;
    // hash: string;
    intent_id: string;
    knowledge_id: string;
    // text: string;
  };
}

export interface VectorQuerySentenceResponse {
  count: number;
  matches: VectorIntentMatch[];
}