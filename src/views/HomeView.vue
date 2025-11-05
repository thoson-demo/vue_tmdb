<script setup lang="ts">
  import { ref } from 'vue'
  import router from '../router'

  const count = ref(0)

  function openMovieDetail(id: number) {
    // Logic để điều hướng đến trang chi tiết phim
    router.push({ name: 'Movie', params: { id } })
  }
</script>

<template>
  <h1>Welcome to Vue TMDB</h1>
  <!-- ✅ Hardcode text thay vì {{ msg }} -->

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <button type="button" @click="openMovieDetail(1)">Movie Detail</button>
  </div>
</template>

<style scoped>
  .read-the-docs {
    color: #888;
  }
</style>
