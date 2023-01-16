<template>
  <div class="topline">
    <topline>
      <template #headline>
        <div class="headline">
          <icon name="logo" />
          <nav-menu />
        </div>
      </template>
      <template #content>
        <ul class="stories">
          <li class="stories-item" v-for="story in stories" :key="story.id">
            <story-user-item
              :avatar="story.avatar"
              :username="story.username"
              @onPress="handlePress(story.id)"
            />
          </li>
        </ul>
      </template>
    </topline>
  </div>
  <ul class="feeds__list">
    <li class="feeds__item feed" v-for="item in 5" :key="item">
      <feed>
        <template #card>
          <card title="VUE.JS" desc="JavaScript framework for building interactive web applications ⚡" :star="156" :fork="4"/>
        </template>
      </feed>
    </li>
  </ul>
</template>

<script>
import { topline } from '../../components/topline'
import { icon } from '../../components/icons'
import { navMenu } from '../../components/NavMenu'
import { storyUserItem } from '../../components/storyUserItem'
import { feed } from '../../components/feed'
import { card } from '@/components/card'
import stories from './data.json'
export default {
  name: 'feeds',
  components: {
    topline,
    icon,
    navMenu,
    storyUserItem,
    feed,
    card
  },
  data () {
    return {
      stories
    }
  }
}
</script>

<style lang="scss" src="./feeds.scss" scoped></style>
