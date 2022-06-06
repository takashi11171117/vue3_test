<script setup lang="ts">
import { defineProps } from 'vue'
defineProps<{
  hoge: string
}>()
</script>

<template>
  <div>
    <p>{{ hoge }}</p>
  </div>
</template>
