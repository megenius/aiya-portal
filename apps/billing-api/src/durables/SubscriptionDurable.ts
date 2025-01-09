import { DurableObject } from "cloudflare:workers";
import { Env } from "~/types/hono.types";

export class SubscriptionDurable extends DurableObject {
  autoReply: number = 0;
  smartReply: number = 0;
  generativeReply: number = 0;
  checkSlip: number = 0;

  constructor(ctx: DurableObjectState, env: Env) {
    super(ctx, env);
    this.initialize();
  }

  private initialize() {
    // console.log("Initializing SubscriptionDurable");
    this.ctx.blockConcurrencyWhile(async () => {
      const autoReply = await this.ctx.storage?.get<number>("autoReply");
      this.autoReply = autoReply || 0;

      const smartReply = await this.ctx.storage?.get<number>("smartReply");
      this.smartReply = smartReply || 0;

      const generativeReply =
        await this.ctx.storage?.get<number>("generativeReply");
      this.generativeReply = generativeReply || 0;

      const checkSlip = await this.ctx.storage?.get<number>("checkSlip");
      this.checkSlip = checkSlip || 0;
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
    const newValue = (this.checkSlip += usage);
    await this.ctx.storage?.put("checkSlip", newValue);
    this.broadcast();
    return newValue;
  }


  get() {
    return {
      auto_reply: this.autoReply,
      smart_reply: this.smartReply,
      generative_reply: this.generativeReply,
      check_slip: this.checkSlip,
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
