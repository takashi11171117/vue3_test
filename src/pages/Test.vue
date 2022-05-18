<script setup lang="ts">
import { ref, reactive, watch, onMounted } from 'vue'
import { useNumbers } from '../hooks/numbers'

const { increment, decrement, number } = useNumbers()
const form = reactive({
  name: 'alex',
  password: 'aaaaaaa',
})

type User = {
  id: number
  name: string
  password: string
}

const users = ref<User[]>([])

const getUsers = () => {
  users.value = [
    { id: 1, name: 'alex', password: 'pass' },
    { id: 2, name: 'jhon', password: 'password' },
  ]
}

watch(number, () => {
  console.log('Number Changed')
})

onMounted(() => {
  console.log('Component mounted')
  getUsers()
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
  <div v-for="user in users" :key="user.id">
    <div>{{ user.name }}</div>
  </div>
</template>
