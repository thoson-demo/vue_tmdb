import { apiClient } from './api'
import { ENDPOINTS } from '../constants/api'
import type { Movie, MovieDetails, MovieResponse, Genre } from '../types'

export class MovieService {
  static async getPopularMovies(page = 1): Promise<MovieResponse> {
    return apiClient.get<MovieResponse>(`${ENDPOINTS.MOVIES.POPULAR}?page=${page}`)
  }

  static async getTopRatedMovies(page = 1): Promise<MovieResponse> {
    return apiClient.get<MovieResponse>(`${ENDPOINTS.MOVIES.TOP_RATED}?page=${page}`)
  }

  static async getNowPlayingMovies(page = 1): Promise<MovieResponse> {
    return apiClient.get<MovieResponse>(`${ENDPOINTS.MOVIES.NOW_PLAYING}?page=${page}`)
  }

  static async getUpcomingMovies(page = 1): Promise<MovieResponse> {
    return apiClient.get<MovieResponse>(`${ENDPOINTS.MOVIES.UPCOMING}?page=${page}`)
  }

  static async getMovieDetails(id: number): Promise<MovieDetails> {
    return apiClient.get<MovieDetails>(ENDPOINTS.MOVIES.DETAILS(id))
  }

  static async searchMovies(query: string, page = 1): Promise<MovieResponse> {
    return apiClient.get<MovieResponse>(`${ENDPOINTS.MOVIES.SEARCH}?query=${encodeURIComponent(query)}&page=${page}`)
  }

  static async getGenres(): Promise<{ genres: Genre[] }> {
    return apiClient.get<{ genres: Genre[] }>(ENDPOINTS.GENRES)
  }
}