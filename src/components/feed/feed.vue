<template>
  <div class="feed">
    <div class="feed__user mb-16 mt-32">
      <div class="feed__avatar mr-16">
        <avatar
            :username="username"
            :avatar="avatar"
        />
      </div>
    </div>
    <div class="feed__card g-container">
      <slot name="card">
        <card />
      </slot>
        <stats
            :star="stars"
            :fork="forks"
        />
    </div>
    <div class="feed__toggler">
      <toggler @onToggle="showComment" class="mb-12" />
      <div class="feed__comment" v-if="isShowComments">
        <ul class="feed__comment_list">
          <li class="feed__comment_item comment" v-for="user in users" :key="user.id">
            <comment
              :username="user.username"
              :text="user.text"
            />
          </li>
        </ul>
      </div>
      <div class="feed__date">15 May</div>
    </div>
  </div>
</template>

<script>
import { card } from '../card';
import { stats } from '../stats';
import { avatar } from "../../components/avatar";
import { toggler } from "../toggler";
import { comment } from "../comment";
import users from './data.json';
export default {
  components: {
    card,
    stats,
    avatar,
    toggler,
    comment,
  },

  data() {
    return {
      isShowComments: false,
      users,
    };
  },

  methods: {
    showComment(isOpened) {
      this.isShowComments = isOpened;
    },
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
    stars: {
      type: Number
    },
    forks: {
      type: Number
    }
  }
};
</script>

<style lang="scss" scoped>
.feed {
  &__user {
    display: flex;
    align-items: center;
  }
  &__card {
    padding: 20px 24px;
    background: #ffffff;
    border: 1px solid #f1f1f1;
    box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.07);
    border-radius: 10px;
    margin-bottom: 18px;
    width: 1000px;
  }
  &__date {
    text-transform: uppercase;
    color: var(--LightGrey);
  }
}
</style>
