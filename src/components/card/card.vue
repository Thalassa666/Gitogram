<template>
  <div class="card">
    <div class="card__title_wrap mb-16">
      <h1 class="card__username">{{ username }}</h1>
    </div>
    <div class="card__desc_wrap mb-32">
      <p>{{ text }}</p>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    text: {
      type: String,
      required: true
    },
    username: {
      type: String,
    }
  },
};
</script>
