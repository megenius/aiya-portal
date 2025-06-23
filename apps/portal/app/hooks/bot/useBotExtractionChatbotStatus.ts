// hooks/useBotSlips.ts
import { useQuery } from "@tanstack/react-query";
import { ExtractionChatbotStatus } from "~/@types/app";
import { fetchExtractionChatbotStatus } from "~/services/bots";

interface UseBotExtractionChatbotStatusProps {
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

export const useBotExtractionChatbotStatus = ({
  task_id,
  enabled = false,
}: UseBotExtractionChatbotStatusProps) => {
  return useQuery<ExtractionChatbotStatus, Error, ExtractionChatbotStatus>({
    queryKey: ["bots", "extraction-chatbot-status", task_id],
    queryFn: () =>
      fetchExtractionChatbotStatus(task_id).then((res) => res.data),
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
