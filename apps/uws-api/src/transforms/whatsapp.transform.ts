import { WebhookEvent, Platform, EventType } from "~/types/events";

export class WhatsAppTransformer {
  toUnified(payload: any): WebhookEvent[] {
    console.log("Transforming WhatsApp payload:", payload);
    // TODO: Implement WhatsApp payload transformation logic
    return [];
  }
}
