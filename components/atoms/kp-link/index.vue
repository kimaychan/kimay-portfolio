<template>
  <nuxt-link :to="uri" :class="['link', state]">
    <slot />
  </nuxt-link>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'KpLink',
  props: {
    uri: {
      type: String,
      required: true
    },
    state: {
      type: String,
      default: ''
    }
  }
})
</script>

<style lang="scss" scoped>
.link {
  color: $faded-pink;
  text-decoration: none;
  text-transform: uppercase;
  &.active {
    color: white;
    font-weight: 600;
  }
}
</style>
