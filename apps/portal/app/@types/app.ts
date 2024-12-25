import { ResponseElement } from "@repo/shared";
import { components } from "./directus";
import { BotsSlips } from "./modules/slips";
import { CAPIEvents } from "./modules/capi";
import { PlanFeatures } from "./plans.type";

export type { BotsSlips, CAPIEvents };

export interface FeatureFlags {
  feature_dashboard: boolean;
  feature_adaccounts: boolean;
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
export type WorkspaceInvite = components["schemas"]["ItemsSaasTeamsInvites"] & {
  user_id?: string;
};
export type Bot = components["schemas"]["ItemsBots"];
export type BotMutedUser = components["schemas"]["ItemsBotsMutedUsers"];
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

export type SaasSubscription = components["schemas"]["ItemsSaasSubscriptions"];
export type SaasProduct = components["schemas"]["ItemsSaasProducts"] & {
  features: PlanFeatures
}
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
export type OrderTemplate = components["schemas"]["ItemsBotsOrders"];

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
  status: string;
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
  id: string;
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

export interface BotLog {
  id: number;
  created: string;
  bot_id: string;
  confidence: number;
  intent: string;
  sentence: string;
  answer: string;
  input_tokens: number;
  output_tokens: number;
  social_id: string;
  platform: string;
  rag_intents: any[];
  lang: any;
  fallback: number;
  training_intent: string;
  training_question: string;
}

export namespace stats {
  interface KnowledgeUsage {
    id: string;
    conversations: number;
    avgConfidence: number;
    intents: Array<{
      name: string;
      count: number;
      percentage: number;
    }>;
    platforms: Array<{
      name: string;
      count: number;
      percentage: number;
    }>;
  }

  export interface AnalyticsReport {
    summary: {
      conversations: {
        total: number;
        fallbacks: number;
        fallbackRate: number;
      };
      users: {
        total: number;
        activeHours: number;
        averageUsersPerHour: number;
      };
      performance: {
        avgConfidence: number;
        successRate: number;
      };
    };
    knowledgeUsage: {
      known: KnowledgeUsage[];
      unknown: KnowledgeUsage | null;
      summary: {
        totalKnown: number;
        totalUnknown: number;
        knowledgeUtilization: number;
      };
    };
    hourlyActivity: Array<{
      hour: string;
      conversations: number;
      uniqueUsers: number;
      fallbacks: number;
      confidence: number | null;
      platforms: Array<{
        name: string;
        count: number;
      }>;
    }>;
    intents: {
      top: Array<{
        name: string;
        count: number;
        successRate: number;
        confidence: number;
      }>;
      fallbacks: {
        total: number;
        byIntent: Array<{
          intent: string;
          count: number;
          percentage: number;
        }>;
        byConfidence: Array<{
          range: string;
          count: number;
          percentage: number;
        }>;
      };
    };
    platforms: Array<{
      name: string;
      conversations: number;
      uniqueUsers: number;
      fallbackRate: number;
      topIntents: Array<{
        name: string;
        count: number;
        percentage: number;
      }>;
    }>;
    metadata: {
      timezone: string;
      queryTime: number;
      startTime: string;
      endTime: string;
    };
  }
}
