<template>
  <div id="brandList">
    <div class="brandBox">
      <ul>
        <li v-for="brandItem in brands" class="brandItem">
          <div class="imgBox">
            <img :src="brandItem.bgUrl" alt="" />
          </div>
          <a
            :href="'#' + brandItem.title"
            target="_black"
            class="brandItemLink"
          >
            <div class="brandTitleBox">
              <span class="brandTitle">{{ brandItem.title }}</span>
            </div>
            <div class="clickBox"><span class="clickBtn">点击进入</span></div>
          </a>
        </li>
        <li class="brandItem changeBrandList">
          <a href="#" class="changeBtn">
            <span class="iconfont freshIcon">{{ freshIcon }}</span>

            <span class="changeTxt">换一批</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      freshIcon: "\ue69b",
      brands: [
        {
          bgUrl:
            "https://img.alicdn.com/i2/2/TB1ilbUHpXXXXb8XXXXSutbFXXX.jpg_100x150q100.jpg_.webp",
          title: "Schneider Electric/施耐德",
        },
        {
          bgUrl:
            "https://img.alicdn.com/i2/2/TB1pRaOIFXXXXXmXpXXSutbFXXX.jpg_100x150q100.jpg_.webp",
          title: "Siwy",
        },
        {
          bgUrl:
            "https://img.alicdn.com/i2/2/TB1gD8NhDlYBeNjSszcXXbwhFXa?abtest=&amp;pos=3&amp;abbucket=&amp;acm=09042.1003.1.1200415&amp;scm=1007.13029.131809.100200300000000_100x150q100.jpg_.webp",
          title: "优惠券 ￥200",
        },
        {
          bgUrl:
            "https://img.alicdn.com/i2/2/TB1_aF7pG6qK1RjSZFmXXX0PFXa?abtest=&amp;pos=4&amp;abbucket=&amp;acm=09042.1003.1.1200415&amp;scm=1007.13029.131809.100200300000000_100x150q100.jpg_.webp",
          title: "ROYAL CANIN/皇家",
        },
        {
          bgUrl:
            "https://img.alicdn.com/i2/2/T1XKtaXn0gV.xXXXXX.jpg_100x150q100.jpg_.webp",
          title: "派克",
        },
        {
          bgUrl:
            "https://img.alicdn.com/i2/2/T1wMh5XhVGXXb1upjX.jpg_100x150q100.jpg_.webp",
          title: "优惠券 ￥700",
        },
        {
          bgUrl:
            "https://img.alicdn.com/i2/2/TB1Im97lVT7gK0jSZFpXXaTkpXa?abtest=&amp;pos=7&amp;abbucket=&amp;acm=09042.1003.1.1200415&amp;scm=1007.13029.131809.100200300000000_100x150q100.jpg_.webp",
          title: "优惠券 ￥100",
        },
        {
          bgUrl:
            "https://img.alicdn.com/i2/2/TB1aXJ9IXXXXXbjXFXXSutbFXXX.jpg_100x150q100.jpg_.webp",
          title: "Modern HOUSE",
        },
        {
          bgUrl:
            "https://img.alicdn.com/i2/2/TB1KH4GQpXXXXb_apXXSutbFXXX.jpg_100x150q100.jpg_.webp",
          title: "scout",
        },
        {
          bgUrl:
            "https://img.alicdn.com/i2/2/TB1pwpNhfBNTKJjy1zdXXaScpXa?abtest=&amp;pos=10&amp;abbucket=&amp;acm=09042.1003.1.1200415&amp;scm=1007.13029.131809.100200300000000_100x150q100.jpg_.webp",
          title: "Neato Robotics",
        },
        {
          bgUrl:
            "https://img.alicdn.com/i2/2/TB1_kq7j1SSBuNjy0FlXXbBpVXa?abtest=&amp;pos=11&amp;abbucket=&amp;acm=09042.1003.1.1200415&amp;scm=1007.13029.131809.100200300000000_100x150q100.jpg_.webp",
          title: "优惠券 ￥210",
        },
        {
          bgUrl:
            "https://img.alicdn.com/i2/2/TB1nJxqJXXXXXchapXXSutbFXXX.jpg_100x150q100.jpg_.webp",
          title: "优惠券 ￥1000",
        },
        {
          bgUrl:
            "https://img.alicdn.com/i2/2/TB1sM7GSXXXXXb3aXXXXXXXXXXX?abtest=&amp;pos=13&amp;abbucket=&amp;acm=09042.1003.1.1200415&amp;scm=1007.13029.131809.100200300000000_100x150q100.jpg_.webp",
          title: "优惠券 ￥50",
        },
        {
          bgUrl:
            "https://img.alicdn.com/i2/2/TB1ytKieRWD3KVjSZKPXXap7FXa?abtest=&amp;pos=14&amp;abbucket=&amp;acm=09042.1003.1.1200415&amp;scm=1007.13029.131809.100200300000000_100x150q100.jpg_.webp",
          title: "帕尔玛之水",
        },
        {
          bgUrl:
            "https://img.alicdn.com/i2/2/TB1R1K4GFmWBuNjSspdSuvugXXa.jpg_100x150q100.jpg_.webp",
          title: "双心",
        },
        {
          bgUrl:
            "https://img.alicdn.com/i2/2/T25cAwXGhXXXXXXXXX-1785908005.jpg_100x150q100.jpg_.webp",
          title: "hot topic",
        },
        {
          bgUrl:
            "https://img.alicdn.com/i2/2/TB1igurtrSYBuNjSspfXXcZCpXa?abtest=&amp;pos=17&amp;abbucket=&amp;acm=09042.1003.1.1200415&amp;scm=1007.13029.131809.100200300000000_100x150q100.jpg_.webp",
          title: "BARNEYS NEW YORK",
        },
        {
          bgUrl:
            "https://img.alicdn.com/i2/2/TB11204ueL2gK0jSZFmXXc7iXXa?abtest=&amp;pos=18&amp;abbucket=&amp;acm=09042.1003.1.1200415&amp;scm=1007.13029.131809.100200300000000_100x150q100.jpg_.webp",
          title: "德克士",
        },
        {
          bgUrl:
            "https://img.alicdn.com/i2/2/TB1G5bXD9BYBeNjy0FeSuvnmFXa.jpg_100x150q100.jpg_.webp",
          title: "优惠券 ￥120",
        },
        {
          bgUrl:
            "https://img.alicdn.com/i2/2/TB1XcHYHpXXXXXmXXXXSutbFXXX.jpg_100x150q100.jpg_.webp",
          title: "STOKKE",
        },
        {
          bgUrl:
            "https://img.alicdn.com/i2/2/TB1lnhJq9BYBeNjy0FeXXbnmFXa?abtest=&amp;pos=21&amp;abbucket=&amp;acm=09042.1003.1.1200415&amp;scm=1007.13029.131809.100200300000000_100x150q100.jpg_.webp",
          title: "优惠券 ￥190",
        },
        {
          bgUrl:
            "https://img.alicdn.com/i2/2/TB1sC_ZNXT7gK0jSZFpXXaTkpXa?abtest=&amp;pos=22&amp;abbucket=&amp;acm=09042.1003.1.1200415&amp;scm=1007.13029.131809.100200300000000_100x150q100.jpg_.webp",
          title: "优惠券 ￥40",
        },
        {
          bgUrl:
            "https://img.alicdn.com/i2/2/TB16oQ2IVXXXXXuXXXXSutbFXXX.jpg_100x150q100.jpg_.webp",
          title: "优惠券 ￥120",
        },
        {
          bgUrl:
            "https://img.alicdn.com/i2/2/TB1123WLXXXXXX3aXXXSutbFXXX.jpg_100x150q100.jpg_.webp",
          title: "优惠券 ￥10",
        },
        {
          bgUrl:
            "https://img.alicdn.com/i2/2/TB1Qvu9DoH1gK0jSZSyXXXtlpXa?abtest=&amp;pos=25&amp;abbucket=&amp;acm=09042.1003.1.1200415&amp;scm=1007.13029.131809.100200300000000_100x150q100.jpg_.webp",
          title: "优惠券 ￥70",
        },
        {
          bgUrl:
            "https://img.alicdn.com/i2/2/TB1Ul00mlfH8KJjy1XbXXbLdXXa?abtest=&amp;pos=26&amp;abbucket=&amp;acm=09042.1003.1.1200415&amp;scm=1007.13029.131809.100200300000000_100x150q100.jpg_.webp",
          title: "优惠券 ￥60",
        },
        {
          bgUrl:
            "https://img.alicdn.com/i2/2/TB1gWINIVXXXXbbXFXXSutbFXXX.jpg_100x150q100.jpg_.webp",
          title: "优惠券 ￥120",
        },
        {
          bgUrl:
            "https://img.alicdn.com/i2/2/TB1LA6XoL5TBuNjSspmXXaDRVXa?abtest=&amp;pos=28&amp;abbucket=&amp;acm=09042.1003.1.1200415&amp;scm=1007.13029.131809.100200300000000_100x150q100.jpg_.webp",
          title: "SOFY/苏菲",
        },
        {
          bgUrl:
            "https://img.alicdn.com/i2/2/TB1A2k6PVXXXXb4XFXXXXXXXXXX-1000-500.png_100x150q100.jpg_.webp",
          title: "CHARLES&amp;KEITH",
        },
      ],
    };
  },
};
</script>

<style lang="stylus" scoped>
#brandList {
  margin: 50px auto 0;
  width: 1230px;
  padding-right: 30px;
  position: relative;

  .brandBox {
    height: 327px;
    width: 100%;
    overflow: hidden;

    .brandItem {
      width: 122px;
      height: 108px;
      margin-right: 1px;
      margin-bottom: 1px;
      float: left;
      display: list-item;
      position: relative;

      .brandItemLink {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1;
        background-color: rgba(0, 0, 0, 0.8);
        transition: all 0.3s ease-out;
        opacity: 0;
      }

      .brandTitleBox {
        color: #fff;
        text-align: center;
        line-height: 90px;
        height: 60px;

        .brandTitle {
          display: block;
          padding: 0 5px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: 12px;
        }
      }

      .clickBox {
        text-align: center;
        height: 32px;

        .clickBtn {
          display: inline-block;
          color: #fff;
          width: 63px;
          height: 18px;
          font-size: 12px;
          line-height: 15px;
          background-color: #FF0036;
          position: relative;
          border-radius: 9px;
        }
      }
    }

    .brandItem:hover .brandItemLink {
      background-color: #333;
      opacity: 1;
    }

    .changeBrandList {
      background-color: #fff;

      .changeBtn:hover {
        color: #fff;
        background-color: #FF0036;
      }

      .changeBtn:hover .freshIcon {
        // transition 写在hover中实现鼠标移动上来的时候有动画
        transition: all 0.3s ease-out;
        transform: rotate(360deg);
        color: #fff;
      }

      .changeBtn {
        width: 122px;
        height: 108px;
        display: block;
        color: #999;
        background-color: #fff;
        position: absolute;
        bottom: 1px;
        right: 1px;
        overflow: hidden;
        transition: all 0.3s ease-out;
        z-index: 500;

        .changeTxt {
          display: block;
          font-size: 14px;
          line-height: 136px;
          text-align: center;
        }

        .freshIcon {
          width: 40px;
          height: 40px;
          position: absolute;
          left: 50%;
          top: 50%;
          margin-left: -20px;
          margin-top: -30px;
          font-size: 26px;
          text-align: center;
          line-height: 44px;
          border-radius: 20px;
        }
      }
    }

    .imgBox {
      margin: 0 auto;
      display: block;
      text-align: center;
      line-height: 108px;
      background-color: #fff;

      img {
        width: 82%;
        height: 50px;
        vertical-align: middle;
      }
    }
  }
}
</style>