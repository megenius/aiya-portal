import {
  createItem,
  deleteItem,
  readItem,
  readItems,
  updateItem,
} from "@directus/sdk";
import { Context } from "hono";
import { createFactory } from "hono/factory";
import { logger } from "hono/logger";
import { cachingMiddleware } from "~/middlewares/cache-get.middleware";
import {
  Bot,
  BotIntent,
  BotIntentImport,
  BotKnowledge,
  Channel,
  IntentQuestion,
} from "~/types/app";
import { Env } from "~/types/hono.types";
import { randomHexString } from "@repo/shared/utils";
import * as _ from "lodash";
import { hasItemUpdated } from "~/utils/kv";
import { directusMiddleware } from "~/middlewares/directus.middleware";
import { knowledgeMiddleware } from "~/middlewares/knowledge.middleware";
import { getKnowledge } from "~/services/knowledge.service";
import { textEmbeddingMiddleware } from "~/middlewares/text-embedding.middleware";

const factory = createFactory<Env>();

export const getBotKnowledgeHandler = factory.createHandlers(
  cachingMiddleware({
    ttl: 60 * 60,
    revalidate: async (c: Context<Env>, cachedData: any) => {
      return hasItemUpdated(c, cachedData, (c) =>
        ["bots_knowledges", c.req.param("knowledgeId")].join("|")
      );
    },
  }),
  logger(),
  directusMiddleware,
  // knowledgeMiddleware,
  async (c: Context<Env>) => {
    const knowledgeId = c.req.param("knowledgeId");
    const directus = c.get("directus");
    let knowledge = c.get("knowledge");

    // if (!knowledge || !knowledge.intents) {
      knowledge = await getKnowledge(directus, knowledgeId);
    // }
    return c.json(knowledge);
  }
);

export const deleteBotKnowledgeHandler = factory.createHandlers(
  logger(),
  directusMiddleware,
  textEmbeddingMiddleware,
  async (c: Context<Env>) => {
    const knowledgeId = c.req.param("knowledgeId");
    const directus = c.get("directus");
    const textEmbedding = c.get("textEmbedding");
    const item = await directus
      .request(
        readItem("bots_knowledges", knowledgeId, {
          fields: ["bot"],
        })
      )
      .catch(() => {});

    await directus
      .request(deleteItem("bots_knowledges", knowledgeId))
      .catch(() => {});

    await c.env.CACHING.delete(["bots_knowledges", knowledgeId].join("|"));

    await textEmbedding.clearDocuments({
      filters: { knowledge_id: knowledgeId },
    });

    return c.json({ success: true, ...item });
  }
);

// update knowledge
export const updateBotKnowledgeHandler = factory.createHandlers(
  logger(),
  directusMiddleware,
  textEmbeddingMiddleware,
  async (c: Context<Env>) => {
    const knowledgeId = c.req.param("knowledgeId");
    const directus = c.get("directus");
    const textEmbedding = c.get("textEmbedding");
    const body = await c.req.json<Partial<BotKnowledge>>();
    const item = await directus.request(
      updateItem("bots_knowledges", knowledgeId, body)
    );

    if (body.status === "draft") {
      // update opensearch document
      await textEmbedding.disableDocumentByMetadata({
        knowledge_id: knowledgeId,
      });
    } else if (body.status === "published") {
      // update opensearch document
      await textEmbedding.enableDocumentByMetadata({
        knowledge_id: knowledgeId,
      });
    }

    await c.env.CACHING.put(
      ["bots_knowledges", knowledgeId].join("|"),
      JSON.stringify(item)
    );

    return c.json(item);
  }
);

// train knowledge
export const trainBotKnowledgeHandler = factory.createHandlers(
  logger(),
  directusMiddleware,
  textEmbeddingMiddleware,
  knowledgeMiddleware,
  async (c: Context<Env>) => {
    const knowledgeId = c.req.param("knowledgeId");
    const textEmbedding = c.get("textEmbedding");
    const directus = c.get("directus");
    let knowledge = c.get("knowledge");
    function convertIntentsToAddQuestions(intentsData, botId, knowledgeId) {
      const addQuestions = [];

      // Iterate over each intent object in the provided data
      intentsData.forEach((intent) => {
        const intentId = intent.id; // Get the intent's ID

        // Iterate over each question within the current intent
        intent.questions.forEach((question) => {
          // Create an object in the desired "addQuestion" format
          addQuestions.push({
            body: {
              operation: "addQuestion", // Static operation type
              text: question.question, // The question text
              bot_id: botId, // Provided bot ID
              knowledge_id: knowledgeId, // Provided knowledge ID
              intent_id: intentId, // The ID of the parent intent
              id: question.id, // The ID of the specific question
            },
          });
        });
      });

      return addQuestions; // Return the array of converted operations
    }

    await c.env.CACHING.delete(["bots_knowledges", knowledgeId].join("|"));

    await textEmbedding.clearDocuments({
      filters: { knowledge_id: knowledgeId },
    });

    if (knowledge?.intents?.length > 0) {
      // Check if the intents array is not empty
      // Convert intents to add questions format
      const convertedData = convertIntentsToAddQuestions(
        knowledge.intents,
        knowledge.bot,
        knowledge.id
      );

      try {
        // Send the converted data to the queue for processing
        const batches = [];
        for (let i = 0; i < convertedData.length; i += 100) {
          batches.push(convertedData.slice(i, i + 100));
        }

        for (const batch of batches) {
          await c.env.SENTENCE_EMBEDINGS_QUEUE.sendBatch(batch);
        }
      } catch (queueError) {
        console.error("Error sending to queue:", queueError);
        // Continue execution even if queue fails
      }
    }

    try {
      await c.env.CACHING.put(
        ["bots_knowledges", knowledge.id].join("|"),
        JSON.stringify(knowledge)
      );
    } catch (cacheError) {
      console.error("Error caching knowledge:", cacheError);
      // Continue execution even if caching fails
    }

    return c.json(knowledge);
  }
);

// deploy knowledge
export const deployBotKnowledgeHandler = factory.createHandlers(
  logger(),
  directusMiddleware,
  textEmbeddingMiddleware,
  knowledgeMiddleware,
  async (c: Context<Env>) => {
    const knowledgeId = c.req.param("knowledgeId");
    const textEmbedding = c.get("textEmbedding");
    const directus = c.get("directus");
    const knowledge = c.get("knowledge");
    const item = await directus.request(
      updateItem("bots_knowledges", knowledgeId, {
        status: "published",
      })
    );

    function convertIntentsToAddQuestions(intentsData, botId, knowledgeId) {
      const addQuestions = [];

      // Iterate over each intent object in the provided data
      intentsData.forEach((intent) => {
        const intentId = intent.id; // Get the intent's ID

        // Iterate over each question within the current intent
        intent.questions.forEach((question) => {
          // Create an object in the desired "addQuestion" format
          addQuestions.push({
            body: {
              operation: "addQuestion", // Static operation type
              text: question.question, // The question text
              bot_id: botId, // Provided bot ID
              knowledge_id: knowledgeId, // Provided knowledge ID
              intent_id: intentId, // The ID of the parent intent
              id: question.id, // The ID of the specific question
            },
          });
        });
      });

      return addQuestions; // Return the array of converted operations
    }

    if (knowledge?.intents?.length > 0) {
      // Check if the intents array is not empty
      // Convert intents to add questions format
      const convertedData = convertIntentsToAddQuestions(
        knowledge.intents,
        knowledge.bot,
        knowledge.id
      );

      try {
        // Send the converted data to the queue for processing
        const batches = [];
        for (let i = 0; i < convertedData.length; i += 100) {
          batches.push(convertedData.slice(i, i + 100));
        }

        for (const batch of batches) {
          await c.env.SENTENCE_EMBEDINGS_QUEUE.sendBatch(batch);
        }
      } catch (queueError) {
        console.error("Error sending to queue:", queueError);
        // Continue execution even if queue fails
      }
    }

    try {
      await c.env.CACHING.put(
        ["bots_knowledges", knowledge.id].join("|"),
        JSON.stringify(knowledge)
      );
    } catch (cacheError) {
      console.error("Error caching knowledge:", cacheError);
      // Continue execution even if caching fails
    }

    // await textEmbedding.enableDocumentByMetadata({
    //   knowledge_id: knowledgeId,
    // });

    await c.env.CACHING.put(
      ["bots_knowledges", knowledgeId].join("|"),
      JSON.stringify(item)
    );

    return c.json(item);
  }
);

// undeploy knowledge
export const undeployBotKnowledgeHandler = factory.createHandlers(
  logger(),
  directusMiddleware,
  textEmbeddingMiddleware,
  async (c: Context<Env>) => {
    const knowledgeId = c.req.param("knowledgeId");
    const textEmbedding = c.get("textEmbedding");
    const directus = c.get("directus");
    const item = await directus.request(
      updateItem("bots_knowledges", knowledgeId, {
        status: "draft",
      })
    );

    // await c.env.CACHING.delete(["bots_knowledges", knowledgeId].join("|"));

    await textEmbedding.clearDocuments({
      filters: { knowledge_id: knowledgeId },
    });

    // await textEmbedding.disableDocumentByMetadata({
    //   knowledge_id: knowledgeId,
    // });

    await c.env.CACHING.put(
      ["bots_knowledges", knowledgeId].join("|"),
      JSON.stringify(item)
    );

    return c.json(item);
  }
);

// --------------------- intents ---------------------

// get intent
export const getIntentHandler = factory.createHandlers(
  cachingMiddleware({
    ttl: 60 * 60,
    revalidate: async (c: Context<Env>, cachedData: any) => {
      return hasItemUpdated(c, cachedData, (c) =>
        [
          "knowledge",
          c.req.param("knowledgeId"),
          "intent",
          c.req.param("intentId"),
        ].join("|")
      );
    },
  }),
  logger(),
  directusMiddleware,
  knowledgeMiddleware,
  async (c) => {
    const knowledgeId = c.req.param("knowledgeId");
    const directus = c.get("directus");
    let knowledge = c.get("knowledge");

    if (!knowledge || !knowledge.intents) {
      knowledge = await getKnowledge(directus, knowledgeId);
    }

    const intents = knowledge?.intents?.filter(
      (intent) => intent.id === c.req.param("intentId")
    );
    console.log("intents", intents);

    const intent = _.get(intents, 0, {});

    return c.json(intent);
  }
);

// create intent
export const createIntentHandler = factory.createHandlers(
  logger(),
  directusMiddleware,
  knowledgeMiddleware,
  textEmbeddingMiddleware,
  async (c) => {
    const knowledgeId = c.req.param("knowledgeId");
    const directus = c.get("directus");
    const knowledge = c.get("knowledge") as BotKnowledge;
    const textEmbedding = c.get("textEmbedding");
    const body = await c.req.json<BotIntent>();

    const data = {
      id: body.id || randomHexString(8),
      name: body.name,
      intent: body.intent,
      quick_reply: body.quick_reply,
      questions: body.questions || [],
      responses: body.responses || [],
      tags: body.tags || [],
    };

    if (knowledge.intents?.find((intent) => intent.intent === data.intent)) {
      return c.json({ status: 400, message: "Intent already exists" }, 400);
    }

    const item = await directus.request(
      updateItem("bots_knowledges", knowledgeId, {
        intents: [...knowledge.intents, data],
        total_intent: knowledge.intents.length + 1,
        date_updated: new Date().toISOString(),
      })
    );

    await c.env.CACHING.put(
      ["bots_knowledges", knowledgeId].join("|"),
      JSON.stringify(item)
    );

    const questions = [
      { id: randomHexString(8), question: data.intent },
      ...data.questions,
    ];

    await c.env.SENTENCE_EMBEDINGS_QUEUE.sendBatch(
      questions.map((question) => {
        return {
          body: {
            operation: "addQuestion",
            text: question.question,
            bot_id: knowledge.bot,
            knowledge_id: knowledgeId,
            intent_id: data.id,
            id: question.id,
          },
        };
      })
    );

    return c.json(item);
  }
);

// create multiple intents
export const createMultipleIntentHandler = factory.createHandlers(
  logger(),
  directusMiddleware,
  knowledgeMiddleware,
  textEmbeddingMiddleware,
  async (c) => {
    const knowledgeId = c.req.param("knowledgeId");
    const directus = c.get("directus");
    const knowledge = c.get("knowledge") as BotKnowledge;
    const textEmbedding = c.get("textEmbedding");
    const body = await c.req.json<{
      intents: BotIntent[];
    }>();

    const intents = (body.intents || []).map((intent) => {
      return {
        id: intent.id || randomHexString(8),
        name: intent.name,
        intent: intent.intent,
        quick_reply: intent.quick_reply,
        questions: intent.questions || [],
        responses: intent.responses || [],
        tags: intent.tags,
      };
    });

    const updatedIntents = _.uniqBy(
      [...knowledge.intents, ...intents],
      "intent"
    );

    const item = await directus.request(
      updateItem("bots_knowledges", knowledgeId, {
        intents: updatedIntents,
        total_intent: updatedIntents.length,
        date_updated: new Date().toISOString(),
      })
    );

    await c.env.CACHING.put(
      ["bots_knowledges", knowledgeId].join("|"),
      JSON.stringify(item)
    );

    for (const intent of intents) {
      const questions = [
        { id: randomHexString(8), question: intent.intent },
        ...intent.questions,
      ];

      await c.env.SENTENCE_EMBEDINGS_QUEUE.sendBatch(
        questions.map((question) => {
          return {
            body: {
              operation: "addQuestion",
              text: question.question,
              bot_id: knowledge.bot,
              knowledge_id: knowledgeId,
              intent_id: intent.id,
              id: question.id,
            },
          };
        })
      );
    }

    return c.json(item);
  }
);

// delete intent
export const deleteIntentHandler = factory.createHandlers(
  logger(),
  directusMiddleware,
  knowledgeMiddleware,
  async (c) => {
    const knowledgeId = c.req.param("knowledgeId");
    const intentId = c.req.param("intentId");
    const directus = c.get("directus");
    const knowledge = c.get("knowledge") as BotKnowledge;

    const intents = knowledge.intents.filter(
      (intent) => intent.id !== intentId
    );

    const item = await directus.request(
      updateItem("bots_knowledges", knowledgeId, {
        intents,
        total_intent: intents.length,
      })
    );

    await c.env.CACHING.put(
      ["bots_knowledges", knowledgeId].join("|"),
      JSON.stringify(item)
    );

    await c.env.SENTENCE_EMBEDINGS_QUEUE.sendBatch([
      {
        body: {
          operation: "deleteIntent",
          bot_id: knowledge.bot,
          knowledge_id: knowledgeId,
          intent_id: intentId,
        },
      },
    ]);

    return c.json(item);
  }
);

// import intents
export const importIntentHandler = factory.createHandlers(
  logger(),
  directusMiddleware,
  knowledgeMiddleware,
  textEmbeddingMiddleware,
  async (c) => {
    const knowledgeId = c.req.param("knowledgeId");
    const directus = c.get("directus");
    const knowledge = c.get("knowledge") as BotKnowledge;
    const body = await c.req.json<Array<BotIntentImport>>();

    const intents = (body || []).map((intent) => {
      const questions =
        typeof intent.questions === "string"
          ? intent.questions.split("####").filter((x) => x)
          : intent.questions;
      const responses =
        typeof intent.answers === "string"
          ? intent.answers.split("####").filter((x) => x)
          : intent.answers;

      const tags =
        typeof intent.tags === "string"
          ? intent.tags.split("####").filter((x) => x)
          : intent.tags;

      return {
        id: randomHexString(8),
        name: intent.name,
        intent: intent.intent,
        quick_reply: intent.quick_reply,
        questions: questions.map((question) => {
          return {
            id: randomHexString(8),
            question: question?.trim(),
          };
        }),
        responses: responses.map((response) => {
          return {
            id: randomHexString(8),
            type: "Text",
            payload: {
              type: "text",
              text: response.trim(),
            },
          };
        }),
        tags: tags.map((tag) => tag.trim()),
      };
    });

    const updatedIntents = _.uniqBy(
      [...knowledge.intents, ...intents],
      "intent"
    );

    const item = await directus.request(
      updateItem("bots_knowledges", knowledgeId, {
        intents: updatedIntents,
        total_intent: updatedIntents.length,
        date_updated: new Date().toISOString(),
      })
    );

    await c.env.CACHING.put(
      ["bots_knowledges", knowledgeId].join("|"),
      JSON.stringify(item)
    );

    for (const intent of intents) {
      const questions = [
        { id: randomHexString(8), question: intent.intent },
        ...intent.questions,
      ];

      await c.env.SENTENCE_EMBEDINGS_QUEUE.sendBatch(
        questions.map((question) => {
          return {
            body: {
              operation: "addQuestion",
              text: question.question,
              bot_id: knowledge.bot,
              knowledge_id: knowledgeId,
              intent_id: intent.id,
              id: question.id,
            },
          };
        })
      );
    }

    return c.json(item);
  }
);

// clear all intents
export const clearAllIntentsHandler = factory.createHandlers(
  logger(),
  directusMiddleware,
  knowledgeMiddleware,
  textEmbeddingMiddleware,
  async (c) => {
    const knowledgeId = c.req.param("knowledgeId");
    const directus = c.get("directus");
    const knowledge = c.get("knowledge") as BotKnowledge;
    const textEmbedding = c.get("textEmbedding");

    const item = await directus.request(
      updateItem("bots_knowledges", knowledgeId, {
        intents: [],
      })
    );

    await c.env.CACHING.put(
      ["bots_knowledges", knowledgeId].join("|"),
      JSON.stringify(item)
    );

    await textEmbedding.clearDocuments({
      filters: { knowledge_id: knowledgeId },
    });

    return c.json(item);
  }
);

// --------------------- question ---------------------

// add question
export const addIntentQuestionHandler = factory.createHandlers(
  logger(),
  directusMiddleware,
  knowledgeMiddleware,
  async (c) => {
    const knowledgeId = c.req.param("knowledgeId");
    const directus = c.get("directus");
    const knowledge = c.get("knowledge") as BotKnowledge;
    const body = await c.req.json<Array<IntentQuestion>>();

    const intentId = c.req.param("intentId");
    const intent = knowledge.intents.find((intent) => intent.id === intentId);
    if (!intent) {
      return c.json({ status: 404, message: "Intent not found" }, 404);
    }

    const questions = body || [];

    const existsKeys = intent.questions.map((question) => question.id);
    const newKeys = questions.map((question) => question.id);

    if (_.intersection(existsKeys, newKeys).length > 0) {
      return c.json(
        { status: 400, message: "Question already exists in the intent" },
        400
      );
    }

    const updatedIntent = {
      ...intent,
      questions: _.uniqBy([...intent.questions, ...questions], "id"),
    };

    const intents = knowledge.intents.map((intent) =>
      intent.id === intentId ? updatedIntent : intent
    );

    const item = await directus.request(
      updateItem("bots_knowledges", knowledgeId, {
        intents,
      })
    );

    await c.env.CACHING.put(
      ["bots_knowledges", knowledgeId].join("|"),
      JSON.stringify(item)
    );

    console.log("questions", questions);

    await c.env.SENTENCE_EMBEDINGS_QUEUE.sendBatch(
      questions.map((question) => {
        return {
          body: {
            operation: "addQuestion",
            text: question.question,
            bot_id: knowledge.bot,
            knowledge_id: knowledgeId,
            intent_id: intentId,
            id: question.id,
          },
        };
      })
    );

    return c.json(item);
  }
);

// update question
export const updateIntentQuestionHandler = factory.createHandlers(
  logger(),
  directusMiddleware,
  knowledgeMiddleware,
  async (c) => {
    const knowledgeId = c.req.param("knowledgeId");
    const directus = c.get("directus");
    const knowledge = c.get("knowledge") as BotKnowledge;
    const body = await c.req.json<IntentQuestion>();

    const intentId = c.req.param("intentId");
    const intent = knowledge.intents.find((intent) => intent.id === intentId);
    if (!intent) {
      return c.json({ status: 404, message: "Intent not found" }, 404);
    }

    const questionId = c.req.param("questionId");
    const updatedQuestion = {
      ...intent.questions.find((question) => question.id === questionId),
      ...body,
    };

    const updatedIntent = {
      ...intent,
      questions: intent.questions.map((question) =>
        question.id === questionId ? updatedQuestion : question
      ),
    };

    const intents = knowledge.intents.map((intent) =>
      intent.id === intentId ? updatedIntent : intent
    );

    const item = await directus.request(
      updateItem("bots_knowledges", knowledgeId, {
        intents,
      })
    );

    await c.env.CACHING.put(
      ["bots_knowledges", knowledgeId].join("|"),
      JSON.stringify(item)
    );

    await c.env.SENTENCE_EMBEDINGS_QUEUE.send({
      operation: "updateQuestion",
      bot_id: knowledge.bot,
      knowledge_id: knowledgeId,
      intent_id: intentId,
      id: questionId,
      text: body.question,
    });

    return c.json(item);
  }
);

// delete question
export const deleteIntentQuestionHandler = factory.createHandlers(
  logger(),
  directusMiddleware,
  knowledgeMiddleware,
  textEmbeddingMiddleware,
  async (c) => {
    const knowledgeId = c.req.param("knowledgeId");
    const questionId = c.req.param("questionId");
    const directus = c.get("directus");
    const knowledge = c.get("knowledge") as BotKnowledge;

    const intentId = c.req.param("intentId");
    const intent = knowledge.intents.find((intent) => intent.id === intentId);
    if (!intent) {
      return c.json({ status: 404, message: "Intent not found" }, 404);
    }

    const updatedIntent = {
      ...intent,
      questions: intent.questions.filter(
        (question) => question.id !== questionId
      ),
    };

    const intents = knowledge.intents.map((intent) =>
      intent.id === intentId ? updatedIntent : intent
    );

    const item = await directus.request(
      updateItem("bots_knowledges", knowledgeId, {
        intents,
      })
    );

    await c.env.CACHING.put(
      ["bots_knowledges", knowledgeId].join("|"),
      JSON.stringify(item)
    );

    await c.env.SENTENCE_EMBEDINGS_QUEUE.send({
      operation: "deleteQuestion",
      bot_id: knowledge.bot,
      knowledge_id: knowledgeId,
      intent_id: intentId,
      id: questionId,
    });

    return c.json(item);
  }
);

// --------------------- response ---------------------

// get responses
export const getIntentResponsesHandler = factory.createHandlers(
  cachingMiddleware({
    ttl: 60 * 60,
    revalidate: async (c: Context<Env>, cachedData: any) => {
      return hasItemUpdated(c, cachedData, (c) =>
        [
          "knowledge",
          c.req.param("knowledgeId"),
          "intent",
          c.req.param("intentId"),
          "responses",
        ].join("|")
      );
    },
  }),
  logger(),
  directusMiddleware,
  knowledgeMiddleware,
  async (c) => {
    const knowledgeId = c.req.param("knowledgeId");
    const directus = c.get("directus");
    let knowledge = c.get("knowledge");

    if (!knowledge || !knowledge.intents) {
      knowledge = await getKnowledge(directus, knowledgeId);
    }

    const intents = knowledge?.intents?.filter(
      (intent) => intent.id === c.req.param("intentId")
    );
    const responses = _.get(intents, "0.responses", []);

    await c.env.CACHING.put(
      [
        "knowledge",
        knowledgeId,
        "intent",
        c.req.param("intentId"),
        "responses",
      ].join("|"),
      JSON.stringify(responses)
    );
    return c.json(responses);
  }
);

// get response
export const getIntentResponseHandler = factory.createHandlers(
  cachingMiddleware({
    ttl: 60 * 60,
    revalidate: async (c: Context<Env>, cachedData: any) => {
      return hasItemUpdated(c, cachedData, (c) =>
        [
          "knowledge",
          c.req.param("knowledgeId"),
          "intent",
          c.req.param("intentId"),
          "response",
          c.req.param("responseId"),
        ].join("|")
      );
    },
  }),
  logger(),
  directusMiddleware,
  knowledgeMiddleware,
  async (c) => {
    const knowledgeId = c.req.param("knowledgeId");
    const directus = c.get("directus");
    let knowledge = c.get("knowledge");

    if (!knowledge || !knowledge.intents) {
      knowledge = await getKnowledge(directus, knowledgeId);
    }

    const intents = knowledge?.intents?.filter(
      (intent) => intent.id === c.req.param("intentId")
    );
    const responses = _.get(intents, "0.responses", []);
    const response = responses.find(
      (response) => response.id === c.req.param("responseId")
    );

    return c.json(response);
  }
);

// add response
export const addIntentResponseHandler = factory.createHandlers(
  logger(),
  directusMiddleware,
  knowledgeMiddleware,
  async (c) => {
    const knowledgeId = c.req.param("knowledgeId");
    const directus = c.get("directus");
    let knowledge = c.get("knowledge") as BotKnowledge;

    if (!knowledge || !knowledge.intents) {
      knowledge = await getKnowledge(directus, knowledgeId);
    }

    const body = await c.req.json();

    const intentId = c.req.param("intentId");
    const intent = knowledge.intents.find((intent) => intent.id === intentId);
    if (!intent) {
      return c.json({ status: 404, message: "Intent not found" }, 404);
    }

    const responses = body || [];
    const updatedIntent = {
      ...intent,
      responses: _.uniq([...intent.responses, ...responses]),
    };

    const intents = knowledge.intents.map((intent) =>
      intent.id === intentId ? updatedIntent : intent
    );

    const item = await directus.request(
      updateItem("bots_knowledges", knowledgeId, {
        intents,
      })
    );

    await c.env.CACHING.put(
      ["bots_knowledges", knowledgeId].join("|"),
      JSON.stringify(item)
    );

    return c.json(item);
  }
);

// update response
export const updateIntentResponseHandler = factory.createHandlers(
  logger(),
  directusMiddleware,
  // knowledgeMiddleware,
  async (c) => {
    const knowledgeId = c.req.param("knowledgeId");
    const responseId = c.req.param("responseId");
    const directus = c.get("directus");
    let knowledge = c.get("knowledge") as BotKnowledge;

    if (!knowledge || !knowledge.intents) {
      knowledge = await getKnowledge(directus, knowledgeId);
    }

    const body = await c.req.json<{
      type: string;
      payload: JSON;
    }>();

    const intentId = c.req.param("intentId");
    const intent = knowledge.intents.find((intent) => intent.id === intentId);
    if (!intent) {
      return c.json({ status: 404, message: "Intent not found" }, 404);
    }

    const updatedIntent = {
      ...intent,
      responses: intent.responses.map((response) =>
        response.id === responseId ? { id: responseId, ...body } : response
      ),
    };

    const intents = knowledge.intents.map((intent) =>
      intent.id === intentId ? updatedIntent : intent
    );

    const item = await directus.request(
      updateItem("bots_knowledges", knowledgeId, {
        intents,
      })
    );

    await c.env.CACHING.put(
      ["bots_knowledges", knowledgeId].join("|"),
      JSON.stringify(item)
    );

    return c.json(item);
  }
);

// update response
export const deleteIntentResponseHandler = factory.createHandlers(
  logger(),
  directusMiddleware,
  knowledgeMiddleware,
  async (c) => {
    const knowledgeId = c.req.param("knowledgeId");
    const responseId = c.req.param("responseId");
    const directus = c.get("directus");
    const knowledge = c.get("knowledge") as BotKnowledge;

    const intentId = c.req.param("intentId");
    const intent = knowledge.intents.find((intent) => intent.id === intentId);
    if (!intent) {
      return c.json({ status: 404, message: "Intent not found" }, 404);
    }

    const updatedIntent = {
      ...intent,
      responses: intent.responses.filter(
        (response) => response.id !== responseId
      ),
    };

    const intents = knowledge.intents.map((intent) =>
      intent.id === intentId ? updatedIntent : intent
    );

    const item = await directus.request(
      updateItem("bots_knowledges", knowledgeId, {
        intents,
      })
    );

    await c.env.CACHING.put(
      ["bots_knowledges", knowledgeId].join("|"),
      JSON.stringify(item)
    );

    return c.json(item);
  }
);

// duplicate response
export const duplicateIntentResponseHandler = factory.createHandlers(
  logger(),
  directusMiddleware,
  knowledgeMiddleware,
  async (c) => {
    const knowledgeId = c.req.param("knowledgeId");
    const responseId = c.req.param("responseId");
    const directus = c.get("directus");
    const knowledge = c.get("knowledge") as BotKnowledge;

    const intentId = c.req.param("intentId");
    const intent = knowledge.intents.find((intent) => intent.id === intentId);
    if (!intent) {
      return c.json({ status: 404, message: "Intent not found" }, 404);
    }

    const responseIdx = intent.responses.findIndex(
      (response) => response.id === responseId
    );
    const response = intent.responses[responseIdx];
    if (!response) {
      return c.json({ status: 404, message: "Response not found" }, 404);
    }

    const updatedIntent = {
      ...intent,
      responses: [
        ...intent.responses.slice(0, responseIdx + 1),
        { ...response, id: randomHexString(8) },
        ...intent.responses.slice(responseIdx + 1),
      ],
    };

    const intents = knowledge.intents.map((intent) =>
      intent.id === intentId ? updatedIntent : intent
    );

    const item = await directus.request(
      updateItem("bots_knowledges", knowledgeId, {
        intents,
      })
    );

    await c.env.CACHING.put(
      ["bots_knowledges", knowledgeId].join("|"),
      JSON.stringify(item)
    );

    return c.json(item);
  }
);
