<template>
  <button :type="type" @click="$emit('click', $event)">
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'KpButton',
  props: {
    type: {
      type: String,
      default: ''
    }
  }
})
</script>

<style lang="scss" scoped>
button {
  width: 140px;
  background: $black-cow;
  color: $vista-white;
  font-family: $main-font;
  border: none;
  padding: 10px 50px;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    filter: opacity(.9);
  }
  &:active {
    background: black;
  }
  &:focus {
    outline: none;
    filter: opacity(.9);
  }
}
</style>
