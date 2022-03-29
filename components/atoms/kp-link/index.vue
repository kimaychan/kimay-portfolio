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
      required: true,
      default: '/'
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
  color: $rhino;
  text-decoration: none;
  text-transform: uppercase;
  &.active {
    font-weight: 600;
    text-decoration: line-through;
  }
}
</style>
