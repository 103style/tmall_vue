<template>
  <div id="app">
    <FestivalTopBox />
    <NavTopSite />
    <HeaderSearchBox />
    <ContentBox />
    <FooterBox />
  </div>
</template>

<script>
import FestivalTopBox from "./tmall/FestivalTopBox.vue";
import NavTopSite from "./tmall/NavTopSite.vue";
import HeaderSearchBox from "./tmall/HeaderSearchBox.vue";
import ContentBox from "./tmall/ContentBox.vue";
import FooterBox from "./tmall/FooterBox.vue";
export default {
  components: {
    FestivalTopBox,
    NavTopSite,
    HeaderSearchBox,
    ContentBox,
    FooterBox,
  },
};
</script>

<style lang="stylus" scoped>
#app {
  font-family: 'Microsoft YaHei', SimSun, '\5b8b\4f53', sans-serif;
}
</style>