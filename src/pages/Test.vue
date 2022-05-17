<script setup lang="ts">
import { reactive, watch, onMounted } from 'vue'
import { useNumbers } from '../hooks/numbers'

const { increment, decrement, number } = useNumbers()
const form = reactive({
  name: 'alex',
  password: 'aaaaaaa',
})

watch(number, () => {
  console.log('Number Changed')
})

onMounted(() => {
  console.log('Component mounted')
})
</script>

<template>
  <a href="#" @click.prevent="increment">Increment</a><br />
  <a href="#" @click.prevent="decrement">Decrement</a><br />
  {{ number }}
  <p>{{ form.name }} {{ form.password }}</p>
  <form action="">
    <input type="text" v-model="form.name" />
    <input type="password" v-model="form.password" />
  </form>
</template>
