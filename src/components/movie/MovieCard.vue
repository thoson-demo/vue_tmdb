<script setup lang="ts">
  import { StarIcon } from '@heroicons/vue/24/solid'
  import { computed, onMounted } from 'vue'

  interface Props {
    id: number
    title: string
    posterPath?: string | null
    rating?: number
    year?: string
  }

  const props = withDefaults(defineProps<Props>(), {
    id: 0,
    posterUrl: '',
    rating: 0,
    year: '',
  })

  const emit = defineEmits<{
    (e: 'click', id: number): void
  }>()

  const handleClick = () => {
    emit('click', props.id)
  }

  const imageUrl = computed(() => {
    const baseUrl = import.meta.env.VITE_TMDB_IMAGE_BASE_URL || ''
    const url = props.posterPath ? `${baseUrl}/w500${props.posterPath}` : ''
    console.log('Computed Image URL:', url)
    return url
  })

  onMounted(() => {
    console.log('MovieCard Mounted with ID:', props.id, imageUrl.value)
  })
</script>

<template>
  <div class="movie-card" @click="handleClick">
    <div class="movie-poster">
      <img
        v-if="props.posterPath"
        :src="imageUrl"
        :alt="props.title"
        class="poster-img"
      />
      <div v-else class="poster-placeholder">
        <span>No Image</span>
      </div>
      <div v-if="rating" class="rating-badge">
        <StarIcon class="star-icon" />
        <span>{{ rating.toFixed(1) }}</span>
      </div>
    </div>
    <div class="movie-info">
      <h3 class="movie-title">{{ title }}</h3>
      <p v-if="year" class="movie-year">{{ year }}</p>
    </div>
  </div>
</template>

<style scoped>
  .movie-card {
    display: flex;
    flex-direction: column;
    gap: 12px;
    cursor: pointer;
    transition: transform 0.2s ease;
  }

  .movie-card:hover {
    transform: translateY(-4px);
  }

  .movie-poster {
    position: relative;
    width: 100%;
    aspect-ratio: 2/3;
    border-radius: 8px;
    overflow: hidden;
    background-color: var(--md-sys-color-surface-container);
  }

  .poster-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .poster-placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--md-sys-color-on-surface-variant);
    font-size: 14px;
  }

  .rating-badge {
    position: absolute;
    top: 8px;
    right: 8px;
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 4px 8px;
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(4px);
    border-radius: 4px;
    color: #fff;
    font-size: 14px;
    font-weight: 500;
  }

  .star-icon {
    width: 16px;
    height: 16px;
    color: #f5c518;
  }

  .movie-info {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .movie-title {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 500;
    color: var(--md-sys-color-on-surface);
    line-height: 1.4;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .movie-year {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    color: var(--md-sys-color-on-surface-variant);
  }
</style>
