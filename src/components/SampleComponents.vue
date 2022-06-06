<script setup lang="ts">
import axios from 'axios'
import { onMounted, ref } from 'vue'

defineProps<{
  hoge: string
}>()

const response = await axios.get('https://jsonplaceholder.typicode.com/todos/')
console.log(response)
const todos = ref(response.data)
</script>

<template>
  <div>hello</div>
  <div>ahaha</div>
  <div>{{ hoge }}</div>
  <div>{{ todos }}</div>
</template>
