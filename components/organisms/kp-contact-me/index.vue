<template>
  <section class="contact-me">
    <div class="banner">
      <div class="text">
        <h1>Contact Me</h1>
        <p>Ask me anything or just say hi</p>
      </div>
    </div>
    <div class="form-container">
      <kp-contact-form />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import KpContactForm from '~/components/molecules/kp-contact-form/index.vue'

export default Vue.extend({
  name: 'KpContactMe',
  components: {
    KpContactForm
  }
})
</script>

<style lang="scss" scoped>
.contact-me {
  // background: $black-cow;
  height: 100vh;
  padding: 15% 90px;
  > * {
    display: inline-block;
  }
}
.banner {
  // height: 100%;
  width: 500px;
  vertical-align: top;
  h1 {
    color: $regular;
    font-size: 48px;
  }
  p {
    color: $regular;
    font-size: 24px;
  }
  .text {
    // padding-top: 120px;
    height: 100%;
  }
}

.form-container {
  height: 100%;
}
</style>
