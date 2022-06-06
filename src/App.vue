<script setup lang="ts">
import { ref } from 'vue'
import SampleComponent from './components/SampleComponents.vue'

const hoge = ref('')
</script>

<template>
  <div>
    <input v-model="hoge" placeholder="書いてくれ！" />
    <SampleComponent :hoge="hoge" />
  </div>
</template>
