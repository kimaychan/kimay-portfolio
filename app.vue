<template>
  <div class="app">
    <ClientOnly>
      <AppBanner/>
      <AppAbout />
      <AppSkills />
      <AppProjects />
      <AppContactMe />
    </ClientOnly>
  </div>
</template>

<style lang="scss" scoped>
.home-page {
  width: 100%;
  height: 100%;
}
</style>
