import { Hono } from "hono";
import * as BotsHandler from "../handlers/bots.handler";
import * as KnowledgesHandler from "../handlers/knowledges.handler";
import { Env } from "~/types/hono.types";

const knowledgesRoutes = new Hono<Env>();

knowledgesRoutes.get("/:knowledgeId", ...BotsHandler.getBotKnowledgeHandler);

// ----------------- intents -----------------

// get intents
knowledgesRoutes.get(
  "/:knowledgeId/intents/:intentId",
  ...KnowledgesHandler.getIntentHandler
);

// create intent
knowledgesRoutes.post(
  "/:knowledgeId/intents",
  ...KnowledgesHandler.createIntentHandler
);

// delete intent
knowledgesRoutes.delete(
  "/:knowledgeId/intents/:intentId",
  ...KnowledgesHandler.deleteIntentHandler
);

// import intent
knowledgesRoutes.post(
  "/:knowledgeId/intents/import",
  ...KnowledgesHandler.importIntentHandler
);

knowledgesRoutes.post(
  "/:knowledgeId/intents/clear-all",
  ...KnowledgesHandler.clearAllIntentsHandler
);

// ----------------- questions -----------------

// create intent questions
knowledgesRoutes.post(
  "/:knowledgeId/intents/:intentId/questions",
  ...KnowledgesHandler.addIntentQuestionHandler
);

// update intent questions
knowledgesRoutes.patch(
  "/:knowledgeId/intents/:intentId/questions/:questionId",
  ...KnowledgesHandler.updateIntentQuestionHandler
);

// delete intent questions
knowledgesRoutes.delete(
  "/:knowledgeId/intents/:intentId/questions/:questionId",
  ...KnowledgesHandler.deleteIntentQuestionHandler
);

// ----------------- responses -----------------

// get intent responses
knowledgesRoutes.get(
  "/:knowledgeId/intents/:intentId/responses",
  ...KnowledgesHandler.getIntentResponsesHandler
);

// create intent responses
knowledgesRoutes.post(
  "/:knowledgeId/intents/:intentId/responses",
  ...KnowledgesHandler.addIntentResponseHandler
);

knowledgesRoutes.delete(
  "/:knowledgeId/intents/:intentId/responses/:responseId",
  ...KnowledgesHandler.deleteIntentResponseHandler
);

// knowledgesRoutes.delete("/:knowledgeId/intents/:intentId", KnowledgesHandler.deleteIntent);
// knowledgesRoutes.patch("/:knowledgeId/intents/:intentId", KnowledgesHandler.updateIntent);
// knowledgesRoutes.post("/:knowledgeId/embeddings", KnowledgesHandler.createEmbeddings);
// knowledgesRoutes.get("/:knowledgeId/search", KnowledgesHandler.search);

export { knowledgesRoutes };
