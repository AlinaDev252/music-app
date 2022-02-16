import { shallowMount } from '@vue/test-utils';
import Home from '@/views/Home.vue';
import SongItem from '@/components/SongItem.vue';

// this function allows us to mock a dependency
jest.mock('@/includes/firebase', () => {
});

describe('Home.vue', () => {
  test('renders list of songs', () => {
    const songs = [
      {}, {}, {},
    ];

    // mock the method getSongs. We can mock methods in a component by overwriting it.
    Home.methods.getSongs = () => false;

    const component = shallowMount(Home, {
      data() {
        return {
          songs,
        };
      },
    });

    const items = component.findAllComponents(SongItem);

    expect(items).toHaveLength(songs.length);
  });
});
