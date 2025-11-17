export interface LoginCredentials {
  email: string
  password: string
}

export interface AuthResponse {
  accessToken: string
  refreshToken: string
  user: User
}

export interface User {
  id: string
  email: string
  name: string
  avatar?: string
}
