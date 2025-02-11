import { DurableObject } from "cloudflare:workers";
import { Env } from "~/types/hono.types";

export class Flight extends DurableObject {
  sql = this.ctx.storage.sql;

  constructor(ctx: DurableObjectState, env: Env) {
    super(ctx, env);
    this.initializeSeats();
  }

  private initializeSeats() {
    const cursor = this.sql.exec(`PRAGMA table_list`);

    // Check if a table exists.
    if ([...cursor].find((t) => t.name === "seats")) {
      console.log("Table already exists");
      return;
    }

    this.sql.exec(`
          CREATE TABLE IF NOT EXISTS seats (
          seatId TEXT PRIMARY KEY,
          occupant TEXT
          )
        `);

    // For this demo, we populate the table with 60 seats.
    // Since SQLite in DOs is fast, we can do a query per INSERT instead of batching them in a transaction.
    for (let row = 1; row <= 10; row++) {
      for (let col = 0; col < 6; col++) {
        const seatNumber = `${row}${String.fromCharCode(65 + col)}`;
        this.sql.exec(`INSERT INTO seats VALUES (?, null)`, seatNumber);
      }
    }
  }
}
