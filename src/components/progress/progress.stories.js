import progress from './progress.vue'

export default {
  title: 'progress',
  component: { progress },
  argTypes: {
    onFinish: {
      action: 'onFinish',
      description: 'stats when progress reaches the end'
    }
  }

}

const template = (args) => ({
  components: { xProgress: progress },
  data () {
    return { args }
  },
  template: `
    <x-progress @onFinish="args.onFinish"></x-progress>
  `
})

export const Default = template.bind({})
