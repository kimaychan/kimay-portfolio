<template>
  <nav>
    <ul>
      <li v-for="(link, i) in links" :key="i">
        <kp-link :uri="link.uri" :state="link.state">{{ link.title }}</kp-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import KpLink from '~/components/atoms/kp-link/index.vue'

export default Vue.extend({
  name: 'KpNavList',
  components: {
    KpLink
  },
  props: {
    links: {
      type: Array,
      default () {
        return []
      }
    }
  }
})
</script>

<style lang="scss" scoped>
nav {
  padding: 20px 0;
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    li {
      display: inline-block;
      padding: 0 20px;
    }
  }
}
</style>
