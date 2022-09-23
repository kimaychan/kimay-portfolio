<template>
  <div class="progress-bar-wrapper">
    <div class="label">
      {{ label }}
    </div>
    <div class="progress">
      <div class="progress-estimate" :style="{ width: progressPercent+'%' }" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'KpProgressBar',
  props: {
    label: {
      type: String,
      default: 'Test'
    },
    progressPercent: {
      type: Number,
      default: 20
    }
  }
})
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
