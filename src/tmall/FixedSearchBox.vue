<template>
  <div class="fixedSearchBox" :class="{ showFixedBox: showFixedSearchBox }">
    <div class="searchBox">
      <div class="logoBox">
        <span class="iconfont logoEN">&#xe601;</span
        ><span class="iconfont logoZH">&#xe603;</span>
      </div>

      <div class="mallSearch">
        <form action="#search">
          <fieldset>
            <div class="inputBox">
              <div>
                <input
                  type="text"
                  name="q"
                  id="mq"
                  v-on:focus="searchFocused"
                  v-on:input="onSearchInput"
                  v-on:blur="loseFocus"
                />
              </div>
              <label
                for="mq"
                v-if="!inputing"
                v-bind:class="[
                  'searchPlaceholder',
                  inputFoucsed ? 'searchLableLose' : '',
                ]"
              >
                搜索 天猫 商品/品牌/店铺
              </label>
            </div>
            <button type="submit">搜索</button>
          </fieldset>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputFoucsed: false,
      inputing: false,
      showFixedSearchBox: false,
    };
  },
  methods: {
    searchFocused() {
      this.inputFoucsed = true;
    },
    onSearchInput() {
      this.inputing = true;
    },
    loseFocus(e) {
      const val = e.target.value;
      this.inputing = val.length != 0;
      this.inputFoucsed = val.length != 0;
    },
    handleScroll() {
      let y;
      if (window.pageXOffset) {
        y = window.pageYOffset;
      } else {
        y = document.body.scrollTop + document.documentElement.scrollTop;
      }
      let target = document.querySelector("#sliderbox");
      let threshold = target.offsetHeight + target.offsetParent.offsetTop;
      this.showFixedSearchBox = y > threshold;
    },
  },
  mounted() {
    // 监听滚动事件，然后用handleScroll这个方法进行相应的处理
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>

<style lang="stylus" scoped>
.fixedSearchBox {
  overflow: hidden;
  width: 100%;
  position: fixed;
  z-index: 10000;
  height: 50px;
  transition: top 0.3s ease-out;
  box-shadow: 0 0 4px #eaeaea;
  background-color: #FF0036;
  opacity: 0.95;
  top: -50px;

  .searchLableLose {
    color: rgb(204, 204, 204);
  }

  .searchBox {
    opacity: 1;
    width: 1230px;
    padding-right: 30px;
    margin: 0 auto;
    background-color: transparent;
    position: relative;
    height: 50px;
    border: none;
    overflow: hidden;

    .logoBox {
      width: 160px;
      margin-top: 12px;
      z-index: 20;
      height: 30px;
      line-height: 30px;
      color: #fff;
      position: absolute;
      top: 0;
      left: 0;

      .logoEN {
        font-size: 18px;
        vertical-align: middle;
      }

      .logoZH {
        padding-left: 5px;
        font-size: 18px;
        vertical-align: middle;
      }
    }

    lable {
      max-width: 90%;
      overflow: hidden;
      white-space: nowrap;
    }

    .mallSearch {
      float: none !important;
      padding-top: 12px;
      width: 740px !important;
      position: relative;
      z-index: 10;
      height: 30px;
      margin: 0 auto;

      form {
        border: none !important;
        clear: both;
        zoom: 1;
        display: block;
      }

      fieldset {
        border: 0;
      }

      .inputBox {
        position: relative;
        height: 30px;
        vertical-align: middle;
        font-size: 12px;
        background: #fff;

        .searchPlaceholder {
          max-width: 90%;
          height: 30px;
          position: absolute;
          left: 8px;
          top: 0;
          font: 12px tahoma, arial, '\5b8b\4f53';
          line-height: 30px;
          overflow: hidden;
          white-space: nowrap;
        }
      }

      input {
        border-radius: 2px 0 0 2px;
        vertical-align: middle;
        overflow-y: visible;
        color: #000;
        margin: 0;
        z-index: 2;
        height: 20px;
        line-height: 20px;
        padding: 5px 3px 5px 5px;
        border: none;
        box-sizing: content-box;
        width: 640px !important;
        background: 0 0;
        outline: transparent dotted 0;
        opacity: 1;
        font: 12px tahoma, arial, '\5b8b\4f53';
        font-weight: 900;
      }

      button {
        position: absolute;
        top: 12px;
        right: -1px;
        height: 32px;
        line-height: 32px;
        width: 90px;
        border: 0;
        font-size: 16px;
        letter-spacing: 4px;
        cursor: pointer;
        color: #fff;
        background-color: #FF0036;
        overflow: hidden;
        font-family: '\5FAE\8F6F\96C5\9ED1', arial, '\5b8b\4f53';
      }
    }
  }
}

.showFixedBox {
  top: 0;
}
</style>