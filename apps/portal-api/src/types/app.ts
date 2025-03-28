import { components } from "./directus";

export type Workspace = components["schemas"]["ItemsSaasTeams"];
export type Bot = components["schemas"]["ItemsBots"] & {
  metadata: BotMetadata;
};
export type User = components["schemas"]["Users"];
export type Channel = components["schemas"]["ItemsChannels"];

export type WorkspaceBot = Bot;
export type WorkspaceChannel = Channel;

export type BotKnowledge = {
  id: string;
  name: string;
  bot: string;
  raw_data?: BotIntentRaw[];
  intents: BotIntent[];
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
  questions: string[];
  responses: any[];
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



export interface BotMetadata {
  llm: Llm;
  mode: string;
  max_search_results: number;
  min_confidence: number;
  enabled: number;
  agent_type: string;
  temperature: number;
  embedding_model: string;
  waiting_message: string;
  fallback: Fallback;
  greeting_message_enabled: boolean;
  routing_enabled: boolean;
  fallback_enabled: boolean;
  show_name_enabled: boolean;
}

export interface Llm {
  provider: string;
  model: string;
  max_input_tokens: number;
  max_output_tokens: number;
  temperature: number;
}

export interface Fallback {
  mode: string;
  provider: string;
  model: string;
  confidence: number;
  support_languages: string[];
  title: string;
  message: string;
  notifications: Notification[];
}

export interface Notification {
  type: string;
  email: string;
  template_id: string;
}
