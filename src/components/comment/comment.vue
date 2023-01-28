<template>
  <div class="comment">
      <span class="comment__username mr-8">{{ username }}</span>
      {{ text }}
  </div>
</template>

<script>
export default {
  props: {
    text: {
      required: true,
      type: String,
    },
    username: {
      required: true,
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.comment {
  &__username {
    font-weight: bold;
    font-size: 14px;
    line-height: 22px;
  }
}
</style>
