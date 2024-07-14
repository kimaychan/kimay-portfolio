<template>
  <form @submit.prevent="submit">
    <div class="sender-info">
      <BaseInputField
        id="name"
        v-model="name"
        type="text"
        label="name"
      />
      <BaseInputField
        id="email"
        type="text"
        label="email"
      />
    </div>
    <BaseTextarea
      id="message"
      v-model="message"
      label="message"
      class="message"
    />
    <BaseButton type="submit" @click="submit">
      Submit
    </BaseButton>
  </form>
</template>

<script lang="ts">
export default defineComponent({
  name: 'KpContactForm',
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
