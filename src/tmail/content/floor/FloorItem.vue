<template>
  <div id="floorItem">
    <!-- 广告栏 -->
    <div class="floorAdBox" v-if="floorItemData.adUrl">
      <a href="#" target="_blank">
        <img :src="floorItemData.adUrl" alt="" width="1620" height="90" />
      </a>
    </div>

    <div
      v-if="floorItemData.imageUrl || floorItemData.title"
      class="floorItemBox"
    >
      <!-- 标题栏 -->
      <FloorItemTitle :floorItemData="floorItemData" />

      <!-- 内容布局 -->
      <div class="floorContentLayout">
        <!-- 左边的banner -->
        <FloorItemBanner
          v-if="floorItemData.bigBanner"
          :bigBanner="floorItemData.bigBanner"
        />
        <FloorItemGrid
          v-if="floorItemData.gridList"
          :gridList="floorItemData.gridList"
        />
      </div>
    </div>
  </div>
</template>

<script>
import FloorItemTitle from "./FloorItemTitle.vue";
import FloorItemBanner from "./FloorItemBanner.vue";
import FloorItemGrid from "./FloorItemGrid.vue";
export default {
  components: {
    FloorItemTitle,
    FloorItemBanner,
    FloorItemGrid,
  },
  props: {
    floorItemData: {
      require: true,
      type: Object,
    },
  },
};
</script>

<style lang="stylus" scoped>
.floorAdBox {
  margin-top: 10px;
  height: 90px;
  overflow: hidden;

  img {
    display: block;
    margin-left: -165px;
    width: 1620px;
    hei: 90px;
  }
}

.floorItemBox {
  margin-top: 20px;
  height: 665px;
  position: relative;

  .floorContentLayout > * {
    float: left;
  }

  .floorContentLayout {
    width: 100%;
    height: 618px;
    margin-top: 10px;
    overflow: hidden;
  }
}
</style>