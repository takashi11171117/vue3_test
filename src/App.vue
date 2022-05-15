<script setup lang="ts">
import Header from './components/modules/Header.vue'
</script>

<template>
  <Header />
  <router-view />
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
