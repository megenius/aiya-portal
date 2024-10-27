import { DurableObject } from "cloudflare:workers";
import { Env } from "~/types/hono.types";

export class Follower extends DurableObject {
  sql = this.ctx.storage.sql;

  constructor(ctx: DurableObjectState, env: Env) {
    super(ctx, env);
    this.initialize();
  }

  private initialize() {
    const cursor = this.sql.exec(`PRAGMA table_list`);

    // Check if a table exists.
    if ([...cursor].find((t) => t.name === "followers")) {
      console.log("Table already exists");
      return;
    }

    this.sql.exec(`
      CREATE TABLE IF NOT EXISTS followers (
        id TEXT PRIMARY KEY,
        name TEXT,
        picture_url TEXT 
      )
    `);
  }
}
