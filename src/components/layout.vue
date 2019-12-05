<template>
  <div class="layout">
    <header>
      <div class="menu"></div>
    </header>
    <aside class="side-nav">
      <side-nav></side-nav>
    </aside>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>
<script>
import SideNav from "./side-nav.vue"
export default {
  components: { SideNav }
}
</script>
<style lang="scss" scoped>
</style>

