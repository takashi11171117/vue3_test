<script setup lang="ts">
import { ref } from 'vue'
import SampleComponent from '../components/SampleComponents.vue'

const hoge = ref('')
</script>

<template>
  <div>
    <Suspense>
      <template #default>
        <SampleComponent :hoge="hoge" />
      </template>
      <template #fallback><p>Loading......</p></template>
    </Suspense>
  </div>
</template>
