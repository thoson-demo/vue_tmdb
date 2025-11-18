<script setup lang="ts">
  import {
    PlayIcon,
    PlusIcon,
    InformationCircleIcon,
  } from '@heroicons/vue/24/solid'

  interface Props {
    title?: string
    overview?: string
    backdropUrl?: string
    rating?: number
    year?: string
  }

  withDefaults(defineProps<Props>(), {
    title: 'Featured Movie',
    overview:
      'Discover the latest and greatest movies. Watch trailers, get showtimes, and buy tickets.',
    backdropUrl: '',
    rating: 8.5,
    year: '2024',
  })
</script>

<template>
  <div class="hero-banner">
    <div class="hero-backdrop">
      <img
        v-if="backdropUrl"
        :src="backdropUrl"
        :alt="title"
        class="backdrop-img"
      />
      <div class="backdrop-gradient"></div>
    </div>

    <div class="hero-content">
      <div class="hero-info">
        <h1 class="hero-title">{{ title }}</h1>
        <div class="hero-meta">
          <span class="meta-year">{{ year }}</span>
          <span class="meta-separator">•</span>
          <span class="meta-rating">⭐ {{ rating }}</span>
        </div>
        <p class="hero-overview">{{ overview }}</p>

        <div class="hero-actions">
          <button class="btn-primary">
            <PlayIcon class="btn-icon" />
            <span>Watch Trailer</span>
          </button>
          <button class="btn-secondary">
            <PlusIcon class="btn-icon" />
            <span>Add to Watchlist</span>
          </button>
          <button class="btn-icon-only">
            <InformationCircleIcon class="icon" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .hero-banner {
    position: relative;
    width: 100%;
    height: 600px;
    overflow: hidden;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  }

  .hero-backdrop {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .backdrop-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .backdrop-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.9) 0%,
      rgba(0, 0, 0, 0.6) 50%,
      rgba(0, 0, 0, 0.3) 100%
    );
  }

  .hero-content {
    position: relative;
    z-index: 1;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 48px;
    max-width: 1400px;
    margin: 0 auto;
  }

  .hero-info {
    max-width: 600px;
  }

  .hero-title {
    font-family: 'Roboto', sans-serif;
    font-size: 48px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 16px;
    line-height: 1.2;
  }

  .hero-meta {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 16px;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.8);
  }

  .meta-separator {
    color: rgba(255, 255, 255, 0.4);
  }

  .hero-overview {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 32px;
  }

  .hero-actions {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .btn-primary,
  .btn-secondary {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 24px;
    border: none;
    border-radius: 4px;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .btn-primary {
    background-color: var(--md-sys-color-primary);
    color: var(--md-sys-color-on-primary);
  }

  .btn-primary:hover {
    opacity: 0.9;
    transform: scale(1.02);
  }

  .btn-secondary {
    background-color: rgba(255, 255, 255, 0.2);
    color: #fff;
    backdrop-filter: blur(10px);
  }

  .btn-secondary:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }

  .btn-icon-only {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.2);
    border: none;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .btn-icon-only:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }

  .btn-icon {
    width: 20px;
    height: 20px;
  }

  .icon {
    width: 24px;
    height: 24px;
    color: #fff;
  }

  @media (max-width: 768px) {
    .hero-banner {
      height: 500px;
    }

    .hero-content {
      padding: 0 24px;
    }

    .hero-title {
      font-size: 32px;
    }

    .hero-overview {
      font-size: 14px;
    }

    .hero-actions {
      flex-wrap: wrap;
    }

    .btn-primary,
    .btn-secondary {
      padding: 10px 20px;
      font-size: 14px;
    }
  }
</style>
