// floor 左边的banner
<template>
  <div class="bigBanner" v-if="bigBanner">
    <a
      :href="'#' + bannerItem.leftTitle"
      target="_blank"
      v-for="(bannerItem, index) in bigBanner"
      :class="[
        bigBanner.length > 1
          ? index == 0
            ? 'paddingBottom7p5'
            : 'paddingTop7p5'
          : '',
      ]"
      :style="'height:' + 100 / bigBanner.length + '%;'"
    >
      <img class="bannerBg" :src="bannerItem.bgUrl" alt="" />
      <div class="bannerDetail" v-if="bannerItem.leftTitle">
        <div class="leftTitleBox">
          <span class="leftTitle">{{ bannerItem.leftTitle }}</span>
        </div>
        <div class="rightTitleBox">
          <span class="rightTitle" v-for="rightTitle in bannerItem.rightTitle">
            {{ rightTitle }}
          </span>
        </div>
      </div>
      <img
        :class="[
          'goDetail',
          bigBanner.length < 2
            ? 'goDetail1'
            : index == 0
            ? 'goDetail2'
            : 'goDetail3',
        ]"
        src="//img.alicdn.com/tfs/TB1IQBtXaagSKJjy0FbXXa.mVXa-68-68.png"
        alt=""
      />
    </a>
  </div>
</template>

<script>
export default {
  props: {
    bigBanner: {
      require: true,
      type: Array,
    },
  },
};
</script>

<style lang="stylus" scoped>
.bigBanner {
  position: relative;
  width: 235px;
  height: 618px;

  .paddingTop7p5 {
    padding-top: 7.5px;
  }

  .paddingBottom7p5 {
    padding-bottom: 7.5px;
  }

  a {
    display: block;
    position: relative;
    box-sizing: border-box;

    .bannerBg {
      width: 235px;
    }

    .goDetail {
      position: absolute;
      right: 15px;
      width: 32px;
      height: 32px;
    }

    .goDetail1 {
      bottom: 15px;
    }

    .goDetail2 {
      bottom: 22.5px;
    }

    .goDetail3 {
      bottom: 15px;
    }
  }

  .bannerDetail > * {
    overflow: hidden;
    vertical-align: middle;
    color: #FFF;
    height: 64px;
  }

  .bannerDetail {
    position: absolute;
    vertical-align: middle;
    width: 218px;
    height: 64px;
    bottom: 20%;

    .leftTitleBox {
      background: rgba(0, 0, 0, 0.9);
      width: 70px;
      text-align: center;
      display: table-cell;

      .leftTitle {
        display: inline-block;
        vertical-align: middle;
        line-height: 24px;
        font-size: 18px;
        width: 36px;
        overflow: hidden;
      }
    }

    .rightTitleBox {
      left: 70px;
      top: 0;
      position: absolute;
      background: rgba(0, 0, 0, 0.6);
      width: 128px;
      box-sizing: border-box;
      padding: 8px 0 0 14px;

      .rightTitle {
        display: block;
        line-height: 24px;
        font-size: 18px;
      }
    }
  }
}
</style>