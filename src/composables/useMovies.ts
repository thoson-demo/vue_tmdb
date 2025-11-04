import { computed } from 'vue'
import { MovieService } from '../services'
import { useApi } from './useApi'
import type { MovieResponse, MovieDetails } from '../types'

export function useMovies() {
  const popularMovies = useApi<MovieResponse>()
  const topRatedMovies = useApi<MovieResponse>()
  const nowPlayingMovies = useApi<MovieResponse>()
  const upcomingMovies = useApi<MovieResponse>()

  const fetchPopularMovies = (page = 1) => {
    return popularMovies.execute(() => MovieService.getPopularMovies(page))
  }

  const fetchTopRatedMovies = (page = 1) => {
    return topRatedMovies.execute(() => MovieService.getTopRatedMovies(page))
  }

  const fetchNowPlayingMovies = (page = 1) => {
    return nowPlayingMovies.execute(() => MovieService.getNowPlayingMovies(page))
  }

  const fetchUpcomingMovies = (page = 1) => {
    return upcomingMovies.execute(() => MovieService.getUpcomingMovies(page))
  }

  return {
    popularMovies,
    topRatedMovies,
    nowPlayingMovies,
    upcomingMovies,
    fetchPopularMovies,
    fetchTopRatedMovies,
    fetchNowPlayingMovies,
    fetchUpcomingMovies,
  }
}

export function useMovieDetail() {
  const movieDetail = useApi<MovieDetails>()

  const fetchMovieDetail = (id: number) => {
    return movieDetail.execute(() => MovieService.getMovieDetails(id))
  }

  return {
    movieDetail,
    fetchMovieDetail,
  }
}

export function useMovieSearch() {
  const searchResults = useApi<MovieResponse>()

  const searchMovies = (query: string, page = 1) => {
    if (!query.trim()) {
      searchResults.reset()
      return Promise.resolve()
    }
    return searchResults.execute(() => MovieService.searchMovies(query, page))
  }

  return {
    searchResults,
    searchMovies,
  }
}