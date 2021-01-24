//头部的 天猫会员 电器城 等 这些tabs
<template>
  <div id="navCategoryTabs">
    <div class="tabBox">
      <div class="tabs">
        <a href="#" target="_blank" v-for="tab in Tabs">
          <img v-bind:src="tab.imgUrl" v-if="tab.imgUrl" />
          {{ tab.title }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Tabs: [
        {
          imgUrl:
            "//img.alicdn.com/tfs/TB1ztBlaMMPMeJjy1XbXXcwxVXa-200-60.png",
        },
        {
          imgUrl:
            "//img.alicdn.com/tfs/TB1t5ObaBxRMKJjy0FdXXaifFXa-200-60.png",
        },
        { title: "天猫会员" },
        { title: "电器城" },
        { title: "喵鲜生" },
        { title: "医药馆" },
        { title: "魅力惠" },
        { title: "飞猪旅行" },
        { title: "苏宁易购" },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="stylus" scoped>
#navCategoryTabs {
  white-space: nowrap;
  position: relative;
  font-size: 0;
  padding-top: 0;
  height: 35.5px;
  background-color: #fff;
  border-style: solid;
  border-width: 0 0 1.5px;
  border-color: #FF0036;

  .tabBox {
    width: 1230px;
    margin: 0 auto;
    height: 35px;
    padding-right: 30px;

    .tabs {
      margin-left: 200px;
      height: 100%;

      a:hover {
        color: #FF0036;
      }

      a {
        height: 35px;
        line-height: 35px;
        cursor: pointer;
        float: left;
        padding: 0 8px;
        font-weight: 500;
        font-size: 16px;
        display: block;
        color: #333;
        letter-spacing: normal;
        position: relative;

        img {
          width: 100px;
          height: 30px;
          margin-top: 3px;
          display: block;
        }
      }
    }
  }
}
</style>