<template>
  <div id="navTopSite">
    <div class="navTopSiteBox">
      <div class="left">
        <span>喵，欢迎来天猫</span>
        <a href="#" style="padding: 0 5px 0 15px">请登录</a>
        <a href="#">免费注册</a>
      </div>

      <ul class="right">
        <li class="item hoverwhite">
          <a href="#">我的淘宝</a>
          <div class="memuList">
            <ul>
              <li v-for="mineTbItem in mineTbItems">
                <a href="#" target="_blank">{{ mineTbItem }}</a>
              </li>
            </ul>
          </div>
        </li>
        <li class="item">
          <a href="#">
            <span class="iconfont iconfontspan">&#xf01d1;</span>
            购物车
          </a>
        </li>
        <li class="item hoverwhite">
          <a href="#">收藏夹</a>
          <div class="memuList">
            <ul>
              <li href="#" v-for="mineFavItem in mineFavItems">
                <a href="#" target="_blank">{{ mineFavItem }}</a>
              </li>
            </ul>
          </div>
        </li>
        <li class="item split"></li>
        <li class="item">
          <a href="#">
            <span class="iconfont iconfontspan">&#x3448;</span>
            手机版
          </a>
          <div class="memuList phoneQrBox">
            <div class="qrCode"></div>
            <div class="qrCodeDes"></div>
            <b class="boader"></b>
          </div>
        </li>
        <li class="item"><a href="#">淘宝网</a></li>
        <li class="item hoverwhite">
          <a href="#">商家支持</a>
          <div class="memuList sellerSupport">
            <ul>
              <li v-for="sellerSupport in sellerSupport">
                <span class="supportTitle">{{ sellerSupport.title }}</span>
                <a
                  href="#"
                  target="_blank"
                  v-for="supportTitle in sellerSupport.items"
                  class="supportItem"
                >
                  {{ supportTitle }}
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li class="item sitemap">
          <a href="#">
            <span class="iconfont iconfontspan">&#x344a;</span>
            网站导航
          </a>
          <div class="memuList websiteNav">
            <div
              v-for="websiteNav in websiteNavs"
              v-bind:class="[
                'siteContent',
                websiteNav.isHot ? 'siteHot' : '',
                websiteNav.isMarket ? 'siteMarket' : '',
                websiteNav.isHelper ? 'siteHelp' : '',
              ]"
            >
              <span class="siteTitle">{{ websiteNav.title }}</span>
              <ul class="siteList">
                <li
                  class="siteListItem"
                  v-for="websiteNavItem in websiteNav.items"
                >
                  <a href="#" target="_blank">
                    {{ websiteNavItem.title }}

                    <i
                      class="iconTip iconTipHot"
                      v-if="websiteNavItem.isHot"
                    ></i>
                    <i
                      class="iconTip iconTipNew"
                      v-if="websiteNavItem.isNew"
                    ></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mineTbItems: ["以买到的宝贝", "已卖出的宝贝"],
      mineFavItems: ["收藏的宝贝", "收藏的店铺"],
      sellerSupport: [
        {
          title: "商家：",
          items: [
            "商家中心",
            "天猫规则",
            "商家入驻",
            "运营服务",
            "商家品控",
            "商家工具",
            "天猫智库",
            "喵言喵语",
          ],
        },
        {
          title: "帮助：",
          items: ["帮助中心", "问商友"],
        },
      ],
      websiteNavs: [
        {
          title: "热点推荐 Hot",
          isHot: true,
          items: [
            { title: "天猫超市" },
            { title: "喵鲜生" },
            { title: "科技新品", isNew: true },
            { title: "女装新品", isHot: true },
            { title: "酷玩街" },
            { title: "内衣新品", isHot: true },
            { title: "试美妆" },
            { title: "运动新品" },
            { title: "时尚先生", isHot: true },
            { title: "精明妈咪" },
            { title: "吃乐会", isNew: true },
            { title: "企业采购" },
            { title: "会员积分" },
            { title: "天猫国际" },
            { title: "品质频道" },
          ],
        },
        {
          isMarket: true,
          title: "行业市场 Market",
          items: [
            { title: "美妆" },
            { title: "电器" },
            { title: "女装", isHot: true },
            { title: "男装", isHot: true },
            { title: "女鞋" },
            { title: "男鞋" },
            { title: "内衣", isHot: true },
            { title: "箱包" },
            { title: "运动" },
            { title: "母婴" },
            { title: "家装" },
            { title: "医药" },
            { title: "食品" },
            { title: "配饰", isNew: true },
            { title: "汽车" },
          ],
        },
        {
          isHelper: true,
          title: "服务指南 Help",
          items: [
            { title: "帮助中心" },
            { title: "品质保障" },
            { title: "特色服务" },
            { title: "7天退换货" },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="stylus">
#navTopSite {
  background: #f2f2f2;
  height: 32px;
  font-family: 'Microsoft YaHei', tahoma, arial, 'Hiragino Sans GB', '\5b8b\4f53', sans-serif;
  z-index: 99999;
  position: relative !important;
  border-bottom: 1px solid #e5e5e5;

  .navTopSiteBox {
    width: 1230px;
    margin: 0 auto;
    position: relative;
    height: 100%;
    border-bottom-color: transparent !important;
    left: -15px;

    .left {
      height: 32px;
      float: left;
    }

    span {
      font-size: 12px;
      line-height: 32px;
      color: #999;
    }

    a {
      font-size: 12px;
      line-height: 32px;
      color: #999;
      padding: 0 10px;
      margin: 0;
    }

    a:hover {
      color: #FF0036;
    }

    .right {
      height: 32px;
      float: right;

      .item {
        float: left;
        position: relative;
      }

      .hoverwhite, .sitemap {
        padding-right: 5px;
      }

      .hoverwhite:hover {
        background: #fff;
        text-decoration: underline;
      }

      .sitemap:after, .hoverwhite:after {
        content: ' ';
        position: absolute;
        top: 16px;
        right: 7px;
        border-width: 3px;
        border-style: solid dashed dashed;
        border-color: #bbb transparent transparent;
        font-size: 0;
        line-height: 0;
        transition: all 0.3s ease-in-out;
      }

      .sitemap:hover:after, .hoverwhite:hover:after {
        top: 12px;
        transform: rotate(180deg);
      }

      .sitemap:hover {
        background: #fff;
      }

      .split {
        width: 0px;
        height: 14px;
        position: relative;
        line-height: 14px;
        font-size: 0px;
        vertical-align: top;
        top: 9px;
        border-left: 1px solid #ccc;
        margin: 0 2px 0 5px;
      }

      .memuList {
        visibility: hidden;
        display: block;
        background: white;
        position: absolute;
        z-index: 100000;
        padding: 8px 10px;

        a {
          white-space: nowrap;
          line-height: 20px;
          padding: 0;
        }

        a:hover {
          text-decoration: underline;
        }
      }

      .phoneQrBox {
        padding: 0;
        position: absolute;
        width: 175px;
        height: 227px;
        left: -48px;
        top: 26px;
        box-shadow: 0 0 5px #aaa;

        .qrCode {
          width: 175px;
          height: 175px;
          margin: 5px 0 0;
          background: url('//img.alicdn.com/tfs/TB1vJ0POwTqK1RjSZPhXXXfOFXa-175-215.png') 0 0 no-repeat;
        }

        .qrCodeDes {
          margin: 0 15px;
          line-height: 35px;
          width: 145px;
          height: 35px;
          background: url('//img.alicdn.com/tfs/TB1W.19bG67gK0jSZFHXXa9jVXa-145-30.jpg') center bottom no-repeat;
        }

        .boader {
          width: 0;
          height: 0;
          line-height: 0;
          font-size: 0;
          position: absolute;
          left: 50%;
          top: -10px;
          margin-left: -2px;
          border-width: 5px;
          border-style: dashed dashed solid;
          border-color: transparent transparent #fff;
        }
      }

      .sellerSupport {
        width: 122px;
        overflow: hidden;
        right: 0;
        left: auto;
        padding: 8px 11px;

        ul {
          margin-top: -5px;
          overflow: hidden;
          width: 122px;
        }

        li {
          float: none;
          padding: 5px 0;
          height: auto;
          display: block;
          margin-right: -20px;
          border-bottom: 1px dotted #827777;

          .supportTitle {
            display: block;
            font-size: 12px;
            line-height: 16px;
            color: #666;
            font-weight: 700;
          }

          .supportItem {
            display: inline-block;
            width: 48px;
            margin-right: 20px;
            line-height: 22px;
            color: #666;
          }

          .supportItem:hover {
            color: #FF0036;
          }
        }
      }

      .websiteNav {
        right: 0;
        width: 1198px;
        border-width: 0 1px 1px;
        left: auto;
        white-space: nowrap;
        padding: 25px 0;

        a {
          color: #666;
        }

        a:hover {
          color: #FF0036;
        }

        .siteContent {
          height: 110px;
          display: inline-block;
          padding-left: 30px;
          overflow: hidden;

          .iconTip {
            position: absolute;
            width: 9px;
            height: 11px;
            line-height: 0;
            font-size: 0;
            overflow: hidden;
            background: url('//img.alicdn.com/tps/i1/TB1gyXLGFXXXXceXVXXCEcU6VXX-439-220.png') -9999px -9999px no-repeat;
          }

          .iconTipHot {
            background-position: -37px 0;
          }

          .iconTipNew {
            background-position: -37px -11px;
          }
        }

        .siteHot {
          width: 455px;

          .siteTitle {
            color: #f56a00;
          }
        }

        .siteMarket {
          width: 455px;
          border-left: 1px solid #f5f5f5;
          border-right: 1px solid #f5f5f5;

          .siteTitle {
            color: #2263d4;
          }
        }

        .siteHelp {
          width: 226px;

          a:hover {
            color: #666;
          }
        }

        .siteTitle {
          font-size: 16px;
          padding-bottom: 8px;
          color: #666;
          font-family: '\5FAE\8F6F\96C5\9ED1', arial, '\5b8b\4f53';
        }

        .siteList {
          margin-right: -20px;
          overflow: hidden;

          .siteListItem {
            position: relative;
            width: 95px;
            float: left;
            padding: 4px 0;
            overflow: hidden;
            font-size: 12px;
          }
        }
      }

      .iconfontspan {
        color: #FF0036;
        margin-right: 1px;
      }

      .item:hover .memuList {
        visibility: visible;
      }
    }
  }
}
</style>