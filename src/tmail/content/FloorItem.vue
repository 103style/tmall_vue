<template>
  <div id="floorItem">
    <div class="titleLayout">
      <div class="imgTitleLayout" v-if="floorItemData.imageUrl">
        <img :src="floorItemData.imageUrl" alt="" />
      </div>
      <div class="textTitleLayout" v-if="!floorItemData.imageUrl">
        <!-- 元素之间换行 inline-block 会增加间隙 -->
        <i class="titleMark"></i>
        <div class="floorTitle">{{ floorItemData.title }}</div>
        <div class="floorSubname">{{ floorItemData.subTitle }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    floorItemData: {
      require: true,
      type: Object,
    },
  },
};
</script>

<style lang="stylus" scoped>
#floorItem {
  margin-top: 20px;
  width: 100%;
  height: 665px;
  position: relative;

  .titleLayout {
    font-size: 18px;
    color: #000;
    height: 28px;

    .imgTitleLayout {
      color: #000;
      height: 100%;

      img {
        vertical-align: middle;
        width: 214px;
        height: 25px;
      }
    }

    .textTitleLayout > * {
      display: inline-block;
      vertical-align: middle;
    }

    .textTitleLayout {
      height: 100%;

      .titleMark {
        background-color: #333;
        width: 5px;
        height: 18px;
      }

      .floorTitle {
        margin-left: 10px;
        font-size: 18px;
        color: #000;
      }

      .floorSubname {
        font-size: 14px;
        color: #000;
        margin-left: 10px;
        margin-right: 10px;
        line-height: 24px;
        height: 18px;
      }
    }
  }
}
</style>