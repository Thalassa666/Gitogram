import avatar from './avatar.vue'

export default {
  title: 'avatar',
  component: { avatar }
}

const template = () => ({
  components: { avatar },
  template: `
      <avatar username='React.reposit' avatar="../../assets/png/profile_photo.png"></avatar>
    `
})

export const Default = template.bind({})