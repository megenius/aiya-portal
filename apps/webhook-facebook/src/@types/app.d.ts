export interface WebhookFacebookEvent {
  object: string
  entry: Entry[]
}

export interface Entry {
  id: string
  time: number
  messaging: Messaging[]
}

export interface Messaging {
  sender: Sender
  message: Message
  recipient: Recipient
  timestamp: number
}

export interface Sender {
  id: string
}

export interface Message {
  mid: string
  text: string
  quick_reply: QuickReply
  attachments?: Attachments[]
}

export interface QuickReply {
  payload: string
}

export interface Recipient {
  id: string
}

interface Attachments {
  type: string
  payload: Payload
}

interface Payload {
  url: string
}