import { API_CONFIG, IMAGE_SIZES } from '../constants/api'

/**
 * Get full image URL from TMDB path
 */
export function getImageUrl(
  path: string | null,
  size: keyof typeof IMAGE_SIZES.poster | keyof typeof IMAGE_SIZES.backdrop = 'w500'
): string {
  if (!path) {
    return '/placeholder-movie.jpg' // fallback image
  }
  
  return `${API_CONFIG.IMAGE_BASE_URL}/${size}${path}`
}

/**
 * Format date to readable string
 */
export function formatDate(dateString: string): string {
  if (!dateString) return 'Unknown'
  
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

/**
 * Format runtime minutes to hours and minutes
 */
export function formatRuntime(minutes: number | null): string {
  if (!minutes) return 'Unknown'
  
  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60
  
  if (hours > 0) {
    return `${hours}h ${mins}m`
  }
  return `${mins}m`
}

/**
 * Format vote average to one decimal place
 */
export function formatRating(rating: number): string {
  return rating.toFixed(1)
}

/**
 * Format large numbers (e.g., budget, revenue)
 */
export function formatCurrency(amount: number): string {
  if (amount === 0) return 'N/A'
  
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

/**
 * Debounce function for search input
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout>
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func(...args), delay)
  }
}