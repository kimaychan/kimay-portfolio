<template>
  <section class="home-page">
    <div class="portrait">
      <img src="/images/portrait.JPG" alt="" srcset="/images/portrait.JPG">
    </div>
    <div class="hero">
      <div class="intro">
        <h1>
          Hi! My name is <span class="highlight">Mikee Rose Bersabal</span>.
        </h1>
        <p>
          I'm a <span class="highlight">Web Developer</span> based in Cebu, Philippines.
          <span class="sub">
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
