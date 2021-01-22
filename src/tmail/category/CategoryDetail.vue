// 每个商品分类的详情页
<template>
  <div id="categoryDetail">
    <div class="itemBox">
      <div
        v-for="(hotWordItem, x) in categoryDetail.detail"
        class="hot_word_line"
      >
        <div class="line_title">
          <span class="hot_word_title">
            {{ hotWordItem.title }}
          </span>
        </div>
        <div class="line_items">
          <a
            :href="'#' + item.name"
            class="hot_word"
            :style="changeStyle(item.isHot, categoryDetail.hoverColor, x, y)"
            @mouseover="itemHover(x, y)"
            @mouseout="removeHover"
            target="_blank"
            v-for="(item, y) in hotWordItem.items"
          >
            {{ item.name }}
          </a>
          <div
            class="line_seprate"
            :class="{ none: x == categoryDetail.detail.length - 1 }"
          ></div>
        </div>
      </div>
    </div>

    <div class="hotBrandBox">
      <a
        class="brandItem"
        href="#"
        target="_blank"
        v-for="brand in categoryDetail.hotBrands"
      >
        <img class="brandImg" v-bind:src="brand" alt="" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    categoryDetail: {
      type: Object,
      require: true,
    },
  },
  data() {
    return { isHover: false, hoverIndex: -1 };
  },
  computed: {
    changeStyle() {
      return function (isHot, hoverColor, x, y) {
        return isHot || (this.isHover && x == this.hoverX && y == this.hoverY)
          ? "color:" + hoverColor + "!important"
          : "color:#666!important";
      };
    },
  },
  methods: {
    itemHover(x, y) {
      this.isHover = true;
      this.hoverX = x;
      this.hoverY = y;
    },
    removeHover() {
      this.isHover = false;
      this.hoverX = this.hoverY = -1;
    },
  },
};
</script>

<style lang="stylus" scoped>
#categoryDetail {
  .itemBox {
    float: left;
    width: 583px;
    height: 462px;
    margin: 19px 30px;
    overflow: hidden;
    background-color: #fff;

    a {
      color: #666;
    }

    .line_title {
      width: 60px;
      color: #333;
      margin-right: 30px;
      position: relative;
      font-size: 14px;
      font-weight: 700;
      line-height: 22px;
      height: 22px;
      left: 0px;
      float: left;

      .hot_word_title {
        display: inline-block;
        width: 60px;
        overflow: hidden;
        text-align: justify;
        text-align-last: justify;
      }
    }

    .line_title:after {
      content: '>';
      position: absolute;
      left: 60px;
      width: 14px;
      text-align: center;
    }

    .line_items {
      width: 493px;
      float: left;

      .hot_word {
        height: 22px;
        line-height: 22px;
        font-size: 14px;
        float: left;
        margin-left: 13px;
      }

      .line_seprate {
        margin-bottom: 10.5px;
        border-bottom-width: 1px;
        border-bottom-style: dashed;
        border-bottom-color: rgba(0, 0, 0, 0.1);
        height: 10.5px;
        clear: both;
        zoom: 1;
      }
    }
  }

  .hotBrandBox {
    float: left;
    background-color: #FAFAFA;
    width: 189px;
    padding: 10px;
    height: 480px;

    .brandItem {
      float: left;
      width: 73px;
      margin-right: 1px;
      margin-bottom: 1px;
      height: 37px;
      padding: 5px 10px;
      overflow: hidden;
      background-color: #fff;

      .brandImg {
        width: 73px;
        display: block;
        margin: 0 auto;
      }
    }
  }
}
</style>