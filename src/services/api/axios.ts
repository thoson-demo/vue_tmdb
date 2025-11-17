import axios, {
  AxiosError,
  type AxiosInstance,
  type InternalAxiosRequestConfig,
} from 'axios'
import { tokenService } from '../auth/token.service'
import { authService } from '../auth/auth.service'

const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL || 'https://api.example.com'

// Create axios instance
const apiClient: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor - Add token to requests
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = tokenService.getAccessToken()

    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`
    } else {
      // Use default token from env for public endpoints
      const token = import.meta.env.VITE_TMDB_API_READ_ACCESS_TOKEN
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`
      }
    }

    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

// Response interceptor - Handle token refresh
let isRefreshing = false
let failedQueue: Array<{
  resolve: (value?: unknown) => void
  reject: (reason?: unknown) => void
}> = []

const processQueue = (error: Error | null, token: string | null = null) => {
  failedQueue.forEach(prom => {
    if (error) {
      prom.reject(error)
    } else {
      prom.resolve(token)
    }
  })

  failedQueue = []
}

apiClient.interceptors.response.use(
  response => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean
    }

    // If error is 401 and we haven't retried yet
    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        // Queue the request while token is being refreshed
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject })
        })
          .then(token => {
            if (originalRequest.headers) {
              originalRequest.headers.Authorization = `Bearer ${token}`
            }
            return apiClient(originalRequest)
          })
          .catch(err => Promise.reject(err))
      }

      originalRequest._retry = true
      isRefreshing = true

      const refreshToken = tokenService.getRefreshToken()

      if (!refreshToken) {
        // No refresh token, redirect to login
        tokenService.removeTokens()
        window.location.href = '/login'
        return Promise.reject(error)
      }

      try {
        // Refresh token
        const { accessToken, refreshToken: newRefreshToken } =
          await authService.refreshToken(refreshToken)

        tokenService.setAccessToken(accessToken)
        tokenService.setRefreshToken(newRefreshToken)

        // Update authorization header
        if (originalRequest.headers) {
          originalRequest.headers.Authorization = `Bearer ${accessToken}`
        }

        processQueue(null, accessToken)

        return apiClient(originalRequest)
      } catch (refreshError) {
        processQueue(refreshError as Error, null)
        tokenService.removeTokens()
        window.location.href = '/login'
        return Promise.reject(refreshError)
      } finally {
        isRefreshing = false
      }
    }

    return Promise.reject(error)
  }
)

export { apiClient }
