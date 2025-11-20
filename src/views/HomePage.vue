<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import router from '../router'
  import AppBar from '../components/layout/AppBar.vue'
  import HeroBanner from '../components/home/HeroBanner.vue'
  import MovieSection from '../components/movie/MovieSection.vue'
  import { movieService } from '../services/tmdb/movie.service'
  import type { Movie } from '../types'
  import AppFooter from '../components/layout/AppFooter.vue'

  const discoverMovies = ref<Movie[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  const fetchMovies = async () => {
    loading.value = true
    error.value = null

    try {
      // Fetch trending movies
      // const trendingData = await movieService.getTopRated('day')
      // trendingMovies.value = trendingData.results.slice(0, 12) // Lấy 12 movies đầu tiên

      // console.log('Trending Movies:', trendingData.results)

      // Fetch popular movies
      const popularData = await movieService.getDiscover(1)
      discoverMovies.value = popularData.results.slice(0, 12)

      console.log('Popular Movies:', popularData.results)

      // Optional: Fetch top rated (nếu có endpoint)
      // const topRatedData = await movieService.getTopRated(1)
      // topRatedMovies.value = topRatedData.results.slice(0, 12)
    } catch (err) {
      error.value =
        err instanceof Error ? err.message : 'Failed to fetch movies'
      console.error('Error fetching movies:', err)
    } finally {
      loading.value = false
    }
  }

  function openMovieDetail(id: number) {
    router.push({ name: 'Movie', params: { id } })
  }

  onMounted(() => {
    fetchMovies()
  })
</script>

<template>
  <div class="home-view">
    <AppBar />
    <HeroBanner
      title="The Shawshank Redemption"
      overview="Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
      backdrop-url="https://image.tmdb.org/t/p/original/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg"
      :rating="8.7"
      year="1994"
    />
    <MovieSection
      title="Trending Now"
      :movies="discoverMovies"
      @movieSelected="openMovieDetail"
    />
    <AppFooter />
  </div>
</template>

<style scoped>
  .home-view {
    width: 100%;
    min-height: 100vh;
    background-color: var(--md-sys-color-surface-container-lowest);
  }
</style>
