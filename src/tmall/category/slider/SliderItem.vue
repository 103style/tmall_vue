<template>
  <div id="sliderItem" :style="'background:' + sliderInfo.bgColor + ';'">
    <a :href="sliderInfo.url" target="_blank" class="slideBgLink">
      <b
        class="sliderBg"
        :style="'background-image:url(' + sliderInfo.img + ');'"
      >
      </b>
    </a>
    <div class="sliderFloors">
      <a
        class="floorLink"
        :href="'#' + index"
        target="_blank"
        v-for="(floor, index) in sliderInfo.floors"
      >
        <img :src="floor" alt="" width="100%" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sliderInfo: {
      type: Object,
      require: true,
    },
  },
};
</script>
<style lang="stylus" scoped>
#sliderItem {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;

  .slideBgLink {
    width: 100%;
    height: 100%;
    z-index: 0;
    background-position: center center;
    background-repeat: no-repeat;

    .sliderBg {
      width: 100%;
      display: block;
      height: 100%;
      background-position: center center;
      background-repeat: no-repeat;
    }
  }

  .sliderFloors {
    position: absolute;
    right: 0;
    width: 220px;
    height: 100%;
    top: 0;

    .floorLink {
      margin-top: 10px;
      background-color: #fff;
      display: block;
      width: 220px;
      height: 235px;
    }
  }
}
</style>