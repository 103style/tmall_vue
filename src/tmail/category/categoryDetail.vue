// 每个商品分类的详情页
<template>
  <div id="categoryDetail">
    <div v-for="hotWordItems in categoryDetail" class="itemBox">
      <div v-for="(hotWordItem, index) in hotWordItems" class="hot_word_line">
        <div class="line_title">
          <a href="#" class="hot_word_title">
            {{ hotWordItem.title }}
          </a>
        </div>
        <div class="line_items">
          <a
            href="#"
            class="hot_word"
            target="_blank"
            v-for="item in hotWordItem.items"
          >
            {{ item.name }}
          </a>
          <div class="line_seprate" v-if="index !=hotWordItems.length - 1"></div>
        </div>
      </div>
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
}
</style>