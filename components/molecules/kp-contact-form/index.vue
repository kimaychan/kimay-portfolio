<template>
  <form @submit.prevent="submit">
    <div class="sender-info">
      <kp-input
        id="name"
        v-model="name"
        type="text"
        label="name"
      />
      <kp-input
        id="email"
        type="text"
        label="email"
      />
    </div>
    <kp-textarea
      id="message"
      v-model="message"
      label="message"
      class="message"
    />
    <kp-button type="submit" @click="submit">
      Submit
    </kp-button>
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
import KpInput from '~/components/molecules/kp-input-field/index.vue'
import KpTextarea from '~/components/molecules/kp-textarea/index.vue'
import KpButton from '~/components/atoms/kp-button/index.vue'

export default Vue.extend({
  name: 'KpContactForm',
  components: {
    KpButton,
    KpInput,
    KpTextarea
  },
  data () {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    submit () {
      this.$emit('submit', {
        name: this.name,
        email: this.email,
        message: this.message
      })
    }
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
