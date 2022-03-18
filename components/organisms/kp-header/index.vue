<template>
  <header>
    <kp-nav-list :links="linkStates" />
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import KpNavList from '~/components/molecules/kp-nav-list/index.vue'
import { LinkState, Link} from '~/types/common'

export default Vue.extend({
  name: 'KpHeader',
  components: {
    KpNavList
  },
  data () {
    return {
      links: [
        {
          uri: '/',
          title: 'Home'
        },
        {
          uri: '/skills',
          title: 'Skills'
        },
        {
          uri: '/projects',
          title: 'Projects'
        },
        {
          uri: '/contact',
          title: 'Contact'
        }
      ] as Array<Link>
    }
  },
  computed: {
    linkStates (): Array<LinkState> {
      return this.links.map((l: Link) => {
        return {
          ...l,
          state: this.$route.path === l.uri ? 'active' : ''
        }
      })
    }
  }
})
</script>

<style lang="scss" scoped>
header {
  text-align: right;
}
</style>
