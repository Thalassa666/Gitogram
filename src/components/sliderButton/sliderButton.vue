<template>
    <button :class="['slider-button', {'slider-button--right': right}]" @click="$emit('press')">
        <div class="icon slider-button__icon">
            <icon name="prevBtn" />
        </div>
    </button>
</template>

<script>
import { icon } from '../../components/icons'
export default {
  components: {
    icon
  },
  props: {
    right: {
      type: Boolean
    }
  },
  emits: ['press']
}
</script>

<style lang="scss" scoped src="./sliderButton.scss" />