import KpProgressBar from './index.vue'

export default {
  title: 'Components/Molecules/Progress Bar',
  component: KpProgressBar
}

const Template = (_: any, { argTypes }: any) => ({
  components: { KpProgressBar },
  props: Object.keys(argTypes),
  template: '<kp-progress-bar v-bind="$props" />'
})

export const DefaultProgressBar: any = Template.bind({});
DefaultProgressBar.args = {
  progressPercent: 79,
  label: 'vue'
}
