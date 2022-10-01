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
  computed: {
    prefix (): string {
      if (process.env.NODE_ENV === 'production') {
        return '/kimay-portfolio'
      } else {
        return ''
      }
    },
    projects (): Array<{ name: string, imageUrl: string, url?: string }> {
      const projects = [{
        name: 'Ableton',
        imageUrl: `${this.prefix}/images/ableton-project.jpg`,
        url: 'https://kimaychan.github.io/ableton-project/'
      },
      {
        name: 'Munimuni',
        imageUrl: `${this.prefix}/images/ableton-project.jpg`
      }]
      return projects
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
