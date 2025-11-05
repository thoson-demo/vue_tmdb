# 📋 Vue TMDB - Development Conventions

## 📁 **File & Folder Structure**

### **Directory Organization**
```
src/
├── assets/              # Static assets (images, fonts, icons)
├── components/          # Reusable Vue components
│   ├── ui/             # Base UI components (BaseButton, BaseInput)
│   ├── layout/         # Layout components (AppHeader, AppFooter)
│   └── movie/          # Feature-specific components (MovieCard, MovieList)
├── composables/        # Vue 3 Composition API logic
├── constants/          # App constants and configuration
├── router/            # Vue Router configuration
├── services/          # API services and HTTP clients
├── stores/            # Pinia stores (state management)
├── styles/            # Global styles and CSS variables
├── types/             # TypeScript interfaces and types
├── utils/             # Utility functions and helpers
└── views/             # Page components (screens/routes)
```

### **File Naming Rules**

| Type | Convention | Example |
|------|------------|---------|
| **Vue Components** | PascalCase | `MovieCard.vue`, `AppHeader.vue` |
| **Views/Pages** | PascalCase + View suffix | `HomeView.vue`, `MovieDetailView.vue` |
| **Base UI Components** | Base + ComponentName | `BaseButton.vue`, `BaseInput.vue` |
| **Layout Components** | App + ComponentName | `AppHeader.vue`, `AppNavigation.vue` |
| **TypeScript Files** | camelCase | `movieService.ts`, `useMovies.ts` |
| **Type Definitions** | camelCase | `movie.ts`, `api.ts` |
| **Constants** | camelCase | `api.ts`, `routes.ts` |
| **Utilities** | camelCase | `formatters.ts`, `validators.ts` |

## 🧩 **Component Conventions**

### **Component Structure**
```vue
<template>
  <!-- Template content -->
</template>

<script setup lang="ts">
// 1. Imports
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import type { Movie } from '@/types'

// 2. Props interface
interface Props {
  movie: Movie
  isLoading?: boolean
}

// 3. Props & emits
const props = withDefaults(defineProps<Props>(), {
  isLoading: false
})

const emit = defineEmits<{
  click: [movie: Movie]
  favorite: [id: number]
}>()

// 4. Composables
const router = useRouter()

// 5. Reactive state
const isVisible = ref(false)

// 6. Computed properties
const formattedDate = computed(() => {
  return formatDate(props.movie.release_date)
})

// 7. Methods
const handleClick = () => {
  emit('click', props.movie)
}

// 8. Lifecycle hooks
onMounted(() => {
  isVisible.value = true
})
</script>

<style scoped>
/* Component-specific styles */
</style>
```

### **Props & Events**
- **Props**: Use TypeScript interfaces, provide defaults
- **Events**: Use typed emits with descriptive names
- **Required props**: No default values
- **Optional props**: Provide sensible defaults

## 🎨 **CSS & Styling Conventions**

### **CSS Variables Usage**
```css
/* Use CSS variables from styles/variables.css */
.movie-card {
  background: var(--color-surface);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-md);
  transition: var(--transition-fast);
}
```

### **Class Naming (BEM-inspired)**
```css
/* Block */
.movie-card { }

/* Element */
.movie-card__title { }
.movie-card__image { }
.movie-card__rating { }

/* Modifier */
.movie-card--featured { }
.movie-card--loading { }

/* State */
.movie-card.is-selected { }
.movie-card.is-loading { }
```

### **Responsive Design**
```css
/* Mobile-first approach */
.movie-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-md);
}

/* Tablet */
@media (min-width: 768px) {
  .movie-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .movie-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

## 🔧 **TypeScript Conventions**

### **Interface Naming**
```typescript
// Interfaces: PascalCase
interface Movie {
  id: number
  title: string
  release_date: string
}

// API Response types
interface MovieResponse {
  results: Movie[]
  total_results: number
}

// Component props
interface MovieCardProps {
  movie: Movie
  isLoading?: boolean
}

// Event payloads
interface MovieClickEvent {
  movie: Movie
  source: 'card' | 'list'
}
```

### **Type Exports**
```typescript
// types/index.ts - Centralized exports
export type { Movie, MovieDetails, Genre } from './movie'
export type { ApiResponse, ApiError } from './api'
```

### **Generic Types**
```typescript
// Use descriptive generic names
interface ApiResponse<TData> {
  success: boolean
  data: TData
}

// Function generics
function useApi<TResponse>(): ApiState<TResponse> {
  // implementation
}
```

## 🌐 **API & Services Conventions**

### **Service Structure**
```typescript
// services/movieService.ts
export class MovieService {
  static async getPopular(page = 1): Promise<MovieResponse> {
    return apiClient.get<MovieResponse>(`/movie/popular?page=${page}`)
  }

  static async getDetails(id: number): Promise<MovieDetails> {
    return apiClient.get<MovieDetails>(`/movie/${id}`)
  }
}
```

### **Error Handling**
```typescript
// Consistent error handling
try {
  const movies = await MovieService.getPopular()
  return movies
} catch (error) {
  console.error('Failed to fetch movies:', error)
  throw new Error('Unable to load movies')
}
```

### **API Response Formatting**
```typescript
// Always return consistent response format
interface ApiResponse<T> {
  success: boolean
  data: T
  message?: string
  error?: string
}
```

## 🎯 **Composables Conventions**

### **Composable Naming**
```typescript
// Always start with 'use'
export function useMovies() { }
export function useApi<T>() { }
export function useLocalStorage(key: string) { }
```

### **Return Object Structure**
```typescript
export function useMovies() {
  return {
    // State (refs)
    movies,
    isLoading,
    error,
    
    // Computed
    featuredMovies,
    totalCount,
    
    // Methods
    fetchMovies,
    searchMovies,
    reset,
  }
}
```

## 🛣️ **Router Conventions**

### **Route Naming**
```typescript
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/movie/:id',
    name: 'MovieDetail',
    component: () => import('@/views/MovieDetailView.vue'),
    props: true
  }
]
```

### **Route Parameters**
- Use descriptive parameter names
- Always validate route params
- Provide fallbacks for invalid params

## 📦 **State Management (Pinia)**

### **Store Structure**
```typescript
// stores/movieStore.ts
export const useMovieStore = defineStore('movie', () => {
  // State
  const movies = ref<Movie[]>([])
  const currentMovie = ref<MovieDetails | null>(null)
  const isLoading = ref(false)
  
  // Getters
  const featuredMovies = computed(() => 
    movies.value.filter(movie => movie.vote_average > 8)
  )
  
  // Actions
  const fetchMovies = async () => {
    isLoading.value = true
    try {
      const response = await MovieService.getPopular()
      movies.value = response.results
    } finally {
      isLoading.value = false
    }
  }
  
  return {
    movies,
    currentMovie,
    isLoading,
    featuredMovies,
    fetchMovies,
  }
})
```

## 🔄 **Import/Export Conventions**

### **Import Order**
```typescript
// 1. Vue imports
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

// 2. Third-party libraries
import axios from 'axios'

// 3. Internal utilities/types
import { formatDate } from '@/utils'
import type { Movie } from '@/types'

// 4. Components
import BaseButton from '@/components/ui/BaseButton.vue'
import MovieCard from '@/components/movie/MovieCard.vue'
```

### **Export Patterns**
```typescript
// Named exports for utilities
export { formatDate, formatCurrency }

// Default export for components
export default defineComponent({ })

// Re-exports from index files
export * from './movie'
export * from './api'
```

## 🧪 **Testing Conventions**

### **Test File Structure**
```
tests/
├── unit/
│   ├── components/
│   │   └── MovieCard.spec.ts
│   ├── composables/
│   │   └── useMovies.spec.ts
│   └── utils/
│       └── formatters.spec.ts
└── e2e/
    ├── home.spec.ts
    └── movieDetail.spec.ts
```

### **Test Naming**
```typescript
// Describe blocks: Component/Function name
describe('MovieCard', () => {
  // Test cases: should + behavior
  it('should display movie title', () => {
    // test implementation
  })
  
  it('should emit click event when clicked', () => {
    // test implementation
  })
})
```

## 📝 **Documentation Conventions**

### **Component Documentation**
```vue
<!-- 
MovieCard.vue
A reusable card component for displaying movie information.

Props:
- movie: Movie object containing movie data
- isLoading: Optional loading state

Events:
- click: Emitted when card is clicked with movie data
- favorite: Emitted when favorite button is clicked

Usage:
<MovieCard 
  :movie="movieData" 
  :is-loading="loading"
  @click="handleMovieClick"
/>
-->
<template>
  <!-- component template -->
</template>
```

### **Function Documentation**
```typescript
/**
 * Formats a date string to a readable format
 * @param dateString - ISO date string
 * @returns Formatted date string (e.g., "January 15, 2023")
 */
export function formatDate(dateString: string): string {
  // implementation
}
```

## 🚀 **Performance Conventions**

### **Component Optimization**
- Use `v-memo` for expensive list rendering
- Implement lazy loading for images
- Use `shallowRef` for complex objects that don't need deep reactivity
- Prefer `computed` over methods for derived data

### **Bundle Optimization**
- Use dynamic imports for route components
- Implement code splitting for large features
- Optimize images (WebP format, responsive sizes)
- Tree-shake unused utilities

## 🔍 **Error Handling Conventions**

### **Component Error Boundaries**
```vue
<script setup lang="ts">
import { onErrorCaptured } from 'vue'

onErrorCaptured((error) => {
  console.error('Component error:', error)
  // Log to error tracking service
  return false // Prevent error from bubbling up
})
</script>
```

### **API Error Handling**
```typescript
// Consistent error response format
interface ApiError {
  message: string
  code: string
  details?: Record<string, any>
}

// Global error handler
const handleApiError = (error: any): ApiError => {
  if (error.response?.data?.message) {
    return {
      message: error.response.data.message,
      code: error.response.status.toString()
    }
  }
  
  return {
    message: 'An unexpected error occurred',
    code: 'UNKNOWN_ERROR'
  }
}
```

## ✅ **Code Quality Standards**

### **Linting Rules**
- Use ESLint with Vue/TypeScript presets
- Enable Prettier for consistent formatting
- Configure import sorting rules
- Enforce consistent component prop ordering

### **Git Conventions**
```
feat: add movie search functionality
fix: resolve image loading issue
docs: update API documentation
style: improve movie card styling
refactor: extract movie utilities
test: add movie service unit tests
chore: update dependencies
```

### **Review Checklist**
- [ ] TypeScript types are properly defined
- [ ] Components follow naming conventions
- [ ] CSS uses design system variables
- [ ] Error handling is implemented
- [ ] Tests are included for new features
- [ ] Documentation is updated
- [ ] Performance impact is considered

---

## 🎯 **Key Principles**

1. **Consistency**: Follow established patterns throughout the codebase
2. **Type Safety**: Leverage TypeScript for better developer experience
3. **Reusability**: Create modular, composable components and utilities
4. **Performance**: Optimize for bundle size and runtime performance
5. **Maintainability**: Write self-documenting code with clear structure
6. **Accessibility**: Ensure components are accessible by default
7. **Testing**: Maintain good test coverage for critical functionality

---

*Last updated: November 2025*