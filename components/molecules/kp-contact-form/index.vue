<template>
  <form @submit.prevent="submit">
    <div class="sender-info">
      <kp-input id="name" type="text" label="name" />
      <kp-input id="email" type="text" label="email" />
    </div>
    <kp-textarea id="message" label="message" class="message" />
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
import KpInput from '~/components/molecules/kp-input-field/index.vue'
import KpTextarea from '~/components/molecules/kp-textarea/index.vue'

export default Vue.extend({
  name: 'KpContactForm',
  components: {
    KpInput,
    KpTextarea
  },
  methods: {
    submit () {}
  }
})
</script>

<style lang="scss" scoped>
.sender-info {
  width: 100%;
  display: flex;
  > * {
    width: 50%;
    &:not(:last-child) {
      margin-right: 60px;
    }
  }
}

form {
  width: 720px;
  .message {
    margin-top: 35px;
    width: 100%;
  }
}
</style>
