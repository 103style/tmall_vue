<template>
  <div id="app">
    <NavTopSite></NavTopSite>
    <Header></Header>
    <Content></Content>
  </div>
</template>

<script>
import NavTopSite from "./tmail/nav_top_site.vue";
import Header from "./tmail/header.vue";
import Content from "./tmail/content.vue";
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
  // background-image: url('https://img.alicdn.com/imgextra/i4/O1CN012KZjVO24U2liLOBDh_!!6000000007393-2-tps-1702-1356.png');
  // background-repeat: no-repeat;
  // background-position: center top;
  height: 2000px;
}
</style>