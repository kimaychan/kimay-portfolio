<template>
  <div class="progress-bar-wrapper">
    <div class="label">
      {{ label }}
    </div>
    <div class="progress">
      <div class="progress-estimate" :style="{ width: progressPercent + '%' }" />
    </div>
  </div>
</template>

<script lang="ts" setup>
withDefaults(defineProps<{
  label?: string;
  progressPercent?: number;
}>(), { progressPercent: 0})

</script>

<style lang="scss" scoped>
.progress-bar-wrapper {
  display: flex;
  // width: 1000px;
  align-items: center;
  .label {
    width: 10%;
    color: $black-cow;
    display: flex;
    align-items: center;
    margin-right: 80px;
    font-size: 16px;
    font-weight: bold;
  }
  .progress {
    width: 200px;
    background: $light-grey;
    border-radius: 50px;
    position: relative;
    z-index: 0;
    height: 6px;
    .progress-estimate {
      background: $black-cow;
      height: 100%;
      position: absolute;
      z-index: 1;
      border-top-left-radius: 50px;
      border-bottom-left-radius: 50px;
      -webkit-transition: width 2s ease;
      -moz-transition: width 2s ease;
      -o-transition: width 2s ease;
      transition: width 2s ease;
    }
    .progress-text {
      position: absolute;
      z-index: 2;
      color: $rhino;
      top: 20%;
      left: 20px;
    }
  }
}
</style>
