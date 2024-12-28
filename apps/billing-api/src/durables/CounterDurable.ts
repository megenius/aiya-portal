import { DurableObject } from "cloudflare:workers";
import { Hono } from "hono";
import { Env } from "~/types/hono.types";

export class CounterDurable extends DurableObject {
  value: number = 0;
  currentlyConnectedWebSockets: number = 0;

  constructor(ctx: DurableObjectState, env: Env) {
    super(ctx, env);
    this.initialize();
  }

  private initialize() {
    console.log("Initializing CounterDurable");
    this.ctx.blockConcurrencyWhile(async () => {
      const stored = await this.ctx.storage?.get<number>("value");
      this.value = stored || 0;
    });
    this.currentlyConnectedWebSockets = 0;
  }

  private handleWebSocket(request: Request) {
    console.log("WebSocket connection requested");
    const [client, server] = Object.values(new WebSocketPair());

    this.ctx.acceptWebSocket(server);
    console.log("WebSocket connection established");
    this.currentlyConnectedWebSockets++;

    // and the total number of connections with the "[Durable Object]: " prefix
    server.addEventListener("message", (event) => {
      server.send(
        `[Durable Object] currentlyConnectedWebSockets: ${this.currentlyConnectedWebSockets}`
      );
    });

    // If the client closes the connection, the runtime will close the connection too.
    server.addEventListener("close", (cls) => {
      this.currentlyConnectedWebSockets -= 1;
      server.close(cls.code, "Durable Object is closing WebSocket");
    });

    return new Response(null, { status: 101, webSocket: client });
  }

  async sayHello() {
    return "Hello, World!";
  }

  async increment() {
    const newValue = ++this.value;
    await this.ctx.storage?.put("value", newValue);
    this.broadcast();
    return newValue;
  }

  async decrement() {
    const newValue = --this.value;
    await this.ctx.storage?.put("value", newValue);
    this.broadcast();
    return newValue;
  }

  get() {
    return this.value;
  }

  private broadcast() {
    this.ctx
      .getWebSockets()
      .forEach(async (ws) => ws.send(JSON.stringify(this.get())));
  }

  async fetch(request: Request) {
    return this.handleWebSocket(request);
  }
}
