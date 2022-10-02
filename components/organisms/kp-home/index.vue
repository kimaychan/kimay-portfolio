<template>
  <section class="home">
    <header>
      <p>Mikee</p>
      <p>2022 Portfolio</p>
    </header>
    <div class="content-layout">
      <div class="banner-container">
        <img
          class="home-banner"
          :src="`${prefix}/images/self-portrait.png`"
          :srcset="`${prefix}/images/self-portrait.png`"
          alt="Self Portrait"
        />
      </div>
      <div class="greetings">
        <h1> Hi, </h1>  
        <p>
          I'm a <span class="highlight">Software Developer/</span> bookworm/cat lover from Cebu, Philippines
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'KpHome',
  computed: {
    prefix (): string {
      if (process.env.NODE_ENV === 'production') {
        return '/kimay-portfolio'
      } else {
        return ''
      }
    }
  }
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

.content-layout {
  height: calc(100vh - 71.5px);
  align-items: center;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.greetings {
  color: $regular;
  text-align: left;
  height: 100%;
  width: 400px;
  display: flex;
  flex-direction: column;
  h1 {
    margin: 0;
    font-size: 9em;
  }
  p {
    font-size: 2em;
    width: 400px;
    font-weight: bold;
  }
}

.highlight {
  background: $powder-blue;
  padding: 5px 10px;
}

@media only screen and (min-width: $breakpoint-med){
  .greetings {
    margin-left: 40px;
    justify-content: center;
  }
}

@media only screen and (max-width: $breakpoint-med){ 
  .home-banner {
    height: 60vh;
    margin-top: 2rem;
  }
}

@media only screen and (max-width: $breakpoint-small) {
  .greetings {
    margin-top: 3rem;
    align-items: center;
    p {
      text-align: center;
    }
  }
}
</style>
