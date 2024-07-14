<template>
  <div class="projects">
    <h1>Projects</h1>
    <div class="carousel-container">
      <BaseCarousel :items="projects" @card:click="redirectToProject" />
    </div>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: 'KpProjects',
  computed: {
    projects (): Array<{ name: string, imageUrl: string, url?: string }> {
      const projects = [{
        name: 'Ableton',
        imageUrl: `/images/ableton-project.jpg`,
        url: 'https://kimaychan.github.io/ableton-project/'
      },
      {
        name: 'Munimuni',
        imageUrl: `/images/munimuni-project.jpg`
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
  min-height: 100vh;
  padding: 40px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

h1 {
  margin-bottom: 30px;
  font-size: 42px;
  text-align: left;
}

.carousel-container {
  width: 100%;
}
</style>
