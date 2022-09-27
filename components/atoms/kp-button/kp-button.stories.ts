import KpButton from './index.vue'

export default {
  title: 'Components/Atoms/Button',
  component: KpButton
}

const Template = (_: any, { argTypes }: any) => ({
  components: { KpButton },
  props: Object.keys(argTypes),
  template: '<kp-button v-bind="$props">Submit</kp-button>'
})

export const Default: any = Template.bind({});
Default.args = {
  type: 'button'
}
