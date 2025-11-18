import axios from 'axios'
import { apiClient } from '../api/axios'
import { API_ENDPOINTS } from '../api/endpoints'
import { tokenService } from './token.service'
import type { AuthResponse, LoginCredentials, User } from '../../types/auth'

export const authService = {
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    const { data } = await apiClient.post<AuthResponse>(
      API_ENDPOINTS.AUTH.LOGIN,
      credentials
    )

    // Save tokens
    tokenService.setAccessToken(data.accessToken)
    tokenService.setRefreshToken(data.refreshToken)

    return data
  },

  async logout(): Promise<void> {
    try {
      await apiClient.post(API_ENDPOINTS.AUTH.LOGOUT)
    } finally {
      tokenService.removeTokens()
    }
  },

  async refreshToken(refreshToken: string): Promise<AuthResponse> {
    // Note: This call should NOT use apiClient to avoid infinite loop
    const { data } = await axios.post<AuthResponse>(
      `${import.meta.env.VITE_API_BASE_URL}${API_ENDPOINTS.AUTH.REFRESH}`,
      { refreshToken }
    )

    return data
  },

  async getCurrentUser(): Promise<User> {
    const { data } = await apiClient.get<User>(API_ENDPOINTS.AUTH.ME)
    return data
  },
}
