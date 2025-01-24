export interface GenerationConfig {
  responseModalities: string[];
  temperature: number;
  maxOutputTokens: number;
  topP: number;
  responseMimeType: string;
  responseSchema: {
    type: string;
    properties: {
      response: {
        type: string;
      };
    };
  };
}

interface SafetySetting {
  category: string;
  threshold: string;
}

interface SystemInstruction {
  parts: Array<{
    text: string;
  }>;
}

interface Content {
  role: string;
  parts: Array<{
    text: string;
  }>;
}

export interface GeminiRequest {
  contents: Content[];
  systemInstruction: SystemInstruction;
  generationConfig: GenerationConfig;
  safetySettings: SafetySetting[];
}

export namespace GeminiGenerationResponse {
  export interface GenerationResponse {
    candidates: Candidate[];
    usageMetadata: UsageMetadata;
    modelVersion: string;
    createTime: string;
    responseId: string;
  }

  export interface Candidate {
    content: Content;
    finishReason: string;
    avgLogprobs: string;
  }

  export interface Content {
    role: string;
    parts: Part[];
  }

  export interface Part {
    text: string;
  }

  export interface UsageMetadata {
    promptTokenCount: number;
    candidatesTokenCount: number;
    totalTokenCount: number;
    promptTokensDetails: PromptTokensDetail[];
    candidatesTokensDetails: CandidatesTokensDetail[];
  }

  export interface PromptTokensDetail {
    modality: string;
    tokenCount: number;
  }

  export interface CandidatesTokensDetail {
    modality: string;
    tokenCount: number;
  }
}



export namespace GenerationResponse {
  
  export interface GenerationResponse {
    success: boolean
    data: Daum[]
    metadata: Metadata
  }
  
  export interface Daum {
    intent: string
    name: string
    questions: string[]
    quickReply: string
    tags: string[]
    answers: string
  }
  
  export interface Metadata {
    modelVersion: string
    createTime: string
    tokenCounts: TokenCounts
  }
  
  export interface TokenCounts {
    prompt: number
    response: number
    total: number
  }
  
}