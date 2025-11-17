<script setup lang="ts">
  import { ref } from 'vue'
  import router from '../router'
  import AppBar from '../components/layout/AppBar.vue'
  import HeroBanner from '../components/home/HeroBanner.vue'
  import MovieSection from '../components/movie/MovieSection.vue'

  // Mock data
  const trendingMovies = ref([
    {
      id: 1,
      title: 'The Shawshank Redemption',
      posterUrl:
        'https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
      rating: 8.7,
      year: '1994',
    },
    {
      id: 2,
      title: 'The Godfather',
      posterUrl:
        'https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
      rating: 8.7,
      year: '1972',
    },
    {
      id: 3,
      title: 'The Dark Knight',
      posterUrl:
        'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
      rating: 8.5,
      year: '2008',
    },
    {
      id: 4,
      title: 'Pulp Fiction',
      posterUrl:
        'https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg',
      rating: 8.5,
      year: '1994',
    },
    {
      id: 5,
      title: "Schindler's List",
      posterUrl:
        'https://image.tmdb.org/t/p/w500/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg',
      rating: 8.6,
      year: '1993',
    },
    {
      id: 6,
      title: 'Forrest Gump',
      posterUrl:
        'https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg',
      rating: 8.4,
      year: '1994',
    },
  ])

  const popularMovies = ref([
    {
      id: 7,
      title: 'Inception',
      posterUrl:
        'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
      rating: 8.4,
      year: '2010',
    },
    {
      id: 8,
      title: 'The Matrix',
      posterUrl:
        'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
      rating: 8.2,
      year: '1999',
    },
    {
      id: 9,
      title: 'Interstellar',
      posterUrl:
        'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
      rating: 8.3,
      year: '2014',
    },
    {
      id: 10,
      title: 'Gladiator',
      posterUrl:
        'https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg',
      rating: 8.1,
      year: '2000',
    },
    {
      id: 11,
      title: 'The Prestige',
      posterUrl:
        'https://image.tmdb.org/t/p/w500/tRNlZbgNCNOpLpbPEz5L8G8A0JN.jpg',
      rating: 8.2,
      year: '2006',
    },
    {
      id: 12,
      title: 'The Departed',
      posterUrl:
        'https://image.tmdb.org/t/p/w500/nT97ifVT2J1yMQmeq20Qblg61T.jpg',
      rating: 8.1,
      year: '2006',
    },
  ])

  const topRatedMovies = ref([
    {
      id: 13,
      title: 'Fight Club',
      posterUrl:
        'https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
      rating: 8.4,
      year: '1999',
    },
    {
      id: 14,
      title: 'The Lord of the Rings',
      posterUrl:
        'https://image.tmdb.org/t/p/w500/v9mUSO3wSzSlT1lRhqsSnqhp0Z7.jpg',
      rating: 8.5,
      year: '2003',
    },
    {
      id: 15,
      title: 'Star Wars',
      posterUrl:
        'https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg',
      rating: 8.2,
      year: '1977',
    },
    {
      id: 16,
      title: 'Goodfellas',
      posterUrl:
        'https://image.tmdb.org/t/p/w500/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg',
      rating: 8.3,
      year: '1990',
    },
    {
      id: 17,
      title: 'The Green Mile',
      posterUrl:
        'https://image.tmdb.org/t/p/w500/velWPhVMQeQKcxggNEU8YmIo52R.jpg',
      rating: 8.3,
      year: '1999',
    },
    {
      id: 18,
      title: 'Saving Private Ryan',
      posterUrl:
        'https://image.tmdb.org/t/p/w500/uqx37vjCD1u6M3Y4kJ7F5a5HCfY.jpg',
      rating: 8.2,
      year: '1998',
    },
  ])

  function openMovieDetail(id: number) {
    router.push({ name: 'Movie', params: { id } })
  }
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
    <MovieSection title="Trending Now" :movies="trendingMovies" />
    <MovieSection title="Popular Movies" :movies="popularMovies" />
    <MovieSection title="Top Rated" :movies="topRatedMovies" />
  </div>
</template>

<style scoped>
  .home-view {
    width: 100%;
    min-height: 100vh;
    background-color: var(--md-sys-color-background);
  }
</style>
