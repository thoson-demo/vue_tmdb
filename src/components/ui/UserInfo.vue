<script setup lang="ts">
  import { UserCircleIcon } from '@heroicons/vue/24/solid'

  interface Props {
    avatarUrl?: string
    userName?: string
  }

  withDefaults(defineProps<Props>(), {
    avatarUrl: '',
    userName: 'thoson.it',
  })
</script>

<template>
  <div class="user-info-container">
    <div class="user-avatar">
      <img
        v-if="avatarUrl"
        :src="avatarUrl"
        alt="User Avatar"
        class="avatar-img"
      />
      <UserCircleIcon v-else class="avatar-icon" />
    </div>
    <div class="user-name">
      {{ userName }}
    </div>
  </div>
</template>

<style scoped>
  .user-info-container {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
  }

  .user-avatar {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .avatar-img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }

  .avatar-icon {
    width: 100%;
    height: 100%;
    color: var(--md-sys-color-on-surface, #fff);
  }

  .user-name {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: var(--md-sys-color-on-surface, #fff);
  }
</style>
