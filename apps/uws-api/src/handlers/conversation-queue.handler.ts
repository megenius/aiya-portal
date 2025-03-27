import { MessageBatch } from "@cloudflare/workers-types";
import { WorkerEnv } from "~/types/worker-configuration";
import { ConversationMessage } from "../types/app.types";

// Define interface for channel object to improve type safety
interface ChannelObject {
  updateConversation(data: {
    userId: string;
    platform: string;
    lastEvent: any;
  }): Promise<void>;
}

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

  // Add rate limiting - process in chunks if too many messages
  const BATCH_SIZE = 5;
  const userIds = Array.from(latestMessages.keys());
  
  for (let i = 0; i < userIds.length; i += BATCH_SIZE) {
    const batchUserIds = userIds.slice(i, i + BATCH_SIZE);
    await Promise.all(
      batchUserIds.map(userId => processUserMessage(userId, latestMessages.get(userId)!.message, env))
    );
    
    // Small delay between batches to prevent overwhelming downstream systems
    if (i + BATCH_SIZE < userIds.length) {
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }
}

async function processUserMessage(
  userId: string, 
  message: ConversationMessage, 
  env: WorkerEnv
): Promise<void> {
  const { platform, lastEvent } = message;
  
  // Structured logging
  const logContext = { 
    userId, 
    platform, 
    eventType: lastEvent?.event_type,
    channelId: lastEvent?.channel_id
  };
  
  console.log("Processing latest conversation message", logContext);
  
  try {
    // Validate required data is present
    if (!lastEvent?.channel_id) {
      console.error("Missing channel_id in lastEvent", logContext);
      return;
    }
    
    const channelId = env.CHANNEL_DURABLE.idFromName(lastEvent.channel_id);
    const channelObject = env.CHANNEL_DURABLE.get(channelId) as unknown as ChannelObject;

    // Implement retry logic with exponential backoff
    const MAX_RETRIES = 3;
    let retries = 0;
    
    while (retries < MAX_RETRIES) {
      try {
        await channelObject.updateConversation({
          userId,
          platform,
          lastEvent
        });
        // If successful, break out of retry loop
        break;
      } catch (error) {
        retries++;
        if (retries >= MAX_RETRIES) {
          throw error; // Rethrow if max retries reached
        }
        // Exponential backoff with jitter
        const delay = Math.floor(100 * Math.pow(2, retries) * (0.9 + Math.random() * 0.2));
        console.warn(`Retry ${retries}/${MAX_RETRIES} for user ${userId} after ${delay}ms`, { error });
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  } catch (error) {
    // Enhanced error logging with context
    console.error("Failed to process conversation message:", {
      ...logContext,
      error: error instanceof Error ? {
        name: error.name,
        message: error.message,
        stack: error.stack
      } : error
    });
  }
}
