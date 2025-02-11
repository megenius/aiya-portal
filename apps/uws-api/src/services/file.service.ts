import { D1Database } from '@cloudflare/workers-types';
import { Logger } from '~/utils/logger';
import { CreateFile, File } from '~/types/file.types';

export class FileService {
  private readonly log = new Logger('FileService');

  constructor(private readonly db: D1Database) {}

  async createFile(data: CreateFile): Promise<File> {
    try {
      const { success } = await this.db
        .prepare(`
          INSERT INTO files (
            message_id, user_id, channel_id, content_type, content_key,
            provider, size, mime_type, metadata
          ) VALUES (
            ?, ?, ?, ?, ?, ?, ?, ?, ?
          )
        `)
        .bind(
          data.message_id,
          data.user_id,
          data.channel_id,
          data.content_type,
          data.content_key,
          data.provider,
          data.size,
          data.mime_type,
          data.metadata ? JSON.stringify(data.metadata) : null
        )
        .run();

      if (!success) {
        throw new Error('Failed to create file record');
      }

      const file = await this.getFileByMessageId(data.message_id, data.provider);
      if (!file) {
        throw new Error('Failed to retrieve created file record');
      }

      return file;
    } catch (error) {
      this.log.error('Failed to create file record', { error, data });
      throw error;
    }
  }

  async getFileByMessageId(messageId: string, provider: string): Promise<File | null> {
    try {
      const result = await this.db
        .prepare('SELECT * FROM files WHERE message_id = ? AND provider = ?')
        .bind(messageId, provider)
        .first<File>();

      if (!result) {
        return null;
      }

      if (result.metadata) {
        result.metadata = JSON.parse(result.metadata as unknown as string);
      }

      return result;
    } catch (error) {
      this.log.error('Failed to get file record', { error, messageId });
      throw error;
    }
  }

  async getFilesByUserId(userId: string, channelId?: string): Promise<File[]> {
    try {
      const query = channelId 
        ? 'SELECT * FROM files WHERE user_id = ? AND channel_id = ? ORDER BY created_at DESC'
        : 'SELECT * FROM files WHERE user_id = ? ORDER BY created_at DESC';
      
      const stmt = this.db.prepare(query);
      const results = channelId 
        ? await stmt.bind(userId, channelId).all<File>()
        : await stmt.bind(userId).all<File>();

      return results.results?.map(file => ({
        ...file,
        metadata: file.metadata ? JSON.parse(file.metadata as unknown as string) : undefined
      })) ?? [];
    } catch (error) {
      this.log.error('Failed to get files', { error, userId, channelId });
      throw error;
    }
  }
}
