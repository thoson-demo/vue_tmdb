import { API_CONFIG } from "../constants";
import type { ApiError } from "../types";

class ApiClient {
  private baseURL: string;
  private apiKey: string;

  constructor() {
    this.baseURL = API_CONFIG.BASE_URL;
    this.apiKey = API_CONFIG.API_KEY;
  }

  private async request<T>(
    endpoint: string,
    options?: RequestInit
  ): Promise<T> {
    const url = new URL(endpoint, this.baseURL);
    url.searchParams.append("api_key", this.apiKey);

    try {
      const response = await fetch(url.toString(), {
        headers: {
          "Content-Type": "application/json",
          ...options?.headers,
        },
        ...options,
      });

      if (!response.ok) {
        const error: ApiError = await response.json();
        throw new Error(error.status_message || "API request failed");
      }

      return response.json();
    } catch (error) {
      console.error("API request error:", error);
      throw error;
    }
  }

  async get<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, { method: "GET" });
  }

  async post<T>(endpoint: string, data?: unknown): Promise<T> {
    return this.request<T>(endpoint, {
      method: "POST",
      body: JSON.stringify(data),
    });
  }
}

export const apiClient = new ApiClient();
