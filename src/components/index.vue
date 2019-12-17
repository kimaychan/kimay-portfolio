<template>
  <div>
    <layout>
      <div slot="logo"> [logo] </div>
      <div slot="menu"> [menu] </div>
      <div slot="content"> 
        <headline></headline>
      </div> 
    </layout>
  </div>
</template>
<script>
import Layout from "./layout.vue"
import Headline from "./headline.vue"

export default {
  name: "App",
  data () {
    return { }
  },
  components: { 
    Layout,
    Headline
  }
}
</script>
<style lang="scss" scoped></style>
