<template>
  <div class="gridLayout">
    <!-- 占据两列的item布局 -->
    <div class="gridBox mainBox" v-if="gridList.mainData">
      <div class="mainTabs">
        <ul class="mainTabHeader">
          <li
            class="mainTabHeaderItem"
            v-for="item in gridList.mainData.tabTitles"
            :style="'background: ' + item.bgColor + ';'"
          >
            <span class="tabTitle" :style="'color: ' + item.color + ';'">
              {{ item.title }}
            </span>
          </li>
        </ul>
        <a
          class="mainTabContent"
          :href="'#' + gridList.mainData.title"
          target="_blank"
        >
          <div class="contentDesBox">
            <div class="desTitleBox">
              <img
                :src="gridList.mainData.detailIcon"
                alt=""
                class="titleIcon"
              />
              <span
                class="desTitle"
                :style="'color: ' + gridList.mainData.detailTitleColor + ';'"
                >{{ gridList.mainData.detailTitle }}</span
              >
            </div>
            <div class="desSubTitle">
              {{ gridList.mainData.detailSubTitle }}
            </div>
          </div>
          <img :src="gridList.mainData.cover" alt="" class="contentCover" />
        </a>
      </div>
    </div>

    <!-- 推荐的栏目布局 -->
    <a
      :href="'#' + gridList.recommendData.title"
      target="_blank"
      class="gridBox recommendBox"
      v-if="gridList.recommendData"
    >
      <div class="recommendItemBox">
        <div class="recommendTitle recommendDes">
          {{ gridList.recommendData.title }}
        </div>
        <div class="recommendSubTitle recommendDes">
          {{ gridList.recommendData.subTitle }}
        </div>
        <img
          class="recommendCover"
          :src="gridList.recommendData.cover"
          alt=""
        />
        <div class="recommendTag"></div>
      </div>
    </a>

    <!-- 占一列的item布局 -->
    <a
      class="gridBox gridItemBox"
      v-for="gridData in gridList.gridDatas"
      :href="'#' + gridData.title"
      target="_blank"
    >
      <div class="gridTag"></div>
      <img :src="gridData.cover" alt="" class="gridCover" />
      <div class="gridTitle">{{ gridData.title }}</div>
      <div class="gridPrice">{{ gridData.price }}</div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    gridList: {
      require: true,
      type: Object,
    },
  },
};
</script>

<style lang="stylus" scoped>
.gridLayout {
  width: 995px;
  height: 618px;
  overflow: hidden;

  .gridBox {
    float: left;
    display: block;
    border-bottom: 15px solid #f5f5f5;
    position: relative;
    background-color: #fff;
    margin-left: 13px;
    height: 301px;
  }

  .mainBox {
    width: 484px;

    .mainTabs {
      width: 462px;
      height: 282px;
      margin: 10px;
      box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.09);
    }

    .mainTabHeader {
      overflow: hidden;
      background: #F1F1F1;

      .mainTabHeaderItem {
        float: left;
        color: #FFF;
        height: 57px;
        width: 191px;
        cursor: pointer;
        line-height: 30px;
        padding: 0 20px;
        text-align: center;

        .tabTitle {
          font-size: 18px;
          line-height: 57px;
        }
      }
    }

    .mainTabContent {
      height: 225px;
      width: 462px;
      display: block;

      .contentDesBox {
        position: absolute;
        top: 153px;
        height: 87px;
        width: 291px;
        background-repeat: no-repeat;
        background-position: 0 center;
        background-color: rgba(0, 0, 0, 0);
        background-image: url('//img.alicdn.com/tfs/TB1AnTXewMPMeJjy1XcXXXpppXa-290-87.png');
        z-index: 2;

        .desTitleBox {
          margin-left: 26px;
          margin-top: 8px;
          vertical-align: middle !important;

          .titleIcon {
            width: 23px;
            height: 23px;
            margin-top: -10px;
            transition: right 0.3s;
          }

          .desTitle {
            margin-left: 8px;
            font-size: 24px;
            font-weight: 700;
            letter-spacing: 1px;
          }
        }

        .desSubTitle {
          margin-left: 26px;
          font-size: 20px;
          letter-spacing: 1px;
          color: #000;
        }
      }

      .contentCover {
        float: right;
        margin-top: 10px;
        margin-right: 30px;
        width: 200px;
        height: 200px;
      }
    }
  }

  .recommendBox {
    width: 235px;

    .recommendItemBox {
      width: 234px;
      height: 300px;
      border: 1px solid #fff;
      text-align: normal;

      .recommendDes {
        position: absolute;
        left: 25px;
        z-index: 10;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }

      .recommendTitle {
        top: 20px;
        width: 220px;
        font-size: 18px;
        line-height: 24px;
        height: 24px;
        color: #000;
      }

      .recommendSubTitle {
        top: 49px;
        width: 220px;
        font-size: 14px;
        line-height: 18px;
        height: 18px;
        color: #7A45E5;
      }

      .recommendCover {
        width: 170px;
        height: 170px;
        margin: 90px 33px 42px 32px;
      }

      .recommendTag {
        position: absolute;
        bottom: 0;
        right: 6px;
        width: 58px;
        height: 29px;
      }
    }
  }

  .gridItemBox {
    width: 235px;
    text-align: center;

    .gridTag {
      visibility: hidden;
      background-color: #00B262;
      width: 68px;
      height: 20px;
      color: #fff;
      line-height: 20px;
      font-size: 14px;
      margin: 0 auto;
    }

    .gridCover {
      width: 185px;
      height: 185px;
      transition: right 0.3s;
    }

    .gridTitle {
      width: 135px;
      height: 40px;
      font-size: 14px;
      color: #333;
      line-height: 20px;
      overflow: hidden;
      margin: 8px auto;
    }

    .gridPrice {
      font-size: 18px;
      color: #FF0036;
      line-height: 18px;
      margin: 10px auto;
    }
  }
}
</style>