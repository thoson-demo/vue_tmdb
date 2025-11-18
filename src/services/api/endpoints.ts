export const API_ENDPOINTS = {
  // Auth
  AUTH: {
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
    ME: '/auth/me',
  },
  // Movies
  MOVIES: {
    DISCOVER: '/discover/movie',
    POPULAR: '/movies/popular',
    TOP_RATED: '/movies/top_rated',
    DETAIL: (id: number) => `/movie/${id}`,
    SEARCH: '/movies/search',
  },
} as const
