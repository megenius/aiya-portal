import { Context } from "hono";
import { Env } from "~/types/hono.types";

export const getConversations = async (c: Context<Env>) => {
  const providerId = c.req.param("providerId");
  const limit = Number(c.req.query("limit")) || 20;
  const cursor = c.req.query("cursor");

  try {
    const channelDurable = c.get("channelDurable");
    const data = await channelDurable.getRecentConversations({ limit, cursor });

    const conversations = data.conversations.map((conv: any) => {
      // Determine the appropriate last message to display
      let lastMessage = "No message";

      if (conv.lastEvent) {
        // Check if there's a beacon event with hwid
        if (conv.lastEvent.event_type === 'beacon' && conv.lastEvent.beacon?.hwid) {
          lastMessage = `Beacon detected: ${conv.lastEvent.beacon.hwid}`;
        } 
        // Otherwise fall back to regular message content if available
        else if (conv.lastEvent.message?.content?.text) {
          lastMessage = conv.lastEvent.message.content.text;
        }
      }
      
      return {
        id: conv.userId,
        channel_id: providerId,
        last_message: lastMessage,
        updated_at: new Date(conv.updatedAt).toISOString(),
        contact: {
          id: conv.userId,
          name: conv.userProfile?.displayName || conv.userId,
          avatar: conv.userProfile?.pictureUrl,
        },
      };
    });

    return c.json({
      data: conversations,
      cursor: data.nextCursor,
    });
  } catch (error) {
    console.error("Error fetching conversations:", error);
    return c.json(
      {
        error: "Failed to fetch conversations",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      500
    );
  }
};


export const getUsersWithBeaconEvents = async (c: Context<Env>) => {
  const providerId = c.req.param("providerId");
  const limit = Number(c.req.query("limit")) || 20;
  const cursor = c.req.query("cursor");
  const eventType = c.req.query("event_type");

  try {
    const channelDurable = c.get("channelDurable");
    const data = await channelDurable.getUsersWithBeaconEvents({ 
      limit, 
      cursor,
      eventType 
    });

    const users = data.users.map((user: any) => {
      return {
        id: user.userId,
        channel_id: providerId,
        name: user.userProfile?.displayName || user.userId,
        avatar: user.userProfile?.pictureUrl,
        event_type: user.lastBeaconEvent?.event_type || "unknown",
        last_beacon: user.lastBeaconEvent ? {
          type: user.lastBeaconEvent.beacon?.type || "unknown",
          hwid: user.lastBeaconEvent.beacon?.hwid || "unknown",
          device_message: user.lastBeaconEvent.beacon?.dm,
          timestamp: new Date(user.lastBeaconEvent.timestamp).toISOString()
        } : null,
        updated_at: new Date(user.updatedAt).toISOString()
      };
    });

    return c.json({
      data: users,
      cursor: data.nextCursor,
    });
  } catch (error) {
    console.error("Error fetching users with beacon events:", error);
    return c.json(
      {
        error: "Failed to fetch users with beacon events",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      500
    );
  }
};


