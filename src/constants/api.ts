export const API_CONFIG = {
  BASE_URL: 'https://api.themoviedb.org/3',
  IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
  API_KEY: import.meta.env.VITE_TMDB_API_KEY || '',
} as const

export const IMAGE_SIZES = {
  poster: {
    w92: 'w92',
    w154: 'w154',
    w185: 'w185',
    w342: 'w342',
    w500: 'w500',
    w780: 'w780',
    original: 'original',
  },
  backdrop: {
    w300: 'w300',
    w780: 'w780',
    w1280: 'w1280',
    original: 'original',
  },
} as const

export const ENDPOINTS = {
  MOVIES: {
    POPULAR: '/movie/popular',
    TOP_RATED: '/movie/top_rated',
    NOW_PLAYING: '/movie/now_playing',
    UPCOMING: '/movie/upcoming',
    DETAILS: (id: number) => `/movie/${id}`,
    SEARCH: '/search/movie',
  },
  GENRES: '/genre/movie/list',
} as const