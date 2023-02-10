<template>
    <div :class={active} class="progress">
      <div ref="indicator" class="indicator"></div>
    </div>
</template>

<script>

export default {
  name: 'progress',
  data () {
    return {
      active: false
    }
  },
  emits: ['onFinish'],
  methods: {
    emitOnFinish () {
      this.$emit('onFinish')
    }
  },
  mounted () {
    setTimeout(() => {
      this.active = true
    }, 500)

    this.$refs.indicator.addEventListener('transitionend', this.emitOnFinish)
  },
  beforeUnmount () {
    this.$refs.indicator.removeEventListener('transitionend', this.emitOnFinish)
  }

}
</script>

<style lang="scss" scoped src="./progress.scss"></style>
