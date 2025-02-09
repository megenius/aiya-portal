export interface File {
  id: number;
  message_id: string;
  user_id: string;
  channel_id: string;
  content_type: string;
  content_key: string;
  provider: string;
  size: number;
  mime_type?: string;
  created_at: string;
  metadata?: Record<string, unknown>;
}

export type CreateFile = Omit<File, 'id' | 'created_at'>;
