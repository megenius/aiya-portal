import { Platform, EventType } from "./enums";

interface BaseEntity {
  created_at: string;
  updated_at: string;
  deleted_at?: string;
}

export interface BaseEvent extends BaseEntity {
  id: string;
  platform: Platform;
  event_type: EventType;
  timestamp: string;
  channel_id: string;
  version: string; // schema version
}
