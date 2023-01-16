<template>
    <ul class="head__menu">
            <li class="head__menu_item">
              <icon name="home" />
            </li>
            <li class="head__menu_item">
              <img class="profile__photo" src="../../assets/png/profile_photo.png"/>
            </li>
            <li class="head__menu_item">
              <icon name="exit" />
            </li>
          </ul>
</template>

<script>
import { icon } from '../icons'
export default {
  name: 'nav-menu',
  components: {
    icon
  }
}
</script>

<style lang="scss" src="./nav-menu.scss" scoped></style>