import About from '@/views/About.vue';
import { shallowMount } from '@vue/test-utils';

// test suite
describe('About.vue', () => {
  test('renders inner text', () => {
    const wrapper = shallowMount(About);

    // we expect the text to contain the string 'about'
    expect(wrapper.text()).toContain('about');
  });
});
