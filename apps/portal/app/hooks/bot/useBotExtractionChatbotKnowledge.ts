import { useQuery } from "@tanstack/react-query";
import { ChatbotKnowledgeExtractionResponse } from "~/@types/app";
import { fetchExtractionChatbotKnowledge } from "~/services/bots";

interface UseBotExtractionChatbotKnowledgeProps {
  task_id: string;
  enabled?: boolean;
}

const POLL_STATUSES = [
  "queued",
  "processing",
  "processing_documents",
  "downloading",
  "crawling",
  "generating",
  "ready_for_extraction",
];

export const useBotExtractionChatbotKnowledge = ({
  task_id,
  enabled = false,
}: UseBotExtractionChatbotKnowledgeProps) => {
  return useQuery<ChatbotKnowledgeExtractionResponse, Error, ChatbotKnowledgeExtractionResponse>({
    queryKey: ["bots", "extraction-chatbot-knowledge", task_id],
    queryFn: () =>
      fetchExtractionChatbotKnowledge(task_id).then((res) => res.data),
    enabled,
    // ถ้า status ยังอยู่ในกลุ่ม polling ให้รีเฟรชทุก 2 วินาที
    refetchInterval: (latestData) => {
      if (!enabled || !latestData) return false;
      return POLL_STATUSES.includes(
        latestData.state.data?.response?.status as string
      )
        ? 2000
        : false;
    },
    // ถ้าต้องการให้รีเฟชแม้ว่า tab จะ background ก็ใช้
    refetchIntervalInBackground: true,
  });
};
