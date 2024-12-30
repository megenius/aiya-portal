import { DirectusClient, readItem, readItems } from "@directus/sdk";
import { WorkerEnv } from "~/types/worker-configuration";
import { AdminClientType, getAdminDirectusClient } from "~/utils/directus";

interface Usage {
  smart_reply?: number;
  generative_reply?: number;
  auto_reply?: number;
  check_slip?: number;
}

interface QueueMessage {
  bot: string;
  type: string;
  count: number;
}

export async function handleBillingQueueMessage(
  batch: MessageBatch<QueueMessage>,
  env: WorkerEnv
) {
  const messages = batch.messages.map((message) => message.body);

  // Group messages by bot to minimize database calls
  const groupedByBot = messages.reduce(
    (acc, msg) => {
      const botId = msg.bot;
      if (!acc[botId]) {
        acc[botId] = [];
      }
      acc[botId].push(msg);
      return acc;
    },
    {} as Record<string, QueueMessage[]>
  );

  const directus = getAdminDirectusClient(
    env.DIRECTUS_URL,
    env.DIRECTUS_SERVICE_TOKEN
  );

  // Process each bot's messages
  for (const [botId, botMessages] of Object.entries(groupedByBot)) {
    try {
      await processBotMessages(directus, botId, botMessages, env);
    } catch (error) {
      console.error(`Error processing messages for bot ${botId}:`, error);
      // You might want to add these failed messages to a dead letter queue
    }
  }
}

async function processBotMessages(
  directus: AdminClientType,
  botId: string,
  messages: QueueMessage[],
  env: WorkerEnv
) {
  // Fetch bot and subscription info
  const bot = await directus.request(
    readItem("bots", botId, {
      fields: ["id", "name", "user_created"],
    })
  );

  const subscriptions = await directus.request(
    readItems("saas_subscriptions", {
      filter: {
        customer: {
          _eq: bot.user_created,
        },
        status: {
          _neq: "canceled",
        },
      },
      sort: ["-date_created"],
    })
  );

  if (subscriptions.length === 0) {
    throw new Error(`No active subscriptions found for bot ${botId}`);
  }

  // Aggregate usage
  const usage: Usage = messages.reduce((acc, msg) => {
    switch (msg.type) {
      case "smart":
        acc.smart_reply = (acc.smart_reply || 0) + msg.count;
        break;
      case "gen":
        acc.generative_reply = (acc.generative_reply || 0) + msg.count;
        break;
      case "auto":
        acc.auto_reply = (acc.auto_reply || 0) + msg.count;
        break;
      case "slip":
        acc.check_slip = (acc.check_slip || 0) + msg.count;
        break;
    }
    return acc;
  }, {} as Usage);

  // Update subscription usage
  const id = env.SUBSCRIPTION_DURABLE.idFromName(subscriptions[0].id);
  const subscriptionDurable = env.SUBSCRIPTION_DURABLE.get(id);

  // Increment usage metrics in parallel
  const incrementPromises = [];

  console.log(`Processing usage for bot ${botId}:`, usage);

  if (usage.smart_reply) {
    incrementPromises.push(
      subscriptionDurable.incrementSmartReply(usage.smart_reply)
    );
  }
  if (usage.generative_reply) {
    incrementPromises.push(
      subscriptionDurable.incrementGenerativeReply(usage.generative_reply)
    );
  }
  if (usage.auto_reply) {
    incrementPromises.push(
      subscriptionDurable.incrementAutoReply(usage.auto_reply)
    );
  }
  if (usage.check_slip) {
    incrementPromises.push(
      subscriptionDurable.incrementCheckSlips(usage.check_slip)
    );
  }

  await Promise.all(incrementPromises);
}
