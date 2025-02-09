CREATE TABLE IF NOT EXISTS files (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  message_id TEXT NOT NULL,
  user_id TEXT NOT NULL,
  channel_id TEXT NOT NULL,
  content_type TEXT NOT NULL,
  content_key TEXT NOT NULL,
  provider TEXT NOT NULL,
  size INTEGER NOT NULL,
  mime_type TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  metadata TEXT,
  UNIQUE(message_id, provider)
);

CREATE INDEX idx_files_user_id ON files(user_id);
CREATE INDEX idx_files_channel_id ON files(channel_id);
CREATE INDEX idx_files_content_type ON files(content_type);
CREATE INDEX idx_files_created_at ON files(created_at);
