import { WebhookEvent, Platform, EventType } from "~/types/events";

export class FacebookTransformer {
  toUnified(payload: any): WebhookEvent[] {
    console.log("Transforming Facebook payload:", payload);
    // TODO: Implement Facebook payload transformation logic
    return [];
  }
}
