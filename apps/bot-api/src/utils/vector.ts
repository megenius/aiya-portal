export async function getTextEmbedding(text: string) {
  const response = await fetch("https://text.aiya.ai/embed", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });
  const result = await response.json<{ embedding: Array<any> }>();
  return result.embedding[0];
}
