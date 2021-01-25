<template>
  <div id="app">
    <FixedSearchBox />
    <FestivalTopBox />
    <NavTopSite />
    <HeaderSearchBox />
    <ContentBox />
    <FooterBox />
    <NavFloors />
  </div>
</template>

<script>
import FixedSearchBox from "./tmall/FixedSearchBox.vue";
import FestivalTopBox from "./tmall/FestivalTopBox.vue";
import NavTopSite from "./tmall/NavTopSite.vue";
import HeaderSearchBox from "./tmall/HeaderSearchBox.vue";
import ContentBox from "./tmall/ContentBox.vue";
import FooterBox from "./tmall/FooterBox.vue";
import NavFloors from "./tmall/NavFloors.vue";
export default {
  components: {
    FixedSearchBox,
    FestivalTopBox,
    NavTopSite,
    HeaderSearchBox,
    ContentBox,
    FooterBox,
    NavFloors,
  },
};
</script>

<style lang="stylus" scoped>
#app {
  font-family: 'Microsoft YaHei', SimSun, '\5b8b\4f53', sans-serif;
}
</style>