<template>
  <div id="app">
    <NavTopSite></NavTopSite>
    <Header></Header>
    <NavTabs></NavTabs>
  </div>
</template>

<script>
import NavTopSite from "./tmail/nav_top_site.vue";
import Header from "./tmail/header.vue"
import NavTabs from "./tmail/nav_tabs.vue"
export default {
  components: {
    NavTopSite,
    Header,
    NavTabs,
  },
};
</script>

<style lang="stylus" scoped>
#app {
  height 1500px
}
</style>