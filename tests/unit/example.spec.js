import { shallowMount } from '@vue/test-utils';
import SideBar from '@/components/SideBar.vue';

describe('SideBar.vue', () => {
  it('renders props.menu when passed', () => {
    const menu = [
      { name: 'Test', icon: 'icon--test', to: { name: 'test' } },
    ];
    const wrapper = shallowMount(SideBar, {
      propsData: { menu },
    });
    expect(wrapper.text()).toMatch(menu[0].name);
  });
});
