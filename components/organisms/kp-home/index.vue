<template>
  <div class="home">
    <h1>
      Hi, my name is Mikee. I'm a Web Developer.
    </h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'KpHome'
})
</script>

<style lang="scss" scoped>
.home {
  height: 100vh;
  background: $vista-white;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    color: $black-cow;
    margin: 0;
    font-family: Crimson Text;
    font-size: 36px;
  }
}
</style>
