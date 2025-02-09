import { DurableObject } from 'cloudflare:workers';
import { Env } from '~/types/hono.types';

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
  
  constructor(ctx: DurableObjectState, env: Env) {
    super(ctx, env);
    this.initializeTable();
  }

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
  }

  async upsertUser(user: LineUser) {
    this.sql.exec(`
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

  getUser(userId: string) {
    const cursor = this.sql.exec(
      `SELECT * FROM users WHERE userId = ?`,
      userId
    );
    const result = cursor.toArray()[0];
    return result || null;
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
}
