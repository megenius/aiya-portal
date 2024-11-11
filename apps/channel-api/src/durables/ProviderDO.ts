import { DurableObject } from "cloudflare:workers";
import { Env } from "~/types/hono.types";

interface WebSocketClient extends WebSocket {
  metadata?: {
    userId?: string;
    roomId?: string;
    filters?: Record<string, any>;
  };
}

interface BroadcastOptions {
  filter?: {
    userId?: string;
    roomId?: string;
    custom?: (client: WebSocketClient) => boolean;
  };
  exclude?: string[]; // Array of client IDs to exclude
}

export class ProviderDO extends DurableObject {
  private clients: Map<string, WebSocketClient>;

  constructor(ctx: DurableObjectState, env: Env) {
    super(ctx, env);
    this.clients = new Map();
    this.initialize();
  }

  private initialize() {}

  private handleWebSocket(request: Request) {
    console.log("WebSocket connection requested");
    const [client, server] = Object.values(new WebSocketPair());
    
    // Extract metadata from request
    const url = new URL(request.url);
    const userId = url.searchParams.get('userId') as string;
    const roomId = url.searchParams.get('roomId') as string;
    
    // Add metadata to the server WebSocket
    (server as WebSocketClient).metadata = {
      userId,
      roomId,
      filters: {}
    };

    // Generate a unique client ID
    const clientId = crypto.randomUUID();
    this.clients.set(clientId, server as WebSocketClient);

    server.addEventListener('close', () => {
      this.clients.delete(clientId);
    });

    this.ctx.acceptWebSocket(server);
    console.log("WebSocket connection established for client:", clientId);

    return new Response(null, { 
      status: 101, 
      webSocket: client 
    });
  }

  public broadcast(payload: any, options?: BroadcastOptions) {
    const message = JSON.stringify(payload);
    let filteredClients = Array.from(this.clients.values());

    if (options?.filter) {
      filteredClients = filteredClients.filter(client => {
        // Skip if client doesn't have metadata
        if (!client.metadata) return false;

        // Apply userId filter
        if (options.filter?.userId && 
            client.metadata.userId !== options.filter.userId) {
          return false;
        }

        // Apply roomId filter
        if (options.filter?.roomId && 
            client.metadata.roomId !== options.filter.roomId) {
          return false;
        }

        // Apply custom filter if provided
        if (options.filter?.custom && 
            !options.filter.custom(client)) {
          return false;
        }

        return true;
      });
    }

    // Remove excluded clients
    if (options?.exclude) {
      filteredClients = filteredClients.filter(client => 
        !options.exclude?.includes(client.metadata?.userId || '')
      );
    }

    // Send message to filtered clients
    filteredClients.forEach(client => {
      try {
        client.send(message);
      } catch (error) {
        console.error('Failed to send message to client:', error);
      }
    });

    return new Response(JSON.stringify({ 
      totalClients: this.clients.size,
      sentTo: filteredClients.length 
    }), { status: 200 });
  }

  async fetch(request: Request) {
    return this.handleWebSocket(request);
  }
}