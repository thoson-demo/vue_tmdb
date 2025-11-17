<script setup lang="ts">
  import { computed } from 'vue'

  interface Props {
    height?: number | string
  }

  const props = withDefaults(defineProps<Props>(), {
    height: 40,
  })

  const heightStyle = computed(() => {
    return typeof props.height === 'number' ? `${props.height}px` : props.height
  })
</script>

<template>
  <img
    src="../../assets/logo.svg"
    alt="Logo"
    :style="{ height: heightStyle }"
    class="logo"
  />
</template>

<style scoped>
  .logo {
    display: block;
    object-fit: contain;
  }
</style>
