<script setup lang="ts">
  import { storeToRefs } from 'pinia';
  import { useCounterStore } from '../store/counter';
  import { ref } from 'vue';

  const {
    getAnnouncementListHandler,
    getAnnouncementHandler,
  } = useCounterStore()

  const {
    announcementList,
  } = storeToRefs(useCounterStore());

  const getDetail = async () => {
    const result = await getAnnouncementHandler("test02")
    console.log(result);

  }
  
</script>

<template>
  <button
    class="rounded-xl bg-blue-300 border-none px-3 py-2"
    @click="getAnnouncementListHandler"
  >
    get announcement list
  </button>

  <button
    class="rounded-xl bg-blue-300 border-none px-3 py-2"
    @click="getDetail"
  >
    Test Detail
  </button>

  <div
    v-for="item in announcementList"
    :key="item.id"
    class="bg-blue-300 px-4 py-3 rounded-xl my-4"
  >
    {{ item.name }} - {{ item.email }}
  </div>

</template>
