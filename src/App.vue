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
import FestivalTopBox from "./tmail/FestivalTopBox.vue";
import NavTopSite from "./tmail/NavTopSite.vue";
import HeaderSearchBox from "./tmail/HeaderSearchBox.vue";
import ContentBox from "./tmail/ContentBox.vue";
import FooterBox from "./tmail/FooterBox.vue";
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