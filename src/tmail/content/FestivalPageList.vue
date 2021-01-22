<template>
  <div id="festivalPageList">
    <div class="pageBox">
      <a
        href="#"
        target="_blank"
        class="pageTitle"
        :style="
          'background: url(' +
          titleBg +
          ') center no-repeat;background-size: 300px 65px;'
        "
      >
      </a>
      <div class="groupWrapper" v-for="saleItem in sales">
        <a
          class="groupItem leftPage"
          target="_blank"
          :href="'#' + saleItem.left.title"
          :style="
            'color:' +
            saleItem.left.color +
            ';background: url(' +
            saleItem.left.bgImg +
            ');'
          "
        >
          <em class="pageName">{{ saleItem.left.title }}</em>

          <div class="leftSubTitle">
            {{ saleItem.left.subTitle }}
          </div>

          <img :src="saleItem.left.cover" alt="" class="leftCover" />
        </a>
        <div class="groupItem">
          <a
            :href="'#' + rightItem.title"
            target="_blank"
            class="rightPage"
            v-for="rightItem in saleItem.items"
            :style="
              'color:' +
              rightItem.color +
              ';background: url(' +
              rightItem.bgImg +
              ');'
            "
          >
            <em class="rightPageName">{{ rightItem.title }}</em>
            <div class="subTitleBox">
              <span>{{ rightItem.subTitle }}</span>
            </div>

            <img class="rightCover" :src="rightItem.cover" alt="" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // TODO 后台获取待完成
      titleBg:
        "https://img.alicdn.com/imgextra/i4/O1CN01rMQaju1PbvL21gklE_!!6000000001860-2-tps-600-130.png",
      sales: [
        {
          left: {
            title: "年货嗨购",
            color: "#ff520c",
            subTitle: "1元抢百元券",
            bgImg:
              "http://img.alicdn.com/imgextra/i2/O1CN01ZzvSqv1hPhrBE4Tsc_!!6000000004270-2-tps-250-330.png",
            cover:
              "https://img.alicdn.com/bao/uploaded/O1CN01cRAtFa1RDJHMJ9zFQ_!!6000000002077-2-yinhe.png_250x250q90.jpg",
          },
          items: [
            {
              title: "大牌女装",
              subTitle: "大牌不只5折",
              color: "#ff0084",
              bgImg:
                "http://img.alicdn.com/imgextra/i1/O1CN01hkvzu01PkASyzbJw6_!!6000000001878-2-tps-350-160.png",
              cover:
                "https://img.alicdn.com/bao/uploaded/O1CN018JShtG2431OibTMie_!!6000000007334-2-yinhe.png_160x160q90.jpg",
            },
            {
              title: "健康迎春",
              color: "#009d66",
              subTitle: "1元抢百元券",
              bgImg:
                "http://img.alicdn.com/imgextra/i3/O1CN01Rd04A922hCvE8vF4j_!!6000000007151-2-tps-350-160.png",
              cover:
                "https://img.alicdn.com/bao/uploaded/O1CN010oxkcG1cV8SxlCFxm_!!6000000003605-2-yinhe.png_160x160q90.jpg",
            },
          ],
        },
        {
          left: {
            title: "新年家具",
            subTitle: "大牌不只5折",
            color: "#ff0e3c",
            bgImg:
              "http://img.alicdn.com/imgextra/i3/O1CN01V1WTgZ1ImjNCXBPY3_!!6000000000936-2-tps-250-330.png",
            cover:
              "https://img.alicdn.com/bao/uploaded/O1CN01FxZ3UW1j4ky0ytZWq_!!6000000004495-2-yinhe.png_250x250q90.jpg",
          },
          items: [
            {
              title: "奶粉尿裤",
              subTitle: "抢5折神券",
              color: "#005aff",
              bgImg:
                "http://img.alicdn.com/imgextra/i3/O1CN013NVpBe1dgPq7zrFt5_!!6000000003765-2-tps-350-160.png",
              cover:
                "https://img.alicdn.com/bao/uploaded/O1CN01wYfhH91V8xzIj4c3H_!!6000000002609-2-yinhe.png_160x160q90.jpg",
            },
            {
              title: "春护新衣",
              subTitle: "抢24期免息",
              color: "#8300ff",
              bgImg:
                "http://img.alicdn.com/imgextra/i3/O1CN01pFKv1m1uWesDdBNdY_!!6000000006045-2-tps-350-160.png",
              cover:
                "http://img.alicdn.com/bao/uploaded/O1CN01co9vxB1UHq2fCASZn_!!6000000002493-2-yinhe.png_160x160q90.jpg",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="stylus" scoped>
#festivalPageList {
  margin: auto;
  width: 1230px;
  padding-right: 30px;

  .pageBox {
    width: 1240px;
    height: 435px;
  }

  .pageTitle {
    height: 105px;
    display: block;
    color: #000;
  }

  .groupWrapper {
    position: relative;
    float: left;
    width: 610px;
    height: 330px;
    margin-right: 10px;

    em {
      font-style: normal;
      display: block;
      font-size: 24px;
      font-weight: 700;
    }

    .groupItem {
      display: block;
      float: left;
      border-radius: 4px;

      .pageName {
        padding-top: 32px;
        text-align: center;
      }

      .rightPageName {
        margin-left: 30px;
        padding-top: 27px;
      }

      .leftSubTitle {
        margin: 0;
        text-align: center;
        font-size: 18px;
      }

      .subTitleBox {
        margin-left: 25px;
        font-size: 18px;

        span {
          border-radius: 20px;
          padding: 0 5px;
          font-size: 18px;
        }
      }

      .leftCover {
        position: relative;
        margin: 20px auto 0;
        width: 180px;
        height: 180px;
        display: block;
      }

      .rightCover {
        width: 130px;
        height: 130px;
        position: absolute;
        right: 15px;
        top: 15px;
        margin: 0;
      }
    }

    .leftPage {
      width: 250px;
      height: 330px;
      margin: 0;
      box-shadow: -5px 5px 10px rgba(0, 0, 0, 0.2);
    }

    .rightPage {
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
      position: relative;
      display: block;
      width: 350px;
      height: 160px;
      margin: 0 0 10px 10px;
      border-radius: 4px;
    }
  }
}
</style>