// 分类的布局 包括 logo 分类标题 和 对应的分类item
<template>
  <div id="categoryLayout">
    <div class="logoBox">
      <a href="#" target="_blank">
        <img v-bind:src="logoSrc" />
      </a>
    </div>
    <div class="categoryType" :class="{ none: showFestival }">
      <span class="iconfont">&#58911;</span>
      <div class="categoryTypeText">{{ categoryTitle }}</div>
    </div>
    <div class="categoryType" :class="{ none: !showFestival }">
      <div
        class="categoryTypeItem"
        @mouseover="updateSelectIndex(0)"
        :class="selectIndex == 0 ? 'categorySelect' : 'categoryNormal'"
      >
        {{ categoryTitle }}
      </div>
      <div
        class="categoryTypeItem"
        @mouseover="updateSelectIndex(1)"
        :class="selectIndex == 1 ? 'festivalSelect' : 'festivalNormal'"
      >
        {{ festivalTitle }}
      </div>
    </div>
    <CategoryList :class="{ none: selectIndex != 0 }"></CategoryList>
    <FestivalList
      :class="{ none: selectIndex != 1 }"
      :festivalList="festivalList"
    ></FestivalList>
  </div>
</template>

<script>
import CategoryList from "./CategoryList.vue";
import FestivalList from "./FestivalList.vue";
import FestivalTopBox from "../FestivalTopBox.vue";
export default {
  components: {
    CategoryList,
    FestivalList,
    FestivalTopBox,
  },
  methods: {
    updateSelectIndex(index) {
      this.selectIndex = index;
    },
  },
  data() {
    return {
      showFestival: FestivalTopBox.data().showFestival,
      selectIndex: 1,
      categoryTitle: "商品分类",
      festivalTitle: "年货节",
      logoSrc:
        "//img.alicdn.com/tps/i4/i3/6000000001874/O1CN01Iy8Bpy1PiKsWyMkES_!!6000000001874-1-ald.gif",
      festivalList: [
        { title: "大牌女装", iconDes: "\u3459" },
        { title: "大牌男装", iconDes: "\u346c" },
        { title: "春节美食", iconDes: "\u3455" },
        { title: "年货嗨购", iconDes: "\u345f" },
        { title: "品质家电", iconDes: "\u3454" },
        { title: "新年新家", iconDes: "\u3453" },
        { title: "新年购车", iconDes: "\u345d" },
        { title: "全球年货", iconDes: "\ue611" },
        { title: "苏宁爆款", iconDes: "\u3457" },
        { title: "天猫超市", iconDes: "\ue602" },
      ],
    };
  },
};
</script>

<style lang="stylus" scoped>
#categoryLayout {
  width: 1230px;
  padding-right: 30px;
  position: relative;
  height: 0;
  z-index: 100;
  margin: 0 auto;

  .logoBox {
    height: 130px;
    width: 290px;
    position: absolute;
    z-index: 100000;
    margin-top: -167px;
    margin-left: -45px;
  }

  .categoryType {
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

    .categoryTypeText {
      display: inline;
      font-size: 16px;
      margin-left: 8px;
      font-weight: 700;
    }

    .categoryTypeItem {
      cursor: pointer;
      float: left;
      font-size: 14px;
      text-align: center;
      width: 100px;
    }

    .categorySelect {
      color: #DD2727;
      background-color: rgb(238, 238, 238);
    }

    .categoryNormal {
      color: #f0f0f0;
      background-color: #C60A0A;
    }

    .festivalSelect {
      color: #fff;
      background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACAQMAAABIeJ9nAAAAA1BMVEUYFRXvJ83tAAAAAXRSTlPM0jRW/QAAAApJREFUCNdjAAIAAAQAASDSLW8AAAAASUVORK5CYII=');
    }

    .festivalNormal {
      color: #ffe013;
      background-color: #C60A0A;
    }
  }
}
</style>