<script setup lang="ts">
import AppModal from './AppModal.vue'
import { reactive } from 'vue'

const state = reactive<{ confirm: boolean }>({
  confirm: false,
})
console.log(state)
</script>

<template>
  <a href="#" @click.prevent="state.confirm = true">Delete</a>

  <AppModal :open="state.confirm">Are you sure</AppModal>
</template>
