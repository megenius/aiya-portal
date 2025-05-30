import { WebhookEvent } from "./events";

export interface Channel {
  id: string;
  status: "draft" | "active" | "inactive";
  sort: number | null;
  user_created: string;
  date_created: string;
  user_updated: string;
  date_updated: string;
  provider: "Line" | string;
  provider_id: string;
  provider_name: string;
  provider_secret: string;
  provider_access_token: string;
  logo: string | null;
  platform: string;
  forward_urls: {
    name: string;
    url: string;
    enabled: boolean;
  }[];
  expired_at: string;
  name: string;
  provider_info: {
    userId: string;
    basicId: string;
    displayName: string;
    chatMode: string;
    markAsReadMode: string;
    channelId: string;
  };
  team: string;
  dataset: string | null;
  orderbots: any[]; // Type can be more specific based on orderbot structure
  bots: {
    id: string;
    status: string;
    sort: number | null;
    user_created: string;
    date_created: string;
    user_updated: string;
    date_updated: string;
    name: string;
    metadata: any | null;
    team: string;
    avatar: string | null;
    system_prompt: string | null;
    expertise: string | null;
    functions: any | null;
    greeting_message: string | null;
    gender: string | null;
    version: string | null;
    greeting_message_mobile: string | null;
    system_prompt_mobile: string | null;
    data_sources: any | null;
    irrelevant_answers: any | null;
    slug: string;
    sql_agent_prompt: string | null;
    product_name: string;
    product_description: string | null;
    guidelines: string | null;
    context: any | null;
    routing_config: Record<string, any>;
    type: string;
    start_keyword: string | null;
    stop_keyword: string | null;
    ad_account: string | null;
    logo: string | null;
    icon: string | null;
    knowledges: any[];
    channels: any[];
    datasources: any[];
    muted_users: any[];
    orders: any[];
  }[];
  quota: {
    auto_reply: number;
    smart_reply: number;
    generative_reply: number;
    check_slip: number;
  };
}

export type SocialPlatform = 'line' | 'facebook' | 'instagram';

export type QueueMessage = UserProfileMessage | ConversationMessage;

export interface UserProfileMessage {
  userId: string;
  providerId: string;
  channelToken: string;
  platform: SocialPlatform;
  timestamp: number;
}

export interface ConversationMessage {
  userId: string;
  platform: string;
  lastEvent: WebhookEvent;
  timestamp: number;
}