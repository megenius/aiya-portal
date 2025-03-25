import { Voucher, VoucherBrand } from "~/@types/app.type";

/**
 * Base API service for handling API requests
 * Designed to work in both server and client environments
 */
export class ApiService {
  /**
   * Gets the base API URL from environment variables with fallback
   * @param request Optional request object to access server context
   * @returns The base API URL
   */
  private static getBaseUrl(request?: Request): string {
    // Try to get from environment variable first
    const envUrl = typeof process !== 'undefined' && process.env.LIFF_API_URL;
    if (envUrl) return envUrl;
    
    // If we have a request, we can try to determine the API URL from it
    if (request) {
      const url = new URL(request.url);
      // Assuming the API is on the same domain but different port or path
      return `${url.protocol}//${url.hostname}:14200`;
    }
    
    // Fallback for client-side
    return "http://localhost:14200";
  }

  /**
   * Fetches published vouchers from the API
   * @param request Optional request object for server context
   * @param searchQuery Optional search query to filter vouchers
   * @returns Array of Voucher objects
   */
  static async getVouchers(request?: Request, searchQuery: string = ""): Promise<Array<Voucher>> {
    try {
      const baseUrl = this.getBaseUrl(request);
      const response = await fetch(`${baseUrl}/api/vouchers?status=published&q=${encodeURIComponent(searchQuery)}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching vouchers:", error);
      return [];
    }
  }

  /**
   * Fetches voucher brands from the API
   * @param request Optional request object for server context
   * @returns Array of VoucherBrand objects
   */
  static async getVoucherBrands(request?: Request): Promise<Array<VoucherBrand>> {
    try {
      const baseUrl = this.getBaseUrl(request);
      const response = await fetch(`${baseUrl}/api/vouchers/voucher-brands`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching brands:", error);
      return [];
    }
  }

  /**
   * Fetches brands from the API
   * @param request Optional request object for server context
   * @returns Array of brand objects
   */
  static async getBrands(request?: Request): Promise<Array<{ id: number; name: string; logo: string }>> {
    try {
      const baseUrl = this.getBaseUrl(request);
      const response = await fetch(`${baseUrl}/api/brands`);
      if (!response.ok) {
        throw new Error("Failed to fetch brands");
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching brands:", error);
      return [];
    }
  }
}
