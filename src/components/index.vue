<template>
  <div>
    <layout>
      <div slot="logo"> [logo] </div>
      <div slot="menu"> [menu] </div>
      <div slot="content"> 
        <headline></headline>
        <about-me></about-me>
      </div> 
    </layout>
  </div>
</template>
<script>
import Layout from "./layout.vue"
import Headline from "./headline.vue"
import AboutMe from "./aboutme.vue"

export default {
  name: "App",
  data () {
    return { }
  },
  components: { 
    Layout,
    Headline,
    AboutMe
  }
}
</script>
<style lang="scss" scoped></style>
