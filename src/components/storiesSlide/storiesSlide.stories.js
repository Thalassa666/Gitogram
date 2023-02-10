import { withKnobs, object } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { storiesSlide } from '.'
import { avatar } from '../avatar'
import { progress } from '../progress'
import { placeholder } from '../placeholder'
import { spinner } from '../spinner'
import { storyButton } from '../storyButton'
import { sliderButton } from '../sliderButton'

const methods = {
    onPrevSlide: action('onPrevSlide'),
    onNextSlide: action('onNextSlide'),
    onProgressFinish: action('onProgressFinish')
  }

  export default {
    title: 'storiesSlide',
    components: {
      storiesSlide,
      sliderButton,
      progress,
      avatar,
      storyButton,
      spinner,
      placeholder
     },
    decorators: [withKnobs]
  }
  const label = 'Data'
  const defaultValue = {
          username: 'joshua_l',
          avatar: 'https://picsum.photos/300/300',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum posuere urna nec tincidunt praesent semper. Etiam erat velit scelerisque in dictum non consectetur a erat. Scelerisque purus semper eget duis at tellus at urna condimentum. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Urna nunc id cursus metus aliquam eleifend mi in nulla. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar. In vitae turpis massa sed elementum. Gravida arcu ac tortor dignissim convallis aenean et tortor. Volutpat odio facilisis mauris sit amet massa vitae tortor. Adipiscing enim eu turpis egestas pretium aenean pharetra magna. Facilisis leo vel fringilla est ullamcorper. Integer eget aliquet nibh praesent tristique magna. Pharetra pharetra massa massa ultricies mi quis. Cursus eget nunc scelerisque viverra. Donec adipiscing tristique risus nec feugiat in fermentum posuere urna. Ut porttitor leo a diam. Sollicitudin aliquam ultrices sagittis orci a scelerisque. Arcu non sodales neque sodales ut etiam sit amet nisl. Nisi lacus sed viverra tellus in hac. Magnis dis parturient montes nascetur ridiculus mus mauris vitae. Turpis egestas integer eget aliquet nibh. Enim sit amet venenatis urna cursus eget nunc scelerisque. Sit amet volutpat consequat mauris nunc congue nisi vitae. Commodo odio aenean sed adipiscing diam donec adipiscing tristique risus. Enim praesent elementum facilisis leo. Tortor pretium viverra suspendisse potenti nullam. Ut ornare lectus sit amet est placerat in. Sodales ut etiam sit amet nisl purus in mollis. Habitant morbi tristique senectus et netus et malesuada fames ac. Donec ac odio tempor orci dapibus ultrices. Purus gravida quis blandit turpis cursus in hac. Aliquam ut porttitor leo a diam sollicitudin.'
  }
  const groupId = '0'
  
  const notContentValue = {
          username: 'joshua_l',
          avatar: 'https://picsum.photos/300/300'
  }
  
  const data = object(label, defaultValue, groupId)
  
  const dataNotContent = object(label, notContentValue, groupId)

  export const defaultView = () => ({
    components: {
      storiesSlide
    },
    methods,
    props: {
      data: {
        default: data
      }
    },
    template: `
      <stories-slide :btnsShow="['prev', 'next']" :data="data" @onPrevSlide="onPrevSlide" @onNextSlide="onNextSlide" @onProgressFinish="onProgressFinish" />
    `
  })
  
  defaultView.story = {
    name: 'Стандартный вид'
  }

  export const activeView = () => ({
    components: {
      storiesSlide
    },
    props: {
      data: {
        default: data
      }
    },
    methods,
    template: `
      <stories-slide active :btnsShow="['prev', 'next']" :data="data" @onPrevSlide="onPrevSlide" @onNextSlide="onNextSlide" @onProgressFinish="onProgressFinish" />
    `
  })
  
  activeView.story = {
    name: 'Активный слайд'
  }

  export const loadingView = () => ({
    components: {
      storiesSlide
    },
    props: {
      data: {
        default: data
      }
    },
    methods,
    template: `
      <stories-slide :progress="true" active :btnsShow="['prev', 'next']" :data="data" @onPrevSlide="onPrevSlide" @onNextSlide="onNextSlide" @onProgressFinish="onProgressFinish" />
    `
  })
  
  loadingView.story = {
    name: 'Загрузка данных'
  }

  export const notContentView = () => ({
    components: {
      storiesSlide
    },
    props: {
      data: {
        default: dataNotContent
      }
    },
    methods,
    template: `
      <stories-slide :btnsShow="[]" :btnsShow="['prev', 'next']" :data="dataNotContent" @onPrevSlide="onPrevSlide" @onNextSlide="onNextSlide" @onProgressFinish="onProgressFinish" />
    `
  })
  
  notContentView.story = {
    name: 'Слайд без данных'
  } 