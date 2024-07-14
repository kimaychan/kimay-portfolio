<template>
  <div class="textarea-field">
    <label :for="id">{{ label }}</label>
    <textarea :id="id" />
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  id?: string;
  label?: string;
}>()
</script>

<style lang="scss" scoped>
textarea {
  border: none;
  font-size: 18px;
  padding: 0 8px 10px;
  border-radius: 5px;
  background: none;
  height: 200px;
  resize: none;
  color: $regular;
  line-height: 4ch;
  background-image: linear-gradient(transparent, transparent calc(4ch - 1.5px), $light-grey 0px);
  background-size: 100% 4ch;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
  &:focus {
    outline: none;
    background-image: linear-gradient(transparent, transparent calc(4ch - 1.5px), $regular 0px);
  }
}

.textarea-field {
  position: relative;
  height: 250px;
  label {
    position: absolute;
    top: 0;
    font-size: 18px;
    color: $secondary;
  }
  textarea {
    position: absolute;
    top: 20px;
    width: 100%;
  }
}
</style>
