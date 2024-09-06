// File: src/routes/items.ts
import { Hono } from "hono";
import { getDirectusClient } from "../config/directus";
import {
  readItems,
  createItem,
  updateItem,
  deleteItem,
  readItem,
  deleteItems,
} from "@directus/sdk";
import { Env } from "~/@types/hono.types";
import { DirectusError } from "@repo/shared/exceptions/directus";
import { cache } from "hono/cache";
import { Channel, VectorQuerySentenceResponse, Workspace } from "~/@types/app";
import { knowledgesRoutes } from "./knowledges";
import { getTextEmbedding, groupByIntentWithMaxScore } from "~/utils/vector";
import * as _ from "lodash";
import { loadKnowledges } from "~/service/knowledges";
import { AwsClient } from "aws4fetch";

const awsRoutes = new Hono<Env>()
.post("/cohere/embed", async (c) => {
  const bedrockEndpoint = "https://bedrock-runtime.us-west-2.amazonaws.com";
  const modelId = "cohere.embed-multilingual-v3";

  async function getCohereEmbedding(text: string) {
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
      const result = await response.json()
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = (await response.json()) as any;
    return data.embeddings[0];
  }

  const { text } = await c.req.json();
  if (!text) {
    return c.json({ error: "Text is required" }, 400);
  }

  try {
    const embedding = await getCohereEmbedding(text);
    return c.json({ embedding });
  } catch (error: any) {
    return c.json({ error: error.message }, 500);
  }
})


export { awsRoutes };