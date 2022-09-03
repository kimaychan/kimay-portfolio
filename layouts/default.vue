<template>
  <section class="kp-layout">
    <div class="content">
      <nuxt-child />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'KpLayout'
})
</script>

<style lang="scss" scoped>
// .page-enter-active,
// .page-leave-active {
//   transition: opacity 0.2s;
// }
// .page-enter,
// .page-leave-to {
//   opacity: 0;
// }

.kp-layout {
  height: 100%;
  // display: flex;
  // flex-flow: column;
  // position: relative;
  // overflow: hidden;
  header {
    // flex: 0 1 auto;
    // width: 100%;
    // position: absolute;
    // top: 0;
  }
  .content {
    // margin-top: 10px;
    // flex: 1 1 auto;
  }
}
</style>
