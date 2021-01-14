<template>
  <div id="nav_top_site">
    <div class="nav_top_site_box">
      <div class="left">
        <span>喵，欢迎来天猫</span>
        <a href="#" style="padding: 0 5px 0 15px">请登录</a>
        <a href="#">免费注册</a>
      </div>

      <ul class="right">
        <li class="item hoverwhite">
          <a href="#">我的淘宝</a>
          <div class="memu-list">
            <ul>
              <li>
                <a href="#">以买到的宝贝</a>
              </li>
              <li>
                <a href="#">已卖出的宝贝</a>
              </li>
            </ul>
          </div>
        </li>
        <li class="item">
          <a href="#">
            <span class="iconfont iconfontspan">&#xe61d;</span>
            购物车
          </a>
        </li>
        <li class="item hoverwhite">
          <a href="#">收藏夹</a>
          <div class="memu-list">
            <ul>
              <li>
                <a href="#">收藏的宝贝</a>
              </li>
              <li>
                <a href="#">收藏的店铺</a>
              </li>
            </ul>
          </div>
        </li>
        <li class="item split"></li>
        <li class="item">
          <a href="#">
            <span class="iconfont iconfontspan">&#xe622;</span>
            手机版
          </a>
        </li>
        <li class="item"><a href="#">淘宝网</a></li>
        <li class="item hoverwhite"><a href="#">商家支持</a></li>
        <li class="item sitemap">
          <a href="#">
            <span class="iconfont iconfontspan">&#58911;</span>
            网站导航
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus">
#nav_top_site {
  background: #f2f2f2;
  height: 32px;
  font-family: 'Microsoft YaHei', tahoma, arial, 'Hiragino Sans GB', '\5b8b\4f53', sans-serif;
  z-index: 99999;
  position: relative !important;
  border-bottom: 1px solid #e5e5e5;

  .nav_top_site_box {
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

      .memu-list {
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

      .iconfontspan {
        color: #FF0036;
        margin-right: 1px;
        font-weight: bold;
      }

      .item:hover .memu-list {
        visibility: visible;
      }
    }
  }
}
</style>