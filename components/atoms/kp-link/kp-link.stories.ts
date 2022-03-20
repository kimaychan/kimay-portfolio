import KpLink from './index.vue'

export default {
  title: 'Components/Atoms/Link',
  component: KpLink,
}

export const DefaultLink = () => ({
  components: { KpLink },
  template: '<kp-link uri="/"> Link </kp-link>',
});

export const ActiveLink = () => ({
  components: { KpLink },
  template: '<kp-link uri="/" state="active"> Link </kp-link>',
});

