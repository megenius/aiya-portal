export interface BotsSlips {
  version: string
  timestamp: string
  event_id: string
  environment: string
  data: Data
  metadata: Metadata
  created_at: string
}

export interface Data {
  transaction_status: string
  transaction_time: string
  payer: Payer
  payee: Payee
  transaction_details: TransactionDetails
  qr_code: string
  image_url: string
}

export interface Payer {
  name: string
  bank: string
  account_number: string
}

export interface Payee {
  name: string
  bank: string
  account_number: string
}

export interface TransactionDetails {
  transaction_id: string
  amount: number
  currency: string
  fee: number
}

export interface Metadata {
  platform: string
  provider_id: string
  user_id: string
  bot_id: string
}
