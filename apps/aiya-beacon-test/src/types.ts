

export interface LineWebhook {
  destination: string;
  events: Event[];
}

export interface Event {
  type: string;
  message?: Message;
  beacon?: Beacon;
  webhookEventId: string;
  deliveryContext: DeliveryContext;
  timestamp: number;
  source: Source;
  replyToken: string;
  mode: string;
}

export interface Beacon {
  hwid: string;
  type: string;
  dm: string;
}

export interface Message {
  type: string;
  id: string;
  quoteToken: string;
  text: string;
}

export interface DeliveryContext {
  isRedelivery: boolean;
}

export interface Source {
  type: string;
  userId: string;
}
