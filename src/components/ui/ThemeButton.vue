<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { SunIcon, MoonIcon } from '@heroicons/vue/24/outline'

  type Theme = 'light' | 'dark'

  const currentTheme = ref<Theme>('dark')

  // Initialize theme from localStorage or system preference
  onMounted(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null

    if (savedTheme) {
      currentTheme.value = savedTheme
    } else {
      // Check system preference
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches
      currentTheme.value = prefersDark ? 'dark' : 'light'
    }

    applyTheme(currentTheme.value)
  })

  const applyTheme = (theme: Theme) => {
    document.documentElement.setAttribute('data-theme', theme)

    // Update color-scheme for native elements
    document.documentElement.style.colorScheme = theme
  }

  const toggleTheme = () => {
    currentTheme.value = currentTheme.value === 'dark' ? 'light' : 'dark'
    localStorage.setItem('theme', currentTheme.value)
    applyTheme(currentTheme.value)
  }
</script>

<template>
  <button
    class="theme-button"
    @click="toggleTheme"
    :aria-label="`Switch to ${currentTheme === 'dark' ? 'light' : 'dark'} mode`"
  >
    <Transition name="icon" mode="out-in">
      <SunIcon v-if="currentTheme === 'dark'" class="icon" />
      <MoonIcon v-else class="icon" />
    </Transition>
  </button>
</template>

<style scoped>
  .theme-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border: none;
    border-radius: 50%;
    background-color: var(--md-sys-color-surface-container-high);
    cursor: pointer;
    transition: all 0.2s ease;
    position: relative;
  }

  .theme-button:hover {
    background-color: var(--md-sys-color-surface-container-highest);
    transform: scale(1.05);
  }

  .theme-button:active {
    transform: scale(0.95);
  }

  .icon {
    width: 24px;
    height: 24px;
    color: var(--md-sys-color-primary);
  }

  /* Icon transition animations */
  .icon-enter-active,
  .icon-leave-active {
    transition: all 0.3s ease;
  }

  .icon-enter-from {
    opacity: 0;
    transform: rotate(-90deg) scale(0.5);
  }

  .icon-leave-to {
    opacity: 0;
    transform: rotate(90deg) scale(0.5);
  }

  .icon-enter-to,
  .icon-leave-from {
    opacity: 1;
    transform: rotate(0deg) scale(1);
  }
</style>
