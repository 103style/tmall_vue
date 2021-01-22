<template>
  <div id="floorList">
    <FloorItem v-for="item in floorItems" :floorItemData="item" />
  </div>
</template>

<script>
import FloorItem from "./floor/FloorItem.vue";
export default {
  components: {
    FloorItem,
  },
  data() {
    return {
      floorItems: [
        {
          imageUrl:
            "//img.alicdn.com/tfs/TB1Q67hXPihSKJjy0FeXXbJtpXa-428-50.png",
          bigBanner: [
            {
              bgUrl:
                "//img.alicdn.com/tfs/TB1nveReMoQMeJjy1XaXXcSsFXa-235-618.png",
              leftTitle: "韩国进口",
              rightTitle: ["天猫专享", "进口水果季"],
            },
          ],
          gridList: {},
        },
        {
          imageUrl:
            "//img.alicdn.com/tfs/TB1R.slXGagSKJjy0FgXXcRqFXa-428-50.png",
          bigBanner: [
            {
              bgUrl:
                "//img.alicdn.com/tfs/TB1fQ1VeMoQMeJjy0FpXXcTxpXa-235-301.png",
              leftTitle: "奢享人生",
              rightTitle: ["极速发货", "全球低价"],
            },
            {
              bgUrl:
                "//img.alicdn.com/tfs/TB1xvaReMoQMeJjy1XaXXcSsFXa-235-301.png",
              leftTitle: "春季上新",
              rightTitle: ["日本专业级", "瘦脸美容仪"],
            },
          ],
        },
        {
          adUrl: "//aecpm.alicdn.com/simba/img/TB1_EfIJFXXXXXOXFXXSutbFXXX.jpg",
        },
        {
          title: "美丽人生",
          subTitle: "FASHION & BEAUTY",
          bigBanner: [
            {
              bgUrl: "//img.alicdn.com/tps/i4/TB1U8CRhKEJL1JjSZFGwu16OXXa.png",
              leftTitle: "焕新换型",
              rightTitle: ["时尚女装", "优雅而知性"],
            },
          ],
        },
        {
          title: "潮电酷玩",
          subTitle: "ELECTRONICS",
          bigBanner: [
            {
              bgUrl: "//img.alicdn.com/tps/i4/TB1sgSzhFcJL1JjSZFOwu3WlXXa.png",
              leftTitle: "明星同款",
              rightTitle: ["畅享音乐", "耳机发烧友"],
            },
          ],
        },
        {
          adUrl: "//aecpm.alicdn.com/simba/img/TB1tELGJFXXXXaLXFXXSutbFXXX.jpg",
        },
        {
          title: "居家生活",
          subTitle: "GROCERY & HEALTH",
          bigBanner: [
            {
              bgUrl: "//img.alicdn.com/tps/i4/TB1QsmZhUQIL1JjSZFhwu1DZFXa.png",
              leftTitle: "美家",
              rightTitle: ["家饰尚品", "清新居家"],
            },
          ],
        },
        {
          title: "打造爱巢",
          subTitle: "HOME",
          bigBanner: [
            {
              bgUrl: "//img.alicdn.com/tps/i4/TB1MesKcWmWQ1JjSZPhwu0CJFXa.png",
              leftTitle: "轻松生活",
              rightTitle: ["温纹尔雅", "极致条纹感"],
            },
          ],
        },
        {
          adUrl: "//aecpm.alicdn.com/simba/img/TB1x8DCJFXXXXc7XFXXSutbFXXX.jpg",
        },
        {
          title: "户外出行",
          subTitle: "OUTDOORS & AUTOMOTIVE",
          bigBanner: [
            {
              bgUrl: "//img.alicdn.com/tps/i4/TB1w6JJhol7MKJjSZFDwu1OEpXa.png",
              leftTitle: "户外大牌",
              rightTitle: ["拎包远足", "套装精选"],
            },
          ],
        },
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