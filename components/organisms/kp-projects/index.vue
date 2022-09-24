<template>
  <div class="projects">
    <h1>Projects</h1>
    <div class="carousel-container">
      <kp-carousel :items="projects" @card:click="redirectToProject" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import KpCarousel from '~/components/molecules/kp-carousel/index.vue'

export default Vue.extend({
  name: 'KpProjects',
  components: {
    KpCarousel
  },
  data () {
    return {
      projects: [
        {
          name: 'Ableton',
          imageUrl: '/images/ableton-project.jpg',
          url: 'https://kimaychan.github.io/ableton-project/'
        },
        {
          name: 'Munimuni',
          imageUrl: '/images/munimuni-project.jpg'
        }
      ]
    }
  },
  methods: {
    redirectToProject (p: any) {
      if (p.url) {
        window.open(p.url, '_blank')
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.projects {
  color: $regular;
  height: 100vh;
  padding: {
    left: 90px;
    top: 150px;
  }
}

h1 {
  margin-bottom: 30px;
  font-size: 42px;
}

.carousel-container {
  display: inline-block;
  vertical-align: middle;
  width: 100%;
}
</style>
