<script setup lang="ts">
import { ref } from 'vue'
import SampleComponent from './components/SampleComponents.vue'
import AppListItem from './components/AppListItem.vue'
import Counter from './components/Counter.vue'

const hoge = ref('')
</script>

<template>
  <div>
    <input v-model="hoge" placeholder="書いてくれ！" />
    <Counter />
    <AppListItem />
    <Suspense>
      <template #default>
        <SampleComponent :hoge="hoge" />
      </template>
      <template #fallback><p>Loading......</p></template>
    </Suspense>
  </div>
</template>

<style>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100vh;
}

.modal__content {
  box-sizing: border-box;
  background: white;
  position: fixed;
  padding: 30px;
  width: 30%;
  border: 1px solid #000;
  left: 50%;
  top: 50%;
  transform: translateX(-50%);
}
</style>
