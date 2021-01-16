//商品分类 和 轮播图
<template>
  <div id="category_box">
    <CategoryLayout></CategoryLayout>
    <Slider></Slider>
  </div>
</template>

<script>
import CategoryLayout from "./category/categoryLayout.vue";
import Slider from "./category/slider/slider.vue";
export default {
  components: {
    CategoryLayout,
    Slider,
  },
};
</script>

<style lang="stylus" scoped>
#category_box {
  position: relative;
  height: 500px;
  width: 100%;
}
</style>