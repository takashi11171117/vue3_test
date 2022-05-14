<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'

const number = ref(0)

const increment = () => {
  number.value++
}

watch(number, () => {
  console.log('Number Changed')
})

onMounted(() => {
  console.log('Component mounted')
})
</script>

<template>
  <a href="#" @click.prevent="increment">Increment</a> {{ number }}
</template>
