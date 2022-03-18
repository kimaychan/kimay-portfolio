<template>
  <section class="home-page">
    <div class="portrait">
      <img src="/images/portrait.JPG" alt="" srcset="/images/portrait.JPG">
    </div>
    <div class="hero">
      <h1>
        Hi! My name is Mikee Rose Bersabal,
      </h1>
      <p class="intro">
        I'm a web developer based in Cebu, Philippines.
      </p>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'KpHomePage'
})
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
