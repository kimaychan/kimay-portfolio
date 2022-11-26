import KpGradientBubble from './index.vue'

export default {
  title: 'Components/Atoms/Gradient Bubble',
  component: KpGradientBubble
}

const Template = (_: any, { argTypes }: any) => ({
  components: { KpGradientBubble },
  props: Object.keys(argTypes),
  template: '<kp-gradient-bubble v-bind="$props" />'
})

export const GradientBubble: any = Template.bind({})
GradientBubble.args = {}
