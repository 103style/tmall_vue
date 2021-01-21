<template>
  <div id="app">
    <FestivalBox></FestivalBox>
    <NavTopSite></NavTopSite>
    <Header></Header>
    <Content></Content>
  </div>
</template>

<script>
import FestivalBox from "./tmail/festivalbox.vue";
import NavTopSite from "./tmail/nav_top_site.vue";
import Header from "./tmail/header.vue";
import Content from "./tmail/content.vue";
export default {
  components: {
    FestivalBox,
    NavTopSite,
    Header,
    Content,
  },
};
</script>

<style lang="stylus" scoped>
#app {
}
</style>