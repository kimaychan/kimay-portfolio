import KpNavList from './index.vue'

export default {
  title: 'Components/Molecules/Nav List',
  component: KpNavList
}
export const DefaultNavList = () => ({
  components: { KpNavList },
  template: `<kp-nav-list
    :links="[{ state: 'active', title: 'home', uri: '/'}, { title: 'about', uri: '/'}]"
  />`,
});

