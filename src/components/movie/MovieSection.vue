<script setup lang="ts">
  import { ChevronRightIcon } from '@heroicons/vue/24/outline'
  import MovieCard from './MovieCard.vue'
  import type { Movie } from '../../types/movie'

  interface Props {
    title: string
    movies: Movie[]
    showViewAll?: boolean
  }

  withDefaults(defineProps<Props>(), {
    showViewAll: true,
  })

  const emit = defineEmits<{
    (e: 'movieSelected', id: number): void
  }>()

  const openMovieDetail = (id: number) => {
    emit('movieSelected', id)
  }
</script>

<template>
  <section class="movie-section">
    <div class="section-header">
      <h2 class="section-title">{{ title }}</h2>
      <button v-if="showViewAll" class="view-all-btn">
        <span>View All</span>
        <ChevronRightIcon class="chevron-icon" />
      </button>
    </div>
    <div class="movies-grid">
      <MovieCard
        v-for="movie in movies"
        :key="movie.id"
        :id="movie.id"
        :title="movie.title"
        :posterPath="movie.poster_path"
        @click="openMovieDetail(movie.id)"
      />
    </div>
  </section>
</template>

<style scoped>
  .movie-section {
    width: 100%;
    padding: 40px 16px;
  }

  .section-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
  }

  .section-title {
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    font-weight: 700;
    color: var(--md-sys-color-on-surface);
  }

  .view-all-btn {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 8px 16px;
    background: none;
    border: none;
    color: var(--md-sys-color-primary);
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .view-all-btn:hover {
    opacity: 0.8;
  }

  .chevron-icon {
    width: 20px;
    height: 20px;
  }

  .movies-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 24px;
  }

  @media (max-width: 768px) {
    .movie-section {
      padding: 24px 16px;
    }

    .section-title {
      font-size: 20px;
    }

    .movies-grid {
      grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
      gap: 16px;
    }
  }
</style>
