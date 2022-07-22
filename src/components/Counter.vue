<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCounterStore } from '../store/counter';

  const {
    appendCount,
  } = useCounterStore()

  const {
    currentCount,
  } = storeToRefs(useCounterStore());
  
</script>

<template>
  <button
    @click="appendCount"
    class="px-4 py-3 rounded-xl bg-blue-300 border-none"
  >
    {{ currentCount }}
  </button>
</template>
