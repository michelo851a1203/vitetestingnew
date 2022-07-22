<script setup lang="ts">
  import { ref } from 'vue';
  import MainTest from './components/MainTest.vue';
  import Counter from './components/Counter.vue';
  const mainInputNumber = ref(0);
</script>

<template>
  <MainTest
    v-model:count="mainInputNumber"
  ></MainTest>
  <Counter></Counter>
</template>

<style scoped></style>
