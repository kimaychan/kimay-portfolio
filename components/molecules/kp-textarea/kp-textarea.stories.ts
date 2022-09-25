import KpTextarea from './index.vue'

export default {
  title: 'Components/Molecules/Textarea',
  component: KpTextarea
}

const Template = (_: any, { argTypes }: any) => ({
  components: { KpTextarea },
  props: Object.keys(argTypes),
  template: '<kp-textarea v-bind="$props" />'
})

export const Default: any = Template.bind({});
Default.args = {
  
}
