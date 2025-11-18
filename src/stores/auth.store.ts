import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { authService } from '../services/auth/auth.service'
import { tokenService } from '../services/auth/token.service'
import type { User, LoginCredentials } from '../types/auth'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  const isAuthenticated = computed(
    () => !!user.value && tokenService.hasTokens()
  )

  async function login(credentials: LoginCredentials) {
    loading.value = true
    error.value = null

    try {
      const response = await authService.login(credentials)
      user.value = response.user
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Login failed'
      throw err
    } finally {
      loading.value = false
    }
  }

  async function logout() {
    loading.value = true

    try {
      await authService.logout()
    } finally {
      user.value = null
      loading.value = false
    }
  }

  async function fetchCurrentUser() {
    if (!tokenService.hasTokens()) return

    loading.value = true

    try {
      user.value = await authService.getCurrentUser()
    } catch (err) {
      console.error('Failed to fetch user:', err)
      tokenService.removeTokens()
    } finally {
      loading.value = false
    }
  }

  return {
    user,
    loading,
    error,
    isAuthenticated,
    login,
    logout,
    fetchCurrentUser,
  }
})
