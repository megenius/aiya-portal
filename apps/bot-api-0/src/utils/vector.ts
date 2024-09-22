import { VectorIntentMatch, VectorQuerySentenceResponse } from "~/@types/app";

export const getTextEmbedding = async (text: string) => {
  const response = await fetch("https://text.aiya.ai/embed", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });
  const result = await response.json<{
    text: string;
    usage_time_ms: number;
    embedding: Array<number[]>;
  }>();

  return result.embedding[0];
};

export function groupByIntentWithMaxScore(
  response: VectorQuerySentenceResponse
): Record<string, VectorIntentMatch> {
  return response.matches.reduce(
    (acc, match) => {
      const intentId = match.metadata.intent_id;
      if (!acc[intentId] || match.score > acc[intentId].score) {
        acc[intentId] = match;
      }
      return acc;
    },
    {} as Record<string, VectorIntentMatch>
  );
}
