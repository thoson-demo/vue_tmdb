<script setup lang="ts">
  import { Bars3Icon, BookmarkIcon } from '@heroicons/vue/24/outline'
  import Logo from '../ui/Logo.vue'
  import TextButton from '../ui/TextButton.vue'
  import ThemeButton from '../ui/ThemeButton.vue'
  import UserInfo from '../ui/UserInfo.vue'
</script>

<template>
  <div class="app-bar">
    <div class="app-bar-content">
      <Logo />
      <div class="spacer-16px"></div>
      <TextButton color="var(--md-sys-color-on-surface)">
        <template #icon>
          <Bars3Icon />
        </template>
        Menu
      </TextButton>
      <div class="spacer"></div>
      <TextButton color="var(--md-sys-color-on-surface)">IMDbPro</TextButton>
      <TextButton color="var(--md-sys-color-on-surface)">
        <template #icon>
          <BookmarkIcon />
        </template>
        Watchlist
      </TextButton>
      <UserInfo />
      <div class="spacer-16px"></div>
      <ThemeButton />
    </div>
  </div>
</template>

<style scoped>
  .app-bar {
    height: 56px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: var(--md-sys-color-surface);
    width: 100%;
  }
  .app-bar-content {
    max-width: 1264px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 16px;
  }
</style>
