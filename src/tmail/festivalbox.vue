<template>
  <!-- 节日促销的宣传图 -->
  <div class="festivalBox" :class="{ none: !showFestival }">
    <a href="#" target="_blank" class="festivalWrapper">
      <img
        :src="festivalImg"
        alt=""
        class="festivalWrapper"
        width="990"
        height="80"
      />
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // TODO
      showFestival: true,
      festivalImg:
        "//img.alicdn.com/imgextra/i1/O1CN01pUU4NX1tylYyZVHRR_!!6000000005971-0-tps-1920-200.jpg",
    };
  },
};
</script>
<style lang="stylus" scoped>
.festivalBox {
  position: relative;
  width: 100%;
  height: 80px;
  background: #a70700;

  .festivalWrapper {
    display: block;
    margin: 0 auto;
    border: none;
    width: 990px;
    height: 100%;
  }
}
</style>