<template>
  <section class="basic-layout guideline">
    <header class="main-nav guideline">
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
  </section>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
  .basic-layout {
    padding: 2rem 4rem;
  }
  .main-nav {
    // clear float
    zoom: 1;
    &:after { 
      content: ".";
      display: block;
      clear: both;
      visibility: hidden;
      line-height: 0;
      height: 0;
    }
    .main-logo { 
      float: left;
    }
    .main-menu {
      float: right;
    }
  }
  
</style>

