import { createFactory } from "hono/factory";
import { logger } from "hono/logger";
import { GeminiGenerationResponse, GeminiRequest } from "~/types/gemini.type";
import { Env } from "~/types/hono.types";

const factory = createFactory<Env>();

export const generateHandler = factory.createHandlers(logger(), async (c) => {
  const body = (await c.req.json()) as GeminiRequest;
  const env = c.env;

  console.log("GOOGLE_AI_ACCESS_TOKEN", env.GOOGLE_AI_ACCESS_TOKEN);
  
  // Construct Gemini API URL
  const url = `https://${env.GOOGLE_AI_API_ENDPOINT}/v1/projects/${env.GOOGLE_AI_PROJECT_ID}/locations/${env.GOOGLE_AI_LOCATION_ID}/publishers/google/models/${env.GOOGLE_AI_MODEL_ID}:${env.GOOGLE_AI_GENERATE_CONTENT_API}`;

  // Make request to Gemini API
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${env.GOOGLE_AI_ACCESS_TOKEN}`,
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Gemini API error: ${error}`);
  }

  const data =
    await response.json<GeminiGenerationResponse.GenerationResponse>();

  // get first candidate
  const result = extractGeminiResponse(data);

  return c.json(result);
});

function extractGeminiResponse(data: any) {
  try {
    // Get the first candidate's content
    const responseContent = data.candidates[0].content;

    // Parse the inner response JSON string
    const innerResponse = JSON.parse(responseContent.parts[0].text);

    // Parse the response array
    const items = JSON.parse(innerResponse.response);

    // Extract and format the data
    const extractedData = items.map((item) => ({
      intent: item.intent,
      name: item.name,
      questions: item.questions,
      quickReply: item.quick_reply,
      tags: item.tags,
      answers: item.answers,
    }));

    return {
      success: true,
      data: extractedData,
      metadata: {
        modelVersion: data.modelVersion,
        createTime: data.createTime,
        tokenCounts: {
          prompt: data.usageMetadata.promptTokenCount,
          response: data.usageMetadata.candidatesTokenCount,
          total: data.usageMetadata.totalTokenCount,
        },
      },
    };
  } catch (error) {
    return {
      success: false,
      error: `Error parsing JSON: ${error.message}`,
    };
  }
}
