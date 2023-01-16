<template>
  <div class="feed">
    <div class="feed__user mb-16 mt-32">
      <avatar
        avatar="https://picsum.photos/200/300"
        class="feed__avatar mr-16"
      />
      <div class="feed__username">John Doe</div>
    </div>
    <div class="feed__card">
      <slot name="card"></slot>
    </div>
    <div class="feed__toggler">
      <toggler @toggle="showComment" class="mb-12" />
      <ul class="feed__comment_list" v-if="isShowComments">
        <li class="feed__comment_item comment" v-for="elem in 5" :key="elem">
          <comment username="John Doe" text="Hello" />
        </li>
      </ul>
      <div class="feed__date">15 May</div>
    </div>
  </div>
</template>

<script>
import { avatar } from "../../components/avatar";
import { toggler } from "../toggler";
import { comment } from "../comment";
export default {
  components: {
    avatar,
    toggler,
    comment,
  },

  data() {
    return {
      isShowComments: false,
    };
  },

  methods: {
    showComment(state) {
      // console.log(state);
      this.isShowComments = state;
    },
  },
};
</script>

<style lang="scss" scoped>
.feed {
  &__user {
    display: flex;
    align-items: center;
  }

  &__username {
    font-weight: 700;
    font-size: 18px;
    line-height: 18px;
  }
  &__date {
    text-transform: uppercase;
    color: var(--LightGrey);
  }
}
</style>
