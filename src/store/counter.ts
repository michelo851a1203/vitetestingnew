import { defineStore } from "pinia";

export interface UseCounterStoreType {
  currentCount: number;
}

export const useCounterStore = defineStore('counter', {
  state: () => {
    return <UseCounterStoreType>{
      currentCount: 0,
    };
  },
  actions: {
    appendCount() {
      this.currentCount++;
    },
  }
})

