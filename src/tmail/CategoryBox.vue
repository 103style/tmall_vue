//商品分类 和 轮播图
<template>
  <div id="categoryBox">
    <!-- TODO -->
    <CategoryLayout :showFestival="true"></CategoryLayout>
    <SliderBox></SliderBox>
  </div>
</template>

<script>
import CategoryLayout from "./category/CategoryLayout.vue";
import SliderBox from "./category/slider/SliderBox.vue";
export default {
  components: {
    CategoryLayout,
    SliderBox,
  },
};
</script>

<style lang="stylus" scoped>
#categoryBox {
  position: relative;
  height: 500px;
  width: 100%;
}
</style>