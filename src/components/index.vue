<template>
  <div>
    <layout>
      <div slot="logo"> [logo] </div>
      <div slot="menu"> [menu] </div>
      <div slot="content"> 
        <headline></headline>
        <about-me></about-me>
        <contact></contact>
      </div> 
    </layout>
  </div>
</template>
<script>
import Layout from "./layout.vue"
import Headline from "./headline.vue"
import AboutMe from "./aboutme.vue"
import Contact from "./contact.vue"

export default {
  name: "App",
  data () {
    return { }
  },
  components: { 
    Layout,
    Headline,
    AboutMe,
    Contact
  }
}
</script>
<style lang="scss" scoped></style>
