<script setup lang="ts">
import { ref } from 'vue'

const number = ref(0)

const increment = () => {
  number.value++
}
</script>

<template>
  <a href="#" @click.prevent="increment">Increment</a> {{ number }}
</template>
