import { DurableObject } from "cloudflare:workers";
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

  constructor(protected ctx: DurableObjectState, protected env: Env) {
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
    await this.sql.exec(
      `INSERT OR REPLACE INTO conversations (userId, platform, lastEvent, updatedAt)
       VALUES (?, ?, ?, ?)`,
      data.userId,
      data.platform,
      JSON.stringify(data.lastEvent),
      data.lastEvent.timestamp
    );

    // Broadcast the update to all connected clients
    this.broadcast({
      type: "conversation_updated",
      userId: data.userId,
      platform: data.platform,
      timestamp: data.lastEvent.timestamp
    });
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
        ? 'AND c.updatedAt < ?' 
        : '';

      const params = cursor 
        ? [limit + 1, cursor] 
        : [limit + 1];

      const resultCursor = this.sql.exec(`
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
      `, ...params);

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

  async getUsersWithBeaconEvents(query: {
    limit: number;
    cursor?: string;
    eventType?: string;
  }): Promise<{
    users: Array<{
      userId: string;
      platform: string;
      lastBeaconEvent: WebhookEvent;
      userProfile?: LineUser;
      updatedAt: number;
    }>;
    nextCursor?: string;
  }> {
    try {
      const { limit, cursor, eventType } = query;

      const cursorClause = cursor 
        ? 'AND c.updatedAt < ?' 
        : '';
      
      const eventTypeClause = eventType
        ? "AND json_extract(c.lastEvent, '$.event_type') = ?"
        : "AND json_extract(c.lastEvent, '$.event_type') = 'beacon'";

      let params = [];
      
      // Build params array based on conditions
      if (cursor && eventType) {
        params = [eventType, cursor, limit + 1];
      } else if (cursor) {
        params = [cursor, limit + 1];
      } else if (eventType) {
        params = [eventType, limit + 1];
      } else {
        params = [limit + 1];
      }

      const resultCursor = this.sql.exec(`
        SELECT 
          c.*,
          u.displayName,
          u.pictureUrl,
          u.statusMessage,
          u.language,
          u.updatedAt as userUpdatedAt
        FROM conversations c
        LEFT JOIN users u ON c.userId = u.userId
        WHERE 1=1 
          ${eventTypeClause}
          ${cursorClause}
        ORDER BY c.updatedAt DESC
        LIMIT ?
      `, ...params);

      const rows = resultCursor.toArray();
      const users = rows.slice(0, limit).map(row => ({
        userId: String(row.userId),
        platform: String(row.platform),
        lastBeaconEvent: JSON.parse(String(row.lastEvent)) as WebhookEvent,
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
        users,
        nextCursor,
      };
    } catch (error) {
      console.error('Error in getUsersWithBeaconEvents:', error);
      throw new Error('Failed to fetch users with beacon events');
    }
  }

  private handleWebSocket(request: Request) {
    console.log("[Channel] WebSocket connection requested");
    
    if (request.headers.get("Upgrade") !== "websocket") {
      return new Response("Expected websocket", { status: 400 });
    }

    const [client, server] = Object.values(new WebSocketPair());

    // server.accept();
    console.log("[Channel] WebSocket connection established");

    // Store the WebSocket for broadcasting
    this.ctx.acceptWebSocket(server);

    return new Response(null, {
      status: 101,
      statusText: "Switching Protocols",
      headers: {
        "Upgrade": "websocket",
        "Connection": "Upgrade"
      },
      webSocket: client
    });
  }

  async fetch(request: Request) {
    try {
      return this.handleWebSocket(request);
    } catch (error) {
      console.error("[Channel] Error handling request:", error);
      return new Response("Internal Server Error", { status: 500 });
    }
  }

  // Add a broadcast method for sending updates to connected clients
  private broadcast(data: any) {
    const message = JSON.stringify({
      type: "channel_update",
      data
    });

    this.ctx.getWebSockets().forEach(ws => {
      try {
        ws.send(message);
      } catch (error) {
        console.error("[Channel] Error broadcasting message:", error);
      }
    });
  }
}
