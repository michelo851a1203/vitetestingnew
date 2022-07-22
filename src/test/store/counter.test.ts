import { test, beforeEach, expect } from 'vitest';
import { 
  setActivePinia, 
  createPinia, 
  storeToRefs 
} from 'pinia';
import { createApp } from 'vue';
import { useCounterStore } from '../../store/counter';

beforeEach(() => {
  const pinia = createPinia();
  const app = createApp({});
  app.use(pinia);
  setActivePinia(pinia);
});

test('testing pinia', () => {
  const {
    appendCount,
  } = useCounterStore();

  const {
    currentCount,
  } =  storeToRefs(useCounterStore());

  expect(currentCount.value).toBe(0);
  appendCount();
  expect(currentCount.value).toBe(1);
});

