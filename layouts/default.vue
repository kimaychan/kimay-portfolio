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
.kp-layout {
  height: 100%;
}
</style>
