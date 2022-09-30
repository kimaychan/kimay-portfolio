import KpIcon from './index.vue'

export default {
  title: 'Components/Atoms/Icon',
  component: KpIcon
}

const Template = (_: any, { argTypes }: any) => ({
  components: { KpIcon },
  props: Object.keys(argTypes),
  template: '<kp-icon v-bind="$props" />'
})

export const Default: any = Template.bind({});
Default.args = {
  type: 'facebook2'
}
