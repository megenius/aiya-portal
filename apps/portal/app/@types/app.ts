import { ResponseElement } from "@repo/shared";
import { components } from "./directus";
export interface FeatureFlags {
  feature_dashboard: boolean;
  feature_products: boolean;
  feature_engagements: boolean;
  feature_orders: boolean;
  feature_conversions: boolean;
  feature_customers: boolean;
  feature_apps_ads: boolean;
  feature_apps_beacons: boolean;
  feature_apps_bots: boolean;
  feature_apps_chats: boolean;
  feature_apps_orderbots: boolean;
  feature_apps_vourchers: boolean;
}

export type Workspace = components["schemas"]["ItemsSaasTeams"] & {
  feature_flags: FeatureFlags;
};
export type Bot = components["schemas"]["ItemsBots"];
export type User = components["schemas"]["Users"];
export type Channel = components["schemas"]["ItemsChannels"];
export type ChannelDatasets = components["schemas"]["ItemsChannelsDatasets"];
export type FacebookAdAccount = components["schemas"]["ItemsAdAccounts"] & {
  spend?: number;
  metadata: {
    id: string;
    name: string;
    business_name: string;
    account_status: number;
    disable_reason: number;
    created_time: string;
    currency: string;
    timezone_name: string;
    timezone_offset_hours_utc: number;
    business: {
      id: string;
      name: string;
    };
  };
};

export type Product = components["schemas"]["ItemsProducts"];
export type Orderbot = components["schemas"]["ItemsOrderbots"];

export type WorkspaceBot = Bot;
export type WorkspaceFacebookAdAccount = FacebookAdAccount;
export type WorkspaceChannel = Channel;
export type BotChannelStatus = Channel & { enabled: boolean };
export type BotUpdate = {
  channels?: {
    create: [];
    update: [];
    delete: number[];
  };
} & Partial<Bot>;

// export type ChannelOrderbot = components["schemas"][""];

export type ChannelBot = components["schemas"]["ItemsChannelsBots"];

export type BotKnowledge = components["schemas"]["ItemsBotsKnowledges"] & {
  // raw_data?: BotIntentRaw[];
  intents: BotIntent[];
};

// export type BotKnowledge = {
//   id: string;
//   name: string;
//   bot: string;
//   raw_data?: BotIntentRaw[];
//   intents: BotIntent[];
//   total_intent: number;
// };

// export type BotIntentRaw = {
//   id: string;
//   name: string;
//   questions: string;
//   responses: string;
// };

export type BotIntent = {
  id: string;
  name: string;
  intent: string;
  questions: IntentQuestion[];
  responses: ResponseElement[];
  quick_reply: string;
  tags: string[];
};

export type BotIntentImport = {
  id: string;
  name: string;
  intent: string;
  questions: string;
  answers: string;
  quick_reply: string;
  tags: string;
};

export type IntentQuestion = {
  id: string;
  question: string;
};

export type IntentResponse = {
  altText?: string;
  id: string;
  opts?: JSON;
  type?: ResponseElementType;
};

export type TextMessageResponse = {
  payload: {
    text: string;
  };
} & IntentResponse;

export type ImageMessageResponse = {
  payload: {
    url: string;
    alt: string;
  };
} & IntentResponse;

export enum ResponseElementType {
  CardMessage = "CardMessage",
  Flex = "Flex",
  GenericTemplate = "GenericTemplate",
  Image = "Image",
  Imagemap = "Imagemap",
  OptInMessage = "OptInMessage",
  RichMessage = "RichMessage",
  RichVideo = "RichVideo",
  Text = "Text",
}

export type BotKnowledgeUpdate = {
  name: string;
  intents: BotIntent[];
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

// src/types.ts

export interface KPI {
  label: string;
  value: string;
  trend?: "up" | "down";
}

export interface PerformanceOverTimeData {
  date: string;
  impressions: number;
  clicks: number;
  conversions: number;
}

export interface SpendVsBudgetData {
  campaign: string;
  spend: number;
  budget: number;
}

export interface Campaign {
  name: string;
  status: "Active" | "Paused" | "Completed";
  spend: string;
  impressions: string;
  clicks: string;
}

export interface TopAd {
  name: string;
  performance: "Excellent" | "Good" | "Average";
  conversions: number;
}

export interface AdDashboard {
  ad_account_id: string;
  date_range: string;
  impressions: number;
  reach: number;
  frequency: number;
  spend: number;
  cpc: number;
  cpm: number;
  cpp: number;
  ctr: number;
  roas: number;
  purchase: number;
  purchase_value: number;
  ads_volume: number;
}

export interface AdInsight {
  id: string;
  name: string;
  status: string;
  start_time: string;
  spend: number;
  impressions: number;
  clicks: number;
  cpc: number;
  cpm: number;
  cpp: number;
  ctr: number;
  reach: number;
  date_start: string;
  date_stop: string;
  roas: number;
  purchase: number;
  purchase_value: number;
}
