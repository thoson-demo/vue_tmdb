import type { PaginatedResponse, Movie } from '../../types'
import { apiClient } from '../api/axios'
import { API_ENDPOINTS } from '../api/endpoints'

export const movieService = {
  async getDiscover(page = 1): Promise<PaginatedResponse<Movie>> {
    const { data } = await apiClient.get<PaginatedResponse<Movie>>(
      API_ENDPOINTS.MOVIES.DISCOVER,
      { params: { page } }
    )
    return data
  },

  async getTopRated(
    timeWindow: 'day' | 'week' = 'week'
  ): Promise<PaginatedResponse<Movie>> {
    const { data } = await apiClient.get<PaginatedResponse<Movie>>(
      API_ENDPOINTS.MOVIES.TOP_RATED,
      { params: { time_window: timeWindow } }
    )
    return data
  },

  async getDetail(id: number): Promise<Movie> {
    const { data } = await apiClient.get<Movie>(API_ENDPOINTS.MOVIES.DETAIL(id))
    return data
  },

  async search(query: string, page = 1): Promise<PaginatedResponse<Movie>> {
    const { data } = await apiClient.get<PaginatedResponse<Movie>>(
      API_ENDPOINTS.MOVIES.SEARCH,
      { params: { query, page } }
    )
    return data
  },
}
