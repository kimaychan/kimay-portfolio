<template>
  <span :class="`icon-${type}`" />
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'KpIcon',
  props: {
    type: {
      type: String,
      required: true,
      default: 'phone'
    }
  }
})
</script>

<style lang="scss" scoped>
span {
  display: inline-block;
  color: $regular;
  font-size: 16px;
  width: 20px;
  height: 20px;
}
</style>
