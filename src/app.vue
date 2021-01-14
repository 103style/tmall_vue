<template>
  <div id="app">
    <NavTopSite></NavTopSite>
  </div>
</template>

<script>
import NavTopSite from "./tmail/nav_top_site.vue";
export default {
  components: {
    NavTopSite,
  },
};
</script>

<style lang="stylus" scoped>
#app {
  height 1500px
}
</style>