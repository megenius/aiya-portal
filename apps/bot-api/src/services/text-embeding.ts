import { OpenSearch, OpenSearchConfig } from "@repo/shared/aws/opensearch";

export interface Metadata {
  [key: string]: any;
}

export class TextEmbedding<T extends Metadata = Metadata> {
  private readonly openSearch: OpenSearch;
  private readonly index: string;

  constructor(openSearchConfig: OpenSearchConfig, index: string) {
    this.openSearch = new OpenSearch(openSearchConfig);
    this.index = index;
  }

  async createIndex(): Promise<void> {
    try {
      await this.openSearch.createIndex({
        index: this.index,
        mappings: {
          properties: {
            id: { type: "keyword" },
            text: { type: "text" },
            embedding: {
              type: "knn_vector",
              dimension: 512,
              method: {
                engine: "faiss",
                space_type: "l2",
                name: "hnsw",
                parameters: {
                  ef_construction: 512,
                  m: 16,
                },
              },
            },
            metadata: {
              type: "object",
            },
          },
        },
      });
      console.log(`Index ${this.index} created successfully.`);
    } catch (error) {
      if (
        error instanceof Error &&
        error.message.includes("resource_already_exists_exception")
      ) {
        console.log(`Index ${this.index} already exists.`);
      } else {
        console.error(`Error creating index ${this.index}:`, error);
        throw error;
      }
    }
  }

  async addDocument(text: string, metadata?: T): Promise<ID> {
    const embedding = await getTextEmbedding(text);
    const document: EmbeddingDocument<T> = {
      id: crypto.randomUUID(),
      text,
      embedding,
      metadata,
    };

    await this.openSearch.index<EmbeddingDocument<T>>(
      this.index,
      document,
      document.id
    );
    return document.id;
  }

  async search(
    query: string,
    options: SearchOptions = {}
  ): Promise<SearchResult<T>[]> {
    const { topK = 5, filters } = options;
    const queryEmbedding = await getTextEmbedding(query);

    const searchBody = {
      size: topK,
      query: {
        bool: {
          must: [
            {
              knn: {
                embedding: {
                  vector: queryEmbedding,
                  k: topK,
                },
              },
            },
          ],
          filter: filters ? this.buildFilters(filters) : [],
        },
      },
    };

    const searchResponse = await this.openSearch.search<EmbeddingDocument<T>>({
      index: this.index,
      body: searchBody,
    });

    return searchResponse.hits.hits.map((hit) => ({
      id: hit._source.id,
      text: hit._source.text,
      score: hit._score,
      metadata: hit._source.metadata,
    }));
  }

  private buildFilters(filters: Record<string, unknown>): object[] {
    return Object.entries(filters).map(([key, value]) => ({
      term: { [`metadata.${key}`]: value },
    }));
  }

  async deleteDocument(id: ID): Promise<void> {
    await this.openSearch.delete(this.index, id);
  }

  async updateDocument(
    id: ID,
    text: string,
    metadata?: Partial<T>
  ): Promise<void> {
    const embedding = await getTextEmbedding(text);
    const document: Partial<EmbeddingDocument<T>> = {
      text,
      embedding,
      metadata: metadata as T, // Type assertion needed due to partial update
    };

    await this.openSearch.update<EmbeddingDocument<T>>(
      this.index,
      id,
      document
    );
  }
}

type ID = string;

interface EmbeddingDocument<T extends Metadata = Metadata> {
  id: ID;
  text: string;
  embedding: number[];
  metadata?: T;
}

interface SearchResult<T extends Metadata = Metadata> {
  id: ID;
  text: string;
  score: number;
  metadata?: T;
}

interface SearchOptions {
  topK?: number;
  filters?: Record<string, unknown>;
}

// Custom embedding function
export async function getTextEmbedding(text: string): Promise<number[]> {
  const response = await fetch("https://text.aiya.ai/embed", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });

  if (!response.ok) {
    throw new Error(`Embedding request failed with status ${response.status}`);
  }

  const result = (await response.json()) as {
    text: string;
    usage_time_ms: number;
    embedding: number[][];
  };

  return result.embedding[0];
}
