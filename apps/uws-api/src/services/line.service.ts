export class LineService {
  private readonly channelAccessToken: string;

  constructor(channelAccessToken: string) {
    if (!channelAccessToken) {
      console.error(
        "LINE_CHANNEL_ACCESS_TOKEN is not set in the environment variables."
      );
      throw new Error("Missing LINE Channel Access Token");
    }

    this.channelAccessToken = channelAccessToken;
  }

  async downloadImage(messageId: string): Promise<ArrayBuffer | null> {
    const url = `https://api-data.line.me/v2/bot/message/${messageId}/content`;

    try {
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${this.channelAccessToken}`,
        },
      });

      if (!response.ok) {
        console.error(
          `Failed to download image from LINE. Status: ${response.status}, Message ID: ${messageId}`
        );
        return null;
      }

      const buffer = await response.arrayBuffer();
      return buffer;
    } catch (error) {
      console.error(
        `Error downloading image from LINE: ${error}, Message ID: ${messageId}`
      );
      return null;
    }
  }
}
