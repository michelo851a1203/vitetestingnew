<script setup lang="ts">
  const props = withDefaults(defineProps<{
    count: number;
  }>(), {
    count: 0,
  });

  const emit = defineEmits<{
    (e: 'update:count', count: number): void;
  }>()

  const clickHandler = () => {
    emit('update:count', ++props.count)
  }
  
</script>

<template>
  <button
    class="px-4 py-3 rounded-xl bg-blue-300 border-none"
    @click="clickHandler"
  >
    {{ count }}
  </button>
</template>
