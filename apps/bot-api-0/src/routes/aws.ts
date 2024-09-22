import { Hono } from "hono";
import { Env } from "~/@types/hono.types";
import { AwsClient } from "aws4fetch";

// Define types for the request and response
interface EmbeddingRequest {
  text: string;
}

interface EmbeddingResponse {
  embedding: number[];
}

interface ErrorResponse {
  error: string;
}

// Define the Cohere API response type
interface CohereApiResponse {
  embeddings: number[][];
  texts: string[];
}

const awsRoutes = new Hono<Env>();

awsRoutes.post("/cohere/embed", async (c) => {
  const bedrockEndpoint = "https://bedrock-runtime.us-west-2.amazonaws.com";
  const modelId = "cohere.embed-multilingual-v3";

  async function getCohereEmbedding(text: string): Promise<number[]> {
    const aws = new AwsClient({
      accessKeyId: c.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: c.env.AWS_SECRET_ACCESS_KEY,
      region: "us-west-2",
    });

    const url = `${bedrockEndpoint}/model/${modelId}/invoke`;
    const body = JSON.stringify({
      texts: [text],
      input_type: "search_document",
      truncate: "END",
    });

    const signedRequest = await aws.sign(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: body,
      aws: {
        service: "bedrock",
        region: "us-west-2",
      }
    });

    const response = await fetch(signedRequest);
    
    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(`HTTP error! status: ${response.status}, body: ${errorBody}`);
    }
    const data = await response.json() as CohereApiResponse;
    return data.embeddings[0];
  }

  const body = await c.req.json<EmbeddingRequest>();
  if (!body.text || typeof body.text !== 'string' || body.text.length > 1000) {
    return c.json<ErrorResponse>({ 
      error: "Invalid input. Text is required and must be a string of 1000 characters or less." 
    }, 400);
  }

  try {
    const embedding = await getCohereEmbedding(body.text);
    return c.json<EmbeddingResponse>({ embedding });
  } catch (error) {
    console.error('Detailed error:', error);
    return c.json<ErrorResponse>({ 
      error: "An error occurred while processing your request." 
    }, 500);
  }
});

export { awsRoutes };