<template>
  <div class="feed__avatar" :style="avatarStyle">
    <img :src="avatar" alt="users avatar" class="feed__avatar_icon" />
    <h2 class="feed__avatar_name">{{ username }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: 's',
    },
  },
  setup(props) {
    const style = {
      s: {
        width: "44px",
        height: "44px",
      },
      m: {
        width: "72px",
        height: "72px",
      },
      l: {
        width: "90px",
        height: "90px",
      },
    };
    const avatarStyle = style[props.size];

    return { avatarStyle };
  },
};
</script>

<style lang="scss" scoped>
.feed__avatar {
  display: flex;
  align-items: center;

  &_icon {
    height: 44px;
    min-width: 44px;
    border-radius: 50%;
    margin-right: 12px;
  }

  &_name {
    font-weight: 700;
    font-size: 14px;
    min-width: 200px;
  }
}

</style>
