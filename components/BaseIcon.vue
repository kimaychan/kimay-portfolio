<template>
  <span :class="`icon-${type}`" />
</template>

<script lang="ts" setup>
defineProps<{ type: string }>()
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
