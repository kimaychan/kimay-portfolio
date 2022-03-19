<template>
  <section class="kp-layout">
    <kp-header />
    <div class="content">
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

.kp-layout {
  height: 100%;
  display: flex;
  flex-flow: column;
  position: relative;
  overflow: hidden;
  header {
    flex: 0 1 auto;
    width: 100%;
  }
  .content {
    margin-top: 10px;
    flex: 1 1 auto;
  }
}
</style>
