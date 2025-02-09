import { MessageBatch } from "@cloudflare/workers-types";
import { WorkerEnv } from "~/types/worker-configuration";
import { ConversationMessage } from "../types/app.types";

export async function handleConversationQueue(
  batch: MessageBatch<ConversationMessage>, 
  env: WorkerEnv
) {
  // Create a map to store latest message per user
  const latestMessages = new Map<string, {
    message: ConversationMessage,
    timestamp: number
  }>();

  // Find latest message for each user
  for (const message of batch.messages) {
    const { userId } = message.body;
    const timestamp = message.timestamp || Date.now();
    
    const existing = latestMessages.get(userId);
    if (!existing || existing.timestamp < timestamp) {
      latestMessages.set(userId, { message: message.body, timestamp });
    }
    // Acknowledge all messages as we'll process the latest ones
    message.ack();
  }

  // Process only the latest message per user
  for (const [userId, { message }] of latestMessages) {
    try {
      const { platform, lastEvent } = message;
      console.log("Processing latest conversation message", { userId, platform, lastEvent: JSON.stringify(lastEvent) });

      const channelId = env.CHANNEL_DURABLE.idFromName(lastEvent.channel_id);
      const channelObject = env.CHANNEL_DURABLE.get(channelId);

      await channelObject.updateConversation({
        userId,
        platform,
        lastEvent
      });
    } catch (error) {
      console.error("Error processing latest conversation message:", error);
      // Can't retry since we already ack'd the messages
      // Log error for monitoring
      console.error(`Failed to process message for user ${userId}:`, error);
    }
  }
}
