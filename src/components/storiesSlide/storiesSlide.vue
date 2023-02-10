<template>
    <div class="story_item" :class="{ active }">
        <div class="container">
        <div class="header">
            <div class="progress_line">
                <x-progress :active="active" @onFinish="$emit('onProgressFinish')"></x-progress>
            </div>
            <div class="avatar">
                <avatar
                    :username="data.username"
                    :avatar="data.avatar"
                />
            </div>
        </div>
        <div class="content">
            <div class="spinner" v-if="progress">
                    <spinner />
                </div>
                <div class="info" v-else>
                    <div v-if="data.content?.length" class="content_text" v-html="data.content"></div>
                        <placeholder v-else />
                </div>
        </div>
        <div class="border"></div>
        <div class="slider_button">
        <story-button class="slider_btn" hover-text="Unfollow" />
        </div>
    </div>
    <div class="arrow_btns" v-if="active">
        <button v-if="btnsShown.includes('prev')" class="btn btn_prev" @click="$emit('onPrevSlide')">
            <span class="icon">
                <icon class="btn_icon" name="prevBtn"></icon>
            </span>
            </button>
            <button v-if="btnsShown.includes('next')" class="btn btn_next" @click="$emit('onNextSlide')">
            <span class="icon">
                <icon class="btn_icon" name="nextBtn"></icon>
            </span>
            </button>
        </div>
    </div>
</template>
<script>
import { progress } from '../progress'
import { avatar } from '../avatar'
import { storyButton } from '../storyButton'
import { spinner } from '../spinner'
import { placeholder } from '../placeholder'
import { icon } from '../icons'
export default {
  components: {
    xProgress: progress,
    avatar,
    storyButton,
    spinner,
    placeholder,
    icon
  },
  props: {
    username: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      required: true
    },
    hoverText: {
      type: String
    },
    active: {
      type: Boolean,
      default: () => false
    },
    progress: {
      type: Boolean
    },
    content: {
      type: String
    },
    data: {
      type: Object,
      required: true,
      default: () => ({})
    },
    btnsShown: {
      type: Array,
      default: () => ['next', 'prev'],
      validator (value) {
        return value.every(item => item === 'next' || item === 'prev')
      }
    },
    initialSlide: {
      type: Number
    }
  },
  emits: ['onPrevSlide', 'onNextSlide', 'onProgressFinish']
}
</script>
<style lang="scss" scoped src="./storiesSlide.scss"></style>