<template>
  <div class="card">
    <div class="class__title_wrap mb-16">
      <h2 class="card__title">{{ title }}</h2>
    </div>
    <div class="card__desc_wrap mb-32">
      <div class="card__desc">{{ desc }}</div>
    </div>
    <div class="card__stats">
      <stats :star="star" :fork="fork" />
    </div>
  </div>
</template>

<script>
import { stats } from "../../components/stats";
export default {
  components: {
    stats,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
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
.card {
  padding: 20px 24px;
  background: #ffffff;
  border: 1px solid #f1f1f1;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.07);
  border-radius: 10px;
  margin-bottom: 18px;
}
</style>
