import { Logger } from "~/utils/logger";

export class LineChatService {
  private readonly log = new Logger("LineChatService");
  private readonly baseUrl = "https://api.line.me/v2/bot/chat";

  constructor(private readonly channelToken: string) {}

  async startLoading(chatId: string, loadingSeconds: number = 5): Promise<boolean> {
    try {
      const response = await fetch(`${this.baseUrl}/loading/start`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.channelToken}`,
        },
        body: JSON.stringify({
          chatId,
          loadingSeconds: Math.min(Math.max(loadingSeconds, 1), 60), // Ensure between 1-60 seconds
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to start loading: ${response.statusText}`);
      }

      this.log.info("Chat loading started", { chatId, loadingSeconds });

      return true;
    } catch (error) {
      this.log.error("Failed to start chat loading", { chatId, error });
      return false;
    }
  }
}
