<template>
  <section>
    <kp-header />
    <div>
      <nuxt-child />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import KpHeader from '~/components/organisms/kp-header/index.vue'

export default Vue.extend({
  name: 'KpLayout',
  components: {
    KpHeader
  }
})
</script>

<style lang="scss" scoped>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.2s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
