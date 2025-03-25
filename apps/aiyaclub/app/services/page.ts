import { PageLiff } from "~/@types/page.type";

export class PageApiService {
  private static getBaseUrl(request?: Request): string {
    const envUrl = typeof process !== 'undefined' && process.env.LIFF_API_URL;
    if (envUrl) return envUrl;
    if (request) {
      const url = new URL(request.url);
      return `${url.protocol}//${url.hostname}:14200`;
    }
    return "http://localhost:14200";
  }

  /**
   * Fetches pages liff from the API
   * @param request Optional request object for server context
   * @returns Array of Page objects
   */
  static async getPages(request?: Request): Promise<PageLiff | null> {
    try {
      const baseUrl = this.getBaseUrl(request);
      const pageID = "2006392276-1qv3Lnpm";
      const slug = "shop-test";
      const response = await fetch(`${baseUrl}/api/liff/${pageID}/${slug}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return await response.json() as PageLiff;
    } catch (error) {
      console.error("Error fetching pages:", error);
      return null;
    }
  }
}
