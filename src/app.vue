<template>
  <div id="app">
    <NavTopSite></NavTopSite>
    <Header></Header>
  </div>
</template>

<script>
import NavTopSite from "./tmail/nav_top_site.vue";
import Header from "./tmail/header.vue"
export default {
  components: {
    NavTopSite,
    Header,
  },
};
</script>

<style lang="stylus" scoped>
#app {
  height 1500px
}
</style>