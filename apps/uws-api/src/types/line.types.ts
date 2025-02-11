import { MessageType } from "./enums";

export interface LineUser {
  userId: string;
  displayName?: string;
  pictureUrl?: string;
  language?: string;
  statusMessage?: string;
  updatedAt: number;
}

export interface LineMessageContent {
  id: string;
  type: MessageType;
  text?: string;
  originalContentUrl?: string;
  previewImageUrl?: string;
  duration?: number;
  title?: string;
  address?: string;
  latitude?: number;
  longitude?: number;
  packageId?: string;
  stickerId?: string;
  stickerResourceType?: string;
  keywords?: string[];
  contentProvider?: {
    type: "line" | "external";
    originalContentUrl?: string;
    previewImageUrl?: string;
  };
  imageSet?: {
    id: string;
    index: number;
    total: number;
  };
  size?: number;
  fileName?: string;
  aspectRatio?: number;
}

export interface LineTemplateMessage extends LineMessageContent {
  type: MessageType.TEMPLATE;
  altText: string;
  template: {
    type: "buttons" | "confirm" | "carousel" | "image_carousel";
    text?: string;
    title?: string;
    actions?: LineAction[];
    thumbnailImageUrl?: string;
    imageAspectRatio?: "rectangle" | "square";
    imageSize?: "cover" | "contain";
    imageBackgroundColor?: string;
    columns?: LineTemplateColumn[];
  };
}

export interface LineTemplateColumn {
  thumbnailImageUrl?: string;
  imageBackgroundColor?: string;
  title?: string;
  text: string;
  actions: LineAction[];
}

export interface LineAction {
  type: "postback" | "message" | "uri" | "datetimepicker";
  label: string;
  data?: string;
  text?: string;
  uri?: string;
  mode?: "date" | "time" | "datetime";
  initial?: string;
  max?: string;
  min?: string;
}

export interface LineSource {
  type: "user" | "group" | "room";
  userId?: string;
  groupId?: string;
  roomId?: string;
}

export interface LineEventBase {
  type: string;
  timestamp: number;
  source: LineSource;
  mode: "active" | "standby";
  replyToken?: string;
  webhookEventId?: string;
}

export interface BaseLineEvent {
  type: string;
  timestamp: number;
  source: {
    type: 'user' | 'group' | 'room';
    userId?: string;
    groupId?: string;
    roomId?: string;
  };
}

export interface LineMessageEvent extends BaseLineEvent {
  type: 'message';
  message: {
    id: string;
    type: 'text' | 'image' | 'video' | 'audio' | 'file' | 'location' | 'sticker';
    [key: string]: any;
  };
}

export interface LineFollowEvent extends BaseLineEvent {
  type: 'follow';
}

export interface LineUnfollowEvent extends LineEventBase {
  type: "unfollow";
}

export interface LineJoinEvent extends LineEventBase {
  type: "join";
}

export interface LineLeaveEvent extends LineEventBase {
  type: "leave";
}

export interface LinePostbackEvent extends LineEventBase {
  type: "postback";
  postback: {
    data: string;
    params?: {
      date?: string;
      time?: string;
      datetime?: string;
    };
  };
}

export interface LineVideoPlayCompleteEvent extends LineEventBase {
  type: "video_play_complete";
  videoPlayComplete: {
    trackingId: string;
  };
}

export interface LineBeaconEvent extends LineEventBase {
  type: "beacon";
  beacon: {
    hwid: string;
    type: "enter" | "leave" | "banner";
    dm?: string;
  };
}

export type LineEvent =
  | LineMessageEvent
  | LineFollowEvent
  | LineUnfollowEvent
  | LineJoinEvent
  | LineLeaveEvent
  | LinePostbackEvent
  | LineVideoPlayCompleteEvent
  | LineBeaconEvent;

export interface LineWebhookPayload {
  destination: string;
  events: LineEvent[];
}

export interface LineUserProfile {
  userId: string;
  displayName: string;
  pictureUrl?: string;
  statusMessage?: string;
  language?: string;
}
