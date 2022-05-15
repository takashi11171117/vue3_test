<script setup lang="ts"></script>

<template>
  <ul>
    <li>
      <router-link :to="{ path: '/' }">HOME</router-link>
    </li>
    <li>
      <router-link :to="{ name: 'counter' }">Counter</router-link>
    </li>
    <li>
      <router-link :to="{ name: 'test' }">Test</router-link>
    </li>
  </ul>
</template>
