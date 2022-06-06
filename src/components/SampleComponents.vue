<script setup lang="ts">
import axios from 'axios'
import { onMounted, ref } from 'vue'

const todos = ref([])

defineProps<{
  hoge: string
}>()

onMounted(async () => {
  await axios
    .get('https://jsonplaceholder.typicode.com/todos/')
    .then((response) => {
      todos.value = response.data
    })
})
</script>

<template>
  <div>hello</div>
  <div>ahaha</div>
  <div>{{ hoge }}</div>
  <div>{{ todos }}</div>
</template>
