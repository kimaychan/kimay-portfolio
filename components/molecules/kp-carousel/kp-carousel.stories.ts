import KpCarousel from './index.vue'

export default {
  title: 'Components/Molecules/Carousel',
  component: KpCarousel
}

const Template = (_: any, { argTypes }: any) => ({
  components: { KpCarousel },
  props: Object.keys(argTypes),
  template: '<kp-carousel v-bind="$props" style="width: 1024px" />'
})

export const DefaultProgressBar: any = Template.bind({});
DefaultProgressBar.args = {
  items: [
    {
      name: 'Project 1'
    },
    {
      name: 'Project 2'
    }
  ]
}
