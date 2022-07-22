import { test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import MainTest from '../../components/MainTest.vue';

test('mount MainTest', async () => {
  const countNumber = 0;

  expect(MainTest).toBeTruthy();
  const wrapper = mount(MainTest, {
    props: {
      count: countNumber,
    }
  });

  expect(wrapper.text()).toContain(countNumber);
  await wrapper.get('button').trigger('click');

  const getEmitted = wrapper.emitted()['update:count'];
  expect(getEmitted).toBeTruthy();
  expect(getEmitted.length).toBe(1);
  expect(getEmitted[getEmitted.length - 1]).toEqual([1]);
});
