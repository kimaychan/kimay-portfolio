import KpInputField from './index.vue'

export default {
  title: 'Components/Molecules/Input Field',
  component: KpInputField
}

const Template = (_: any, { argTypes }: any) => ({
  components: { KpInputField },
  props: Object.keys(argTypes),
  template: '<kp-input-field v-bind="$props" />'
})

export const Default: any = Template.bind({});
Default.args = {
  
}
