<template>
  <div id="floorList">
    <FloorItem v-for="item in floorItems" :floorItemData="item"></FloorItem>
  </div>
</template>

<script>
import FloorItem from "./FloorItem.vue";
export default {
  components: {
    FloorItem,
  },
  data() {
    return {
      floorItems: [
        {
          imageUrl:
            "https://img.alicdn.com/tfs/TB1Q67hXPihSKJjy0FeXXbJtpXa-428-50.png",
        },
        {
          imageUrl:
            "https://img.alicdn.com/tfs/TB1R.slXGagSKJjy0FgXXcRqFXa-428-50.png",
        },
        { title: "美丽人生", subTitle: "FASHION & BEAUTY" },
        { title: "潮电酷玩", subTitle: "ELECTRONICS" },
        { title: "居家生活", subTitle: "GROCERY & HEALTH" },
        { title: "打造爱巢", subTitle: "HOME" },
        { title: "户外出行", subTitle: "OUTDOORS & AUTOMOTIVE" },
      ],
    };
  },
};
</script>

<style lang="stylus" scoped>
#floorList {
  margin: 20px auto 0;
  width: 1230px;
  padding-right: 30px;
}
</style>