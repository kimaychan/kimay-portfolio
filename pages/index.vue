<template>
  <div class="app">
    <kp-home />
    <kp-about />
    <kp-skills />
    <kp-projects />
    <!-- <kp-contact-me /> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import KpHome from '~/components/organisms/kp-home/index.vue'
import KpAbout from '~/components/organisms/kp-about/index.vue'
import KpSkills from '~/components/organisms/kp-skills/index.vue'
import KpProjects from '~/components/organisms/kp-projects/index.vue'
import KpContactMe from '~/components/organisms/kp-contact-me/index.vue'

export default Vue.extend({
  name: 'KpApp',
  components: {
    KpHome,
    KpAbout,
    KpSkills,
    KpProjects,
    KpContactMe
  }
})
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
