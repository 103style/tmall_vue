<template>
  <div id="category-box">
    <div class="logobox">
      <a href="#" target="_blank">
        <img v-bind:src="logoSrc" />
      </a>
    </div>
    <div class="category_type">
      <span class="iconfont">&#58911;</span>
      <div class="category_type_text">{{ categoryTitle }}</div>
    </div>
    <CategoryList></CategoryList>
  </div>
</template>

<script>
import CategoryList from "./categoryList.vue";
export default {
  components: {
    CategoryList,
  },
  data() {
    return {
      categoryTitle: "商品分类",
      logoSrc:
        "https://img.alicdn.com/tps/i4/i3/6000000001874/O1CN01Iy8Bpy1PiKsWyMkES_!!6000000001874-1-ald.gif",
    };
  },
};
</script>

<style lang="stylus" scoped>
#category-box {
  width: 1230px;
  padding-right: 30px;
  position: relative;
  height: 0;
  z-index: 100;
  margin: 0 auto;

  .logobox {
    height: 130px;
    width: 290px;
    position: absolute;
    z-index: 100000;
    margin-top: -167px;
    margin-left: -45px;
  }

  .category_type {
    width: 200px;
    float: left;
    height: 36px;
    color: #fff;
    background-color: #FF0036;
    position: absolute;
    z-index: 100;
    margin-top: -36px;
    line-height: 36px;

    span {
      font-size: 16px;
      margin-left: 14px;
      font-weight: 700;
    }

    .category_type_text {
      display: inline;
      font-size: 16px;
      margin-left: 8px;
      font-weight: 700;
    }
  }
}
</style>