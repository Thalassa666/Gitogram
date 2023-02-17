<template>
  <div class="wrapper wrapper_storyPage">
    <topline class="c-topline_black">
      <template #headline>
        <div class="headline_black">
            <button class="logo_button" @click="$router.push('/#')">
                <icon class="logo_svg" name="gitoWhite"></icon>
            </button>
            <button class="logo_button" @click="$router.push('/#')">
                <icon class="cross_svg" name="cross"></icon>
            </button>
        </div>
      </template>
    </topline>
    <stories-slider
      :initialSlideId="Number($route.params.initialSlideId)"></stories-slider>
  </div>
</template>

<script>
import { icon } from '../../components/icons'
import { storiesSlider } from '../../components/storiesSlider'
import { topline } from '../../components/topline/'
export default {
  name: 'storyPage',
  components: {
    icon,
    storiesSlider,
    topline
  },
}
</script>

<style lang="scss" src="./storyPage.scss" scoped></style>