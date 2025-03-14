import {
  Bot,
  BotChannelStatus,
  BotInquiry,
  BotIntent,
  BotKnowledge,
  BotKnowledgeUpdate,
  BotLog,
  BotModel,
  BotMutedUser,
  BotUpdate,
  BotsSlips,
  CAPIEvents,
  Channel,
  ChannelBot,
  GenerationResponse,
  IntentQuestion,
  IntentResponse,
  OrderTemplate,
  WorkspaceMember,
  stats,
} from "~/@types/app";

import api from "./api";
import { BotsOrders } from "~/@types/modules/order";

// --------------- bots ---------------
export const fetchBot = (id: string) => api.get<Bot>(`/items/bots/${id}`);

export const insertBot = (data: Bot) => api.post<Bot>("/items/bots", data);

export const updateBot = (id: string, data: BotUpdate) => {
  return api.patch(`/items/bots/${id}`, data);
};

export const deleteBot = (id: string) => {
  return api.delete(`/items/bots/${id}`);
};

// --------------- botModel ---------------
export const fetchBotModels = () => api.get<Array<BotModel>>("/bots/models");

// --------------- members ---------------
export const fetchBotMembers = (id: string) =>
  api.get<{ items: WorkspaceMember[] }>("/bots/" + id + "/members");

// --------------- channels ---------------
export const fetchBotChannels = (id: string) =>
  api.get<Array<Channel & { _id: number }>>("/bots/" + id + "/channels");

export const fetchBotChannelsStatus = (id: string) =>
  api.get<Array<BotChannelStatus>>("/bots/" + id + "/channels/status");

export const insertBotChannel = (data: {
  bot_id: string;
  channel_id: string;
}) => api.post("/items/channels_bots", data);

export const deleteBotChannel = (data: {
  bot_id: string;
  channel_id: string;
}) => api.delete("/bots/" + data.bot_id + "/channels", { data });

// --------------- knowledges ---------------

// list knowledges
export const fetchBotKnowledges = (botId: string) =>
  api.get<Array<BotKnowledge & { _id: number }>>(
    "/bots/" + botId + "/knowledges"
  );

// get knowledge
export const fetchBotKnowledge = (knowledgeId: string) =>
  api.get<BotKnowledge>("/bots/knowledges/" + knowledgeId);

// insert knowledge
export const insertBotKnowledge = (
  botId: string,
  data: Partial<BotKnowledge>
) => api.post(`/bots/${botId}/knowledges`, data);

// update knowledge
export const updateBotKnowledge = (
  knowledgeId: string,
  data: Partial<BotKnowledgeUpdate>
) => {
  return api.patch("/bots/knowledges/" + knowledgeId, data);
};

// delete knowledge
export const deleteBotKnowledge = (knowledgeId: string) =>
  api.delete("/bots/knowledges/" + knowledgeId);

// deploy knowledge
export const deployBotKnowledge = (knowledgeId: string) =>
  api.post(`/bots/knowledges/${knowledgeId}/deploy`);

// undeploy knowledge
export const undeployBotKnowledge = (knowledgeId: string) =>
  api.post(`/bots/knowledges/${knowledgeId}/undeploy`);

// --------------- intents ---------------
// insert intent
export const insertBotKnowledgeIntent = (data: {
  knowledge_id: string;
  id?: string;
  intent: string;
  name: string;
}) =>
  api.post(`/bots/knowledges/${data.knowledge_id}/intents`, {
    id: data.id,
    intent: data.intent,
    name: data.name,
  });

export const insertBotKnowledgeMultipleIntent = (data: {
  knowledge_id: string;
  intents: Array<BotIntent>;
}) =>
  api.post(`/bots/knowledges/${data.knowledge_id}/multi-intents`, {
    intents: data.intents,
  });

// delete intent
export const deleteBotKnowledgeIntent = (data: {
  bot_id: string;
  knowledge_id: string;
  intent_id: string;
}) =>
  api.delete(`/bots/knowledges/${data.knowledge_id}/intents/${data.intent_id}`);

// import intents
export const importBotKnowledgeIntents = (data: {
  knowledge_id: string;
  intents: Array<BotIntent>;
}) => {
  return api.post(
    `/bots/knowledges/${data.knowledge_id}/intents/import`,
    data.intents
  );
};

// --------------- questions ---------------

// insert question
export const insertBotKnowledgeIntentQuestion = (data: {
  bot_id: string;
  knowledge_id: string;
  intent_id: string;
  questions: Array<IntentQuestion>;
}) =>
  api.post<BotKnowledge>(
    `/bots/knowledges/${data.knowledge_id}/intents/${data.intent_id}/questions`,
    data.questions
  );

// update question
export const updateBotKnowledgeIntentQuestion = (data: {
  bot_id: string;
  knowledge_id: string;
  intent_id: string;
  question: IntentQuestion;
}) =>
  api.patch<BotKnowledge>(
    `/bots/knowledges/${data.knowledge_id}/intents/${data.intent_id}/questions/${data.question.id}`,
    data.question
  );

// delete question
export const deleteBotKnowledgeIntentQuestion = (data: {
  bot_id: string;
  knowledge_id: string;
  intent_id: string;
  question_id: string;
}) =>
  api.delete<BotKnowledge>(
    `/bots/knowledges/${data.knowledge_id}/intents/${data.intent_id}/questions/${data.question_id}`
  );

// --------------- responses ---------------

// insert response
export const insertBotKnowledgeIntentResponse = (data: {
  bot_id: string;
  knowledge_id: string;
  intent_id: string;
  response: IntentResponse[];
}) =>
  api.post<BotKnowledge>(
    `/bots/knowledges/${data.knowledge_id}/intents/${data.intent_id}/responses`,
    data.response
  );

// update response
export const updateBotKnowledgeIntentResponse = (data: {
  bot_id: string;
  knowledge_id: string;
  intent_id: string;
  response: Partial<IntentResponse>;
}) =>
  api.patch<BotKnowledge>(
    `/bots/knowledges/${data.knowledge_id}/intents/${data.intent_id}/responses/${data.response.id}`,
    data.response
  );

// delete response
export const deleteBotKnowledgeIntentResponse = (data: {
  bot_id: string;
  knowledge_id: string;
  intent_id: string;
  response_id: string;
}) =>
  api.delete<BotKnowledge>(
    `/bots/knowledges/${data.knowledge_id}/intents/${data.intent_id}/responses/${data.response_id}`
  );

// duplicate response
export const duplicateBotKnowledgeIntentResponse = (data: {
  bot_id: string;
  knowledge_id: string;
  intent_id: string;
  response_id: string;
}) =>
  api.post<BotKnowledge>(
    `/bots/knowledges/${data.knowledge_id}/intents/${data.intent_id}/responses/${data.response_id}/duplicate`
  );

// --------------- insight logs ---------------
export const fetchBotInsightLogs = (botId: string) =>
  api.get<{
    start: string;
    end: string;
    data: BotLog[];
  }>(`/bots/${botId}/insights/logs`);

export const fetchBotInsightContacts = (botId: string) =>
  api.get<BotLog[]>(`/bots/${botId}/insights/contacts`);

export const fetchBotInquiries = (botId: string) =>
  api.get<BotInquiry[]>(`/bots/${botId}/inquiries`);

// --------------- muted users ---------------
export const fetchBotMutedUsers = (botId: string) =>
  api.get<{uid:string}[]>(`/bots/${botId}/muted-users`);

export const insertBotMutedUser = (data:BotMutedUser) =>
  api.post(`/bots/${data.bot}/muted-users`, data);

export const deleteBotMutedUsers = ({botId,uid}) =>
  api.delete(`/bots/${botId}/muted-users`, { data: { uid: uid } });

// --------------- stats ---------------
export const fetchBotStatsToday = ({botId,timeUnit,startDate,endDate}) =>
  api.get<stats.AnalyticsReport>(`/bots/${botId}/insights/stats?timeUnit=${timeUnit}&startDate=${startDate}&endDate=${endDate}`);

// --------------- slips ---------------
export const fetchBotSlips = (botId: string) =>
  api.get<{
    start: string;
    end: string;
    data: BotsSlips[];
  }>(`/bots/${botId}/slips`);

// --------------- capi logs ---------------
export const fetchCapiLogs = (botId: string) =>
  api.get<{
    start: string;
    end: string;
    data: CAPIEvents[];
  }>(`/bots/${botId}/capi-logs`);

// --------------- order templates ---------------
export const fetchOrderTemplates = (botId: string) =>
  api.get<Array<OrderTemplate>>(`/bots/${botId}/templates`);

// --------------- order templates ---------------
export const fetchOrders = (botId: string) =>
  api.get<{
    start: string;
    end: string;
    data: BotsOrders[];
  }>(`/bots/${botId}/orders`);

// --------------- chat ---------------
export const streamBotChat = (
  botId: string,
  {
    messages,
  }: {
    messages: Array<{ role: string; content: string }>;
  }
) =>
  api.post(
    `/bots/${botId}/chat`,
    { messages },
    {
      responseType: "stream",
      headers: {
        Accept: "text/event-stream",
        "Content-Type": "application/json",
      },
    }
  );

// --------------- generate ---------------
export const generateBotIntent = (text: string) =>
  api.post<GenerationResponse.GenerationResponse>(`/bots/gemini/generate`, {
    contents: [
      {
        role: "user",
        parts: [
          {
            text,
          },
        ],
      },
    ],
    systemInstruction: {
      parts: [
        {
          text: 'You are an expert intent analyst. Analyze the provided document or subtitle extract and generate all relevant intents suitable for a chatbot, excluding any author/speaker biographical information. Format the output as a JSON object compatible with the following Pydantic Intent and Attachment classes:\n\n---\n\n### **Pydantic Models:**  \n\npython\nfrom pydantic import BaseModel, Field\nfrom typing import List, Optional\n\nclass Attachment(BaseModel):\n  """Represents an attachment with clear descriptions."""\n  type: str = Field(..., description="Type of the attachment. Possible values: image, video, document, file.")\n  title: str = Field(..., description="Title of the attachment. (up to 25 characters)")\n  description: str = Field(..., description="Attachment description (up to 256 characters)")\n  attachment_url: str = Field(..., description="URL of the attachment.")\n\nclass Intent(BaseModel):\n  intent: str = Field(description="The main topic or purpose of the answer, which may differ from the original input question. Summarize the core intent clearly and succinctly. Max 35 characters.")\n  name:str = Field(description="The name of intent, you can use same value as intent or may differ but It should be unique, human readable (no snake_case) and same language as intent. Max 35 characters.")\n  questions: List[str] = Field(description="A list of 3-5 sample user queries that could trigger this intent. Each query should contain relevant keywords and be phrased uniquely.")\n  quick_reply: str = Field(description="A concise label summarizing the intent for quick reply display. Max 25 characters.")\n  tags: List[str] = Field(description="4-5 relevant tags categorizing the intent, including both broad and specific terms.")\n  answers: str = Field(description="A detailed response that thoroughly explains the intent. Expand key points with sufficient detail to provide clear and actionable information. Avoid overly brief responses. **Do not use Markdown formatting.**")\n\n---\n\n### **Instructions:**  \n1. **Extract All Relevant Intents:**  \n  - Ensure **no content-related intent is missed.**\n  - Analyze the entire document or subtitle file carefully to identify every relevant intent.\n  - Focus on the actual content, ideas, concepts, and information presented.\n\n2. **Maintain Language Consistency:**  \n  - Always match the language of the document. If the content is in Thai, output everything in Thai.\n\n3. **Provide Detailed Content-Focused Answers:**  \n  - Expand key points thoroughly. Avoid overly brief summaries.\n  - Include supporting details, explanations, and relevant context.\n  - Focus on the substance of the content rather than who wrote or spoke it.\n\n4. **Correct Formatting:**  \n  - **Do not use Markdown** (e.g., no `*`, `**`, or `_`).  \n  - Use plain text for emphasis.  \n\n5. **Mobile-Friendly Format:**  \n  - Use bullet points or numbered lists **without Markdown symbols.**  \n  - Use line breaks to separate different topics or ideas.\n\n6. **Content Focus:**\n  - Keep intents focused on the actual content, ideas, and information presented.\n  - Exclude biographical details about authors/speakers unless directly relevant to understanding the content.\n  - Emphasize concepts, arguments, examples, and explanations rather than who presented them.\n\n**IMPORANT** Always match the language of the document. If the content is in Thai, output everything in Thai, If the content is in English, output everything in English.',
        },
      ],
    },
    generationConfig: {
      responseModalities: ["TEXT"],
      temperature: 0,
      maxOutputTokens: 8192,
      topP: 0.95,
      responseMimeType: "application/json",
      responseSchema: {
        type: "OBJECT",
        properties: { response: { type: "STRING" } },
      },
    },
    safetySettings: [
      {
        category: "HARM_CATEGORY_HATE_SPEECH",
        threshold: "OFF",
      },
      {
        category: "HARM_CATEGORY_DANGEROUS_CONTENT",
        threshold: "OFF",
      },
      {
        category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
        threshold: "OFF",
      },
      {
        category: "HARM_CATEGORY_HARASSMENT",
        threshold: "OFF",
      },
    ],
  });


// --------------- inquiries ---------------
export const insertBotInquiry = async (botId: string, data: Partial<BotInquiry>) => {
  return await api.post<BotInquiry>(`/client/inquiry`, data);
};