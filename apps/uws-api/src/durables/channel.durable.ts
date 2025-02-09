import { DurableObject, DurableObjectState } from "cloudflare:workers";
import { Env } from "~/types/hono.types";
import { WebhookEvent } from "../types/events";

interface LineUser {
  userId: string;
  displayName: string;
  pictureUrl?: string;
  statusMessage?: string;
  language?: string;
  updatedAt: number;
}

export class ChannelDurableObject extends DurableObject {
  sql = this.ctx.storage.sql;

  constructor(private ctx: DurableObjectState, private env: Env) {
    super(ctx, env);
    this.initializeTable();
  }

  // 1. แก้ไขโครงสร้างตาราง
  private initializeTable() {
    this.sql.exec(`
      CREATE TABLE IF NOT EXISTS users (
        userId TEXT PRIMARY KEY,
        displayName TEXT NOT NULL,
        pictureUrl TEXT,
        statusMessage TEXT,
        language TEXT,
        updatedAt INTEGER NOT NULL,
        blocked BOOLEAN DEFAULT FALSE,
        following BOOLEAN DEFAULT TRUE
      )
    `);

    this.sql.exec(`
      CREATE TABLE IF NOT EXISTS conversations (
        userId TEXT PRIMARY KEY,
        platform TEXT NOT NULL,
        lastEvent TEXT NOT NULL,
        updatedAt INTEGER NOT NULL,
        FOREIGN KEY(userId) REFERENCES users(userId)
      )
    `);
  }

  async upsertUser(user: LineUser) {
    this.sql.exec(
      `
      INSERT OR REPLACE INTO users 
      (userId, displayName, pictureUrl, statusMessage, language, updatedAt)
      VALUES (?, ?, ?, ?, ?, ?)
    `,
      user.userId,
      user.displayName,
      user.pictureUrl || null,
      user.statusMessage || null,
      user.language || null,
      user.updatedAt
    );

    return this.getUser(user.userId);
  }

  getUser(userId: string): LineUser | null {
    const cursor = this.sql.exec(
      `SELECT * FROM users WHERE userId = ?`,
      userId
    );
    const row = cursor.toArray()[0];

    if (!row) return null;

    // Type-safe conversion from SQL result to LineUser
    return {
      userId: String(row.userId),
      displayName: String(row.displayName),
      pictureUrl: row.pictureUrl ? String(row.pictureUrl) : undefined,
      statusMessage: row.statusMessage ? String(row.statusMessage) : undefined,
      language: row.language ? String(row.language) : undefined,
      updatedAt: Number(row.updatedAt),
    } satisfies LineUser;
  }

  getAllUsers() {
    const cursor = this.sql.exec(`SELECT * FROM users`);
    return cursor.toArray();
  }

  updateUserStatus(userId: string, blocked: boolean, following: boolean) {
    this.sql.exec(
      `UPDATE users SET blocked = ?, following = ? WHERE userId = ?`,
      blocked,
      following,
      userId
    );
    return this.getUser(userId);
  }

  // 2. แก้ไข updateConversation method
  async updateConversation(data: {
    userId: string;
    platform: string;
    lastEvent: WebhookEvent;
  }): Promise<void> {
    this.sql.exec(
      `
      INSERT OR REPLACE INTO conversations 
      (userId, platform, lastEvent, updatedAt)
      VALUES (?, ?, ?, ?)
      `,
      data.userId,
      data.platform,
      JSON.stringify(data.lastEvent),
      data.lastEvent.timestamp  // ใช้ timestamp จาก event แทน Date.now()
    );
  }

  async getRecentConversations(query: {
    limit: number;
    cursor?: string;
  }): Promise<{
    conversations: Array<{
      userId: string;
      platform: string;
      lastEvent: WebhookEvent;
      userProfile?: LineUser;
      updatedAt: number;
    }>;
    nextCursor?: string;
  }> {
    try {
      const { limit, cursor } = query;

      const cursorClause = cursor 
        ? 'AND c.updatedAt < $cursor' 
        : '';

      const params = cursor 
        ? [limit + 1, cursor] 
        : [limit + 1];

      const resultCursor = this.sql.prepare(`
        SELECT 
          c.*,
          u.displayName,
          u.pictureUrl,
          u.statusMessage,
          u.language,
          u.updatedAt as userUpdatedAt
        FROM conversations c
        LEFT JOIN users u ON c.userId = u.userId
        WHERE 1=1 ${cursorClause}
        ORDER BY c.updatedAt DESC
        LIMIT ?
      `).bind(...params);

      const rows = resultCursor.toArray();
      const conversations = rows.slice(0, limit).map(row => ({
        userId: String(row.userId),
        platform: String(row.platform),
        lastEvent: JSON.parse(String(row.lastEvent)) as WebhookEvent,
        userProfile: row.displayName ? {
          userId: String(row.userId),
          displayName: String(row.displayName),
          pictureUrl: row.pictureUrl ? String(row.pictureUrl) : undefined,
          statusMessage: row.statusMessage ? String(row.statusMessage) : undefined,
          language: row.language ? String(row.language) : undefined,
          updatedAt: Number(row.userUpdatedAt),
        } : undefined,
        updatedAt: Number(row.updatedAt),
      }));

      const nextCursor = rows.length > limit 
        ? String(rows[limit - 1].updatedAt)
        : undefined;

      return {
        conversations,
        nextCursor,
      };
    } catch (error) {
      console.error('Error in getRecentConversations:', error);
      throw new Error('Failed to fetch conversations');
    }
  }
}
