<template>
  <div id="app">
    <NavTopSite></NavTopSite>
    <Header></Header>
    <Content></Content>
  </div>
</template>

<script>
import NavTopSite from "./tmail/nav_top_site.vue";
import Header from "./tmail/header.vue"
import Content from './tmail/content.vue'
export default {
  components: {
    NavTopSite,
    Header,
    Content,
  },
};
</script>

<style lang="stylus" scoped>
#app {
  height 1500px
}
</style>