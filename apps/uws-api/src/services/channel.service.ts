import { Channel } from "~/types/app.types";

export class ChannelService {
  private static instance: ChannelService;
  private readonly channelApi: Fetcher;
  private readonly baseUrl: string; // Store the base URL
  private token: string;

  private constructor(channelApi: Fetcher, baseUrl: string, token: string) {
    this.channelApi = channelApi;
    this.baseUrl = baseUrl;
    this.token = token;
  }

  private setToken(token: string) {
    this.token = token;
  }

  public static getInstance(
    channelApi: Fetcher,
    baseUrl: string,
    token: string
  ): ChannelService {
    if (!ChannelService.instance) {
      ChannelService.instance = new ChannelService(channelApi, baseUrl, token);
    }
    ChannelService.instance.setToken(token); // Update the token
    return ChannelService.instance;
  }

  async getChannel(channelId: string) {
    const url = `${this.baseUrl}/channels/${channelId}`; // Prepend the base URL
    try {
      const response = await this.channelApi.fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      });

      if (!response.ok) {
        throw new Error(
          `Failed to fetch channel: ${response.status} ${response.statusText}`
        );
      }

      return await response.json<Channel>();
    } catch (error) {
      console.error("Error fetching channel:", error);
      throw error; // Re-throw the error to be handled by the route
    }
  }

  
}
