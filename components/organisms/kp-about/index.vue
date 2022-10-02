<template>
  <section class="about content-layout">
    <div class="about-description">
      <h1>a little bit about me...</h1>
      <div class="text">
        <p>
          My name is Mikee Rose Bersabal. I’m 26 years old and I love being creative.
        </p>
        <p>
          As a millenial, much of my life was heavily influenced by the advancement of technology and I found that I enjoyed cultivating my creativity through the technology that I had access to growing up. I love turning ideas into reality and this passion lead me to pursue a career in software development.
        </p>
        <p>
          I graduated Bachelor of Science in Information Technology at University of Cebu-Main and started coding professionally almost immediately. Its been 6 years now and I still find ways to enjoy what I do.
        </p>
      </div>
    </div>
    <div class="about-visual">
      <img
        :src="`${prefix}/images/mikee.jpg`"
        :srcset="`${prefix}/images/mikee.jpg`"
        alt="Mikee"
        class="about-image"
      />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'KpAbout',
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
.about {
  min-height: 100vh;
  color: $regular;
}

.about-description {
  h1 {
    font-size: 42px;
    margin-bottom: 60px;
  }
  .text {
    font-size: 18px;
    overflow-wrap: wrap;
    p:not(:last-child) {
      margin-bottom: 16px;
    }
  }
  p {
    max-width: 650px;
  }
}

.about-visual {
  img {
    height: 36vh;
    box-shadow: 30px 30px $sandy-beach;
  }
}

.content-layout {
  display: flex;
}

@media only screen and (min-width: $breakpoint-large) {
  .content-layout {
    padding: 90px 0;
    justify-content: space-between;
  }
  .about-description {
    margin-top: auto;
    padding-left: 90px;
  }
  .about-visual {
    padding-right: 100px;
  }
}

@media only screen and (max-width: $breakpoint-large) {
  .content-layout {
    flex-direction: column-reverse;
    justify-content: center;
  }
  .about-description {
    margin-top: 5rem;
    width: 100%;
    padding: 0 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .about-visual {
    text-align: center;
  }
}
</style>
