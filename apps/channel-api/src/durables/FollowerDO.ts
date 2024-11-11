import { DurableObject } from "cloudflare:workers";
import { Env } from "~/types/hono.types";

export class FollowerDO extends DurableObject {
  constructor(ctx: DurableObjectState, env: Env) {
    super(ctx, env);
    this.initialize();
  }

  private initialize() {}

  private handleWebSocket(request: Request) {
    console.log("WebSocket connection requested");
    const [client, server] = Object.values(new WebSocketPair());

    this.ctx.acceptWebSocket(server);
    console.log("WebSocket connection established");

    return new Response(null, { status: 101, webSocket: client });
  }

  async sayHello() {
    return "Hello, World!";
  }

  async fetch(request: Request) {
    return this.handleWebSocket(request);
  }
}
