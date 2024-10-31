export interface CAPIEvents {
  event_name: string;
  event_time: number;
  action_source: string;
  messaging_channel: string;
  user_data: UserData;
  custom_data: CustomData;
  bot_id: string;
  dataset: string;
  fbtrace_id: string;
  created_at: string;
}

interface UserData {
  page_id: string;
  page_scoped_user_id: string;
}

interface CustomData {
  currency: string;
  value: number;
}
