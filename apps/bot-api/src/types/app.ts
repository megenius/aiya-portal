import { ResponseElement } from "@repo/shared";
import { components } from "./directus";

export type Workspace = components["schemas"]["ItemsSaasTeams"];
export type Bot = components["schemas"]["ItemsBots"] & {
  metadata: BotMetadata;
};
export type User = components["schemas"]["Users"];
export type Channel = components["schemas"]["ItemsChannels"];

export type WorkspaceBot = Bot;
export type WorkspaceChannel = Channel;
export type BotChannelStatus = Channel & { enabled: boolean };

export type BotKnowledge = {
  id: string;
  name: string;
  bot: string;
  // raw_data?: BotIntentRaw[];
  intents: BotIntent[];
  total_intent: number;
  date_updated: string;
  status: string;
  lang: string;
};

// export type BotIntentRaw = {
//   id: string;
//   name: string;
//   intent: string;
//   questions: string;
//   responses: string;
// };

export type BotIntent = {
  id: string;
  name: string;
  intent: string;
  questions: IntentQuestion[];
  responses: IntentResponse[];
  quick_reply: string;
  tags: string[];
};

export type IntentResponse = {
  altText?: string;
  id: string;
  opts?: JSON;
  type?: ResponseElementType;
};

export type TextMessageResponse = {
  type: ResponseElementType.Text;
  payload: {
    text: string;
  };
} & IntentResponse;

export type ImageMessageResponse = {
  type: ResponseElementType.Image;
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

export interface CAPIEventMessage {
  pageId: string;
  datasetId: string;
  psid: string;
  value: number;
  currency?: string;
  eventName?: string;
  eventTime?: number;
  accessToken: string;
  messaging_channel?: string;
  action_source?: string;
}

export namespace NsCapi {
  export interface RequestBody {
    event: Event;
    botId: string;
    dataset: string;
    accessToken: string;
  }
  export interface Root {
    data: Event[];
    partner_agent: string;
  }

  export interface Event {
    event_name: string;
    event_time: number;
    action_source: string;
    messaging_channel: string;
    user_data: UserData;
    custom_data: CustomData;
  }

  export interface UserData {
    page_id: string;
    page_scoped_user_id: string;
  }

  export interface CustomData {
    currency: string;
    value: number;
  }
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
