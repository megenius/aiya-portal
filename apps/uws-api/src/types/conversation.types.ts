import { LineUser } from "./line.types";
import { WebhookEvent } from "./events";

export interface LastMessage {
  type: string;
  text?: string;
  timestamp: number;
  event?: WebhookEvent; // Add unified event data
}

export interface Conversation {
  userId: string;
  platform: "line" | "messenger" | "instagram";
  lastMessage: LastMessage;
  userProfile?: LineUser;
  updatedAt: number;
}

export interface ConversationQuery {
  limit: number;
  cursor?: string;
}

export interface ConversationResult {
  conversations: Conversation[];
  nextCursor?: string;
}