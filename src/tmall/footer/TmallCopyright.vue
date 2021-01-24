<template>
  <div id="copyrightBox">
    <p class="itemBox">
      <a
        class="linkItem"
        :href="'#' + item"
        target="_blank"
        v-for="item in tmallInfo"
      >
        {{ item }}
      </a>
    </p>

    <p class="itemBox">
      <span v-for="(linkItem, index) in otherLinks">
        <a :href="'#' + linkItem" target="_blank" class="linkItem">
          {{ linkItem }}
        </a>
        <span class="split" v-if="index != otherLinks.length - 1">|</span>
      </span>
    </p>

    <div class="footerCopyright">
      增值电信业务经营许可证：<a href="#" target="_blank">浙B2-20110446</a>
      <span style="margin-right: 65px">
        市场名称登记证：工商网市字3301004119号
      </span>
      <span>出版物网络交易平台服务经营备案证： 新出发浙备字第2019002号</span>
      <br />
      <span style="margin-right: 65px">
        互联网违法和不良信息举报电话：0571-81683755 blxxjb@alibaba-inc.com
      </span>
      <span>
        互联网药品信息服务资质证书编号：
        <a href="#" target="_blank">浙-（经营性）-2017-0005</a>
      </span>

      <a href="#" target="_blank">
        <img
          src="//img.alicdn.com/tps/TB1yEqRPXXXXXXPXpXXXXXXXXXX-20-20.png"
          style="position: relative; top: 5px; vertical-align: baseline"
          alt=""
        />
        浙公网安备 33010002000120号
      </a>
      <br />
      <span style="margin-right: 65px">
        医疗器械网络交易服务第三方平台备案：（浙）网械平台备字[2018]第00002号
      </span>
      <br />
      <span style="margin-right: 65px">
        浙江省网络食品销售第三方平台提供者备案：浙网食A33010002
      </span>
      <a href="#" target="_blank">12318举报</a>
      <a href="#" target="_blank">浙B2-20110446-1</a>
      <b>© 2003-2020 TMALL.COM 版权所有</b>
      <p style="padding-top: 10px">
        <a href="#" target="_blank" style="margin-right: 10px">
          <img
            src="//img.alicdn.com/tfs/TB1MQX3cBr0gK0jSZFnXXbRRXXa-65-70.gif"
            alt=""
            width="30"
            height="30"
          />
        </a>
        <a href="#" target="_blank">
          <img
            src="//img.alicdn.com/tps/i1/TB13mgzHXXXXXbjXVXXzby4IVXX-80-30.jpg"
            alt=""
          />
        </a>
      </p>
    </div>

    <div class="serverNum">
      wormholesource011021111108.center.na62.production
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tmallInfo: [
        "关于天猫",
        "帮助中心",
        "开放平台",
        "诚聘英才",
        "联系我们",
        "网站合作",
        "法律声明",
        "隐私权政策",
        "知识产权",
        "廉正举报",
        "规则意见征集",
      ],
      otherLinks: [
        "阿里巴巴集团",
        "淘宝网",
        "天猫",
        "聚划算",
        "全球速卖通",
        "阿里巴巴国际交易市场",
        "1688",
        "阿里妈妈",
        "飞猪",
        "阿里云计算",
        "AliOS",
        "阿里通信",
        "万网",
        "高德",
        "UC",
        "友盟",
        "虾米",
        "钉钉",
        "支付宝",
        "阿里安全",
      ],
    };
  },
};
</script>

<style lang="stylus" scoped>
#copyrightBox {
  width: 1190px;
  margin: auto;
  border-top: 2px solid #FF0036;
  background: #000;
  text-align: left;
  min-height: 177px;
  font-size: 12px;

  .itemBox {
    width: 1190px;
    margin: 0 auto;
    color: #fff;
    padding: 5px 0;
    line-height: 25px;
    position: relative;

    .split {
      line-height: 25px;
    }
  }

  .linkItem {
    margin-right: 3px;
    color: #fff;
    line-height: 25px;
  }

  .footerCopyright {
    line-height: 20px;
    background: #000;
    color: #a4a4a4;

    a {
      color: #a4a4a4;
      margin-right: 65px;
    }

    b {
      display: block;
      color: #686868;
      font-weight: 400;
    }
  }

  .serverNum {
    text-align: center;
    color: #000;
    font-size: 11px;
    background: #000;
  }
}
</style>