<template>
  <div>
    <layout>
      <div slot="logo"> M R B </div>
      <div slot="menu"><nav-menu></nav-menu></div>
      <div slot="content"> 
        <div id="home"><headline></headline></div>
        <div id="about"><about-me></about-me></div>
        <!-- <div id="contact"><contact></contact></div> -->
      </div> 
    </layout>
  </div>
</template>
<script>
import Layout from "./layout.vue"
import Headline from "./headline.vue"
import AboutMe from "./aboutme.vue"
import Contact from "./contact.vue"
import NavMenu from "./menu.vue"

export default {
  name: "App",
  data () {
    return { }
  },
  components: { 
    Layout,
    Headline,
    AboutMe,
    Contact,
    NavMenu
  }
}
</script>
<style lang="scss" scoped></style>
