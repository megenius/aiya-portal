import { WebhookEvent, Platform, EventType } from "~/types/events";

export class InstagramTransformer {
  toUnified(payload: any): WebhookEvent[] {
    console.log("Transforming Instagram payload:", payload);
    // TODO: Implement Instagram payload transformation logic
    return [];
  }
}
