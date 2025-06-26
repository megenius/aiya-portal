import axios, { AxiosInstance, AxiosError } from 'axios';
import { AuthTokens, User } from '../@types/directus';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000';

class DirectusClient {
  private axiosInstance: AxiosInstance;
  private accessToken: string | null = null;
  private refreshToken: string | null = null;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: API_URL,
    });

    // Add interceptors and other methods here
  }

  // Implement login, logout, refreshAccessToken, and CRUD methods here
}

const directusClient = new DirectusClient();
export default directusClient;
