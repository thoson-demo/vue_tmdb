<!-- src/views/MoviePage.vue -->
<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  import { movieService } from '../services/tmdb/movie.service'
  import type { Movie } from '../types'

  const route = useRoute()
  const movieId = ref<number>(Number(route.params.id))
  const movie = ref<Movie | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  const fetchMovieDetail = async () => {
    loading.value = true
    error.value = null

    try {
      const data = await movieService.getDetail(movieId.value)
      movie.value = data

      // Log data to console
      console.log('Movie Detail:', data)
      console.log('Title:', data.title)
      console.log('Overview:', data.overview)
      console.log('Rating:', data.vote_average)
      console.log('Release Date:', data.release_date)
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to fetch movie'
      console.error('Error fetching movie:', err)
    } finally {
      loading.value = false
    }
  }

  onMounted(() => {
    fetchMovieDetail()
  })
</script>

<template>
  <div class="movie-page">
    <div v-if="loading" class="loading">
      <p>Loading movie details...</p>
    </div>

    <div v-else-if="error" class="error">
      <p>Error: {{ error }}</p>
    </div>

    <div v-else-if="movie" class="movie-detail">
      <h1>{{ movie.title }}</h1>

      <div class="info">
        <p><strong>Release Date:</strong> {{ movie.release_date }}</p>
        <p><strong>Rating:</strong> {{ movie.vote_average }}/10</p>
      </div>

      <div class="overview">
        <h2>Overview</h2>
        <p>{{ movie.overview }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .movie-page {
    padding: 24px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .loading,
  .error {
    text-align: center;
    padding: 48px;
    font-size: 18px;
  }

  .error {
    color: var(--md-sys-color-error, #dc3545);
  }

  .movie-detail h1 {
    font-size: 32px;
    margin-bottom: 8px;
    color: var(--md-sys-color-on-surface);
  }

  .tagline {
    font-style: italic;
    color: var(--md-sys-color-on-surface-variant);
    margin-bottom: 24px;
  }

  .info {
    display: flex;
    gap: 24px;
    margin-bottom: 16px;
  }

  .info p {
    margin: 0;
    color: var(--md-sys-color-on-surface);
  }

  .genres {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 24px;
    flex-wrap: wrap;
  }

  .genre-tag {
    padding: 4px 12px;
    background-color: var(--md-sys-color-primary-container);
    color: var(--md-sys-color-on-primary-container);
    border-radius: 16px;
    font-size: 14px;
  }

  .overview h2 {
    font-size: 24px;
    margin-bottom: 12px;
    color: var(--md-sys-color-on-surface);
  }

  .overview p {
    line-height: 1.6;
    color: var(--md-sys-color-on-surface-variant);
  }
</style>
