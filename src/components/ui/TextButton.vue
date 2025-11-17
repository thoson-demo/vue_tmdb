<script setup lang="ts">
  defineProps<{
    disabled?: boolean
    color?: string
  }>()
</script>

<template>
  <button
    class="text-button"
    :disabled="disabled"
    :style="{ color: color || 'var(--md-sys-color-primary)' }"
  >
    <slot />
  </button>
</template>

<style scoped>
  .text-button {
    /* Reset */
    border: none;
    background: none;
    margin: 0;

    /* Layout */
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 40px;
    padding: 0 12px;
    gap: 8px;

    /* Typography */
    font-family: inherit;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.1px;
    line-height: 20px;

    /* Shape */
    border-radius: 20px;

    /* Interaction */
    cursor: pointer;
    user-select: none;
    position: relative;
    overflow: hidden;
    transition: background-color 0.2s ease;
  }

  /* Hover State - Material Design 3: 8% opacity */
  .text-button:hover:not(:disabled) {
    background-color: color-mix(in srgb, currentColor 8%, transparent);
  }

  /* Focus State - Material Design 3: 12% opacity */
  .text-button:focus-visible {
    outline: none;
    background-color: color-mix(in srgb, currentColor 12%, transparent);
  }

  /* Active/Pressed State - Material Design 3: 12% opacity */
  .text-button:active:not(:disabled) {
    background-color: color-mix(in srgb, currentColor 12%, transparent);
  }

  /* Disabled State - Material Design 3: 38% opacity */
  .text-button:disabled {
    color: var(--md-sys-color-on-surface);
    cursor: not-allowed;
    opacity: 0.38;
  }
</style>
