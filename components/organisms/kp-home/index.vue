<template>
  <section class="home">
    <header>
      <p>Mikee</p>
      <p>2022 Portfolio</p>
    </header>
    <img class="home-banner" src="/images/self-portrait.png" srcset="/images/self-portrait.png" />
    <div class="greetings">
      <h1> Hi, </h1>
      <p>
        I’m a <span class="highlight">Software Developer</span>/bookworm/cat lover from Cebu, Philippines
      </p>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'KpHome'
})
</script>

<style lang="scss" scoped>
header {
  font-size: 24px;
  display: flex;
  justify-content: space-between;
  color: $regular;
  font-weight: bold;
  padding: 20px 40px;
}

.home {
  background: $vista-white;
  text-align: center;
}

.home-banner {
  height: 680px;
  display: inline-block;
  vertical-align: top;
}

.greetings {
  color: $regular;
  position: relative;
  display: inline-block;
  text-align: left;
  vertical-align: bottom;
  height: calc(850px - 100px);
  width: 50%;
  h1 {
    margin: 0;
    font-size: 138px;
    position: absolute;
    top: 150px;
  }
  p {
    font-size: 32px;
    width: 600px;
    position: absolute;
    top: 330px;
  }
}

.highlight {
  background: $powder-blue;
}
</style>
