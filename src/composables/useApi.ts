import { ref, computed, type Ref, type ComputedRef } from 'vue'
import type { ApiStatus } from '../types'

export interface UseApiState<T> {
  data: Ref<T | null>
  status: Ref<ApiStatus>
  error: Ref<string | null>
  isLoading: ComputedRef<boolean>
  isError: ComputedRef<boolean>
  isSuccess: ComputedRef<boolean>
  execute: (apiCall: () => Promise<T>) => Promise<void>
  reset: () => void
}

export function useApi<T>(): UseApiState<T> {
  const data = ref<T | null>(null) as Ref<T | null>
  const status = ref<ApiStatus>('idle')
  const error = ref<string | null>(null)

  const isLoading = computed(() => status.value === 'loading')
  const isError = computed(() => status.value === 'error')
  const isSuccess = computed(() => status.value === 'success')

  const execute = async (apiCall: () => Promise<T>) => {
    try {
      status.value = 'loading'
      error.value = null

      const result = await apiCall()

      data.value = result
      status.value = 'success'
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'An error occurred'
      status.value = 'error'
      console.error('API Error:', err)
    }
  }

  const reset = () => {
    data.value = null
    status.value = 'idle'
    error.value = null
  }

  return {
    data,
    status,
    error,
    isLoading,
    isError,
    isSuccess,
    execute,
    reset,
  }
}
