<script setup lang="ts">
import { ref, reactive, watch, onMounted } from 'vue'

const number = ref(0)
const form = reactive({
  name: 'alex',
  password: 'aaaaaaa',
})

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
  <p>{{ form.name }} {{ form.password }}</p>
  <form action="">
    <input type="text" v-model="form.name" />
    <input type="password" v-model="form.password" />
  </form>
</template>
