<template>
  <section class="basic-layout">
    <header class="main-nav">
      <div class="main-logo">
        <slot name="logo"></slot>
      </div>
      <div class="main-menu">
        <slot name="menu"></slot>
      </div>
    </header>
    <div class="content">
      <slot name="content"></slot>
    </div>
    <footer>
      <credits></credits>
    </footer>
  </section>
</template>
<script>
  import Credits from "./credits.vue"

  export default {
    components: { Credits }
  }
</script>
<style lang="scss" scoped>

</style>

