import { BaseEvent } from "./base";
import { MessageType, Platform } from "./enums";

export interface ErrorInfo {
  code: string;
  message: string;
  details?: any;
}

export enum MessageStatus {
  SENT = "sent",
  DELIVERED = "delivered",
  READ = "read",
  FAILED = "failed",
}

export enum MessageDirection {
  INBOUND = "inbound",
  OUTBOUND = "outbound",
}

export enum SenderType {
  USER = "user",
  PAGE = "page",
  BOT = "bot",
}

export enum RecipientType {
  USER = "user",
  GROUP = "group",
  ROOM = "room",
  BOT = "bot",
}

export enum AttachmentType {
  IMAGE = "image",
  VIDEO = "video",
  AUDIO = "audio",
  FILE = "file",
}

export enum InteractiveType {
  BUTTON = "button",
  LIST = "list",
  MENU = "menu",
}

export enum ButtonType {
  POSTBACK = "postback",
  URL = "url",
  PHONE = "phone",
}

export enum QuickReplyType {
  TEXT = "text",
}

export interface TranslatedText {
  en: string;
  source_language: string;
}

export interface Attachment {
  id: string;
  type: AttachmentType;
  url: string;
  thumbnail_url?: string;
  name?: string;
  size?: number;
  duration?: number;
  mime_type?: string;
  width?: number;
  height?: number;
  preview_url?: string;
}

export interface Location {
  latitude: number;
  longitude: number;
  address?: string;
}

export interface Sticker {
  sticker_id: string;
  package_id: string;
  keywords?: string[];
}

export interface Content {
  text?: string;
  language?: string;
  translated_text?: TranslatedText;
  attachments?: Attachment[];
  location?: Location;
  sticker?: Sticker;
}

export interface Button {
  type: ButtonType;
  title: string;
  payload?: string;
  url?: string;
}

export interface QuickReply {
  type: QuickReplyType;
  title: string;
  payload?: string;
}

export interface InteractivePayload {
  buttons?: Button[];
  quick_replies?: QuickReply[];
}

export interface Interactive {
  type: InteractiveType;
  payload: InteractivePayload;
}

export interface ReplyTo {
  message_id: string;
  text?: string;
}

export interface Mention {
  user_id: string;
  name: string;
  offset: number;
  length: number;
}

export interface Metadata {
  source?: string;
  client_message_id?: string;
  sequence_number?: number;
  source_platform?: string;
}

export interface Sender {
  id: string;
  type: SenderType;
  name?: string;
  avatar_url?: string;
  platform_metadata?: {
    language?: string;
    timezone?: string;
    app_version?: string;
  };
}

export interface Recipient {
  id: string;
  type: RecipientType;
  name?: string;
  avatar_url?: string;
}

export interface Message {
  id: string;
  type: MessageType;
  status?: MessageStatus;
  direction?: MessageDirection;
  template_id?: string;
  sender?: Sender;
  recipient?: Recipient;
  content?: Content;
  interactive?: Interactive;
  reply_to?: ReplyTo;
  mentions?: Mention[];
  metadata?: Metadata;
  timestamp: number;
}

export interface WebhookEventMessage {
  id: string;
  type: MessageType;
  text?: string;
  timestamp: number;
}

export interface WebhookEvent {
  id: string;
  platform: Platform;
  event_type: string;
  timestamp: number;
  channel_id: string;
  message?: Message;
  beacon?: {  // Add beacon property
    type: string;
    hwid: string;
    dm?: string;
    device_message?: string;
    distance?: number;
    user_id?: string;
    timestamp: number;
  };
  raw_event: any;
}