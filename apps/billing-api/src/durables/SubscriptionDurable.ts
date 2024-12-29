import { DurableObject } from "cloudflare:workers";
import { Env } from "~/types/hono.types";

export class SubscriptionDurable extends DurableObject {
  autoReply: number = 0;
  smartReply: number = 0;
  generativeReply: number = 0;
  checkSlips: number = 0;

  constructor(ctx: DurableObjectState, env: Env) {
    super(ctx, env);
    this.initialize();
  }

  private initialize() {
    console.log("Initializing SubscriptionDurable");
    this.ctx.blockConcurrencyWhile(async () => {
      const smartReply = await this.ctx.storage?.get<number>("smartReply");
      this.smartReply = smartReply || 0;

      const generativeReply =
        await this.ctx.storage?.get<number>("generativeReply");
      this.generativeReply = generativeReply || 0;

      const autoReply = await this.ctx.storage?.get<number>("autoReply");
      this.autoReply = autoReply || 0;

      const checkSlips = await this.ctx.storage?.get<number>("checkSlips");
      this.checkSlips = checkSlips || 0;
    });
  }

  private handleWebSocket(request: Request) {
    console.log("WebSocket connection requested");
    const [client, server] = Object.values(new WebSocketPair());

    this.ctx.acceptWebSocket(server);
    console.log("WebSocket connection established");

    return new Response(null, { status: 101, webSocket: client });
  }


  async incrementSmartReply(usage: number = 1) {
    const newValue = (this.smartReply += usage);
    await this.ctx.storage?.put("smartReply", newValue);
    this.broadcast();
    return newValue;
  }

  async incrementGenerativeReply(usage: number = 1) {
    const newValue = (this.generativeReply += usage);
    await this.ctx.storage?.put("generativeReply", newValue);
    this.broadcast();
    return newValue;
  }

  async incrementAutoReply(usage: number) {
    const newValue = (this.autoReply += usage);
    await this.ctx.storage?.put("autoReply", newValue);
    this.broadcast();
    return newValue;
  }

  async incrementCheckSlips(usage: number) {
    const newValue = (this.checkSlips += usage);
    await this.ctx.storage?.put("checkSlips", newValue);
    this.broadcast();
    return newValue;
  }


  get() {
    return {
      smart_reploy: this.smartReply,
      generative_reply: this.generativeReply,
      auto_reply: this.autoReply,
      check_slips: this.checkSlips,
    };
  }

  private broadcast() {
    this.ctx
      .getWebSockets()
      .forEach(async (ws) => ws.send(JSON.stringify({
        type: "billing_usage_updated",
        data: this.get(),
      })));
  }

  async fetch(request: Request) {
    return this.handleWebSocket(request);
  }
}
