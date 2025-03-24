import { Context } from "hono";
import { Env } from "~/types/hono.types";

export const getConversations = async (c: Context<Env>) => {
  const providerId = c.req.param("providerId");
  const limit = Number(c.req.query("limit")) || 20;
  const cursor = c.req.query("cursor");

  try {
    const channelDurable = c.get("channelDurable");
    const data = await channelDurable.getRecentConversations({ limit, cursor });

    const conversations = data.conversations.map((conv: any) => ({
      id: conv.userId,
      channel_id: providerId,
      last_message: conv.lastEvent.message?.content?.text || "No message",
      updated_at: new Date(conv.updatedAt).toISOString(),
      contact: {
        id: conv.userId,
        name: conv.userProfile?.displayName || conv.userId,
        avatar: conv.userProfile?.pictureUrl,
      },
    }));

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
