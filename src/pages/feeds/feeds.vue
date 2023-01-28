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
    <li class="feeds__item feed" v-for="item in items" :key="item.id">
      <feed
        :username="item.name"
        :stars="item.stargazers_count"
        :forks="item.forks_count"
        :avatar="item.owner.avatar_url">
                    <template #card>
                        <card
                        :description="item.description"
                        :username="item.owner.login"
                        ></card>
                    </template>
      </feed>
    </li>
  </ul>
</template>

<script>
import * as api from '../../api'
import { topline } from '../../components/topline'
import { icon } from '../../components/icons'
import { navMenu } from '../../components/NavMenu'
import { storyUserItem } from '../../components/storyUserItem'
import { feed } from '../../components/feed'
import { card } from '../../components/card'
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
      stories,
      items: []
    }
  },
  async created () {
    try {
      const { data } = await api.trendings.getTrendings()
      this.items = data.items
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style lang="scss" src="./feeds.scss" scoped></style>
