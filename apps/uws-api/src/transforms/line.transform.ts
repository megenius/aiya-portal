import {
  Platform,
  MessageType,
  EventType as GeneralEventType,
} from "~/types/enums";
import {
  WebhookEvent,
  Message,
  MessageDirection,
  SenderType,
  RecipientType,
  MessageStatus,
  Content,
  Interactive,
  Attachment,
  AttachmentType,
  InteractiveType,
  ButtonType,
} from "~/types/events";
import {
  LineEvent,
  LineWebhookPayload,
  LineMessageContent,
  LineTemplateMessage,
  LineMessageEvent,
} from "~/types/line.types";
import { LineService } from "~/services/line.service"; // Import LineService

export class LineTransformer {
  private providerId: string = "";

  constructor() {}

  toUnified(payload: LineWebhookPayload): WebhookEvent[] {
    console.log("Transforming LINE webhook payload:", payload);

    if (!payload || !Array.isArray(payload.events)) {
      console.warn("Invalid LINE webhook payload format:", payload);
      return [];
    }

    this.providerId = payload.destination;
    return payload.events
      .map((event) => this.transformEvent(event))
      .filter(Boolean) as WebhookEvent[];
  }

  private isMessageEvent(event: LineEvent): event is LineMessageEvent {
    return event.type === 'message';
  }

  private transformEvent(event: LineEvent): WebhookEvent | null {
    try {
      console.log("Transforming LINE event:", event);

      // Only transform message for message events
      const message = this.isMessageEvent(event) ? this.transformMessage(event) : undefined;

      const unifiedEvent: WebhookEvent = {
        id: event.webhookEventId ?? `line-${event.timestamp}`,
        platform: Platform.LINE,
        event_type: this.getEventType(event),
        timestamp: new Date(event.timestamp).getTime(),
        channel_id: this.providerId,  //this.getChannelId(event),
        message,
        raw_event: event,
      };

      return unifiedEvent;
    } catch (error) {
      console.error("Error transforming LINE event:", error);
      return null;
    }
  }

  private transformMessage(event: LineMessageEvent): Message | undefined {
    if (!event.message) return undefined;

    const baseMessage: Message = {
      id: event.message.id,
      type: this.getMessageType(event.message),
      status: MessageStatus.DELIVERED,
      direction: MessageDirection.INBOUND,
      timestamp: new Date(event.timestamp).getTime(),
      sender: this.transformSender(event),
      recipient: this.transformRecipient(),
      content: this.transformContent(event),
      metadata: {
        source: "line",
        sequence_number: parseInt(event.message.id),
        client_message_id: event.webhookEventId,
      },
    };

    if (this.isTemplateMessage(event.message)) {
      const interactive = this.transformInteractive(event.message);
      if (interactive) {
        baseMessage.interactive = interactive;
      }
    }

    if (event.message.type === "text" && event.message.text?.includes("@")) {
      baseMessage.mentions = this.extractMentions(event.message.text);
    }

    return baseMessage;
  }

  private isTemplateMessage(
    message: LineMessageContent
  ): message is LineTemplateMessage {
    return message.type === "template";
  }

  private transformContent(event: LineMessageEvent): Content {
    const message = event.message;
    if (!message) return {};

    const content: Content = {};

    switch (message.type) {
      case "text":
        content.text = message.text;
        content.language = "ja";
        break;

      case "image":
        content.attachments = [
          {
            id: message.id,
            type: AttachmentType.IMAGE,
            url: message.contentProvider?.originalContentUrl || "",
            thumbnail_url: message.contentProvider?.previewImageUrl,
            size: message.size,
          },
        ];
        break;

      case "video":
        content.attachments = [
          {
            id: message.id,
            type: AttachmentType.VIDEO,
            url: message.contentProvider?.originalContentUrl || "",
            thumbnail_url: message.contentProvider?.previewImageUrl,
            duration: message.duration,
          },
        ];
        break;

      case "audio":
        content.attachments = [
          {
            id: message.id,
            type: AttachmentType.AUDIO,
            url: message.contentProvider?.originalContentUrl || "",
            duration: message.duration,
          },
        ];
        break;

      case "file":
        content.attachments = [
          {
            id: message.id,
            type: AttachmentType.FILE,
            url: message.contentProvider?.originalContentUrl || "",
            name: message.fileName,
            size: message.size,
          },
        ];
        break;

      case "location":
        content.location = {
          latitude: message.latitude || 0,
          longitude: message.longitude || 0,
          address: message.address,
        };
        break;

      case "sticker":
        content.sticker = {
          sticker_id: message.stickerId || "",
          package_id: message.packageId || "",
          keywords: message.keywords,
        };
        break;
    }

    return content;
  }

  private transformInteractive(
    message: LineTemplateMessage
  ): Interactive | undefined {
    if (!message.template) return undefined;

    return {
      type: InteractiveType.BUTTON,
      payload: {
        buttons:
          message.template.actions?.map((action) => ({
            type: this.transformButtonType(action.type),
            title: action.label,
            payload: action.data,
            url: action.uri,
          })) || [],
      },
    };
  }

  private transformButtonType(lineActionType: string): ButtonType {
    switch (lineActionType) {
      case "uri":
        return ButtonType.URL;
      case "postback":
        return ButtonType.POSTBACK;
      case "tel":
      case "phone":
        return ButtonType.PHONE;
      default:
        console.warn(
          `Unknown LINE button type: ${lineActionType}, defaulting to POSTBACK`
        );
        return ButtonType.POSTBACK;
    }
  }

  private transformSender(event: LineMessageEvent) {
    return {
      id: event.source.userId || "",
      type: SenderType.USER,
      name: "", // Requires additional API call
      platform_metadata: {
        language: "ja",
        timezone: "Asia/Tokyo",
      },
    };
  }

  private transformRecipient() {
    return {
      id: this.providerId,
      type: RecipientType.BOT,
      // name: env.LINE_CHANNEL_NAME || "",
    };
  }

  private getMessageType(message: LineMessageContent): MessageType {
    switch (message.type) {
      case "text":
        return MessageType.TEXT;
      case "image":
        return MessageType.IMAGE;
      case "video":
        return MessageType.VIDEO;
      case "audio":
        return MessageType.AUDIO;
      case "file":
        return MessageType.FILE;
      case "location":
        return MessageType.LOCATION;
      case "sticker":
        return MessageType.STICKER;
      default:
        return MessageType.OTHER;
    }
  }

  private extractMentions(
    text: string
  ): Array<{ user_id: string; name: string; offset: number; length: number }> {
    const mentions = [];
    const mentionRegex = /@(\w+)/g;
    let match;

    while ((match = mentionRegex.exec(text)) !== null) {
      mentions.push({
        user_id: match[1], // Using the matched username as ID
        name: match[1],
        offset: match.index,
        length: match[0].length,
      });
    }

    return mentions;
  }

  private getChannelId(event: LineEvent): string {
    const source = event.source;
    if (source) {
      if (source.userId) {
        return source.userId;
      } else if (source.groupId) {
        return source.groupId;
      } else if (source.roomId) {
        return source.roomId;
      } else {
        console.warn("Unknown LINE channel ID source:", event);
        return "unknown"; // Or handle it differently
      }
    } else {
      console.warn("LINE event source is undefined:", event);
      return "unknown";
    }
  }

  private getEventType(event: LineEvent): GeneralEventType {
    switch (event.type) {
      case "message":
        switch (event.message?.type) {
          case "text":
          case "image":
          case "video":
          case "audio":
          case "location":
          case "sticker":
            return GeneralEventType.MESSAGE;
          default:
            console.warn(
              "Unknown LINE message type:",
              event.message?.type,
              event
            );
            return GeneralEventType.MESSAGE; // Generic message type
        }
      case "follow":
      case "unfollow":
      case "join":
      case "leave":
        return GeneralEventType.SYSTEM;
      case "postback":
      case "beacon":
        return GeneralEventType.MESSAGE;
      default:
        console.warn("Unknown LINE event type:", event.type, event);
        return GeneralEventType.SYSTEM; // Default to 'system' for unknown event types
    }
  }
}
