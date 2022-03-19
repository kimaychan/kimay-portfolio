<template>
  <section class="home-page">
    <div class="portrait">
      <img src="/images/portrait.JPG" alt="" srcset="/images/portrait.JPG">
    </div>
    <div class="hero">
      <div class="intro">
        <h1>
          Hi! My name is Mikee Rose Bersabal.
        </h1>
        <p>
          I'm a Web Developer based in Cebu, Philippines.
          <span>
            I currently develop for Vauldex Technologies Inc.
          </span>
        </p>
      </div>
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
