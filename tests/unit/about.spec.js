import About from '@/views/About.vue';
import { mount } from '@vue/test-utils';

// test suite
describe('About.vue', () => {
  test('renders inner text', () => {
    const wrapper = mount(About);

    // we expect the text to contain the string 'about'
    expect(wrapper.text()).toContain('about');
  });
});
