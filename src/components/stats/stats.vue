<template>
  <div class="stats">
    <div class="stats__border stats_right">
      <div class="stats__icon mr-4">
        <icon name="star" />
      </div>
      <span>Star</span>
    </div>
    <div class="stats__border">{{ star }}</div>
    <div class="stats__border">
      <div class="stats__icon mr-4">
        <icon name="fork" />
      </div>
      <span>Fork</span>
    </div>
    <div class="stats__border stats_left">{{ fork }}</div>
  </div>
</template>

<script>
import { icon } from "../icons";

export default {
  components: {
    icon,
  },
  props: {
    star: {
      type: Number,
      required: true,
    },
    fork: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.stats {
  display: flex;
  margin-bottom: 20px;
  &__border {
    border: 1px solid rgba(27, 31, 35, 0.15);
    display: flex;
    align-items: center;
    padding: 0 10px;
  }
  &_right {
    border-radius: 6px 0px 0px 6px;
    background: #fafbfc;
  }
  &_left {
    border-radius: 0px 6px 6px 0px;
    background: #fafbfc;
  }
  &__icon {
    width: 12px;
    height: 15px;
  }
}
</style>
