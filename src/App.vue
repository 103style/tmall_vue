<template>
  <div id="app">
    <FestivalTopBox></FestivalTopBox>
    <NavTopSite></NavTopSite>
    <HeaderSearchBox></HeaderSearchBox>
    <ContentBox></ContentBox>
  </div>
</template>

<script>
import FestivalTopBox from "./tmail/FestivalTopBox.vue";
import NavTopSite from "./tmail/NavTopSite.vue";
import HeaderSearchBox from "./tmail/HeaderSearchBox.vue";
import ContentBox from "./tmail/ContentBox.vue";
export default {
  components: {
    FestivalTopBox,
    NavTopSite,
    HeaderSearchBox,
    ContentBox,
  },
};
</script>

<style lang="stylus" scoped>
#app {
}
</style>