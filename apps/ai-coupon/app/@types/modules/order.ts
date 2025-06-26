export interface BotsOrders {
  version: string
  timestamp: string
  event_id: string
  environment: string
  data: Data
  metadata: Metadata
  created_at: string
}

export interface Data {
  _name: string
  promotion: string
  deposit: number
  amount: number
  phone: string
}

export interface Metadata {
  platform: string
  provider_id: string
  user_id: string
  bot_id: string
}
