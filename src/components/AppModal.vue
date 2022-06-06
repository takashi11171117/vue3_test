<script setup lang="ts">
defineProps<{ open: boolean }>()
</script>

<template>
  <Teleport to="#modal">
    <div class="modal" v-if="open">
      <div class="modal__content">
        <slot />

        <a href="#">Yes</a>
        <a href="#">No</a>
      </div>
    </div>
  </Teleport>
</template>
