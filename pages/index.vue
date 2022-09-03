<template>
  <section class="app">
    <kp-home />
    <kp-about />
    <kp-skills />
    <kp-projects />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import KpHome from '~/components/organisms/kp-home/index.vue'
import KpAbout from '~/components/organisms/kp-about/index.vue'
import KpSkills from '~/components/organisms/kp-skills/index.vue'
import KpProjects from '~/components/organisms/kp-projects/index.vue'

export default Vue.extend({
  name: 'KpApp',
  components: {
    KpHome,
    KpAbout,
    KpSkills,
    KpProjects
  }
})
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
