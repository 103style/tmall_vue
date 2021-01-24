<template>
  <div id="app">
    <FixedSearchBox
      :class="{ showFixedBox: showFixedSearchBox }"
    ></FixedSearchBox>
    <FestivalTopBox />
    <NavTopSite />
    <HeaderSearchBox />
    <ContentBox />
    <FooterBox />
    <NavFloors :showNavFloor="showNavFloor"></NavFloors>
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
  data() {
    return {
      showFixedSearchBox: false,
      showNavFloor: false,
    };
  },
  mounted() {
    // 监听滚动事件，然后用handleScroll这个方法进行相应的处理
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      let y;
      if (window.pageXOffset) {
        y = window.pageYOffset;
      } else {
        y = document.body.scrollTop + document.documentElement.scrollTop;
      }
      console.log("y = " + y);
      this.showFixedSearchBox = y > 700;
      this.showNavFloor = y > 700;
    },
  },
};
</script>

<style lang="stylus" scoped>
#app {
  font-family: 'Microsoft YaHei', SimSun, '\5b8b\4f53', sans-serif;

  .showFixedBox {
    top: 0;
  }
}
</style>