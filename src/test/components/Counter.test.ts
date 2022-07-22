import { describe ,test, expect } from 'vitest';
import Counter from '../../components/Counter.vue'
import { mount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';
import { useCounterStore } from '../../store/counter';
import { storeToRefs } from 'pinia';

describe('testing counter component', () => {
  const wrapper = mount(Counter, {
    global: {
      plugins: [createTestingPinia({
        stubActions: false,
      })]
    },
  });

  test('mount counter component initial', async () => {
    expect(wrapper.html()).toMatchSnapshot();
    expect(Counter).toBeTruthy();
    expect(wrapper.text()).toContain(0);
  });

  test('click button', async () => {
    const {
      appendCount,
    } = useCounterStore()

    wrapper.get('button').trigger('click');
    expect(appendCount).toHaveBeenCalledTimes(1);
    await wrapper.vm.$nextTick();
    expect(wrapper.text()).toContain(1);
  });

  test('double click', async () => {
    const {
      appendCount,
    } = useCounterStore()

    wrapper.get('button').trigger('click');
    expect(appendCount).toHaveBeenCalledTimes(2);
    await wrapper.vm.$nextTick();
    expect(wrapper.text()).toContain(2);
  });
});
