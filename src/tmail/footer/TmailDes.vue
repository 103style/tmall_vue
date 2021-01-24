// 天猫相关的介绍
<template>
  <div id="tmailDesBox">
    <div class="desItemBox" v-for="desItem in desItems">
      <div class="desTitle">{{ desItem.title }}</div>

      <a
        v-for="des in desItem.items"
        class="desItemLink"
        :href="'#' + des"
        target="_blank"
      >
        {{ des }}
      </a>

      <a
        class="desCover"
        v-if="desItem.cover"
        :href="'#' + desItem.title"
        target="_blank"
      >
        <img :src="desItem.cover" alt="" width="105" height="105" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      desItems: [
        { title: "购物指南", items: ["免费注册", "开通支付宝", "支付宝充值"] },
        { title: "天猫保障", items: ["发票保障", "售后规则", "缺货赔付"] },
        {
          title: "支付方式",
          items: ["快捷支付", "信用卡", "余额宝", "蚂蚁花呗", "货到付款"],
        },
        {
          title: "商家服务",
          items: [
            "天猫规则",
            "商家入驻",
            "商家中心",
            "天猫智库",
            "物流服务",
            "喵言喵语",
            "运营服务",
          ],
        },
        {
          title: "手机天猫",
          cover: "//img.alicdn.com/tfscom/TB14MWoNhjaK1RjSZFAwu2dLFXa.png",
        },
      ],
    };
  },
};
</script>

<style lang="stylus" scoped>
#tmailDesBox {
  width: 1190px;
  padding-top: 22px;
  height: 190px;
  margin: auto;
  background-color: #fff;
  background-image: url('//img.alicdn.com/tfs/TB1dl28RXXXXXbzaFXXXXXXXXXX-136-50.png');
  background-position: 45px bottom;
  background-repeat: no-repeat;
  background-size: 68px 25px;
  border-top: 1px solid #ededed;

  .desItemBox {
    float: left;
    width: 186px;
    padding-left: 52px;
    text-align: left;

    .desTitle {
      color: #646464;
      font-size: 16px;
      font-weight: 700;
      height: 30px;
      line-height: 30px;
    }

    .desItemLink {
      display: block;
      width: 100px;
      overflow: hidden;
      height: 20px;
      line-height: 20px;
      color: #8b8b8b;
      font-size: 12px;
    }

    .desCover {
      display: block;
      width: 105px;
      height: 105px;
      overflow: hidden;
    }
  }
}
</style>