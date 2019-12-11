<template>
  <div>
    <layout>
      <div slot="logo"> hello </div>
      <div slot="menu"> menu </div>
    </layout>
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
  }
}
</script>
<style lang="scss" scoped></style>
