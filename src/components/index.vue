<template>
  <div>
    <layout></layout>
  </div>
</template>
<script>
import Layout from "./layout.vue"

export default {
  name: "App",
  data () {
    return { }
  },
  components: { 
    Layout
  }, 
  mounted () {
    // console.log("app is mounted!", this)
  }
}
</script>