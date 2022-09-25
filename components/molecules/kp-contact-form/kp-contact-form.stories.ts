import KpContactForm from './index.vue'

export default {
  title: 'Components/Molecules/Contact Form',
  component: KpContactForm
}

const Template = (_: any, { argTypes }: any) => ({
  components: { KpContactForm },
  props: Object.keys(argTypes),
  template: '<kp-contact-form v-bind="$props" />'
})

export const Default: any = Template.bind({});
Default.args = {
  
}
